import { displayAll } from './wallFunction.js'

export default class Employee{
    constructor(id, firstName, lastName, email, post, office, department, phoneNumber, skypeID)
    {
        this.id = id
        this.firstName = firstName.toUpperCase()
        this.lastName = lastName.toUpperCase()
        this.prefferedName = this.firstName+" "+this.lastName
        this.email = email
        this.post = post
        this.office = office
        this.department = department
        this.phoneNumber = phoneNumber
        this.skypeID = skypeID
    }
}

function setLocalStorage(){
    if(localStorage.length === 0)
    {
        let empID = 1
        localStorage.setItem("empIdCount", JSON.stringify(empID))      
        
    }  
    if(localStorage.length === 1)
    {
        let employees = []
        localStorage.setItem("employees", JSON.stringify(employees))      
        
    }    
    if(localStorage.length === 2)
    {
        let departments = {
            "IT Department" : 0,
            "Human Resources" : 0,
            "MD" : 0,
            "Sales" : 0
        }
        localStorage.setItem("departments", JSON.stringify(departments))
    }
    if(localStorage.length === 3)
    {
        let offices = {
            "India" : 0,
            "Seattle" : 0
        }
        localStorage.setItem("offices", JSON.stringify(offices))
    }
}

let viewMore = document.getElementById("view-more")
let hiddenList = document.querySelector(".hidden-list")

viewMore.addEventListener("click", () => {
    if(hiddenList.style.display === "none")
    {
        hiddenList.style.display = "inline-block"
        viewMore.innerText = "view less"
    }
    else
    {
        hiddenList.style.display = "none"
        viewMore.innerText = "view more"
    }
    
})

setLocalStorage()
displayAll()