# start

`npm run test`

# screen method 네이밍

`query [ALL] By queryType`

## query

- get : DOM상의 엘리먼트를 찾을떄
- query : DOM상에 없는?숨겨진? 엘리먼트를 찾을때
- find : 비동기적인 엘리먼트를 찾을떄

## ALL

- 모두 match

## queryType

- role
- AltText
- Text
- placeholderText 등등 다수

### 참고

https://velog.io/@narcoker/React-Jest-Testing-Library-Query-%EC%82%AC%EC%9A%A9-%EC%9A%B0%EC%84%A0-%EC%88%9C%EC%9C%84

## act와 waitFor

- act
- waitFor

# userEvent

- @^14 버전사용
- fireEvent보다 안정적임
- setUp함수로 user변수에 담고
- Promise를 return하기때문에 꼭 `await`와 함께 사용
- test함수를 async로

## userEvent와 FireEvent

- fireEvent는 프로그램적으로 동작 -> DOM 이벤트를 직접 일으킴
- userEvent : fileEvent를 통해 구현됨, 더 사용자 친화적

* 대부분의 케이스에서는 `userEvent` 사용을 권장한다
  일반적이진않지만 커스텀 이벤트를 발생시키는 경우엔 fireEvent가 적합할수도있겠다.

### 참고

https://velog.io/@pds0309/react-testing-library-fireEvent-vs-userEvent
