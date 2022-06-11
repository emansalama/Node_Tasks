const addForm = document.querySelector("#addForm")
const contentWrap= document.querySelector("#contentWrap")
const taskHeads = ["name", "phone", "age"]
// read from storage //union operator ||
const readFromStorage = (key) =>{
    let data 
    try{
       
        data = JSON.parse(localStorage.getItem(key))
        if(!Array.isArray(data)) throw new Error("is not array")
    }
    catch(e){
       
        data = []
    }
    return data
}
// write to storage
const writeDataToStorage = (key, value) =>{
    try{
        localStorage.setItem(key, JSON.stringify(value))
    }
    catch(e){
        localStorage.setItem(key, "[]")
    }
}
// add (create)
if(addForm){
    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        const task = { status: false, id: Date.now() }
        taskHeads.forEach( h => task[h] = addForm.elements[h].value )
        const allTasks = readFromStorage("tasks")
        allTasks.push(task)
        writeDataToStorage("tasks", allTasks)
        addForm.reset()
        window.location.href = "index.html"
    })    
}
const createMyOwnElement = (parent, ele, text, classes) =>{
    const myEle = document.createElement(ele)
    if(text) myEle.textContent = text
    if(classes) myEle.classList=classes
    parent.appendChild(myEle)
    return myEle
}

const showAll = (allData) =>{
    contentWrap.innerHTML=""
    if(allData.length==0){
        const tr = createMyOwnElement(contentWrap, "tr", null, "alert alert-danger")
        const td = createMyOwnElement(tr, "td", "No Data Yet", "alert alert-danger")
        td.setAttribute("colspan", "6")
    }
    allData.forEach((task, i)=>{
        const tr = createMyOwnElement(contentWrap, "tr", null, null)
        createMyOwnElement(tr, "td", task.id, null)
        createMyOwnElement(tr, "td", task.name, null)
        createMyOwnElement(tr, "td", task.phone, null)
        createMyOwnElement(tr, "td", task.age, null)

        const td = createMyOwnElement(tr, "td", null, null)
        const showBtn = createMyOwnElement(td, "button", "show","btn btn-primary mx-3")
        const editBtn = createMyOwnElement(td, "button", "Edit","btn btn-warning mx-3")
        const delBtn = createMyOwnElement(td, "button", "Delete","btn btn-danger mx-3")
        const td2 = createMyOwnElement(tr, "td", null, null)
        const statusBtn = createMyOwnElement(td2, "button", "active","btn btn-primary active mx-3")


        showBtn.addEventListener("click", function(e){
            window.alert(`${i}`)
        })     
        statusBtn.addEventListener("click", (e)=>{ 
            if(!task.status){
                statusBtn.classList="btn btn-danger";
                statusBtn.textContent="Inactivated"
                task.status=true;
                writeDataToStorage("tasks",allData)
            }
            else
           {
            statusBtn.classList="btn btn-success";
            statusBtn.textContent="Activated";
            task.status=false;
            writeDataToStorage("tasks",allData)
    
        
           }
               
            }) 
        delBtn.addEventListener("click", (e)=>{
            allData.splice(i, 1)
            writeDataToStorage("tasks",allData)
            showAll(allData)
        })   
    })
}
if(contentWrap){
    const allData = readFromStorage('tasks')    
    showAll(allData)
}


