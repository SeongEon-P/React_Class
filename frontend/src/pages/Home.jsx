import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8082/users");
    setUsers(result.data);
    // console.log(result);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container">
      <table className="table border shadow my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">유저네임</th>
            <th scope="col">이메일</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <th>{user.name}</th>
            <th>{user.username}</th>
            <th>{user.email}</th>
            <th>
              <button className="btn btn-outline-secondary mx-2">보기</button>
              <button className="btn btn-outline-warning mx-2">수정</button>
              <button className="btn btn-outline-danger mx-2">삭제</button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Home;
