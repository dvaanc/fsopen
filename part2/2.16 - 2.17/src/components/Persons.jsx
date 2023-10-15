const Persons = ({ namesToShow, handleDeletePerson }) => 
<>
{namesToShow.map(person => 
<div key={person.id}>
  {person.name} {person.number}
  <button type='submit' onClick={() => handleDeletePerson(person.id)}>Delete</button>
</div>

)}
</>

export default Persons