## GIT

# Hướng dẫn sử dụng đưa source lên github

1. Mở terminal Ctrl + `
2. Khởi tạo git `$ git init`
3. Thêm các file code đã thay đổi để sẵn sàng commit: `$ git add .`
4. Kiểm tra trạng thái của git: `$ git status`
5. Commit nội dung đã add: `$ git commit -m "<thông tin mô tả>" `
   // ex: `$ git commit -m "session 01"`
   <!-- Hoàn thành việc commit -->
6. Kết nối tới repo github: `$ git remote add origin <link_repo>`
   // EX: `$ git remote add origin https://github.com/khoalyRikkei/DN_JS_230726_Module_01.git`
7. Đẩy dữ liệu lên repo: git push --set-upstream origin master

## Sau khi đã push thành công. Sau này mỗi lần up code lên chỉ thực hiện 3 bước:

1. `git add .`
2. `git commit -m "<noi_dung>"`
3. `git push`

<!-- Test -->
<!-- Hello world -->

<!-- Chuyển branch -->

### Tạo branch mới

git checkout -b <ten_branch>
//Ex
git checkout -b session_03_TH

### Chuyển Branch

git checkout <ten_branch>
//Ex
git checkout session_03_TH

## Clone code

- git clone <link_repo>
