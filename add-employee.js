//Imports
import { setDepartmentCount, setOfficeCount } from "./wallFunction.js"
import Employee from "./startup.js"

const addButton = document.querySelector("#add-button")
const closeButton = document.querySelector(".close")
const submitButton = document.querySelector("#submit-button")
const employeeForm = document.querySelector(".employee-form")
const addEmployeeForm = document.querySelector('#add-employee-form')
const successMessage = document.querySelector(".success-message")
export const employeeWall = document.querySelector(".employee-wall")

export function addEmployeeHTML(employee){
    let employeeCardHTML = `
                <div class="employee-account">
                    <div class="employee-dp">
                        <img src="Images/display-picture.png" alt="Employee-DP">
                    </div>
                    <div class="employee-details">
                        <h6>${employee.prefferedName}</h6>
                        <p class="post">${employee.post}</p>
                        <p class="department">${employee.department}</p>
                        <div class="icon">
                            <img src="Images/phone.png" alt="phone-icon">
                            <img src="Images/message.png" alt="message-icon">
                            <img src="Images/chat.png" alt="chat-icon">
                            <img src="Images/star.png" alt="star-icon">
                            <img src="Images/heart.png" alt="heart-icon">
                        </div>
                    </div>
                </div>`

    employeeWall.innerHTML += employeeCardHTML    
}

function addEmployee(){
    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value
    let email = document.getElementById('email').value

    let p = document.getElementById('post')
    let post = p.options[p.selectedIndex].text

    let office = document.querySelector('input[name=office]:checked').value

    let d = document.getElementById('department')
    let department = d.options[d.selectedIndex].text

    let phoneNumber = document.getElementById('phone').value
    let skypeID = document.getElementById('skype').value

    let empId = JSON.parse(localStorage.empIdCount)

    let tempEmployees = JSON.parse(localStorage.employees)
    let employee = new Employee(empId, firstName, lastName, email, post, office, department, phoneNumber, skypeID)
    tempEmployees.push(employee)

    empId += 1
    localStorage.setItem('empIdCount', JSON.stringify(empId))
    localStorage.setItem('employees', JSON.stringify(tempEmployees))

    let tempDepartment = JSON.parse(localStorage.departments)
    tempDepartment[department] += 1
    localStorage.setItem('departments', JSON.stringify(tempDepartment))

    let tempOffice = JSON.parse(localStorage.offices)
    tempOffice[office] += 1
    localStorage.setItem('offices', JSON.stringify(tempOffice))

    addEmployeeHTML(employee)
    setDepartmentCount(department)
    setOfficeCount(office)
}

addButton.addEventListener('click', () => {
    employeeForm.style.display = "flex"
})

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    addEmployee()
    addEmployeeForm.reset()
    successMessage.style.display = "flex"
})

closeButton.addEventListener('click', () => {
    employeeForm.style.display = "none"
    successMessage.style.display = "none"
    location.reload()
})

