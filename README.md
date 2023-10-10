## start

`npm run test`

## userEvent

- @^14 버전사용
- fireEvent보다 안정적임
- setUp함수로 user변수에 담고
- Promise를 return하기때문에 꼭 `await`와 함께 사용
- test함수를 async로

## screen method 네이밍

`query [ALL] By queryType`

### query

- get : DOM상의 엘리먼트를 찾을떄
- query : DOM상에 없는?숨겨진? 엘리먼트를 찾을때
- find : 비동기적인 엘리먼트를 찾을떄

### ALL

- 모두 match

### queryType

- role
- AltText
- Text
- placeholderText 등등 다수
