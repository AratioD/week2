import React from 'react'

const Kurssi = ({ kurssi, maintopic }) => {
  //console.log('maintopic value', maintopic)

  return (
    <div>
      <ul>
        <MainTopic mainTopic={maintopic} />
        <CourseContent courseContent={kurssi} />
      </ul>
    </div>
  )
}

const MainTopic = (props) => {
  //console.log('Maintopic component works')
  return (
    <div>
      <ul>
        <h1>{props.mainTopic}</h1>
      </ul>
    </div>
  )
}

const CourseContent = (props) => {

  const courseData = () => props.courseContent.map(part =>
    <ul key={part.id}>
      <h1>{part.nimi}</h1>
      {part.osat.map(part =>
        <ul key={part.id}>{part.nimi} {part.tehtavia} </ul>)}
      <ul>{"yhteensä"} {part.osat.reduce((acc, taskValue) => acc + taskValue.tehtavia, 0)} {"tehtävää"}</ul>
    </ul>)

  return (
    <div>
      <ul>
        {courseData()}
      </ul>
    </div>
  )
}

export default Kurssi