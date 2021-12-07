//1
let a = 'block';
switch(a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default: console.log('other');
}
//2
let b = 'hidden';
b === 'hidden' ? b = 'visible' : b = 'hidden';
//3
let c = 3;
c === 0 ? c = 1 : c < 0 ? c = 'less then zero' : c * 10;