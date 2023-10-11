// =================================================================
function lab_02_edit() {
  // 1. Lay gia cua input (value)
  const inputUsername = document.querySelector("#lab-02");
  const inputValue = inputUsername.value;
  // 2. Cap nhat lai gia tri cho localStorage
  localStorage.setItem("lab_02", inputValue);
  // 3. Goi funtion thay doi text cua btn
  check();
}

function lab_02_delete() {
  // 1. remove gia tri cua localStorage
  localStorage.removeItem("lab_02");
  // 2. Goi funtion thay doi text cua btn
  check();
}

check();

// kiem tra localStorage da co gia tri hay
function check() {
  // lay gia tri tu localStorage
  const name = localStorage.getItem("lab_02");
  // lay btn edit
  const btnChange = document.getElementById("btn-demo");
  // kiem tra gia tri do co ton tai hay khong
  if (name) {
    btnChange.innerText = "Edit";
  } else {
    btnChange.innerText = "Add";
  }
  // neu ton tai thi thay doi text cua btn thanh Edit
  // neu khong ton tai thi thay doi text cua btn thanh Add
  console.log(name);
}
