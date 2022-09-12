let value=parseInt(prompt('Nhập số'));
switch (value){
    case 0:
        alert(0);
        break;
    case !0:
        alert(1);
        break;
    default:
        alert(-1)
}