const taskName = document.querySelector('#newtask input').value


document.querySelector('#add').onclick = function () {

    if(document.querySelector('#newtask input').value.length === 0) {
        alert('add task please')
    } else {
        document.querySelector('#tasks').innerHTML += 
        `
        <div class='task'>
            <h4 id=taskname>
                ${document.querySelector('#newtask input').value}
            </h4>
            <button class='del'>
                Delete
            </button>
        </div>
        `
    document.querySelector('#newtask input').value = ''
        const currTasks = document.querySelectorAll('.del')
        
        for (let i = 0; i < currTasks.length; i++) {
            currTasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }
    }



    
}