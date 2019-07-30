# Day 10 CSS

## 1. 기본 사용법

1. 기본 사용법

   ```css
   h1 {color:blue}
   ```

   * 셀렉터 : h1
   * 프로퍼티 : color
   * 값 : blue

2. 사용 위치

   * `인라인(inline)` : 재사용이 불가능하며 되도록 쓰지 말것
   
     ```html
     <p style="color: purple">인라인</p>
     ```
   
   * `내부참조(embed)` : header에서 사용되며 한 파일 내에서 재사용 가능
   
     ```html
     <head>
       <style>
           h1 {
           color: red;
         }
         </style>
     </head>
     ```
   
   * `외부참조` : 다른 파일에서도 재사용이 가능하며 가장 많이 쓰는 방법
   
     ```html
     <head>
         <link rel="stylesheet" href="01_style.css">
     </head>
     ```

## 2. 셀렉터(selector)

적용하고자하는 요소에 접근 할 수 있다.

선택자는 우선순위가 있다.(`id` >`class`>`tag`)

 * `id`는 문서에서 반드시 한번만 등장할때 사용된다.

 * `class`는 문서에서 여러번 등장하여 사용된다.

 * `!important`는 CSS적용이 가장 우선된다. 그러므로 **사용에 주의하자!**
   
 * `요소선택자` : 특정 태그명을 가진 엘리먼트 전체를 제어하기 위해서 사용
      
   ```css
      div {
        height: 100px;
        width: 50px;
     border: 1px solid black;
      }
```
      
   css선택자에서는 태그의 이름을 사용함.
      
   * `그룹선택자` : 여러 요소를 모아서 한번에 처리하고자 할 때 사용
   
     ```css
     h1, h2, h3, h4, h5, h6, .silver {
    color: silver;
     }
  ```
   
* `클래스 선택자` : 일련의 태그를 그룹핑해서 하나처럼제어하기 위해서 사용
   
     ```css
     .blue {
       background-color: blue;
     }
  ```
   
     	* class 속성에는 공백으로 구분된 여러개의 class가 표시될 수 있다.
     	* css선택자에서는 `.`을 사용해서 class임을 표시한다.
   
   * `아이디 선택자` : 전체 문서에서 하나의 태그를 식별하기 위해서만 사용
   
     ```css
     #green {
         background-color: green;
     }
     ```
   
     	* 우선순위가 가장 높다.
     	* css선택자에서는 `#`을 사용하여 id임을 표시한다.
   
   * `인접 선택자` : 인접 선택자 : 어떤 클래스가 구성된 이후 처리하고자 할 때 사용
   
     ```css
     .blue + .red + div {
       background-color: purple;
     }
     ```
   
   * `자식 선택자` : 바로 밑에 있는 것을 처리할  때
   
     ```css
     .parent > li {
       color : red;
     }
     ```
   
   * `후손 선택자` : 하위 항목 모든것을 처리할 때
   
     ```css
     .ancestor li{
       color: blue;
     }
     ```

## 3. 단위

1. `rem`/`em`

   * `rem` : root요소의 배수

     ```css
     ol, ol li {
       font-size: 2rem;
     }
     ```

     브라우저 요소의 기본이 16px라면 ol은 브라우저의 2배인 32px가 되며 li도 32px가 출력된다.

   * `em` : 상위 요소의 배수

     ```css
     ul, ul li {
       font-size: 2em;
     }
     ```

     브라우저 요소의 기본이 16px라면 ul은 브라우저의 2배인 32px가 되며 li은 ul의 2배인 64px가 출력된다.

2. `vw`, `vh`, `vmin`, `vmax`

   * `vw` : 좌우로 크기를 조정했을때 사용자의 화면에 맞게 조정 

   * `vh` : 상하로 크기를 조정했을때 사용자의 화면에 맞게 조정

   * `vmin`, `vmax` : 상하좌우를 조정했을때 최소 최대를 설정하고 사용자 화면에 맞게 조정

     ```css
     .vw {
       font-size: 10vw;
     }
     
     .vh {
       font-size: 10vh;
     }
     
     .div-vw {
       width : 10vw;
       height: 10vw;
       background-color: rgb(0, 0, 255);
     }
     
     .div-vh {
       width : 10vh;
       height: 10vh;
       background-color: rgba(0, 0, 255, 0.5);
     }
     
     .div-vmin{
       width : 10vmin;
       height: 10vmin;
       background-color: #0000ff;
     }
     ```

## 4. `Box` 모델링

![margin borderì ëí ì´ë¯¸ì§ ê²ìê²°ê³¼](data:image/png;base64,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)

`Box`는 4가지 요소로 구성된다.

1. `margin` : 박스의 외각 공백

   ```css
   .margin {
     margin-top: 30px;
     margin-bottom: 30px;
     margin-right: 10px;
     margin-left: 10px;
   }
   
   .margin-shorthand-1 {
     /* 상하좌우 */
     margin: 10px;
   }
   
   .margin-shorthand-2 {
     /* 상하 / 좌우 */
     margin: 10px 20px;
   }
   
   .margin-shorthand-3 {
     /* 상 / 좌우 / 하 */
     margin : 10px 20px 30px;
   }
   
   .margin-shorthand-4 {
     /* 상 / 우 / 하 / 좌 - 시계방향 */
     margin : 10px 20px 30px 40px;
   ```

   `margin`을 관리하는 법은 위 코드와 같다.

   top, bottom, right, left를 넣지 않고 `margin`의 크기를 관리할 수 있는데 순서는 위 코드와 같다.

2. `border` : 박스의 윤곽선

   ```css
   .border {
     border-width: 2px;
     border-style: dotted;
     border-color: red;
     border-top-color: blue;
     border-radius: 10%;
   }
   ```

   border의 너비, 스타일, 색깔, 모양 등을 관리 할 수 있다.

3. `padding` : 박스 내부에서 `content`와 `border`사이의 공백

   ```python
   .padding {
     padding-top: 30px;
     padding-bottom: 30px;
     padding-right: 10px;
     padding-left: 10px;
   }
   ```

   `padding`을 관리하는 법은 위 코드와 같다.

   `margin`과 마찬가지로 `padding`의 크기를 관리할 수 있으며 `margin`과 동일하다.

4. `context` : 박스 내부 내용이 들어가는 곳

## 5. Display 01 - `Block` 정렬 & `Inline`

1. block 및 block정렬

   * `block`은 기본적으로 가질 수 있는 영역의 100%를 가진다.(자동 줄바꿈)

   * h1~h5, p, div, form, table, ol, ul, li은 기본적으로 `block`을 가지고 있다.

   * 자동 줄바뀜이란 특성 때문에 `block`은 가로 정렬시 매우 쉽다.

     ```css
     .mr-auto {
       margin-right: auto;
     }
     
     .ml-auto {
       margin-left: auto;
     }
     
     .mx-auto {
       margin: 0 auto;
     }
     ```

     위코드는 각각 왼쪽 맞춤, 오른쪽 맞춤, 양쪽 맞춤에 대한 코드이다.

2. `inline`
   * `block`과는 `inline`은 `content` 영역만큼 너비를 가진다.
   * span, a, img등이 기본적으로 `inline` 요소를 가지고 있다.

## 6. Display 02 - 속성 변경 및 none과 hidden

1. `block`을 `inline`의 속성으로 바꿔주기

   * 이렇게 바꿔주면 block의 속성인 `width`와 `height`를 적용할 수 없게 된다.

   ```css
   .inline {
     display: inline;
   }
   ```

2. `block`을 `inline-block`의 속성으로 바꿔주기

   * 이렇게 바꿔주면 `block`의 속성인 `width`와 `height`를 적용할 수 있고 `inline`의 속성인 우측 `margin`이 사라짐을 볼 수 있다.

   ```css
   .inline-block {
     display: inline-block;
   }
   ```

3. None

   * none을 사용하면 공간자체가 없어진다!

   ```css
   .none {
    display: none;
   }
   ```

4. hidden

   * hidden을 사용하면 공간은 유지되지만 보이지 않는다.

   ```css
   .hidden {
     visibility: hidden;
   }
   ```

## 7. Postion

1. static
   * 모든 태그들이 처음에 갖고 있는 상태이다.
   * 차례대로 왼쪽에서 오른쪽, 위에서 아래로 쌓인다.
2. absolute
   * absolute는 부모 혹은 조상요소를 기준으로 위치한다.(static이 아닌)
   * 만약 부모 혹은 조상중에 relative, absolute, fixed속성을 갖지 않는다면 가장 상위요소가 기준이 된다.
3. relative
   * relative는 자신이 static요소일 때 있어야 할 위치를 기준으로 이동한다.
4. fixed
   * fixed는 브라우저 위치에 따라 변경된다.

**말로 이해하기 힘들다면 아래 예제코드를 통해 확인 할 수 있도록 하자. **

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="07_style.css">
</head>
<body>
  <h2>1. static</h2>
  <div>static</div>
  <div>static</div>
  <h2>2. absolute1</h2>
  <!-- 1. absolute
    absolute는 부모 혹은 조상요소를 기준으로 위치.
    (*가까운 조상중에 static이 아닌 요소*)
   -->
  <!-- 
    부모가 static이여서.
    absolute1이 body를 기준으로 위치함.
   -->
  <div class="parent">
    static
    <div class="absolute">absolute1</div>
  </div>
  <h2>2-2. absolute2</h2>
  <!-- 
    부모가 static이 아니여서,
    absolute2가 부모를 기준으로 위치함.
   -->
  <div class="parent relative">
    relative
    <div class="absolute">absolute2</div>
  </div>
  <h2>3. relative</h2>
  <!-- 2. relative
    자기가 원래 있어야할 위치(static)을 기준으로 이동 
  -->
  <div class="relative-move">relative</div>
  <h2>4. fixed</h2>
  <!-- 3. fixed
    브라우저 위치에 따라 변경
  -->
  <div class="fixed">fixed</div>
</body>
</html>
```

```css
div {
  width: 100px;
  height: 100px;
  background-color: #7655aa;
  text-align: center;
  line-height: 100px;
}

.parent {
  background-color: red;
}

.absolute {
  position: absolute;
  top: 50px;
  left: 50px;
}

.relative {
  position: relative;
}

.relative-move {
  position: relative;
  top: 30px;
  left: 30px;
}

.fixed {
  position: fixed;
  width: 100px;
  bottom: 0;
  left: 0;
}
```

## 8. float

* float는 기본적으로 둥둥 떠다니는 것이라 생각하면 이해하기 쉽다.

* 아래 예제 코드를 통해 확인해 볼 수 있도록 하자.

  ```html
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="08_style.css">
  </head>
  <body>
    <div></div>
    <div class="float-left"></div>
    <div class="back"></div>
    <div class="float-left">1</div>
    <div class="float-left">2</div>
    <div class="float-right">3</div>
    <div class="float-right">4</div>
    <div class="back"></div>
  </body>
  </html>
  ```

  ```css
  div {
    width: 100px;
    height: 100px;
    background-color: #7655aa;
    text-align: center;
    line-height: 100px;
  }
  
  .float-left {
    float: left;
  }
  
  .float-right {
    float: right;
  }
  .back {
    background-color: orange;
    width: 300px;
  }
  ```

  