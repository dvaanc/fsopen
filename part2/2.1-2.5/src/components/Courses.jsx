/* eslint-disable react/prop-types */
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
{
  // console.log(part)
  return (
    <p>
    {part.name} {part.exercises}
  </p>
  )

}


const Content = ({ parts }) => 
  <>
    {parts.map(part => 
    <Part part={part} key={part.id} />
    )}   
  </>



const Course = ({ course }) => {
  const { name, parts } = course
  return (
    <>
      <Header course={name} />
      <Content parts={[...parts]} />
      <Total sum={parts.reduce((acc, val) => acc + val.exercises, 0)} />
    </>
  )
}

const Courses = ({ courses }) => 
<>
  {courses.map(course => 
  <Course course={course} key={course.id} />
  )}
</>

export default Courses