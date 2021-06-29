let listTask = $('#listTask')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let newTask = $('#newTask')
let btnSort = $('#btnSort')
let btnClear = $('#btnClear')

function addItem(){
    let listItem = $('<li>',{
        'class' : 'list-group-item', text : newTask.val()
    })
    listTask.append(listItem)
    newTask.val('')  
    toggleBtn()  

    listItem.click(() =>{
        listItem.toggleClass('done')
    })
}

function remove(){
    newTask.val('')
    toggleBtn()
}

function sort(){
    $('#listTask .done').appendTo(listTask)
}

function clean(){
    $('#listTask .done').remove()
    toggleBtn()
}

function toggleBtn(){
   btnAdd.prop('disabled',newTask.val() == '')
   btnReset.prop('disabled',newTask.val() == '')
   btnSort.prop('disabled',listTask.children().length<1)
   btnClear.prop('disabled',listTask.children().length<1)
}

newTask.on('input',()=>{
    toggleBtn()
})

btnAdd.click(addItem)

newTask.keypress((e)=>{
    if(e.which == 13){
        addItem()
    }
})

btnReset.click(remove)
btnSort.click(sort)
btnClear.click(clean)
