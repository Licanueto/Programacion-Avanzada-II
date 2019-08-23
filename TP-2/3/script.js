function insertRow(){
    var tableBody = document.getElementById("myTableBody");
    tableBody.insertAdjacentHTML('beforeend','<tr name="info"><td>hola</td><td>hola</td></tr>');
    
}

function deleteRow(){
    var tableRow = document.getElementsByName("info"); 
    var tableBody = document.getElementById("myTableBody");
    tableBody.removeChild(tableRow[tableRow.length-1])
    
}