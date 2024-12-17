import React from 'react'
import Table from '../table'

const Form = () => {
    const [studentName, setStudentName] = useState("");
    const [gpa, setGpa] = useState(0);
    const [faculty, setFaculty] = useState("");
    return (
        <form>
            <fieldset>
                <div>
                    <legend></legend>
                    <input
                        type="text"
                        id='studentName'
                        placeholder='Enter name'
                        value={studentName}
                        onChange={(e) => {
                          setFaculty(e.target.value.trim());
                        }}
                    />
                    <input
                        type="number"
                        id='gpa'
                        placeholder='gpa'
                        value={gpa}
                        onChange={(e) => {
                          setFaculty(e.target.value.trim());
                        }}
                    />
                    <input
            type="text"
            id="faculty"
            placeholder="faculty"
            value={faculty}
            onChange={(e) => {
              setFaculty(e.target.value.trim());
            }}
          />
          <Button cName={"success"} btnName={"add"} type={"submit"} />
                </div>
            </fieldset>
        </form>
    )
}

export default Form