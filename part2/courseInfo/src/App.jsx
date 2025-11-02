import Course from './components/Course'

function App() {
  const courses = [
    {
      id: 1,
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
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exerciseCount: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exerciseCount: 7,
          id: 2,
        },
      ]
    }
  ]
  
  return (
    <div>
      {courses.map(course => 
        <Course 
          key={course.id}
          course={course}
        />
      )}
    </div>
  )
}

export default App
