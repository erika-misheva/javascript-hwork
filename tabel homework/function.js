let newTableBody = document.getElementById("tableBody");
console.log(newTableBody);


function createTable(row, column) {
    console.log(row, column);

    for (let i = 0; i < row; i++) {

        let tds = '';
        for (let j = 0; j < column; j++) {
            tds += `<td> I am the ${j + 1} column of the ${i + 1}row</td>`;
        }
        
        newTableBody.innerHTML += `<tr> ${tds} </tr>`;
    }

}
let rowNumber = parseInt(prompt("Enter how many row should have the table:"));
let columnNumber = parseInt(prompt("Enter how many columns should have the table:"));
createTable(rowNumber, columnNumber);
