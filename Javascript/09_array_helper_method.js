/*

*/ 

/*
    Array.forEach
*/
let numbers = [1, 2, 3]
// 1. 반복문
for(let i=0; i<numbers.length ; i++){
    console.log(numbers[i])
}
// 2. 반복문 (for ... of)
for(let num of numbers){
    console.log(num)
}

// 3. forEach
numbers.forEach(function(num){
        console.log(num)
})
// 실습
const images = [
    {height:30, width:20},
    {height:100, width:100},
    {height:100, width:5},
]
let areas = []
images.forEach(function(image){
    areas.push(image.height*image.width)
})

/*
    map
*/ 
let numbers = [1, 2, 3]

let doubleNumbers = numbers.map(function(number){
    return number * 2
})
console.log(doubleNumbers)
let doubleNumbers2 = numbers.map(number => number*2)
console.log(doubleNumbers2)

// 실습
const images = [
    {height:30, width:20},
    {height:100, width:100},
    {height:100, width:5},
]
let areas = images.map(function(image){
    return image.height*image.width
})

/*
    filter
    콜백함수의 return 결과가 참인 것을 각각 원소로 하는 배열을 리턴
*/
// images의 높이가 100 보다 작은 object만 담은 배열
const images = [
    {height:30, width:20},
    {height:100, width:100},
    {height:100, width:5},
]
let myImage = []

for (let image of images){
    if (image.height < 100) {
        myImage.push(image)
    }
}
myImage = images.filter(function(image){
    return image.height < 100
})

// fruit 만 뽑아내기
let products = [
    {name:'banana', type:'fruit'},
    {name:'tomato', type:'vegetable'},
    {name:'apple', type:'fruit'},
    {name:'cucumber', type:'vegetable'},
]

let bag = products.filter(function(product){
    return product.type == 'fruit'
})
let bag2 = products.filter(product => product.type == 'fruit')

/*
    reduce
    return 결과를 누적한 결과를 return
*/

let mySsafy = [100, 100, 95, 90]
let total = 0
for (i=0;i<mySsafy.length;i++){
    total += mySsafy[i]
}
let total_score = mySsafy.reduce(function(total, score){
    console.log(score, 'score') // 원소
    console.log(total, 'total') // 누적
    return total+score
})
mySsafy.reduce((total, score) => total+score)

/*
    find
    일치하는 첫번째 원소를 리턴
*/
mySsafy.find(function(score){
    return score == 2
})
mySsafy.find(score=>score==2)

let heros = [
    {name: '헐크', age:100},
    {name: '아이언맨', age:50},
    {name: '스파이더맨', age:30}
]

// 나이가 30인 사람
myHero=heros.find(hero=>hero.age==30)

/*
    some, every
*/

let myNumbers = [1, 2, 3, 4]
myNumbers.some(function(number){
    return number % 2 == 0
})
myNumbers = [3, 5]
myNumbers.every(function(number){
    return number % 2 != 0
})