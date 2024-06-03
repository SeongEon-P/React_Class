//값을 String 타입만을 사용한 객체
let obj1={a:"apple", b:"banana", c:"carrot"}
console.log(obj1['a'],obj1.b)

//값을 Number 타입만을 사용한 객체
let obj2={a:1, b:2, c:3, d:4}
console.log(obj2['a'],obj2.b)

//값을 다양한 자료형들을 함께 사용한 객체
let obj3={a:"hello", b:100, c:[1,2,3,4]}
console.log(obj3.c, obj3.c[0])

//값으로 객체를 사용한 객체
let obj4={a:{a1:1,a2:2}, b:{b1:3,b2:4}, c:{c1:5,c2:6}}
console.log(obj4.a.a2)


// 증감연산자(++, --) 
a=1;
 b=a++; //postfix
 console.log(a, b)
 let c=1;
 let d=++c; //prefix
 console.log(c, d)
