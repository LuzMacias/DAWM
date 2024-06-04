document.addEventListener("DOMContentLoaded", function() {
    updateFacultadesList();
});

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