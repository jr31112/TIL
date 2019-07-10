# Start Camp Day 3

## Python 문제풀이

### 문제1

```python
# 문제 1.
문자열을 입력받아 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

string = input('문자를 입력하세요: ')
# 아래에 코드를 작성해 주세요.
print(f'첫 글자 : {string[0]}, 마지막 글자 : {string[-1]}')
# -1 인덱스 접근은 가장 마지막이다.
# apple
#     -1
```

* `string`은 인덱스 접근이 가능하다.
* `-1` 인덱스 접근은 가장 마지막이다.

### 문제2

```python
'''
문제 2.
자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
'''
numbers = int(input('숫자를 입력하세요: '))
# 위의 주석을 풀고 아래에 코드를 작성해 주세요.
# range(1, numbers+1)
for i in range(numbers):
    print(i+1)
```

* 숫자를 `input`할 때에는 `int()`를 활용하여 불러온다.
* `range()`를 활용하여 `for`구문을 사용할 수 있도록 하자.

### 문제3

```python
'''
문제 3.
숫자를 입력 받아 짝수/홀수를 구분하는 코드를 작성하시오.
'''

number = int(input('숫자를 입력하세요: '))
# 위의 주석을 풀고 아래에 코드를 작성해 주세요.
if not number % 2:
    print('짝수')
else:
    print('홀수')
```

* %는 나머지를 출력해준다.
* `0`일 경우 `False`로 `bool`문자가 출력되며 `1`일 경우 `True`로 `bool`문자가 출력된다.

### 문제4

```python
'''
문제 4.
표준 입력으로 국어, 영어, 수학, 과학 점수가 입력됩니다.
국어는 90점 이상,
영어는 80점 초과,
수학은 85점 초과, 
과학은 80점 이상일 때 합격이라고 정했습니다.(한 과목이라도 조건에 만족하지 않으면 불합격)
다음 코드를 완성하여 합격이면 True, 불합격이면 False가 출력되도록 작성하시오. 
'''
a = int(input('국어: '))
b = int(input('영어: '))
c = int(input('수학: '))
d = int(input('과학: '))
# 위의 4줄의 주석을 풀고 아래에 코드를 작성해 주세요.
# and, or
# score = [a>=90,b>80,c>85,d>=80]

if all(score):
    print(True)
else:
    print(False)
```

* 집가서 마무리 하자...

## HTML/css

### HTML

`HTML`은 HyperText Markup Language의 약자로 웹 문서를 구조화 하는데 사용되는 언어이다.

1. HTML 기본구조

   ```html
   <!DOCTYPE html>
   <html lang='ko'>
       <head>
           <meta charset='UTF-8'>
           <title>Document</title>
       </head>
       <body>
           <h1>용흠아 안녕!</h1>
       </body>
   </html>
   ```

   * `<head></head>`는 무서의 정보를 담고 있다.
   * `<body></body>`는 문서의 본문을 담고 있다.

2. 태그의 종류

   1. 기본적으로 태그는 `여는태그`와 `닫는태그`로 구성된다.

      ```html
      <h1>제목1</h1>
      ```

   2. `닫는태그`가 없는 경우도 있다.(self-closing tag)

      ```html
      <img src="____"/>
      ```

   3. 태그의 구성

      ```html
      <img src="____" width='300'height='300' class='img-blue'/>
      <a href='https://google.com' class='blue'>구글</a>
      ```

   * 각 태그별로 가질수 있는 속성이 추가적으로 있다.
     * img - `src`, `width`, `height`
     * a - `href`

## CSS

 CSS는 cascading Style Sheets의 약자로, HTML을 꾸며주는 역할을 한다.

HTML을 꾸며주기 위하여, `선택자(selector)`를 통해 특정한 `element`를 지정하여야 한다.

1. 선택자

   * 태그선택자

     ```html
     p {
     color: red;
     }
     ```

   * id선택자

     ```
     .blue {
     color: blue;	
     }
     ```

   * class선택자

     ```
     #pink{
      color: pink;
     }
     ```

   선택자 우선순위는 id선택자 > class선택자 > 태그선택자 순서로 적용된다.

## Flask

`Flask`는 파이썬 기반의 `micro framework`이다.

### 기본 활용법

1. 설치

   ```bash
   $ pip install flask
   ```

2. 기본코드

   ```python
   #app.py
   from flask import Flask
   
   app = Flask(__name__)
   
   @app.route('/')
   def hello():
       return 'Hello!'
   ```

3. 서버 실행

   ```bash
   $ flask run
   ```

   * 기본적으로 `flask run`명령어는 `app.py`파일을 실행시킨다. 만약 다른 파일명으로 만들었다면, 옵션을 추가해야한다.
   * 마지막 두 줄을 작성해 두었다면, 아래와 같이 실행도 가능하다.

   ```bash
   $ python app.py
   ```

## Variable routing

* 요청 오는 url을 변수화하여 값을 사용할 수 있다.

  ```python
  @app.route('/hi/<string:name>')
  def hi(name):
      return f'{name}아 안녕?'
  ```

## Rendering Template

`HTML` 파일을 만들어 활용할 수 있다. 기본적으로 `templates` 폴더에 파일을 만들어야 한다.

```
app.py
templates/
	hi.html
	lunch.html
	index.html
```

```python
from flask import Flask, render_template
# ...
@app.route('/')
def hi():
    return render_template('hi.html')
```

`HTML` 파일에서 변수의 값을 출력하고자 한다면, 키워드 인자로 그 값을 넘겨줘야 한다.

```python
# ...
    return render_template('hi.html', name = name)
```

그리고 출력을 위해서는 `{{}}` 사용한다.

```jinja2
<h1>{{name}}아, 안녕?</h1>
```

