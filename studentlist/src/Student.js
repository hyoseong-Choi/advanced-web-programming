import React from "react";
const student = [
    {id:1, name:"choi", email:"choi@naver.com"},
    {id:2, name:"kim", email:"kim@google.com"},
    {id:3, name:"park", email:"park@gachon.com"}
];
const StudentItem = ({student}) =>(
    <div>
        <b>[{student.id}]</b>
        <span>
            {student.name}`s email {student.email}{""}
        </span>
    </div>
);
const Student = () =>{
    return(
        <div>
            <h2>Student List</h2>
            {student.map((std)=>(
            <StudentItem student={std}/>
            ))}
        </div>
    );
};
export default Student;