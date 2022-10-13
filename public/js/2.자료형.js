//-----자료형-----

//문자형
const name = "mike"; //문자형 String
const age = 35;

//문자형을 작성하는 세가지 방식
const name1 = "mike";
const name2 = 'mike';
const name3 = `mike`;

//큰따옴표와 작은따옴표는 큰 차이가 없다.
const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = "my name is ${name}";

const message4 = '나는 ${38+1}살 입니다';
console.log(message4);


//-----숫자형-----

const age = 30; //숫자형 Number
const PI = 3.14;

console.log(1 + 2); //더하기
console.log(10 - 3); //빼기
console.log(3 * 2); //*곱하기
console.log(6 / 3); ///나누기
console.log(6 % 4); //%나머지

const x = 1 / 0 //?
console.log(x) // Infinity가 출력됨

const y = name / 2;
console.log(y) //Nan = not a number

Boolean

const a = true;
const b = false;

const name = "mike";
const age = 35;

console.log(name == 'mike') //true
console.log(age > 40) //false

//null과 undefined

let age;
console.log(age) //변수를 선언만 하고 값을 할당하지않고 출력하면 undefined를 반환함


//typeof 연산자
//다른개발자가 작성한 변수의 타입을 알아야하거나 타입에 따라 다른방식으로 처리해야할때

const name = "mike";

console.log(typeof 3); //number
console.log(typeof name); //string
console.log(typeof true); //boolean
console.log(typeof "xxx"); //string
console.log(typeof null); // object
console.log(typeof undefined); //undefiend

//null은 객체가 아니다

const name = "mike"
const message = `my name is ${name}`;
//백틱으로 작성

const message2 = "my name is ${name}";
//실수로 쌍따옴표를 사용하게 되면 console창에 "my name is ${name}" 이라고 그대로 뜨니 주의하기
console.log(message2)

const name = "mike";

const a = "나는 ";
const b = " 입니다";

console.log(a + name + b); //나는 mike 입니다

//숫자형과 문자형을 더하면 숫자가 문자형으로 변경됨
const age = 30; //number
console.log(a+age+"살"+b); //나는 30살 입니다



