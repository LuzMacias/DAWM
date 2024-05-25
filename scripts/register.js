let students = [];

//constuctor
function Student(name, age, genero, facultad, correo, contraseña, materia1, materia2, materia3) {
    this.name = name;
    this.age = age;
    this.genero = genero;
    this.facultad = facultad;
    this.correo = correo;
    this.contraseña = contraseña;
    this.materia1 = materia1;
    this.materia2 = materia2;
    this.materia3 = materia3;
}
//validacion{}
function isValid(unAlumno) {
    let validacion = true;
    if (unAlumno.name == "") {
        validacion = false;
    }
    if (unAlumno.age == "") {
        validacion = false;
    }
    if (unAlumno.genero == "") {
        validacion = false;
    }
    if (unAlumno.facultad == "") {
        validacion = false;
    }
    if (unAlumno.correo == "") {
        validacion = false;
    }
    if (unAlumno.contraseña == "") {
        validacion = false;
    }
    if (unAlumno.materia1 == "") {
        validacion = false;
    }
    if (unAlumno.materia2 == "") {
        validacion = false;
    }
    if (unAlumno.materia3 == "") {
        validacion = false;
    }
    return validacion;
}
// Obtener las facultades del localStorage cuando el DOM esté completamente cargado
//document.addEventListener("DOMContentLoaded", function() {
  //  let selectFacultades = document.getElementById("facultad");
    //let facultadesGuardadas = JSON.parse(localStorage.getItem("facultades"));

//    if (facultadesGuardadas) {
  //      facultadesGuardadas.forEach(facultad => {
      //      let option = document.createElement("option");
    //        option.text = facultad.name;
        //    option.value = facultad.name;
          //  selectFacultades.appendChild(option);
        //  });
  //  }
// });

//registrar{}
function registrar() {
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGenero = document.getElementById("txtGenero").value;
    let inputFacultad = document.getElementById("txtFacultad").value;
    let inputCorreo = document.getElementById("txtCorreo").value;
    let inputContraseña = document.getElementById("txtContraseña").value;
    let inputMateria1 = document.getElementById("txtMateria1").value;
    let inputMateria2 = document.getElementById("txtMateria2").value;
    let inputMateria3 = document.getElementById("txtMateria3").value;

    let nuevoAlumno = new Student(inputNombre, inputEdad, inputGenero, inputFacultad, inputCorreo, inputContraseña, inputMateria1, inputMateria2, inputMateria3);
    if (isValid(nuevoAlumno)) {
//        students.push(nuevoAlumno);
    //    console.log(students);
        insertToDataBase(nuevoAlumno);
        //displayCards();
        //displayTable();
    }
    else {
        alert("Por favor de ingresar la informaciòn");
    }
}
function insertToDataBase(newStudent){
    $.ajax({
        url:"./app/register.php",
        method:"POST",
        data:{
            name:newStudent.name,
            age:newStudent.age,
            facultad:newStudent.facultad,
            genero:newStudent.genero,
            facultad:newStudent.facultad,
            correo:newStudent.correo,
            contraseña:newStudent.contraseña,
            materia1:newStudent.materia1,
            materia2:newStudent.materia2,
            materia3:newStudent.materia3

        },
        dataType:"json",
        success:function(response){
            
            if(response.success){
                console.log(response);
                setTimeout(function(){
                    location.reload();
                },1000);
            }else{
                console.log("Error, por favor intente de nuevo");

            }

        },
        error:function(xhr,status,error){
            console.log("Error de conexion");
            //console.error(error);

        }
    });
}

//function init() {
    //let student1 = new Student("Samuel", 99,"Masculino","Ingenieria","sam_2@uabc.edu.mx","10",10,10,10);
    //students.push(student1);
   // displayCards();
    //displayTable();
//}
//window.onload = init;// espera a renderizar el HTML