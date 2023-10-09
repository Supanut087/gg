window.onload = pageLoad;
function pageLoad(){
	function loginLoad(){
        var form = document.getElementById("myLogin");
        form.onsubmit = myLoginfunction;
    }
    
}

function myLoginfunction() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var a =document.form["myLogin"]["password"].value;
    var b =document.form["myLogin"]["Retype Password"].value;
}