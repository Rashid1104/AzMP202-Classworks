import React from 'react'

const students = () => {
    const [students, setStudents] = useState([])
  return (
    <div>
      <Form students={students} setStudents={setStudents} />
      <hr />
      <Table students={students} setStudents={setStudents} />
    </div>
  )
}

export default index