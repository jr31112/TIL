/*
    1-1. Variable
            let, const vs var
    재선언이 불가능하다. vs 가능하다.

*/


// 변수 hoisting(호이스팅)
// 변수의 선언을 해당 스코프 범위 내에서 최상단에 변수 선언을 함.

var a // undefined, 선언!
console.log(a)
a = '변수'  // defined, 할당
a = 1 // 재할당 가능
var a = 'Hello' // 재선언 가능


// let (ES6+)
// 재선언은 불가능하지만, 재할당은 가능하다.
// console.log(b) // Error : Reference error
let b = '변수'
b = '다른 변수' // 재할당 가능
let b = '다른 변수' // 재선언 불가능

// const (ES6+)
// 재할당이 불가능 하다.
const c = '상수' // 반드시 값과 함께 선언
// c = '다른 값' // 재할당 불가능
// const c = '다른 값' // 재선언 불가능 -> TypeError -> const에 할당함
// const tack // 불가능 -> SyntaxError -> 초기화 누락

/*
    1-2. scope
    블록 스코프 vs 함수 스코프
*/

let VarFunction = function() {
    var myVar = 0
    if (True) {
        var myVar = 1
        console.log(myVar) // 1
    }
    console.log(myVar) // 1
}

let LetFunction = function() {
    let myLet = 0
    if (True) {
        let myLet = 1
        console.log(myLet) // 0
    }
    console.log(myLet) // 1
}