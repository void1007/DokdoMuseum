//객체의 배열
const persons = [
    {name: " Michael",age:"19",gender:"male",job:"student"},
    {name: " john",age:"28",gender:"male",job:"engineer"},
    {name: " Ellen",age:"22",gender:"female",job:"programmer"},
    {name: " Sarah",age:"27",gender:"female",job:"lawyer"},
]

console.log(persons[0].name);
console.log(persons[1].job);

//Destructuring 구조분해할당
//배열 또는 객체의 내부아이템을 분해해서 새로운 변수에 할당하는 간편한 방법
const[마이클, 존, 엘렌, 사라] = persons;
console.log(마이클);
const {name, age, gender, job} = 마이클;
console.log(name,age,gender,job);

const nums = [1,2,3,4,5,6,7,8,9];
//filter
//조건에 맞는 데이터만 새로운 배열에 압는다
//특징: 데이터는 그대로, 새로운 배열의 length는 달라질 수 있음

const array1 = nums.filter((num)=>num>5);
console.log(array1);

//map
//데이터를 조작하여 새로운 배열에 담는다
//특징:데이터는 변경, 새로운 배열의 length는 반드시 동일
const array2 = nums.map((num)=>num*10);
console.log(array2);

const jobArray = persons.map((p) => p.job);
console.log(jobArray);

const femaleJobs = persons.filter((p)=>p.gender=="female").map((p)=>p.job);
console.log(femaleJobs);