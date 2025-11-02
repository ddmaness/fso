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

function Course ({course}) {
  const {name, parts} = course
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Course