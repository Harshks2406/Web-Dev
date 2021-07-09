const {Posts , Users} = require('../db/models')

async function createNewPost(userId, title, body){
    const post =  await Posts.create({
        title,
        body,
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

module.exports = {
    createNewPost,
    getAllPosts
}