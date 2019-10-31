// function a() {
//     console.log('a')
// }
// console.log('hi')
// setTimeout(a, 300)
// console.log('hi')

function printHello(){
    console.log('Hellooo')
}

function baz() {
    console.log('baz') // 1
    setTimeout(printHello, 3000) // 
    console.log('baz end')  // 2
}

function bar() {
    console.log('bar')
    baz()
    console.log('bar end')
}

function foo() {
    console.log('foo')
    bar()
    console.log('foo end')
}

foo()