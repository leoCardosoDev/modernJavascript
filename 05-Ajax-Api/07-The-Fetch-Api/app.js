const output = document.getElementById('output')

document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getExternal)

// Get from local text data
function getText() {
    fetch('text.txt')
        .then(function (res) {
            return res.text()
        })
        .then(function (data) {
            console.log(data)
            output.innerHTML = data
        })
        .catch(function (err) {
            console.log(err)
            output.innerHTML = err
        })
}

// Get from local json data
function getJson() {
    fetch('posts.json')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            //console.log(data)
            let html = ''
            data.forEach(function (post) {
                html += `<ul>
                <li>${post.title}</li>
                <li>${post.body}</li>
                </ul>`
            })
            output.innerHTML = html
        })
        .catch(function (err) {
            output.innerHTML = err
        })
}

// Get external data
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            let html = ''
            data.forEach(function (user) {
                html += `<ul>
                    <li>ID: ${user.id}</li>
                    <li>Login: ${user.login}</li>
                    <li>Repository: <a href="${user.html_url}">${user.html_url}</a></li>
                    <li><img width="60" heigth="60" src="${user.avatar_url}"> </li>
                </ul>`
            })
            output.innerHTML = html
        })
        .catch(function (err) {
            console.log(err)
            output.innerHTML = err
        })
}