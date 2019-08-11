# HTML

> [w3c 문서](w3.org)
>
> [whatwg  문서](https://html.spec.whatwg.org/multipage/)

## 0. [HTML 기초 및 태그](./00_tags.html)

1. HTML이란?

   * HTML은 웹페이지를 만들기 위한 언어로 웹브라우저 위에서 동작하는 언어이다.

     ```
     HT : HyperText, 문서와 문서가 링크로 연결되어 있다.
     
     M : Markup, 태그로 이루어져 있다.
     
     L : Language, 언어
     ```

     

   * 즉, 웹페이지의 내용과 구조를 담당하는 언어로써 HTML 태그를 통해 정보를 구조화 하는 것이다.

2. HTML 태그

   * 형식

     ```html
     <태그명 속성명="속성값">정보</태그명>
     ```

     * 태그는 컨텐츠를 감싸서 그 정보의 성격과 의미를 정의한다.
* 속성은 태그의 부가적인 정보가 들어온다.
     * 닫는 태그가  존재 하지 않는 태그도 있다.(`a`, `img`)

3. HTML 문서의 구조

   * HTML 문서는 파일의 확장자가 html 혹은 htm으로 끝난다.
   * 최상위 태그로 `<html>`을 사용한다. 그 하위에 `<head>` 태그와 `<body>` 태그를 컨텐츠로 가지고 있다.
   * `<head>` 태그는 문서를 설명하는 태그로 제목이나 키워드와 같은 정보를 담는다
   * `<body>` 태그에는 문서의 내용이 위치한다.

   ```html
   <!DOCTYPE html>
   <!-- !+tab -> emmet -->
   <html lang="ko">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Document</title>
   </head>
   <body>
     
   </body>
   </html>
   ```
   
4. 블록요소(block element) / 인라인 요소(inline element)

   * 블록 요소
     * 모든 인라인 요소를 포함할 수 있고 다른 블록 요소도 일부 포함 할 수 있음
     * 한줄을 끝까지 차지함(가로폭 전체 넓이를 가지는 직사각형 형태, 자동 줄바꿈)
     * vertical-align이 적용되지 않음
     * margin, padding을 이용하여 형태를 변형하고 레이아웃을 수정할 수 있음
   * 인라인 요소
     * 항상 블록 요소 안에 포함 되어 있음
     * 내용물이 없으면 나오지 못함
     * height, width로 변형을 줄 수 없음

## 1. [시맨틱 태그](./01_semantic.html)

1. 시맨틱 태그(Semantic Tag)란?

   * 컴퓨터가 정보를 이해하고, 논리적인 추론을 할 수 있도록 하는 태그들을 의미한다.

   * HTML 5에서 추가된 시맨틱 태그들
   
     * header : 문서의 header를 나타낼 때 사용하는 태그
     * nav : 문서의 navigation을 나타낼 때 사용하는 태그, 메뉴 영역이라 생각하면 편하다.
     * section : 문서의 section을 나타낼 때 사용하는 태그, 보통 같은 성격 내용일 때 section으로 묶어서 사용한다.
     * article : section 태그의 하위 개념인 article을 나타낼 때 사용하는 태그, 내용을 넣는다고 생각하면 된다.
  * aside : article 태그 내부에 작성된 내용과 연관성이 없는 내용을 나타낼때 사용하는 태그, 배너 광고 생각하면 편하다.
     * footer : 문서의 주석을 나타낼 때 사용하는 태그, 저작권이나 주소, 연락처 등을 담는 부분

   * 다음은 시맨틱 태그들의 레이 아웃으로 이해하기 쉽게 비주얼화 하였다.
   
     ![](.\시맨틱 태그.jpg)
     
     * non semantic 요소 : div, span등

## 2. [태그](./02_tags.html)

> 앞서 정리한 시맨틱 태그를 제외한 나머지 태그들을 정리하였다.
>
> 기본적으로 inline인 태그들은 `inline`을 추가하였다.

1. 제목(heading) - `<h1~6>` : 문서의 제목을 쓸 때 사용한다
2. 단락(paragraph) - `<p>` : 문서의 단락을 나눌때 사용한다
3. 한줄띄기 - `<br>` : 내용을 나눌때 사용한다. `inline`
4. 볼드체 만들기 - `<b>` : 굵게 쓰게 할 때 사용한다. `inline`

​                                  `<strong> ` : 굵게 쓰게 하며 시맨틱 태그 이다. `inline`

5. 이탤릭체 만들기 - `<i>` : 기울어 지게 쓰게 할 때 사용한다. `inline`

​                                      `<em>` : 기울어지게 쓰게 하며 시맨틱 태그이다. `inline`

6. 글자 덩어리 만들기 - `<span>` : 글자 덩어리를 만들어준다. `inline`
7. 형광펜 칠하기 - `<mark>` 
8. 취소선 긋기 - `<del>` 
9. 밑줄 긋기 - `<ins>`
10. 아랫첨자 만들기 - `<sub>` `inline`
11. 윗첨자 만들기  - `<sup>` `inline`
12. 코드라인 만들기 - `<pre>` `inline`
13. 인용문 만들기 - `<q>` or `<blockquote>` `inline`
14. 수평선 긋기 - `<hr>`
15. 순서 있는 리스트 만들기 - `<ol>`이후 `<li>`
16. 순서 없는 리스트 만들기 - `<ul>`이후 `<li>`
17. 이미지 넣기 - `<img src="파일명",alt="그림이름" width="너비" height="높이">` `inline`

18. 동영상 넣기 - `<iframe width="너비" height="높이" src="주소" allowfullscreen></iframe>`
19. 링크태그 - `<a href="주소"> 내용 </a>` `inline`
