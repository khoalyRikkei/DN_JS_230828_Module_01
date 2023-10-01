ex_1();

console.log("Sau khi gọi function lần 1");

// console.log("kiểm tra a", a);
// let a = 20;

function ex_1() {
  console.log("Đây là function");
}

console.log("Test -----2");

ex_1();
console.log("Sau khi gọi function lần 2");

// gọi function
function ex_2() {
  function sum(a, b, c) {
    console.log(a + b, c);
  }

  sum(1, 3);
  sum(3, 10);
}

// gọi function
function ex_3() {
  function changeStatus(status) {
    // status = !status;

    // console.log(222, status);

    status[0] = 100;
  }

  let status = 3;
  changeStatus(status);
  console.log(111, status);

  let arr = [1, 2];

  changeStatus(arr);

  console.log(arr);
}

function ex_4() {
  function sum(a, b) {
    return a + b;

    console.log("hello");
  }

  const sumAB = sum(10, 2);

  console.log("Kết quả", sumAB);

  function sumEven(a, b) {
    if ((a % 2 == 0) & (b % 2 === 0)) {
      return a + b;
    }

    return "Không có số chẵn";
  }

  console.log("Kiểm tra sum even", sumEven(10, 2));
}

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     return i;
//   }
// }

function ex_5() {
  const number = prompt("Nhập số bất kì");

  const square = getSquare(number);

  console.log("Bình phương của 1 số là:", square);
}

function getSquare(number) {
  return number ** 2;
}

// function expression
const getColor = function (color) {
  console.log("Màu sắc là", color);
};

// function loadData() {
//   console.log("Data đã được reload thành công");
// }

// loadData();

// IIFE
(function (color) {
  console.log("Data đã được reload thành công", color);
})("red");

function ex_6() {
  function calculateArea(radius) {
    return radius ** 2 * 3.14;
  }
  const calculateArea_2 = (radius) => {
    // thực
    return radius ** 2 * 3.14;
  };

  const calculateArea_3 = (radius) => radius ** 2 * 3.14;

  console.log("tính diện tích hình tròn", calculateArea_3(20));
}

function ex_7() {
  function allSum() {
    // console.log(arguments);

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  }

  allSum(1, 2, 4);
  console.log("Kiểm tra sum", allSum());
}

function ex_8() {
  function allSum(...rest) {
    console.log(rest);

    let sum = 0;

    for (let i = 0; i < rest.length; i++) {
      sum += arguments[i];
    }

    return sum;
  }

  allSum(1, 2, 4);
  console.log("Kiểm tra sum", allSum());
}

function ex_9() {
  let count = 0;
  function increase(n) {
    count += n;

    return count;
  }

  return increase;
}

// console.log("kiểm tra ex 9", ex_9()());

const increase = ex_9();
increase(10);
increase(10);
console.log("Kiểm tra count", increase(30));

function filterEven(...numbers) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      arr.push(numbers[i]);
    }
  }
  return arr;
}

function getEvent(callbackFn, ...numbers) {
  return filterEven(...numbers);
}

console.log("Kiểm tra", getEvent(filterEven, 1, 3, 5, 10, 20));

const arr = [1, 4, 5, 6];

const data = arr.filter((x) => x % 2 === 0);

console.log(1111111111111, data);
