let value=parseInt(prompt('Nhập số'));
tuyetdoi=Math.abs(value);
number=value/tuyetdoi;
switch (number){
    case 1:
        alert(1);
        break;
    case -1:
        alert(-1);
        break;
    default:
        alert(0);
}