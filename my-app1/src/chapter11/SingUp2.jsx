import React,{useReducer, useState} from "react";

function SignUp2(props){
    const [users, setUsers]=useState([]);
    const [nextId, setNextId]=useState(1);
    const [inputName, setInputName]=useState("");
    const [inputGender, setInputGender]=useState("남자");
    const [inputAddress, setInputAddress]=useState("");
    const handleChange=(event)=> {
        switch(event.target.name){
            case "name":setInputName(event.target.value);
            case "gender":setInputGender(event.target.value);
            case "address":setInputAddress(event.target.value);
        }
    }
    const onRemove = id =>{
        const nextUsers=users.filter(user=> user.id!==id);
        setUsers(nextUsers);
    }
    const trList=users.map(user => 
        <tr key={user.id} onDoubleClick={()=>onRemove(user.id)}>
            <td>{user.id}</td><td>{user.name}</td><td>{user.gender}</td><td>{user.address}</td>
        </tr> 
    );
    
    const handleSubmit = (event) =>{
        alert(`이름 : ${inputName}, 성별 : ${inputGender}, 주소:${inputAddress}`);
        const nextUsers=users.concat({
            id:nextId,
            name : inputName,
            gender : inputGender,
            address : inputAddress
        });
        setNextId(nextId+1);
        setUsers(nextUsers);
        setInputName("");
        setInputGender("");
        setInputAddress("");

        event.preventDefault();
    };
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                <label>이름 : 
                    <input name="name" type="text" value={inputName} onChange={handleChange}/>
                </label>
                </div>
                <div>
                <label>성별 : 
                    <select name="gender" value={inputGender} onChange={handleChange}>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                </div>
                <div>
                <label>
                    주소 : 
                    <input name="address" type='text' value={inputAddress} onChange={handleChange}/>
                </label>
                </div>
                <div><button type="submit">제출</button><button type="reset">Reset</button></div>

            </form>
            <table>
                <tr><th>번호</th><th>이름</th><th>성별</th><th>주소</th></tr>
                {trList}
            </table>
        </>
    )
}
export default SignUp2;