const {Posts , Users} = require('../db/models')

async function createNewPost(userId, title, body){
    const post =  await Posts.create({
        title,
        body ,
        userId
    })

    return post 
}


async function getAllPosts(query){
    const posts = Posts.findAll({
        include : [Users]
    })

    return posts
}

async function getPostsById(userId){
    const posts = Posts.findAll({where :{userId}})

    return posts
}

module.exports = {
    createNewPost,
    getAllPosts,
    getPostsById
}