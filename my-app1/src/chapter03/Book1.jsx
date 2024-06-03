import React from "react";
 function Book1(props){
 return React.createElement(
 'div',
 null,
 [
 React.createElement(
 'h1',
 null,
 `이책의이름은${props.name}입니다.`
 ),
 React.createElement(
 'h2',
 null,
 `이책은총${props.numOfPage}페이지로이뤄져있습니다.`
 )
 ]
 );
 }
 export default Book1;