import React from "react";

const students=[
    {
    //  id:1,
     name:"홍길동"},
    {
    //  id:2,
     name:"박성언"},
    {
    //  id:3,
     name:"김서현"},
    {
    //  id:4,
     name:"스상준이"}
];
function StudentItemList(props){
    return(
        <ul>
            {students.map((student, index)=>{
                return <li key={index}>{student.name}</li>
                // {students.map((student)=>{
                //     return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}
export default StudentItemList;