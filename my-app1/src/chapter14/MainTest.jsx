import { useContext } from "react";
import ThemeTest from "./ThemeTest";
import ThemeContext from "./ThemeContext";


function MainTest(props) {
    return (
        <div>
            <p>안녕하세요, 테마 변경</p>
            <ThemeContext.Provider value="dark">
                <ThemeTest/>
            </ThemeContext.Provider>
        </div>
    );
}
export default MainTest;