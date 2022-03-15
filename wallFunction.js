//Imports
import { employeeWall, addEmployeeHTML } from "./add-employee.js"
import { departmentSearch, officeSearch } from "./filters.js"

const clearButton = document.querySelector("#clear-button")
const employeeBook = document.querySelector("#contact")


//Display All
const setDepartmentHtml = (department, tempDepartments) => {
    let count = tempDepartments[department]
    departmentSearch.forEach( element => {
        if(element.innerText.slice(0,2) === department.slice(0,2)){
            if(tempDepartments[department] === 0)
            {
                return
            }
            else if(element.innerText.includes('(') === false)
            {
                element.innerText += "("+(count)+")"
            }
            else{
                let pos = element.innerText.indexOf('(')
                let modifiedText = element.innerText.slice(0,pos+1) + count + ")"
                element.innerText = modifiedText
            }
        }
    })
}

export const setDepartmentCount = (department) => {
    let tempDepartment = JSON.parse(localStorage.departments)
    setDepartmentHtml(department, tempDepartment)
}

const setOfficeHtml = (office, tempOffices) => {
    let count = tempOffices[office]
    officeSearch.forEach( element => {
        if(element.innerText.slice(0,3) === office.slice(0,3)){
            if(tempOffices[office] === 0)
            {
                return
            }
            else if(element.innerText.includes('(') === false)
            {
                element.innerText += "("+(count)+")"
            }
            else{
                let pos = element.innerText.indexOf('(')
                let modifiedText = element.innerText.slice(0,pos+1) + count + ")"
                element.innerText = modifiedText
            }
           
        }
    })
}

export const setOfficeCount = (office) => {
    let tempOffices = JSON.parse(localStorage.offices)
    setOfficeHtml(office, tempOffices)
}

function displayDepartmentFilter(){
    let temp = Object.keys(JSON.parse(localStorage["departments"]))
    temp.forEach(department => {
        setDepartmentCount(department)
    })
}

function displayOfficeFilter(){
    let temp = Object.keys(JSON.parse(localStorage.offices))
    temp.forEach(office => {
        setOfficeCount(office)
    })
}

export function clearWall(){
    employeeWall.innerHTML = ''
    document.querySelector('[data-search-field]').innerText = ''
}

function displayWall(){
    let tempEmp = JSON.parse(localStorage.employees)
    tempEmp.forEach(employee => {
        addEmployeeHTML(employee)
    })
}

export function displayAll(){
    clearWall()
    displayWall()
    displayDepartmentFilter()
    displayOfficeFilter()
}

//Clear filter
clearButton.addEventListener('click', () => {
    document.querySelector("[data-search-field]").value = ''
    clearWall()
    displayAll()
})

employeeBook.addEventListener('click', () => {
    displayAll()
})  
