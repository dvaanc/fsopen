import { useState } from 'react'

const Filter = ({ filter, handleFilterChange }) =>
  <div>
    filter shown with <input value={filter} onChange={handleFilterChange} />
  </div>

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) =>
<form onSubmit={addPerson}>
  <div>
    name: <input value={newName} onChange={handleNameChange}/>
  </div>
  <div>
    number: <input value={newNumber} onChange={handleNumberChange}/>
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>

const Persons = ({ namesToShow }) => 
<>
{namesToShow.map(person => 
  <p key={person.id}>
  {person.name} {person.number}
  </p>
)}
</>


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = e => {
    e.preventDefault()
    persons.find(person => person['name'] === newName) 
    ? alert(`${newName} is already added to the phonebook`)
    : setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 })) 
    setNewName('')
    setNewNumber('')
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
      <Persons namesToShow={namesToShow} />
    </div>
  )
}

export default App