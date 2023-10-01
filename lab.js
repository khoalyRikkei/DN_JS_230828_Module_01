function lab_1() {
  const str = prompt("Nhập chuỗi");

  const newStr = cutString(str);

  console.log("Kiểm tra", newStr);

  //   Kiểm tra lại hàm slice()
}

function cutString(str) {
  return str.slice(0, 10);
}

function lab_2() {
  const str = prompt("Nhập chữ");

  const newStr = converString(str);

  console.log(newStr);

  //   Kiểm tra lại hàm slice()
}

function converString(str) {
  const arr = str.split(" ");

  let result = "";
  for (const word of arr) {
    const newWord = word.toLowerCase();
    const wordConvert = newWord[0].toUpperCase() + newWord.slice(1);
    result += wordConvert + " ";
  }

  return result;
}

function isPrime(number) {

}
