function displayCards(){
let card="";
  for(let i=0;i<students.length;i++){
    let student=students[i];
    card+=`
    <div class='student'>
    <p> Nombre: ${student.name} </p>
    <p> Edad: ${student.age}</p>
    <p> Genero: ${student.genero}</p>
    <p> Facultad: ${student.facultad}</p>
    <p> Correo: ${student.correo}</p>
   
    <p> Materia 1: ${student.materia1}</p>
    <p> Materia 2: ${student.materia2}</p>
    <p> Materia 3: ${student.materia3}</p>
    <button>Eliminar</button>
    </div>
    `;
}
document.getElementById("studentList").innerHTML=card;
}
function displayTable(){
  let tabla="";

  for(let i=0;i<students.length;i++){
    let student=students[i];
    tabla+=`
  <table class='student'>
    <tr>
    <td>Nombre:</td> 
    <td>${student.name}</td>
    </tr>
    <tr>
    <td>Edad:</td>
    <td>${student.age}</td>
    </tr>
    <tr>
    <td>Genero:</td>
    <td>${student.genero}</td>
    </tr>
    <tr>
    <td>Facultad:</td> 
    <td>${student.facultad}</td>
    </tr>
    <tr>
    <td>Correo:</td> 
    <td>${student.correo}</td>
    </tr>    <tr>
    <td>Materia 1:</td> 
    <td>${student.materia1}</td>
    </tr>
    <tr>
    <td>Materia 2:</td> 
    <td>${student.materia2}</td>
    </tr>
    <tr>
    <td>Materia 3:</td>
    <td>${student.materia3}</td>
    </tr>
    </table>
    `;
  }

  document.getElementById("studentTable").innerHTML=tabla; 
  } 
