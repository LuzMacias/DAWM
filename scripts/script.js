//variables
var studentName="Samantha";
let age=99.67;
const isStudent=false;

console.log(studentName);
console.log(age);
console.log(isStudent);

//arreglos
let students = ["Samantha", "Roberto", "Fabiola", "Sergio", "Rafael"];
console.log(students);


students.push("Fernanda", "Adrian"); //agregar item al arreglo
students[2]="Fabi";

students.pop(); //quita items del are3glo
students.splice(1,1); //quita item especifico
console.log(students);

//object literal

let student1 = {
    name:"Samantha",
    age:99,
    isStudent:false
}
let student2 = {
    name: "Robert",
    age:98,
    isStudent:false
}
console.log(student1,student2);

//object constructor

function Student(name,age,isStudent){
    this.name=name;
    this.age=age;
    this.isStudent=isStudent;
}

let student3 = new Student ("Fabiola", 97,false);
let student4 = new Student ("Sergio",96, true);
let student5 = new Student ("Fernanda",97,true);
console.log(student3,student4,student5);

//funtion

function saludar(){
    alert("Welcome");
}

function sumar(a,b){
    let total=(a+b);
    for(let i=0;i<total;i++){
        let j=i;
    }
    console.log(j);    
    return total;
}
function calcularTaxes(ingresos,egresos){
    let subtotal = ingresos-egresos;
    let total =subtotal*.02;
    document.write (`
    <p class="container"> Tus taxes son: $${total}<p>
    `);
}

calcularTaxes(sumar(100,200), sumar(10,8));
calcularTaxes(sumar(200,300),(sumar(50,30)));
 // [] {} ""