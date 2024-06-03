import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

function Profiles(props){
    return(
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/sung">춘향이</Link>
                </li>
                <li>
                    <Link to="/profiles/hong">길동이</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/profiles" exact render={()=><div>사용자를 선택해주세요</div>} />
                <Route path="/profiles/:username" element={<Profile />} />
            </Routes>
        </div>
    );
};
export default Profiles;