import React, { useState } from "react";

function WarningBanner(props){
    if(!props.waring){
        return null;
    }
    return(
        <div>경고!</div>
    )
}
function MainPage(props){
    const [showWarning, setshowWarning]=useState(false);
    const handleToggleClick=() =>{
        setshowWarning(prevShowWarning => !prevShowWarning);
    }
    return(
        <div>
            <WarningBanner waring={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning? "감추기":"보이기"}
            </button>
        </div>
    );
}
export default MainPage;