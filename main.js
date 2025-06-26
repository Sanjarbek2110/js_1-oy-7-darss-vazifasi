// const clickBtn = document.getElementById("btn");
// const clickBtn1 = document.getElementById("btn1");

// clickBtn.textContent = "Dark";

// clickBtn.addEventListener("click", () => {
//   document.body.classList.toggle("bg-black");
//   document.body.classList.toggle("text-white");

//   if (clickBtn.textContent === "Dark") {
//     clickBtn.textContent = "Light";
//   } else {
//     clickBtn.textContent = "Dark";
//   }
// });


// clickBtn.addEventListener("click" , () => {
// // alert("Button bosildi")

// document.body.style.backgroundColor = "black"

// })

// clickBtn1.addEventListener("click" , () => {
// // alert("Button bosildi")

// document.body.style.backgroundColor = "white"

// })


// function salom (){
//     console.log("Bot");
    
// }
// salom()




// const userName = prompt("Ism");

// const newTag = document.createElement("h1");

// newTag.textContent = userName;

// document.body.appendChild(newTag)


const elForm = document.getElementById("form");
const elInput = document.getElementById("input");

const minusBtn = document.getElementById("btnMinus");
const plyusBtn = document.getElementById("btnPlyus");
const result = document.getElementById("result");
const colorChangeInput = document.getElementById("colorInput");

let count = 0;

// Boshlanishida rangni o‘rnatamiz
result.style.color = colorChangeInput.value;

// Rang o‘zgartirilganda
colorChangeInput.addEventListener("input", () => {
  result.style.color = colorChangeInput.value;
});

// Inputda raqam kiritilsa
elInput.addEventListener("keyup", (e) => {
  e.preventDefault();

  const qiymat = parseInt(elInput.value);

  if (!isNaN(qiymat)) {
    count = qiymat;
    result.textContent = count;
  }

  elInput.value = "";
});

// Minus bosilganda
minusBtn.addEventListener("click", () => {
  count--;
  result.textContent = count;
});

// Plus bosilganda
plyusBtn.addEventListener("click", () => {
  count++;
  result.textContent = count;
});
