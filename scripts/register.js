let students=[];

//consttuctor
function Student (name,age,genero,facultad,correo,contraseña,materia1,materia2,materia3){
    this.name=name;
    this.age=age;
    this.genero=genero;
    this.facultad=facultad;
    this.correo=correo;
    this.contraseña=contraseña;
    this.materia1=materia1;
    this.materia2=materia2;
    this.materia3=materia3;
}
//validacion{}
function isValid(unAlumno){
    let validacion = true;
    if(unAlumno.name==""){
        validacion = false;
    }
    if(unAlumno.age==""){
        validacion = false;
    }
    if(unAlumno.genero==""){
        validacion = false;
    }
    if(unAlumno.facultad==""){
        validacion = false;
    }
    if(unAlumno.correo==""){
        validacion = false;
    }
    if(unAlumno.contraseña==""){
        validacion = false;
    }
    if(unAlumno.materia1==""){
        validacion = false;
    }
    if(unAlumno.materia2==""){
        validacion = false;
    }
    if(unAlumno.materia3==""){
        validacion = false;
    }
    return validacion;
}

//registrar{}
function registrar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGenero = document.getElementById("txtGenero").value;
    let inputFacultad = document.getElementById("txtFacultad").value;
    let inputCorreo = document.getElementById("txtCorreo").value;
    let inputContraseña = document.getElementById("txtContraseña").value;
    let inputMateria1 = document.getElementById("txtMateria1").value;
    let inputMateria2 = document.getElementById("txtMateria2").value;
    let inputMateria3 = document.getElementById("txtMateria3").value;
    let nuevoAlumno = new Student(inputNombre,inputEdad,inputGenero,inputFacultad,inputCorreo,inputContraseña,inputMateria1,inputMateria2,inputMateria3);
  if(isValid(nuevoAlumno)){
      students.push(nuevoAlumno);
   console.log(students);
}
else{
    alert("Por favor de ingresar la informaciòn");
} 
}
function init (){
        let student1 = new Student("Samuel",99);
        students.push(student1);

}
window.onload=init;// espera a renderizar el HTML