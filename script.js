const html = {
  content: (body = {
    content: (h1 = {}),
  }),
};

function ex_1() {
  console.log(document);

  const titleElement = document.getElementById("title");
  //   titleElement.innerHTML = "Hello world";

  console.log({ a: titleElement });

  const fieldElement = titleElement.getElementsByTagName("fieldset");

  console.log(fieldElement);
}
const p = document.querySelector("#title-2 p");
function ex_2() {
  const h3 = document.querySelector("#title-2 h3");

  console.log(p);
  console.log("h3", h3);
}

function ex_3() {
  const pElements = document.querySelectorAll("#title-2 p");

  pElements.forEach((element, i) => {
    element.innerHTML = `<h1>${i}</h1>`;
    element.style.color = "red";
    element.onclick = function () {
      alert("Hello");
    };

    element.setAttribute("onclick", "handleAlert()");

    element.setAttribute(`data-l`, i);
  });

  console.log(pElements);
}
const handleAlert = () => alert("hi");

function lab_1() {
  // B1: Có phần tử html
  const circleElement = document.querySelector(".circle");

  // B2: CSS thành hình tròn

  // B3: Có kích thước, màu săc từ người dùng
  const width = prompt("Nhập bán kính");
  const color = prompt("Nhập màu sắc");

  // B4: gán lại giá trị màu sắc và kích thức

  circleElement.style.width = width * 2 + "px";
  circleElement.style.height = width * 2 + "px";
  circleElement.style.backgroundColor = color;
}

function ex_4() {
  const img = document.createElement("img");
  img.src =
    "https://cdn.pixabay.com/photo/2023/09/04/15/31/wren-8233065_640.jpg";
  console.log(img);
  p.appendChild(img);
  document.body.appendChild(img);

  const ulElement = document.createElement("ul");
  animals.forEach((animal) => {
    const liElement = document.createElement("li");
    liElement.textContent = animal;
    ulElement.appendChild(liElement);
  });

  const result = document.querySelector("#result-4");
  result.appendChild(ulElement);
}

const animals = ["dog", "cat", "pig"];

function lab_2() {
  // Lấy giá trị ô input
  const inputElement = document.querySelector("#input-ex");
  const value = inputElement.value;

  // Lấy được ol
  const olElement = document.querySelector("#lab_2 ol");

  console.log(olElement);

  // thêm thẻ li vào ol theo value input
  const liElement = document.createElement("li");
  liElement.innerHTML = value;

  olElement.appendChild(liElement);

  // Xóa giá trị trong ô input --> gán lại = ""
  inputElement.value = "";
}

const boxElement = document.querySelector(".box");

boxElement.addEventListener("click", (event) => {
  console.log(event);
});

boxElement.addEventListener("mouseover", (event) => {
  console.log(event, "...mouseover");
  boxElement.style.transform = "scale(1.5)";
});
boxElement.addEventListener("mouseout", (event) => {
  console.log(event, "...mouseover");
  boxElement.style.transform = "scale(1)";
});

const liElement = document.querySelectorAll("#box-2 li");

liElement.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.fontWeight = "1.5em";
    element.style.color = "orange";
  });
  element.addEventListener("mouseout", () => {
    element.style.fontWeight = "1em";
    element.style.color = "black";
  });
});

window.addEventListener("keydown", (e) => {
  console.log(e);
});

document.querySelector("#input-keydown").addEventListener("keydown", (e) => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);

  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r},${g},${b})`;

  console.log(color);
  e.target.style.color = color;
});
