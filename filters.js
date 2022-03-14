//Imports
import { clearWall } from "./wallFunction.js"
import { addEmployeeHTML } from "./add-employee.js"

const alphabetSearch = document.querySelectorAll("[data-alphabet]")
export const departmentSearch = document.querySelectorAll("[data-department]")
export const officeSearch = document.querySelectorAll(["[data-office"])
const searchBarInput = document.querySelector('[data-search-field]')


//Search-bar name search


function searchInput(name){
    clearWall()
    let tempEmp = JSON.parse(localStorage.employees)
    tempEmp.forEach(emp => {
        if(emp.prefferedName.toLowerCase().includes(name))
        {
            addEmployeeHTML(emp)
        }
    })
}

searchBarInput.addEventListener('input', (e) => {
    // let f = document.getElementById('dropdown-button')
    // let filter = f.options[f.selectedIndex].text.toLowerCase()
    let input = e.target.value.toLowerCase()
    searchInput(input)
})
//Alphabet search

const searchByAlphabet = (alphabet) => {
    clearWall();
    JSON.parse(localStorage.getItem("employees")).forEach(employee => {
        if(employee.firstName[0] === alphabet)
        {
            addEmployeeHTML(employee)
        }
    })
}

alphabetSearch.forEach(button => {
    button.addEventListener('click', (alphabet) => {
        searchByAlphabet(alphabet.target.innerText)
    })
})

//Department Search and count


const searchByDepartment = (department) => {
    clearWall();
    let tempEmployees = JSON.parse(localStorage['employees'])
    tempEmployees.forEach(employee => {
        if(employee.department.slice(0,2) === department.slice(0,2)){
            addEmployeeHTML(employee)
        }
    })
}

departmentSearch.forEach(button => {
    button.addEventListener('click', (department) => {
        searchByDepartment(department.target.innerText)
    })
})

//Office Search and count


const searchByOffice = (office) => {
    clearWall();
    let tempEmployees = JSON.parse(localStorage['employees'])
    tempEmployees.forEach(employee => {
        if(employee.office.slice(0,3) === office.slice(0,3)){
            addEmployeeHTML(employee)
        }
    })
}

officeSearch.forEach(button => {
    button.addEventListener('click', (offce) => {
        searchByOffice(offce.target.innerText)
    })
})
