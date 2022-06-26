/*
Add Item
1. Will take the value from input box
2. store it in local storage
3. show it in pending tasks list
*/
const addItem = () => {
    console.log('adding item')
}

/*
Edit Item
1. Edit items in pending tasks
2. it will change to an input box
*/
const editItem = () => {
    console.log('edit item')
}

/*
Save Task Item
1. it will save the edited task from Pending tasks
*/
const saveItem = () => {
    console.log('save item')
}

/*
Delete Item
1. Delete items in completed tasks
2. it will remove the task from completed tasks
3. it will remove the task from localstorage
*/
const delItem = () => {
    console.log('delete item')
}

/*
Complete Task Item
1. it will remove the task from Pending tasks
2. it will add the task to completed task
*/
const closeItem = () => {
    console.log('close item')
}

const pendingData = document.getElementById('pending-tasks')

console.log(pendingData)