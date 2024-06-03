import React from "react";

function Welcome(props) {
   return (
      <h1>안녕, {props.name}</h1>
   );
}

function Board(props) {
   return (
      <div>
         <h1>{props.title}</h1>
         <h2>{props.author}</h2>
         <h3>{props.text}</h3>
      </div>
   );
}


function PropsEx(props) {
   return (
      <div>
         <div>
            <Welcome name="소플" />
            <Welcome name="홍길동" />
            <Welcome name="박경미" />
            <Welcome name="박성언" />
         </div>

         <div>
            <Board title="title1" author="상준" text="내용1" />
            <Board title="title2" author="성언" text="내용2" />
         </div>
      </div>
   )
}
export default PropsEx;