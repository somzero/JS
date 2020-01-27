# Vaniila JS

## let, const, var

- let

  ```
  let a = 100;
  let b = a + 5;
  a = 1;
  console.log(b, a);
  ```

- const

  ```
  const a = 100;
  let b = a + 5;
  a = 1;
  console.log(b, a)
  ```

- _var은 let과 비슷하고 중요하지 않음._

---

## Data with Array

- N번째 요일

  ```
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed"];

  console.log(daysOfWeek[0]);
  ```

- array 활용

  ```
  const something = "Nothing";
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", something];

  console.log(daysOfWeek);
  ```

## Data with Odject

- Array 와의 차이점: Array 는 정렬, 리스트의 개념이다.

- {컬리브라켓}은 Object 선언을 의미.

- Object는 **실제 객체**를 만드는 것이어서 Array 가 적용되지 않는다.

### Object

- Object 안의 value 값은 후자에서 변경 할 수 있다.

  ```
  const youngInfo = {
  name: "Young",
  gender: "Female",
  age: "30",
  isStudent: false
  };

  console.log(youngInfo.name);

  youngInfo.name = "Zero";

  console.log(youngInfo.name);
  ```

- Object 안에 Array 를 넣을 수 있다.

  ```
  const youngInfo = {
  name: "Young",
  gender: "Female",
  age: "30",
  isStudent: false,
  favMovie: ["Paterson", "Youth", "Miss sloane"]
  };

  console.log(youngInfo);
  ```

- Object 활용: Array 형식 안에 Object 넣기

  ```
  const youngInfo = {
  name: "Young",
  gender: "Female",
  age: "30",
  isStudent: false,
  favFood: [
  { name: "galbi", korean: true },
  { name: "Cheese", korean: false }
  ]
  };

  console.log(youngInfo);
  ```

  1. array안의 n번째 object log하기
     `console.log(youngInfo.favFood[1].korean);`
