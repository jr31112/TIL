/*
   * 함수
*/

console.log(myAdd(1, 2)) // 3
console.log(myAdd2(1, 2)) // ReferenceError

// 선언식 -> hoisting이 가능
function myAdd(a, b){
    return a + b
}

// 표현식 -> hoisting이 불가능
let myAdd2 = function(a, b){
    return a + b
}

/*
    * arrow function
    ES6+
*/

function myFunction(a){
    return a + 1
}
// 1-1 인자가 하나라면, 소괄호 삭제 가능
// 1-2 문장이 한 줄이고, 리턴이라면 중괄호 및 return 키워드 생략 가능
let myArrowFunction = (a) => {return a + 1}
let myArrowFunction1 = a => a + 1

// 제곱의 결과를 나타내는 sqarue 함수를 표현식
let mySquare1 = function(a) {
    return a * a
}
// arrow function 표현
let mySquare2 = (a) => {return a**2}
let mySquare3 = a => {return a**2}
let mySquare4 = a => a**2

let greeting = function() {
    console.log('happy!')
}

// 1-3 인자가 없는 경우에는 () or _
greeting = () => {console.log('happy!')}
greeting = _ => {console.log('happy!')}

// 1-4 기본인자
let greeting2 = (name='인성') => name

/*
    * 익명함수
*/

(function my(a) {
    return a * 10
}(100))