let students = [];

// Constructor
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

// Validación
function isValid(unAlumno) {
    let validacion = true;
    if (unAlumno.name == "" || unAlumno.age == "" || unAlumno.genero == "" || unAlumno.facultad == "" || unAlumno.correo == "" || unAlumno.contraseña == "" || unAlumno.materia1 == "" || unAlumno.materia2 == "" || unAlumno.materia3 == "") {
        validacion = false;
    }
    return validacion;
}

// Registrar
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
        insertToDataBase(nuevoAlumno);
    } else {
        alert("Por favor de ingresar la información");
    }
}

function insertToDataBase(newStudent) {
    $.ajax({
        url: "./app/register.php",
        method: "POST",
        data: {
            name: newStudent.name,
            age: newStudent.age,
            facultad: newStudent.facultad,
            genero: newStudent.genero,
            correo: newStudent.correo,
            contraseña: newStudent.contraseña,
            materia1: newStudent.materia1,
            materia2: newStudent.materia2,
            materia3: newStudent.materia3
        },
        dataType: "json",
        success: function(response) {
            if (response.success) {
                console.log(response);
                setTimeout(function() {
                    if (confirm("FELICIDADES HAS SIDO REGISTRADA (O)\n¿Deseas ver tu registro?")) {
                        window.location.href = "usuarios.html";
                    } else {
                        // Permanecer en registro.html
                        location.reload();
                    }
                }, 1000);
            } else {
                console.log("Error, por favor intente de nuevo");

            }
        }
        ,

        error: function(xhr, status, error) {
            console.log("Error de conexion");
            //console.error(error);
            
        }
    });
}

function togglePassword() {
    const passwordField = document.getElementById('txtContraseña');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    const button = event.target;
    button.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
}

