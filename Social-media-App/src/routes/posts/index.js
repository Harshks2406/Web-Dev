const { Router} = require('express')
const {getAllPosts, createNewPost} = require('../../contollers/posts')
const route = Router()

route.get('/', async(req,res)=>{
    const posts = await getAllPosts()
    res.status(200).send(posts)
})

route.post('/', async(req,res)=>{
    const {userId, title , body} = req.body
    if((!userId) || (!title) || (!body)){
        return res.status(400).send({
            error : 'Need User Id , Title , Body to create a post.'
        })
    }
    const post = await createNewPost(userId,title,body)
    res.status(201).send(post)
})

module.exports = {
    postsRoute: route
}