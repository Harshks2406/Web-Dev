function loadMyPosts(){
    const userId = JSON.parse(window.localStorage.user).id
    $.get(`/api/posts?userId=${userId}`,(posts)=>{
        if(posts){
            for (let p of posts){
                $('#post-container').append(
                    $(`
                    <div class="col-4">
                        <div class="card " style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                                <p class="card-text">
                                    ${p.body.substr(0,200)}
                                    <a href="#" class="card-link" data-component="readmore">...read more</a>
                                </p>
                                <a href="#" class="card-link">Comment</a>
                                <a href="#" class="card-link">Like</a>
                            </div>
                        </div>
                    </div>
                    `)
                )
            }
        }else{
            $('#post-container').append(
                $(`
                <div> Try adding some posts</div>
            `)
            )
            console.log('Else')
        }
    }).catch((err)=>{
        console.error(err)
    })
}

