const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
]


function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            posts.push(post)
            let error = false
            if (!error) {
                resolve()
            } else {
                reject('Error: Something went wrong!')
            }
        }, 2000)
    })


}

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach(post => {
            output += `
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
                <hr>
            `
        })
        document.getElementById('output').innerHTML = output
    }, 1000)
}

createPost({
        title: 'Post Three PROMISEs',
        body: 'This is post three'
    })
    .then(getPosts)
    .catch(function (err) {
        console.log(err)
    })


/**
 * 
 ** - Don't work because need callback function
 *
 * 
function createPost(post){
    setTimeout(function(){
        posts.push(post)
    }, 2000)
}

function getPost(){
    setTimeout(function(){
        let output = ''
        posts.forEach(post => {
            output += `
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
                <hr>
            `
        });
        document.getElementById('output').innerHTML = output
    }, 1000)
}

createPost({title: 'Post Three', body: 'This is post three'})
getPost()
 */