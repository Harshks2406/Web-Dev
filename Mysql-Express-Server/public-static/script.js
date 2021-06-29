$(function(){
    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_city = $('#city')
    let btn_submit = $('#submit') 
    let tbl_person = $('#persons')

    function refreshPersonTable(persons){
        tbl_person.empty()
        tbl_person.append(
            `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <tr>`
        )
        for(person of persons){
            tbl_person.append(
                `<tr>
            <td>${peron.name}</td>
            <td>${person.age}</td>
            <td>${person.city}</td>
            <tr>`
            )
        }
    }
    $.get('/api/persons', function(data){
        refreshPersonTable(data)
    })


    btn_submit.click(function(){
        $.post('/api/persons',{
            name: inp_name.val(),
            age: inp_age.val(),
            city: inp_city.val()
        },function(data){
            refreshPersonTable(data)
        })
    })
})