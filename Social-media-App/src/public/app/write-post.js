

    titleId = $('#title')
    bodyId = $('#body')
    userId = currentUser.id

    $('#button').click(()=>{
        title = titleId.val().toString()
        body = bodyId.val().toString()
        console.log(userId,title,body)
        $.post('/api/posts',{userId,title,body},(post)=>{
            if(post){
                console.log(post)
                window.alert("Post has been added succesfully!")
            }
            else{
                window.alert("Post can not be uploaded")
            }
        })
    })

