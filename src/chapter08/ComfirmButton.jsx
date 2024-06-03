import React,{useState} from "react";

function ConfirmButton(props){
    const [isConFirmed, setIsConfirmed]=useState(false);
    const handleConfirm = () =>{
        setIsConfirmed((prevIsComfirmed) => !prevIsComfirmed);
    }

    return(
        <button onClick={handleConfirm} disabled={isConFirmed}>
            {isConFirmed ? "확인됨":"확인하기"}
        </button>
    )
}
export default ConfirmButton;


// class ConfirmButton extends React.Component{
//     constructor(props){
//         super(props);

//         this.state={
//             isConFirmed : false,
//         };
//         //this.handleConfirm=this.handleConfirm.bind(this);
//         this.handleConfirm = () =>{
//             this.setState((prevState) =>({
//                 isConFirmed : !prevState.isConFirmed,
//             }))
//         }
//     }

//     handleConfirm(){
//         this.setState((prevState) => ({
//             isConFirmed : !prevState.isConFirmed,
//         }));
//     }

//     render(){
//         return (
//             <button
//                 onClick={this.handleConfirm}
//                 disabled={this.state.isConFirmed}>
//                 {this.state.isConFirmed? "확인됨":"확인하기"}
//             </button>
//         );
//     }
// }
