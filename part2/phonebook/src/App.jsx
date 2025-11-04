import { useState, useEffect } from 'react'

const PersonForm = ({ onAddPerson, newName, setNewName, newNumber, setNewNumber }) => (
  <form>
    <div>
      name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
    </div>
    <div>
      <button type="submit" onClick={onAddPerson}>add</button>
    </div>
  </form>
)

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => 
      <p key={person.name}>{person.name} {person.number}</p>  
    )}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/persons')
      .then(response => response.json())
      .then(data => setPersons(data))
  }, [])

  const handleAddPerson = (e) => {
    e.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
   if (newName.trim() === '') {
      alert('Name cannot be empty')
      return
    }
    setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm 
        onAddPerson={handleAddPerson} 
        newName={newName} 
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App