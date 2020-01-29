# Theory

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

  > array안의 n번째 object log하기
  >
  > - `console.log(youngInfo.favFood[1].korean);`

# Practice

## 함수 만들기

- 첫 함수를 만들어 보자

```
function sayhello() {
  console.log("hiYoung");
}

sayhello();

```

- 함수에 외부데이터 입력하기 ( argument or parameter )

```
function sayHello(name, age, year) {
  console.log("hello!", name, "You are", age, "in", year);
}

sayHello("Young", 6, 2020);

```

- "string", 'string', `string`

```
function sayHello(name, age, year) {
console.log(`Hello ${name} You are ${age} in ${year}`);
}

sayHello("Young", 6, 2020);

```

- console.log 대신 return

```
function sayHello(name, age, year) {
return `Hello ${name} You are ${age} in ${year}`;
}

const sayHi = sayHello("Young", 6, 2020);

console.log(sayHi);

```

- 함수 최종 예제 (복습하기)

```
const calculator = {
plus: function(a, b) {
return a + b;
}
};

const plus = calculator.plus(6, 4);
console.log(plus);
```

## html 활용

- html 의 요소를 객체로 적용하기. (DOM)

<!-- console.log(document.getElementById); -->

const title = document.getElementById("title");

<!-- console.log(title); -->

title.innerHTML = "Hi! Fron JS";

- dir 은 검색기능 같은 거임

```
const title = document.getElementById("title");

title.innerHTML = "Hi! Fron JS";
title.style.color = "red";
console.dir(title) ;

```

- htm ID를 찾으려면 #title, class는 .title

```
const title = document.querySelector("#title");

```

- handleResize

```
function handleResize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize);

```

- handleClick

```
function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);

```

---

[참고마크다운](https://markdowntohtml.com/)
