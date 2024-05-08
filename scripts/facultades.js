
//constructor
function Facultades(name,campus){
    this.name=name;
    this.campus=campus;
}

//valudacion
function isValid(unAlumno){
    let validacion = true;
    if(unAlumno.name==""){
        validacion = false;
    }
    if(unAlumno.campus==""){
        validacion = false;
    }
    return validacion;
}
//register
function register(){
    let inputName = document.getElementById("txtFacultad").value;
    let inputCampus = document.getElementById("txtCampus").value;    

    let nuevaFacultad = new Facultades(inputName,inputCampus);
    console.log(nuevaFacultad);
if(isValid(nuevaFacultad)){
   
}
else{
  alert("Por favor de ingresar la informaciòn");
}
}