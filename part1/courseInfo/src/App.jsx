function Header ({course}) {
  return <h1>{course}</h1>
}
function Part ({name, exerciseCount}) {
  return (
    <p>
      {name} {exerciseCount}
    </p>
  )
}

function Content ({parts}) {
  return (
    parts.map(({name, exerciseCount, id}) => <Part key={id} name={name} exerciseCount={exerciseCount}/>)
  )
}

function Total ({parts}) {
  const total = parts
    .map(({exerciseCount}) => exerciseCount)
    .reduce((exerciseCountA, exerciseCountB) => {
      return exerciseCountA + exerciseCountB
    }, 0)
  
  return <p>{total}</p>
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exerciseCount: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exerciseCount: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exerciseCount: 14,
        id: 3,
      },
    ]
  }
  return (
    <div>
      <Header 
        course={course.name}
      />
      <Content 
        parts={course.parts}
      />
      <Total
        parts={course.parts}
      />
    </div>
  )
}

export default App
