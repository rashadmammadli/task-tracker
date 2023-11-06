const deleteIcon=document.querySelector(".task svg");
const taskMain=document.querySelector(".task-main")
deleteIcon.addEventListener("click",function (){
        this.parentElement.remove()
    })

const addButton=document.querySelector("button")
addButton.addEventListener("click", function(){
    if (taskMain.childElementCount==5){
        return;
    }
    const tasks=document.createElement("div")
    tasks.classList.add("task")
    tasks.innerHTML=`<p contenteditable=""></p>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
        <path d="M6 6L14 14" stroke="#C4C4C4"/>
        <path d="M6 14L14 6" stroke="#C4C4C4"/>
        </svg>`
        taskMain.append(tasks)
        const lastTaskSvg=document.querySelector(".task-main .task:last-child svg")
        lastTaskSvg.addEventListener("click",function(){
            this.parentElement.remove()
        })
        
})

const downSort=document.querySelector(".downArrow")
const upSort=document.querySelector(".upArrow")
downSort.addEventListener("click",function(){
    const tasks=document.querySelectorAll(".task")
    upSort.style.display="block"
    downSort.style.display="none"
    const taskList=[...tasks]
    taskList.sort((a,b)=>{
        let textA = a.innerText.toUpperCase();
        let textB = b.innerText.toUpperCase(); 
        if (textA < textB) {
            return -1;
        }
        if (textA > textB) {
            return 1;
        }

        return 0;
    })
    taskMain.replaceChildren(...taskMain.children,...taskList)
})
upSort.addEventListener("click",function(){
    const tasks=document.querySelectorAll(".task")
    downSort.style.display="block"
    upSort.style.display="none"
    const taskList=[...tasks]
    taskList.sort((a,b)=>{
        let textA = a.innerText.toUpperCase();
        let textB = b.innerText.toUpperCase(); 
        if (textA < textB) {
            return 1;
        }
        if (textA > textB) {
            return -1;
        }

        return 0;
    })
    taskMain.replaceChildren(...taskMain.children,...taskList)
})