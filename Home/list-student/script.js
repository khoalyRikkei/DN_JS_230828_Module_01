const listStudent = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "0909000999",
    address: "Đà Nẵng",
    gender: "male",
  },
  {
    id: 2,
    name: "Nguyễn Thị B",
    email: "nguyenthib@gmail.com",
    phone: "0909000999",
    address: "Đà Nẵng",
    gender: "female",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    email: "nguyenvana@gmail.com",
    phone: "0909000999",
    address: "Đà Nẵng",
    gender: "male",
  },
];

//
renderListStudent();

// Form

// lấy input
const nameElement = document.querySelector("#name");

// B1: Lắng nghe sự kiện submit
document.querySelector("#form").addEventListener("submit", (e) => {
  // Chặn action của form

  e.preventDefault();

  //   const student = getDataForm() --> tham khảo

  //   Lấy dữ liệu từ form ---> object
  const student = {
    id: new Date().getTime(),
    name: nameElement.value,
  };
  //   nameElement.value = "";

  //   clearForm
  clearForm();

  //   B3: Thêm new student vào mảng data
  listStudent.push(student);

  //B4:   render Liststudent
  renderListStudent();
});

function getDataForm() {
  // Xử lý lấy data từ form

  return {};
}

function clearForm() {
  nameElement.value = "";
}
// Function xử lý render

function renderListStudent() {
  // B1: Lấy được element cầu thay đổi
  const tbodyElement = document.querySelector("#table-list-student tbody");
  //   forEach là
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index]; === student
  //   }

  // B2: Lấy được nội dụng cần render
  let tbodyHTML = "";
  listStudent.forEach((student, i) => {
    tbodyHTML += `
    <tr>
          <td>${i + 1}</td>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.address}</td>
          <td>${student.phone}</td>

          <td>${student.gender}</td>
          <td><button>Edit</button> <button onclick="handleDelete(${
            student.id
          })">Delete</button></td>
    </tr>`;
  });

  // B3: Gán lại element
  tbodyElement.innerHTML = tbodyHTML;
}

// delete

function handleDelete(id) {
  // Tìm vị trí
  const index = listStudent.findIndex((student) => student.id == id);
  //   trả về 1 vị trí ---> -1 khi không tìm thấy - trả về đúng vị trí đầu tiên trong mảng
  console.log(id);

  if (index !== -1) {
    // Xóa phần tử đó trong mảng tại vị trí index
    listStudent.splice(index, 1);
  }

  //   render
  renderListStudent();
}

// Đẩy dữ liệu lên form
function handleEdit() {
  // B1: Lấy id
  // B2: Đưa dữ liệu lên form --> id --> mảng
  // Xong
}
