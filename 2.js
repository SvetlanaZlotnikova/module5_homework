Задание 2

let x = 1;

switch (x) {
case 1:
     console.log('x - число');
break;
case "":
     console.log('x - строка');
break;
case true || false:
     console.log('x - логический тип');
break;
default:
     console.log('Тип x не определён');
}