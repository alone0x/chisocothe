function tcsk() {
    ChieuCao = parseFloat(prompt("nhập chiều cao vào !(cm)" ))/100;
    CanNang = parseInt(prompt("nhập cân nặng vào !(kg)"));

    ChiSo = CanNang/(ChieuCao*ChieuCao)    ;


}
function phanloai() {
    if(ChiSo >= 30 ){
        alert("Obese");
    }else if(ChiSo >=25){
        alert("Overweight  ");
    }else if(ChiSo >= 18.5){
        alert("nomal");
    }else {
        alert("underweight");
    }

}
tcsk();
phanloai();
