# Day 11 Bootstrap

## 1. 기본 사용법

![1564993490529](C:\Users\student\AppData\Roaming\Typora\typora-user-images\1564993490529.png)

bootstrap 홈페이지에서 다음과 같은 CSS와 JS로 구성된 코드를 확인하고 각각 head 닫는 부분과 body 닫는 부분에 넣는다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <!-- css는 head에 -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
  <!-- reboot.css를 통해서 기본 브라우저 태그의 속성값을 초기화함. -->
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <p>paragraph 1</p>
  <p><del>취소선</del></p>
  <p><mark>하이라이팅</mark></p>
  
  <!-- java script는 body 닫는 태그 바로 위에 -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
```

넣은 코드는 위와 같다!!!!

## 2. Spacing

`bootstrip`은 기본적으로 `margin`이나 `padding`같은 부분을 설정하여 사용자가 쓰기 쉽게 하였다.

| 속성값      | 넣을 부분      | 크기                  |
| ----------- | -------------- | --------------------- |
| m - margin  | t - top        | 0 - *0                |
| p - padding | b - bottom     | 1 - *0.25             |
|             | l - left       | 2 - *0.5              |
|             | r - right      | 3 - *1(web 기본 16px) |
|             | x - left+right | 4 - *1.5              |
|             | y - top+bottom | 5 - *3                |
|             | black - all    | auto                  |

```html
<div class='mt-5'>mt-5</div>
<div class='mt-4'>mt-4</div>
<div class='mt-3'>mt-3</div>
<div class='mt-2'>mt-2</div>
<div class='mt-1'>mt-1</div>
<div class="mx-auto my-5">mx-auto</div>
<div class="ml-auto">ml-auto</div>
<div class="mr-auto">ml-auto</div>
<div class="p-5 mt-3">p-5</div>
<div class="mt-n5">mt-n5</div>
```

위 표를 참조하여 아래 코드를 확인할 수 있도록 하자!!

## 3. Color

Spacing과 마찬가지로`bootstrip`은 `text`나 `background`같은 부분을 설정하여 사용자가 쓰기 쉽게 하였다.

| 속성값          | 색깔             |
| --------------- | ---------------- |
| text - text     | primary - 파란색 |
| bg - background | secondary - 회색 |
| alert - 경고문  | success - 녹색   |
| btn - 버튼      | danger - 빨간색  |
|                 | warning - 노란색 |
|                 | light - 흰색     |
|                 | dark - 검은색    |
|                 | white - 흰색     |

```html
<!-- 배경색 변환(background-color: 특정색;) -->
<div class="bg-primary text-center text-white">.bg-primary</div>
<div class="bg-warning text-center text-white">.bg-warning</div>
<div class="bg-danger text-center text-white">.bg-danger</div>
<div class="bg-dark text-center text-warning">.bg-dark</div>
<!-- 글자색 변환(text-color: 특정색;) -->
<span class="text-primary">Primary</span>
<span class="text-white">white</span>
<span class="text-success">success</span>
<span class="text-info">info</span>
<!-- 경고문색 변환 -->
<div class="alert alert-light" style="width: 100px">alert! alert-light!</div>
<div class="alert alert-primary" style="width: 100px">alert! alert-primary!</div>
<!-- 버튼 변환 -->
<button class='btn btn-success'>btn! btn-success</button>
<button class='btn btn-light'>btn! btn-light</button>
<button class='btn-light'>btn-light</button>
```

## 4. Border

`border`부분의 색깔이나 지정하고 싶은 위치, 경계의 원형 정도를 바꿀 수 있다.

1. 색깔

   색깔 바꾸는 것은 3. color부분을 참조하자!

2. 위치

   원하는 위치를 바꾸는 것은 2. space를 참조하자!

3. radius

   `rounded`를 이용하여 바꿔 줄수 있다.

   * `circle` : 원형으로
   * `pill` : 알약 모양으로
   * `top`, `right`, `bottom`, `left` : 각각 원하는 위치에~~

   ```css
   <img src="img.jpg" alt="prey" class="rounded-circle">
   <img src="img.jpg" alt="prey" class="rounded-pill">
   <img src="img.jpg" alt="prey" class="rounded">
   <img src="img.jpg" alt="prey" class="rounded-top">
   ```

## 5. Display

기본적으로 display를 조작하기 위해서는 `d-`를 활용하여 조작한다.

1. 인라인/블록/인라인-블록 처럼보이게 하기

   `CSS`와 마찬가지고 `block`, `inline`, `inline-block`을 활용하여 조작한다.

   ```html
   <img src="img.jpg" alt="prey" class="d-block">
   <img src="img.jpg" alt="prey">
   <div class="d-inline bg-primary">인라인 인라인</div>
   <div class="d-block bg-danger">블록 블록</div>
   ```

2. 요소 숨기기

   특정 스크린 사이즈에서 보이거나 보이지 않게 하는법이다.

   | Screen Size        | Class                            |
   | ------------------ | -------------------------------- |
   | Hidden on all      | `.d-none`                        |
   | Hidden only on xs  | `.d-none .d-sm-block`            |
   | Hidden only on sm  | `.d-sm-none .d-md-block`         |
   | Hidden only on md  | `.d-md-none .d-lg-block`         |
   | Hidden only on lg  | `.d-lg-none .d-xl-block`         |
   | Hidden only on xl  | `.d-xl-none`                     |
   | Visible on all     | `.d-block`                       |
   | Visible only on xs | `.d-block .d-sm-none`            |
   | Visible only on sm | `.d-none .d-sm-block .d-md-none` |
   | Visible only on md | `.d-none .d-md-block .d-lg-none` |
   | Visible only on lg | `.d-none .d-lg-block .d-xl-none` |
   | Visible only on xl | `.d-none .d-xl-block`            |

   ```html
   <img src="img.jpg" alt="prey" class="d-sm-none">
   <img src="img.jpg" alt="prey" class="d-md-none">
   <img src="img.jpg" alt="prey" class="d-lg-none">
   ```

   

## 6. Position

CSS와 마찬가지로 postion을 줄 수 있다.

```html
<div class="fixed-top bg-primary text-white">
    안녕하세요! 맨 위 고정(fixed)
</div>
<div class="fixed-bottom bg-primary text-white">
    안녕하세요! 맨 아래 고정(fixed)
</div>
<div class="mt-5 position-relative">
    position relative
    <div class="position-absolute">
        position absolute
</div>
```

## 7. Components

`bootstrap`은 편하게 작성하기 위해 여러 컴포넌트를 제공하고 있다.

직접 [bootstrap][https://getbootstrap.com/docs/4.3/components/alerts/]에 들어가서 확인할 수 있도록 하자!!

1. Alerts

   주로 경고문을 작성하는데 사용한다.

2. Badge

   바뀐 요소가 있을시 이를 쉽게 보여주기 위해 사용한다.

3. Buttons

   버튼을 넣는데 사용한다.

4. Card

   반복되는 div 영역을 쉽게 보기 위해 사용한다.

5. Forms

   로그인 기능, 혹은 설문조사를 넣을 때 사용한다.

6. Modal

   주로 팝업창에 표현할 내용을 보여주기 위해 사용한다.

7. Navs

   내비게이션 바를 표현할 때 사용한다.



