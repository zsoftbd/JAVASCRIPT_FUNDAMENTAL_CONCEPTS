function myfunc(){
        console.log('hey this my function')
        console.log('hay i m learning funcation')

}
myfunc();


function doubleIt(num){
    return num*3;
}
console.log(doubleIt(10))


function leapYear(year){
    if(year%4 == 0 && year%400 != 0){
        console.log(`${year} is leap year`)
    }else{
        console.log(`${year} is not leap year`)
    }
}
leapYear(2024)