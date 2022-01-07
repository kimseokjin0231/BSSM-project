// // Array 
// const dyasOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// // Get Item from Array
// console.log(dyasOfWeek[5]);

// // Add one more day to the array
// dyasOfWeek.push("sun");

// console.log(dyasOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab"); // 배열의 끝에 kimbab을 추가

// // Object 
// const player = {
//     name: "seokjin",
//     points: 10,
//     fat: true,
// };

// console.log(player);
// console.log(player.name);

// player.fat = false; // 수정 가능 !
// console.log(player.fat);

// player.lastName = "potato"; // 새로운객체를 만들어 추가도 가능 !
// console.log(player);

// player.points = player.points + 15;
// console.log(player.points); // 25

// // function 
// function syaHello(nameOfPerson, age) {
//     console.log(`HEllo My name is ${nameOfPerson} and I'm ${age}`);
// }
// syaHello("Seokjin", 16);    

// // 정말 간단한 계산기
// function plus(firstNUmber, secondNumber) {
//     console.log(firstNUmber + secondNumber);
// }

// plus(8, 60);

// // Object + function
// const player = {
//     name: "seokjin",
//     sayHello: function(otherPersonName){
//         console.log(`Hello ${otherPersonName} nice to meet you!`);
//     },
// };

// console.log(player.name); // outpuy >> seokjin
// player.sayHello("seokjin"); // output >> Hello seokjin nice to meet you !

// // datatype
// const a = 5;
// let isNicoFat = true;

// isNicoFat = null; // 비어있음을 의미 


// // Object

// const player = {
//     name: "Seokjin",
//     age: 06,
// };

// console.log(player);
// player.name = "KimSeokjin"
// console.log(player.name);
// player.sexy = "soon"; // 새로운거 추가 가능 !!

// // function

// function plus(a, b) {
//     console.log(a + b);
// }

// plus(5, 10);
// plus(1.33453, 9898);

// 계산기
// const calculator = {
//     add: function(a, b){
//         console.log(a + b);
//     },
//     min: function(a, b){
//         console.log(a - b);
//     },
//     div: function(a, b){
//         console.log(a / b);
//     },
//     squ: function(a, b){
//         console.log(a ** b); // 제곱 !
//     },
// };

// calculator.add(5, 1);
// calculator.min(5, 1);
// calculator.div(5, 1);
// calculator.squ(5, 1);

// // function return 

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const KrAge = calculateKrAge(age);

// console.log(KrAge);


// return 계산기 
// const calculator = {
//     add: function(a, b){
//         return a + b;
//     },
//     min: function(a, b){
//         return a - b;
//     },
//     time: function(a,b) {
//         return a * b;
//     },
//     div: function(a, b){
//         return a / b;
//     },
//     squ: function(a, b){
//         return a ** b; // 제곱 !
//     },
// };

// const plusResult = calculator.add(2, 3); // 5 더하기
// const minusResult = calculator.min(plusResult, 10);// -5 빼기
// const timesResult = calculator.time(10, minusResult); // -50 곱하기
// const divideResult = calculator.div(timesResult, plusResult); // -10 나누기
// const powerResult = calculator.squ(5, 2); // 25 제곱

// console.log(plusResult);
// console.log(minusResult);
// console.log(timesResult);
// console.log(divideResult);
// console.log(powerResult);

// About if
// 음주나이 판별기

// const age = prompt("How old are You?");  

// console.log(typeof "15", typeof parseInt("15")) ; //  입력받은 데이터타입을 알려줌
// // int로 바꾸는 명령어 >> parseInt() # 이거는 "lasdlsad" 이런거는 int 로 못바꾸고 "20" 안에 숫자가있으면 바꿀수있음

// if (isNaN(age) || age < 0) { // isNaN 안에 있는게 숫자이면 >> True 숫자가 아니면 >> False || 나이가 음수면은 >> False
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("you can drink.");
// } else if (age > 50 && age <= 80){
//     console.log("You should exercise.");
// } else if(age > 80){
//     condole.log("You can do whatever you want.");
// }  else {
//     console.log("You can't drink.");
// }

// HTML ang JS

//const title = document.getElementById("title"); // id 가져오기
//const ClassTitle = document.getElementsByClassName("ClassTitle"); // class 가져오기 
//title.innerText = "Good job bro !!"; // 이렇게 하면 title이란 id를 가진 텍스트가 바뀜

// const h1 = document.querySelector(".hello:first-child h1"); // css 방식으로 가지고올수있음 태그네임을
//const titles = document.querySelectorAll(".hello h1"); // css 방식으로 가지고올수있음 태그네임을 중복되는게 3개가있으면 3개 다 가져올수있음

// click event

//        function handleTitleClick() { // 클릭하면 파랑 두번쨰 클릭하면 주황으로 반복적으로 바뀌는 코드
//         const currentColor = h1.style.color;
//         let newColor;
//         if(currentColor === "blue"){
//                 newColor = "tomato";
//         } else {
//                 newColor = "blue";
//         }
//         h1.style.color = newColor;
//        }

//        h1.addEventListener("click", handleTitleClick);

// css in  javascript

//        function handleTitleClick() {
//         const clickedClass = "clicked";
//         if(h1.className === clickedClass){
//                 h1.className = ""; // 클릭시 원래 색깔로 돌아옴
//         } else {
//                 h1.className = clickedClass; // 클릭시 토마토색깔로 바뀌고
//         }
//        }

//  // classList
//  function handleTitleClick() {
//   const clickedClass = "clicked";
//   if(h1.classList.contains(clickedClass)){
//          h1.classList.remove(clickedClass); // 클릭시 원래 색깔로 돌아옴
//   } else {
//          h1.classList.add(clickedClass) ; // 클릭시 토마토색깔로 바뀌고
//  }
//  // h1.classList.toggle("clicked"); 이 한줄코드랑 위 코드랑 똑같음 
// }


// h1.addEventListener("click", handleTitleClick);