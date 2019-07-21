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
  if (input[0].value && input[1].value && input[2].value && input[3].value && input[4].value) {
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
    document.getElementsByClassName("forp")[0].innerHTML = "PLEASE FILL ALL INPUTS";
  }
}

function sortByName() {
  students.sort(function (a, b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
  // students.sort((a, b) => (a.name > b.name) ? 1 : -1);
  displayNames();
}

function displayNames() {
  let cells = "";
  for (let i = 0; i < students.length; i++) {
    cells += `<tr><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].email}</td><td>${students[i].phone}</td><td>${students[i].age}</td></tr>`;
  }
  document.getElementsByClassName("student-table")[0].innerHTML = cells;
}

function sortBySurname() {
  students.sort(function (a, b) {
    var x = a.surname.toLowerCase();
    var y = b.surname.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
  displaySurnames();
}
function displaySurnames() {
  let cells = "";
  for (let i = 0; i < students.length; i++) {
    cells += `<tr><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].email}</td><td>${students[i].phone}</td><td>${students[i].age}</td></tr>`;
  }
  document.getElementsByClassName("student-table")[0].innerHTML = cells;
}

function sortByEmail() {
  students.sort(function (a, b) {
    var x = a.email.toLowerCase();
    var y = b.email.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
  displayEmails();
}

function displayEmails() {
  let cells = "";
  for (let i = 0; i < students.length; i++) {
    cells += `<tr><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].email}</td><td>${students[i].phone}</td><td>${students[i].age}</td></tr>`;
  }
  document.getElementsByClassName("student-table")[0].innerHTML = cells;
}

function sortByPhone() {
  students.sort(function (a, b) {
    return a.phone - b.phone
  });
  displayPhones();
}

function displayPhones() {
  let cells = "";
  for (let i = 0; i < students.length; i++) {
    cells += `<tr><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].email}</td><td>${students[i].phone}</td><td>${students[i].age}</td></tr>`;
  }
  document.getElementsByClassName("student-table")[0].innerHTML = cells;
}


function sortByAge() {
  students.sort(function (a, b) {
    return a.age - b.age
  });
  displayAges();
}

function displayAges() {
  let cells = "";
  for (let i = 0; i < students.length; i++) {
    cells += `<tr><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].email}</td><td>${students[i].phone}</td><td>${students[i].age}</td></tr>`;
  }
  document.getElementsByClassName("student-table")[0].innerHTML = cells;
}

function randomly() {
  students.sort(function(a, b){return 0.5 - Math.random()});
  displayAll();
}

function displayAll() {
    let cells = "";
  for (let i = 0; i < students.length; i++) {
    cells += `<tr><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].email}</td><td>${students[i].phone}</td><td>${students[i].age}</td></tr>`;
  }
  document.getElementsByClassName("student-table")[0].innerHTML = cells;
}

function generateTableItems(val) {
  tableItems += `<tr><td>${val.name}</td><td>${val.surname}</td><td>${val.email}</td><td>${val.phone}</td><td>${val.age}</td></tr>`;
}
