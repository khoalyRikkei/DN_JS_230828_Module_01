function ex_1() {
  // Array literals
  console.log(11111);

  //   Mảng chứa trái cây
  const fuits = ["banana", "orange", "apple", "lemon"];

  console.log("Kiểm tra trái cây", fuits);

  console.log("Kiểm tra chiều dài của fuits", fuits.length);

  //   Khai báo bằng array constructor

  const animals = new Array("pig", "dog", "cat", "chicken");
  console.log("Kiểm tra động vật", animals);

  console.log("Tìm phần tử thứ 2", animals[2]);

  const days = new Array(30); // ít dùng

  console.log("Kiểm tra days", days);

  let numbers = [1, 2, 4];

  numbers = ["a", "b", "c"];
}

function ex_2() {
  const cars = ["BMW", "Vinfast"];
  console.log("cars", cars);
  const newCar = cars;
  newCar[0] = "Mazda";
  console.log("cars new", newCar);

  let number_1 = 10;
  let number_2 = number_1;
  number_2 = 20;
  console.log("Kiểm tra ", number_1, number_2);

  console.log("Kiểm tra xe", cars, newCar);
}

function ex_3() {
  const _location = [
    [1, 2],
    [3, 2],
    [10, 2],
    [6, 2],
    [4, 7],
    [5, 2],
  ];

  console.log(_location);

  console.log("kiểm tra mảng row", _location[2]);
  console.log("kiểm tra", _location[2][0]);
}

function ex_4() {
  const numbers = [];

  numbers.push(8);
  const newLength = numbers.push(10, 15, 50, "hello");
  console.log("Kiểm tra length", newLength);
  numbers[numbers.length] = "Đây là số 6";
  console.log(numbers);
}

function ex_5() {
  const fuits = ["banana", "orange", "apple", "lemon"];

  console.log("fuit", fuits[0]);
  console.log("fuit", fuits[1]);

  console.log("fuit", fuits[2]);

  console.log("fuit", fuits[3]);

  console.log("fuit", fuits[4]);

  //   Tại sao không nên bỏ let
  for (let i = 0; i < fuits.length; i++) {
    console.log("Kiểm tra trái cây", i + 1, fuits[i]);

    const item = fuits[i];
    console.log("Kiểm tra", item);
  }

  for (const item of fuits) {
    console.log("for of", item);
  }
}
function lab_1() {}
function lab_2() {
  const numbers = [1, 3, 10, 20];
  const number_2 = new Array(1, 2, 4, 8, 5, 6, 10);

  //   Bài 1: Tạo 1 mảng mới đảo ngược với mảng cũ

  const numberReverse = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    // Đưa phần tử vào mảng mới
    const number = numbers[i];
    numberReverse.push(number);
  }
  console.log("Kiểm tra mảng mới", numberReverse);

  for (let i = 0; i < number_2.length / 2; i++) {
    // Lấy phần tử cuối giảm dần theo i
    const lastIndex = number_2.length - 1 - i;

    // Lưu trữ phần tử thứ i để không bị mất
    const numberI = number_2[i];

    // Tiến hành đảo --> gán phần tử thứ i = phần tử last
    number_2[i] = number_2[lastIndex];
    // phần tử last = phần tử thứ i ban đầu
    number_2[lastIndex] = numberI;
  }

  console.log("Kiểm tra", number_2);
}

const arr = [];
