//here I'm targeting the table body so I can add input fields with both Add+ buttons
const inputFields = document.getElementById("inputFields")


//I'm confirming if the html elements are inside the variables
console.log(inputFields)


//below is a function that will repeat
function addIncomeInput() {
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    newCell.innerHTML =
        `<input type="text" id="income-description" name="income-description"
                            placeholder="Name your income">
                        <input type="text" id="income-number" name="income-number" placeholder="type the amount">`
    newRow.appendChild(newCell)
    inputFields.appendChild(newRow)
}

function addExpenseInput() {
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    newCell.innerHTML = `
        <input type="text" id="expenses-description" name="expenses-description"
        placeholder="Name your expense">
    <input type="text" id="expenses-number" name="expenses-number" placeholder="type the amount">`
    // newCell.style = (<i class="material-icons" style="font-size:48px;color:red">delete</i>)
    newRow.appendChild(newCell)
    inputFields.appendChild(newRow)
}







