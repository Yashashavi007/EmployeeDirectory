//Display-employee-details
const close2 = document.querySelector('.close-2')

close2.addEventListener('click', () => {
    document.querySelector(".employee-window").style.display = "none"
})

function fillEmployeeWindow(emp){
    let  employeeWindow = document.querySelector(".employee-window")
    
    employeeWindow.getElementsByTagName("h2")[0].innerText = emp.prefferedName + " Details!!"
    document.getElementsByName("firstName")[0].value = emp.firstName
    document.getElementsByName("lastName")[0].value = emp.lastName
    document.getElementsByName("prefferedName")[0].value = emp.prefferedName
    document.getElementsByName("email")[0].value = emp.email
    document.getElementsByName("post")[0].value = emp.post
    document.getElementsByName("officeLocation")[0].value = emp.office
    document.getElementsByName("department")[0].value = emp.department
    document.getElementsByName("phoneNumber")[0].value = emp.phoneNumber
    document.getElementsByName("skypeID")[0].value = emp.skypeID

    employeeWindow.style.display = "flex"
}

function saveChanges(tempEmployee){
    let confirmButton = document.querySelector('.confirm-button')
    confirmButton.style.display = 'inline-block'

    let tempFirstName = document.getElementsByName("firstName")[0]
    let tempLastName = document.getElementsByName("lastName")[0]
    let tempPrefferedName = document.getElementsByName("prefferedName")[0]
    let tempEmail = document.getElementsByName("email")[0]
    let tempPhoneNumber = document.getElementsByName("phoneNumber")[0]
    let tempSkypeID = document.getElementsByName("skypeID")[0]

    tempFirstName.disabled = false;
    tempLastName.disabled = false;
    tempPrefferedName.disabled = false;
    tempEmail.disabled = false;
    tempPhoneNumber.disabled = false;
    tempSkypeID.disabled = false;

    let inputFields = document.querySelector(".employee-window").querySelectorAll('input')
    inputFields.forEach(elem => {
        if(elem.disabled === true)
        {
            elem.style.backgroundColor = "#dddedd"   
        }
        else{
            elem.style.border = "2px solid black";
            elem.style.borderRadius = "2px";
        }
    })   



    confirmButton.addEventListener('click', (event) => {
        event.preventDefault()
        let tempStorage = JSON.parse(localStorage.employees)
        tempStorage.forEach(emp => {

            if(emp.prefferedName.toLowerCase() === tempEmployee.prefferedName.toLowerCase())
            {
                emp.firstName = tempFirstName.value
                emp.lastName = tempLastName.value
                emp.prefferedName = tempPrefferedName.value
                emp.email = tempEmail.value
                emp.phoneNumber = tempPhoneNumber.value
                emp.skypeID = tempSkypeID.value
            }
        })
        localStorage.setItem('employees', JSON.stringify(tempStorage))
        confirmButton.style.display = 'none'
        makeEditable(tempEmployee.prefferedName)           
    })
}

function makeEditable(empName){
    let tempStorage = JSON.parse(localStorage.employees)
    let tempEmployee;

    tempStorage.forEach(emp => {
        if(emp.prefferedName.toLowerCase() === empName.toLowerCase())
        {
            tempEmployee = emp
        }
    })

    //Adds employee details to the display window
    fillEmployeeWindow(tempEmployee)

    let editButton = document.querySelector(".edit-button")
    if(editButton.style.display === 'none')
    {
        editButton.style.display = 'inline-block'
    }

    editButton.addEventListener('click', (event) => {
        event.preventDefault()
        editButton.style.display = 'none'
        saveChanges(tempEmployee)
    })
}


const employeeAccount = document.querySelectorAll(".employee-account")

employeeAccount.forEach(emp => {
    emp.addEventListener('click', () => {
        let empName = emp.querySelector('h6').innerText
        makeEditable(empName)
    })
    //console.log(emp.getElementsByTagName('h6')[0].innerText)
})



