const { Router, query} = require('express')
const {getAllPosts, createNewPost, getPostsById} = require('../../contollers/posts')
const route = Router()

route.get('/', async(req,res)=>{
    const posts = await getAllPosts(req.query)
    res.status(200).send(posts)
})

route.post('/', async(req,res)=>{
    const {userId, title , body} = req.body
    console.log('body', req.body)
    if((!userId) || (!title) || (!body)){
        return res.status(400).send({
            error : 'Need User Id , Title , Body to create a post.'
        })
    }
    const post = await createNewPost(userId,title,body)
    res.status(201).send(post)
})

// route.get('/getById', async(req,res)=>{
//     console.log('body',req.body)
//     const {userId} = req.body
//     console.log('user',userId)
//     const posts = await getPostsById(userId)
//     res.status(200).send(posts)
// })

module.exports = {
    postsRoute: route
}