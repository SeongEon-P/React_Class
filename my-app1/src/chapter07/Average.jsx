import React, { useCallback, useMemo, useState, useRef } from "react";

const getAverage= numbers => {
    console.log("평균값 계산 중");
    if(numbers.length === 0)return 0;
    const sum=numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
};

function Average(props){
    const [list, setList]=useState([]);
    const [number, setNumber]=useState('');
    const inputEl=useRef(null);

    // const onChange = e =>{
    //     setNumber(e.target.value);
    // };

    // const onInsert= e =>{
    //     const nextList=list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('')
    // }

    const onChange = useCallback(e =>{
        setNumber(e.target.value);
    },[]); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert= useCallback(e =>{
        const nextList=list.concat(parseInt(number));
        setList(nextList);
        setNumber(''); //setNumber('')를 호출하여 number 상태를 빈 문자열로 초기화합니다.
        inputEl.current.focus(); // inputEl.current.focus()를 호출하여 입력 필드에 포커스를 다시 맞춥니다.
    },[number, list]); // number 혹은 list가 변경될 때만 함수 생성.

    const avg=useMemo( () => getAverage(list), [list]);
  
    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div><b>평균값 : </b>{avg}</div>
        </div>
    )
}
export default Average;

