const http = new easyHTTP

/* 
// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {

    if (err) {
        console.log(err)
    } else {
        console.log(posts)
    }
})
 */



/* 
// Get single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', (err, post) => {
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
})
 */

// Create Data
const data = {
    title: 'UPDATE - Custom Post 101',
    body: 'This is a custom post 101'
}

/* 
 // Create Post
 http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) =>{
     if(err){
         console.log(err)
     }else{
         console.log(post)
     }
 })
 */

/* 
// Update Data
http.put('https://jsonplaceholder.typicode.com/posts/1', data, (err, post) => {
    if (err) {
        console.log(err)
    } else {
        console.log(post)
    }
})
 */

 // Delet data
 http.delete('https://jsonplaceholder.typicode.com/posts/100', function(err, response){
     if(err){
         console.log(err)
     }else{
         console.log(response)
     }
 })