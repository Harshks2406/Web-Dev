$(()=>{
    $('#navbar').load('components/navbar.html',loginIfNeeded)
    $('#footer').load('components/footer.html')
    $('#content').load('components/all-posts.html')
})

function loginIfNeeded(){
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser){
        $.post('/api/users',{},(user)=>{
            if(user){
                console.log('Registered in as:',user.username)
                console.log('User Id:', user.id)
                
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                $('#nav-username').text(currentUser.username)
            }
        })
    } else{
        console.log('Resuming Session as:',currentUser.username)
        console.log('User Id:', currentUser.id)
        $('#nav-username').text(currentUser.username)
    }
    console.log('this',window.localStorage.user)
}

