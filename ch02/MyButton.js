function MyButton(props){
    console.log("12341234")
    const[isClicked,setIsClicked]=React.useState(false);

    return React.createElement(
        'button',
        {onClick:() => setIsClicked(true)},
        isClicked?'Clicked!':'Click here!'
    )
}

const domContainer=document.querySelector("#root");
const root=ReactDOM.createRoot(domContainer);
root.render=(React.createElement(MyButton));

//메모리 속에 있는걸 화면에 뿌려주는게 리액트