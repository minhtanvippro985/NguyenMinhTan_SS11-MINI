let products = [
    {id: "P01" , name: "Laptop MacBook Pro M3" , price: 2000 , catergory: "Laptop",inStock: true},
    {id: "P02" , name: "Chuột không dây Logitech" , price: 45 , catergory: "Phụ kiện",inStock: true},
    {id: "P03" , name: "Bàn phím cơ Keychron" , price: 95 , catergory: "Phụ kiện",inStock: false},
    {id: "P04" , name: "Màn hình Dell UltraSharp" , price: 450 , catergory: "Màn Hình",inStock: true},
    {id: "P05" , name: "Tai nghe Sony WH-1000XMS" , price: 350 , catergory: "Phụ kiện",inStock: true},


];


let search = prompt("Nhập sản phẩm bạn muốn tìm");
let index = products.findIndex(function(element,index){
    return element.id == search;
})
if(index === -1){
    console.log("Không tìm thấy")
}else{
    console.log(products[index]);
    console.log(`${products[index].id} - ${products[index].name} -${products[index].catergory} - InStock : ${products[index].inStock}`)
}


for (let key in products) {
   console.log(`${key} - ${products[key].name} -${products[key].catergory} -Giá $${products[key].price} - InStock : ${products[key].inStock}`)
}