/*
* 원시타입(primitive data type)
    - boolean
    - null
    - undefined
    - number
    - string
    - symbol ( ES6+ )

* 객체타입(object)
    - object
*/

// number(typeof)
3
-5
2.14e4
0/0
Infinity // typeof Infinity -> number
NaN // typeof NaN -> number

// string(typeof)
let myName = '인성'
myName = "김인\n성"
// `(backtick) : ES6+ 템플릿리터럴
// string interpolation, 줄바꿈(개행)
myName = `김

인성`
console.log(`안녕하세요, ${myName}입니다.`)

// boolean(typeof)
true
false
// 

// empty value
undefined // typeof undefined -> undefined
null // typeof NaN -> object