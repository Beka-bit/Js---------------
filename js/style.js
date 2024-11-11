// Бірінші тапсырма
let san = +prompt("1 ден 12 ге диін сан таңдаңыз")
let ai;
switch(san){
    case 3:
    case 4:
    case 5:
        ai='Spring';
        break;
     case 6:
     case 7:
     case 8:
        ai='Summer';
        break;
    case 9:
    case 10:
    case 11:
        ai='Autom';
        break;
    case 12:
    case 1:
    case 2:
        ai='Winter';
        break;
    default:
        alert('Сіз санды қатe тердіңіз');
        break;
}

alert("Ай: " + san +  " Маусым: " + ai);


//Екінші тапсырма
// let a = +prompt("A sanyn engiz")
// let b = +prompt("B sanyn engiz")
// if (a > b) {
//     alert("a sany b sanynan ulken")
// }
// if (a < b){
//     alert("a sany b sanynan kishi")
// }
// else if(a = b){
//     alert("a sany b sanuna ten")
// }

// alert("a sanumen b sanunun ortasy: " + (+a + +b) /2)



//Үшінші тапсырма
// let san1 = +prompt("Бірінші санды іңгіз")
// let san2 = +prompt("Екінші санды іңгіз")
// let san3 = +prompt("Үшінші санды іңгіз")

// let smoll;
// let big;

// if (san1<san2 && san1<san3) {
//     smoll = san1
// }if(san1>san2 && san1>san3){
//     big = san1
// }if(san2>san1 && san2>san3){
//     big = san2
// }if(san2<san1 && san2<san3){
//     smoll = san2
// }if(san3>san1 && san3>san2){
//     big = san3
// }if(san3<san1 && san3<san2){
//     smoll = san3
// }
// alert("Ең үлкен санмен кіші санның айырмасы: " + (big-smoll))