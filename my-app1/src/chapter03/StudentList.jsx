import React from "react";
import Student from "./Student";

function StudentList(props){
        return(
            <div>
                <Student sno={1} name="홍길동" major="경영학과" />
                <Student sno={2} name="박성언" major="컴공" />
                <Student sno={3} name="유다인" major="멀티미디어" />
            </div>
        );
}

export default StudentList;

// npx create-react-app test-app
// cd test-app 여기서 cd는 change directory
// npm start
// control c 누르면 작업 종료 할 수 있음
// 종료 후에 cd.. 하고 엔터 하면 경로가 한 단계 올라감. 부모로. 