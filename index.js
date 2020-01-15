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

console.log(youngInfo.favFood[1].korean);
