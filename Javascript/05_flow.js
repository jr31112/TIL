let userName = prompt('넌 누구니?')

let message

if (userName == 'ssafy'){
    message = `<h1>Hello SSAFY</h1>`
} else if (userName == '1q2w3e4r'){
    message = `<h1>Admin page입니다</h1>`
} else {
    message = `<h1>${userName} 환영합니다.</h1>`
}

document.write(message)

switch(userName){
    case '1q2w3e4r':{
        message = '<h2>관리자님 충성풍성 ^^7</h2>'
        break
    }
    case 'ssafy':{
        message = '<a href="https://edu.ssafy.com">싸피</a>'
        break
    }
    default : {
        message = `<h1>${userName} 환영합니다.</h1>`
    }
}

document.write(message)

for (let i=0; i < 3; i++){
    console.log(i)
}
console.log(i) // 3


for (let j=0; j < 3; j++){
    console.log(j)
}
console.log(j) // ReferenceError

let myArray = ['태우', '경호', '은비']
for (let name of myArray){
    document.write(name)
}