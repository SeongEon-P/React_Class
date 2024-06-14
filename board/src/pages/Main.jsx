import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
    const [boards, setBoards] = useState([]);

    // 서버에서 게시글 목록을 가져오는 함수
    const loadBoards = async () => {
        const result = await axios.get("http://localhost:8082/boards");
        setBoards(result.data);
    };

    // 게시글을 삭제하는 함수
    const deleteBoard = async (bno) => {
        if (window.confirm(`${bno}번 게시물을 삭제하시겠습니까?`)) {
            await axios.delete(`http://localhost:8082/board/${bno}`);
            loadBoards(); // 삭제 후 게시글 목록을 다시 불러옵니다.
        }
    };

    // 컴포넌트가 마운트될 때 게시글 목록을 불러옵니다.
    useEffect(() => {
        loadBoards();
    }, []);

    return (
        <div className="container">
            <table className="table border shadow my-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">제목</th>
                        <th scope="col">내용</th>
                        <th scope="col">작성자</th>
                        <th scope="col">조회수</th>
                        <th scope="col" className="text-center">액션</th> {/* 가운데 정렬 */}
                    </tr>
                </thead>
                <tbody>
                    {boards.map((board, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{board.title}</td>
                            <td>{board.content}</td>
                            <td>{board.author}</td>
                            <td>{board.hit}</td> {/* 조회수 컬럼 */}
                            <td className="text-center"> {/* 가운데 정렬 */}
                                <Link to={`/viewboard/${board.bno}`} className="btn btn-outline-secondary mx-2">보기</Link>
                                <Link to={`/editboard/${board.bno}`} className="btn btn-outline-warning mx-2">수정</Link>
                                <button onClick={() => deleteBoard(board.bno)} className="btn btn-outline-danger mx-2">삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Main;
