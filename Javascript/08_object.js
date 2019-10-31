const me = {
    name : 'kim',
    'phone number' : '01012345678',
    phone: {
        type:'iphone XS MAX'
    },
    greeting: function() {
        console.log(`hi ${this.name}`) // me
    },
    greeting2:()=> {
        console.log(this) // 전역 객체 window
        console.log(`hi ${this.name}`)
    }
}

console(me.name)
console(me['name'])
console(me.phone.type)

// ES6+ 오브젝트 리터럴
let book = '자바스크립트 완전정복'
let albums = {
    IU:['좋은날', '밤편지'],
    BTS:['Fake Love']
}
let bag = {
    book,
    albums
}

// JSON(Javasctipy object notation - 자바스크립트 오브젝트 표기법)
// 자바 스크립트 오브젝트 표기법을 가진 문자열이다.
// object -> JSOM
let jsondata = JSON.stringify(me)
let myObject = JSON.parse(jsondata)