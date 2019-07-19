"use strict";

let students = [];
let tableItems = "";
let input = document.getElementsByClassName("table-input");


function Student(name, surname, email, phone, age) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.age = age;
    // this.info = function() {
    // return this.name + " " + this.surname + " " + this.email + " " + this.phone + " " + this.age; 
    // }
}


function takeInputValues() {
    if (input[0].value && input[1].value && input[2].value && input[3].value && input[4].value)
{
    let studenttext = new Student(input[0].value, input[1].value, input[2].value, input[3].value, input[4].value);
    students.push(studenttext);
    students.forEach(generateTableItems);
    document.getElementsByClassName("student-table")[0].innerHTML = tableItems;
    tableItems = "";
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
    input[3].value = "";
    input[4].value = "";
} else {
  document.getElementsByClassName("forp")[0].innerHTML="PLEASE FILL ALL INPUTS";
}
  

}

function sortByName () {
    student.name.sort();
}
function generateTableItems(val) {
    tableItems += `<tr><td>${val.name}</td><td>${val.surname}</td><td>${val.email}</td><td>${val.phone}</td><td>${val.age}</td></tr>`;
}
