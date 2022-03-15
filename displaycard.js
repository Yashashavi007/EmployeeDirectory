const close2 = document.querySelector('.close-2')
const employeeAccount = document.querySelectorAll(".employee-account")
const editButton = document.querySelector("#edit-button")
const confirmButton = document.querySelector("#confirm-button")
const  employeeWindow = document.querySelector(".employee-window")
const inputFields = employeeWindow.querySelectorAll('input')

//employee-details
let fname = document.getElementsByName("firstName")[0]
let lname = document.getElementsByName("lastName")[0]
let pname = document.getElementsByName("prefferedName")[0]
let email = document.getElementsByName("email")[0]
let phone = document.getElementsByName("phoneNumber")[0]
let skype = document.getElementsByName("skypeID")[0]


close2.addEventListener('click', () => {
    document.querySelector(".employee-window").style.display = "none"
})

function getId(name){
    let tempEmployees = JSON.parse(localStorage.employees)
    let tempId

    tempEmployees.forEach(emp => {
        if(emp.prefferedName === name)
        {
            tempId =  emp.id
        }
    })
    return tempId
}

function getEmployee(name){
    let tempEmployees = JSON.parse(localStorage.employees)
    let tempEmp

    tempEmployees.forEach(emp => {
        if(emp.prefferedName === name)
        {
            tempEmp =  emp
        }
    })
    return tempEmp
}

function makeUneditable(){
    inputFields.forEach(input => {
        input.style.border = "0"
        if((input.name === 'post' || input.name === 'officeLocation' || input.name === 'department') && input.disabled === false)
        {
            input.disabled = true
        }
    })

    fname.disabled = true
    lname.disabled = true
    pname.disabled = true
    email.disabled = true
    phone.disabled = true
    skype.disabled = true
}

function fillEmployeeWindow(emp){      
    employeeWindow.getElementsByTagName("h2")[0].innerText = emp.prefferedName + " Details!!"
    fname.value = emp.firstName
    lname.value = emp.lastName
    pname.value = emp.prefferedName
    email.value = emp.email
    document.getElementsByName("post")[0].value = emp.post
    document.getElementsByName("officeLocation")[0].value = emp.office
    document.getElementsByName("department")[0].value = emp.department
    phone.value = emp.phoneNumber
    skype.value = emp.skypeID

    employeeWindow.style.display = "flex"
}

function saveChanges(employee, id){
    confirmButton.style.display = "inline-block"
    let tempEmployees = JSON.parse(localStorage.employees)

    confirmButton.addEventListener('click', (event) => {
        event.preventDefault()
        let tempE
        tempEmployees.forEach(emp => {
            if(emp.id === id)
            {
                tempE = emp
                emp.firstName = fname.value
                emp.lastName = lname.value
                emp.prefferedName = pname.value
                emp.email = email.value
                emp.phoneNumber = phone.value
                emp.skypeID = skype.value
            }
        })
        localStorage.setItem('employees',JSON.stringify(tempEmployees))
        fillEmployeeWindow(tempE)
        makeUneditable()
        confirmButton.style.display = "none"
        editButton.style.display = "inline-block"
    })

    
}

function makeEditable(){
    fname.disabled = false
    lname.disabled = false
    pname.disabled = false
    email.disabled = false
    phone.disabled = false
    skype.disabled = false

    inputFields.forEach(input => {
        input.style.borderRadius = "5px";
        if(input.disabled === false)
        {
            input.style.border = "2px solid black"
        }
        else if(input.name === 'post' || input.name === 'officeLocation' || input.name === 'department')
        {
            input.style.border = "2px solid red"
        }
    })
}

function showDetails(empName){
    let employee = getEmployee(empName)
    let empId = getId(empName)

    fillEmployeeWindow(employee)

    editButton.addEventListener('click', (event) => {
        event.preventDefault()
        editButton.style.display = 'none'
        makeEditable()
        saveChanges(employee,empId)
    })
}

employeeAccount.forEach(emp => {
    emp.addEventListener('click', () => {
        let empName = emp.querySelector('h6').innerText
        showDetails(empName)
    })
})



