var x = 10;
console.log(x);
var x = 100;
console.log(x);    
y = 1000; //변수의 호이스팅(hoisting)
console.log(y);

let a = 1;
//let a = 2; //에러!! let과 const는 더이상 이중선언을 허용하지 않음
b = 2;
console.log(b);

function displayNumber(){
    let z = 5;
    console.log(z)
    if(z > 10){
        let w;
        console.log("z는 두자리 숫자")
    }
}
displayNumber();

// let,const 정리
// 1.호이스팅된 변수의 선언에는 사용할 수 없음,
// why? let과 const가 블록스코프(제한된 스코프)를 가지므로 호이스팅된
//      최상위스코프를 가질 수 없기 때문

// 2.재선언 안됨
   let v1 = 100;
// let v1 = 100; // 재선언 에러

// 3.재할당은 let은 가능,const는 불가능
let v2 = 1;
v2 = 2;

const v3 = 1;
//v3 = 2; //에러, 재할당 불가능



