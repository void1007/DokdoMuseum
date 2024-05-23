function getName(a,b,c){
    const name = a;
    const age = b;
    const gender = c;
    const value = name + " "+ age + " "+ gender;
    return value;
}
const value = getName("Tom" , 25 , "Man");
console.log(value)

function isEven(input){
    const value = input % 2;
    if(value > 0){
        return false
    }else{
        return true;
    }
}

console.log(isEven(3));
console.log(isEven(4));

function getDevice(size){
    let deviceName;
    if(size < 400){
        deviceName = "모바일";
    }else if (size >= 400 && size < 800){
        deviceName = "태블릿"
    }else if(size >= 800){
        deviceName = "PC";
    }
    return deviceName;
}

console.log(getDevice(399));
console.log(getDevice(1920));

// const isPositive = (num) => {
//     if(num > 0){
//         return true;
//     }else{
//         return false;
//     }
// };
const isPositive = num => num > 0;
console.log(isPositive(100));

const getMaxNumber = (x,y) => {
    if(x > y){
        return x;
    }
    else{
        return y;
    }
}
console.log(getMaxNumber(5,6));

const 입장확인 = (나이) =>{
    const 제한나이 = 29;
    if(나이 <= 제한나이){
        return true
    }else{
        return false;
    }
};
console.log(입장확인(25));
console.log(입장확인(30));

let fruits = ["사과","바나나","배","딸기","메론","망고","키위"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

//splice
//삭제,splice(시작인덱스, 갯수)
//원본을 수정함
const 삭제아이템 = fruits.splice(3,2,"구아바");
console.log(fruits);
console.log(삭제아이템);

let colors = ["red","blue","yellow","green","white","pink"];
//slice
//선택담기, slice(시작인덱스, 끝인덱스)
//원본보존!!
const newColors = colors.slice(1,4);
console.log(colors);
console.log(newColors);

//indexOf
const index = colors.indexOf("blue");
console.log(index);
console.log(colors.indexOf("black")); // 없을때는 -1리턴

//includes
const isIncludes = colors.includes("green");
console.log(isIncludes);
console.log(colors.includes("black"));

// forEach
// 배열에 사용하는 반복문
// forEach(아이템,인덱스,원본배열)
colors.forEach((color,index,array)=>{
    console.log("첫번째 매개변수",color);
    console.log("두번째 매개변수",index);
    console.log("세번째 매개변수",array);
})