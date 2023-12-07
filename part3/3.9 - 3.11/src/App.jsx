import { useState, useEffect } from 'react'
import phonebookService from './services/phonebooks'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSucccessMessage] = useState('')
  const [type, setType] = useState(null)

  useEffect(() => {
    phonebookService.getAll()
      .then(data => setPersons(data))
      .catch(err => console.log(err))
  }, [])

  const addPerson = e => {
    e.preventDefault()
    if(newNumber === '') return alert('Please enter a phone number!') 
    if(persons.find(person => person['name'] === newName)) {
      if(window.confirm(`${newName} is already added to the phonebook, replace the older number with the new one?`)) 
        return updatePerson()
    }
    phonebookService.create({ name: newName, number: newNumber })
      .then(newContact => {
        setType('success')
        setSucccessMessage(`Successfully added ${newContact.name}.`)
        setTimeout(() => {
          setType(null) 
          setSucccessMessage('')
        }, 5000)
        setPersons(persons.concat(newContact))
        setNewName('')
        setNewNumber('')
      }).catch(err => console.log(err))
  }

  const updatePerson = () => {
    const updatePerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    phonebookService.update(updatePerson.id, {...updatePerson, number: newNumber})
      .then(updatedPerson => {
        setType('success')
        setSucccessMessage(`Successfully updated ${updatedPerson.name}'s number.`)
        setTimeout(() => {
          setType(null) 
          setSucccessMessage('')
        }, 5000)
        setPersons(persons.map(p => p.id !== updatePerson.id ? p : updatedPerson))
        setNewName('')
        setNewNumber('')
        })
      .catch(err => {
        // alert(`the person '${updatePerson.name}' was already deleted from server`)
        setType('error')
        setErrorMessage(`the person '${updatePerson.name}' was already deleted from server`)
        setTimeout(() => { 
          setType(null)
          setErrorMessage('')
        }, 5000)
        setPersons(persons.filter(p => p.id !== updatePerson.id))
        console.log(err)
      })
  }

  const handleDeletePerson = id => {
    if(!window.confirm(`Confirm delete ${persons.find(person => person.id === id).name}?`)) return
    phonebookService.deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      }).catch(err => console.log(err))
  }

  const handleNameChange = e => setNewName(e.target.value)
  const handleNumberChange = e => setNewNumber(e.target.value)
  const handleFilterChange = e => setFilter(e.target.value.toLowerCase())

  const namesToShow = filter === ''
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={type} errorMessage={errorMessage} successMessage={successMessage} />
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange} 
        />
      <h2>add new</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
        />

      <h2>Numbers</h2>
      <Persons 
        namesToShow={namesToShow} 
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default App