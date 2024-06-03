import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList=({ todo, onUpdate, onDelete }) =>{
    const [search, setSearch] = useState(""); 
    const onChangeSearch = (e) => { // 
        setSearch(e.target.value);
    };
    
    const getSearchResult = () => {
        return search === ""
          ? todo
          : todo.filter((it) =>
              it.content.toLowerCase().includes(search.toLowerCase())
            );
    };

    const analyzeTodo=useMemo(() =>{
        console.log("analyzeTodo() 호출");
        const totalCount=todo.length;
        const doneCount=todo.filter((it)=>it.isDone).length;
        const notDoneCount=totalCount-doneCount;
        return{
            totalCount,
            doneCount,
            notDoneCount
        };
    },[todo]);
    // 원래는 검색에 한글자 칠때마다 호출됬는데, useMemo기능 쓰면, 검색에 글자를 모두 다 치고나서 클릭을 할때만 호출됨.
    // 렌더링되는 걸 줄임.

    const {totalCount, doneCount, notDoneCount}=analyzeTodo; //analyzeTodo();
    // 함수는 ();, 훅이라서 analyzeTodo; 이렇게만 함.
    return(
        <div className="TodoList">
            <h4>Todo List 🔍</h4>
            <div>
                <div>총 개수 : {totalCount}</div>
                <div>완료된 할 일 개수 : {doneCount}</div>
                <div>완료되지 않은 할 일 개수 : {notDoneCount}</div>
            </div>
            <input
                value={search} 
                onChange={onChangeSearch} 
                className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {getSearchResult().map((it) => ( 
                    <TodoItem 
                        key={it.id} {...it} 
                        onUpdate={onUpdate}
                        onDelete={onDelete} />
                ))}
                {/* {todo.map((it) => (
                    
                     <TodoItem key={it.id} {...it} />
                ))} */}
            </div>
        </div>
    );
}
export default TodoList;