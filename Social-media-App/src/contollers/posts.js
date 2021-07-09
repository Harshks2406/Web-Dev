const {Posts , Users} = require('../db/models')

async function createNewPost(userid, title, body){
    const post =  await Posts.create({
        title : title,
        body : body,
        userId : userid
    })

    return post 
}


async function showAllPosts(query){
    const posts = Posts.findAll({
        include : [Users]
    })

    return posts
}

module.exports = {
    createNewPost,
    showAllPosts
}