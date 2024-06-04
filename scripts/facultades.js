// Constructor
function Facultad(name, campus) {
    this.name = name;
    this.campus = campus;
}

// Validación
function isValid(unFacultad) {
    return unFacultad.name && unFacultad.campus;
}

// Registrar
function registerFacultad() {
    let inputName = document.getElementById("txtFacultad").value;
    let inputCampus = document.getElementById("txtCampus").value;

    let nuevaFacultad = new Facultad(inputName, inputCampus);
    
    if (isValid(nuevaFacultad)) {
        saveFacultadToDatabase(nuevaFacultad);
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function saveFacultadToDatabase(facultad) {
    $.ajax({
        url: "./app/rfacultades.php",
        method: "POST",
        data: {
            name: facultad.name,
            campus: facultad.campus
        },
        dataType: "json",
        success: function(response) {
            if (response.success) {
                alert("Gracias por ingresar una facultad");
                updateFacultadesList();
            } else {
                console.log("Error, por favor intente de nuevo");
            }
        },
        error: function(xhr, status, error) {
            console.log("Error de conexión");
        }
    });
}

function updateFacultadesList() {
    $.ajax({
        url: "./app/rfacultades.php",
        method: "GET",
        dataType: "json",
        success: function(response) {
            let selectFacultades = document.getElementById("txtFacultad");
            selectFacultades.innerHTML = '<option value="">Selecciona una Facultad</option>';
            response.forEach(facultad => {
                let option = document.createElement("option");
                option.text = facultad.name;
                option.value = facultad.name;
                selectFacultades.appendChild(option);
            });
        },
        error: function(xhr, status, error) {
            console.log("Error de conexión");
        }
    });
}
