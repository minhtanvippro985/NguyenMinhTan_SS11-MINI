// 1. Khởi tạo mảng quản lý tổng
let students = [
  { id: 1, name: "Nguyen Van A", age: 20, gpa: 8.5, status: "active" },
  { id: 2, name: "Le Thi B", age: 17, gpa: 7.2, status: "active" }
];

let isRunning = true;

while (isRunning) {
  let menu = `
    --- HỆ THỐNG QUẢN LÝ SINH VIÊN ---
    1. Create Student (Thêm mới)
    2. Read All Students (Hiển thị danh sách)
    3. Filter Scholarship Candidates (GPA > 8.0)
    4. Update Student Profile (Cập nhật theo ID)
    5. Delete Record (Xóa theo ID)
    6. Compliance Verification (Kiểm tra điều kiện)
    7. Academic Statistics (Tính GPA trung bình)
    8. Data Normalization (Chuẩn hóa tên IN HOA)
    9. Thoát
    Chọn chức năng (1-9):`;

  let choice = prompt(menu);

  switch (choice) {
    case "1": // Create Student
      const id = Number(prompt("Nhập ID:"));
      const name = prompt("Nhập họ tên:");
      const age = Number(prompt("Nhập tuổi:"));
      const gpa = Number(prompt("Nhập điểm GPA:"));
      const status = prompt("Trạng thái (active/inactive):").toLowerCase();

      const newStudent = { id, 
        name, 
        age, 
        gpa, 
        status };
      students.push(newStudent);
      alert("Thêm sinh viên thành công!");
      break;

    case "2": 
      if (students.length === 0) {
        alert("Danh sách trống.");
      } else {
        let output = "ID | Họ Tên | Tuổi | GPA | Trạng thái\n";
        output += "------------------------------------------\n";
        students.forEach(s => {
          output += `${s.id} | ${s.name} | ${s.age} | ${s.gpa} | ${s.status}\n`;
        });
        console.log(output);
        alert("Danh sách đã được in ra Console (F12).");
      }
      break;

    case "3": 
      const scholars = students.filter(s => s.gpa > 8.0);
      console.log("Danh sách học bổng (GPA > 8.0):", scholars);
      alert(`Tìm thấy ${scholars.length} sinh viên đủ điều kiện. Xem chi tiết tại Console.`);
      break;

    case "4": 
      const updateId = Number(prompt("Nhập ID sinh viên cần cập nhật:"));
      const studentIndex = students.findIndex(s => s.id === updateId);

      if (studentIndex !== -1) {
        const newName = prompt("Nhập tên mới:", students[studentIndex].name);
        const newGpa = Number(prompt("Nhập GPA mới:", students[studentIndex].gpa));
        
        students[studentIndex].name = newName;
        students[studentIndex].gpa = newGpa;
        alert("Cập nhật thông tin thành công!");
      } else {
        alert("Không tìm thấy sinh viên có ID này.");
      }
      break;

    case "5": 
      const deleteId = Number(prompt("Nhập ID sinh viên cần xóa:"));
      const initialLength = students.length;
      // Sử dụng filter để tạo mảng mới không chứa ID cần xóa và gán ngược lại
      students = students.filter(s => s.id !== deleteId);
      
      if (students.length < initialLength) {
        alert("Đã xóa sinh viên thành công.");
      } else {
        alert("Không tìm thấy ID để xóa.");
      }
      break;

    case "6": 
      const hasUnder18 = students.some(s => s.age < 18);
      const allActive = students.every(s => s.status === "active");

      alert(`Kết quả kiểm tra:
      - Có sinh viên dưới 18 tuổi: ${hasUnder18 ? "CÓ" : "KHÔNG"}
      - Tất cả đều Active: ${allActive ? "ĐÚNG" : "SAI"}`);
      break;

    case "7": 
      if (students.length === 0) {
        alert("Danh sách trống, không thể tính toán.");
      } else {
        const totalGpa = students.reduce((sum, s) => sum + s.gpa, 0);
        const averageGpa = totalGpa / students.length;
        alert(`Điểm GPA trung bình của toàn hệ thống: ${averageGpa.toFixed(2)}`);
      }
      break;

    case "8": 
      const normalizedList = students.map(s => ({
        ...s,
        name: s.name.toUpperCase()
      }));
      console.log("Danh sách đã chuẩn hóa tên ", normalizedList);
      break;

    case "9": // Exit
      isRunning = false;
      alert("Cảm ơn bạn đã sử dụng hệ thống");
      break;

    default:
      break;
  }
}




// //delete: Nó chỉ xóa giá trị tại vị trí đó nhưng giữ nguyên ô nhớ.
//  Mảng sẽ xuất hiện một lỗ hổng gọi là undefined hoặc empty. Độ dài (length) của mảng không thay đổi.

// Ví dụ: Mảng có 3 sinh viên,
//  xóa 1 người bằng delete thì length vẫn là 3, nhưng ở giữa có một người bị "bốc hơi" để lại ô trống.

// splice(): Nó thực sự cắt bỏ phần tử đó ra khỏi mảng và dồn các phần tử phía sau lên. Độ dài length của mảng sẽ giảm đi.

// Ví dụ: Mảng 3 người, dùng splice xóa 1 người thì length còn 2. Mảng khít lại, không có lỗ hổng.

// 2. Ảnh hưởng đến các vòng lặp (Iteration)
// Nếu dùng delete, khi bạn dùng các hàm như map(), forEach(), hay reduce() để tính GPA trung bình, các hàm này có thể gặp lỗi hoặc xử lý sai lệch khi va phải các ô empty (ô trống).

// Với splice(), mảng luôn liên tục, giúp các phương thức mảng của ES6 hoạt động chính xác 100%.