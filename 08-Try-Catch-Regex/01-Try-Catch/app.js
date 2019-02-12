const user = {email: 'jdoe@gmail.com'}

try {
    // Produce a ReferenceError
    //myFunction()

    // Produce a Typererror
    //null.myfunction()

    // Will Produce SyntaxeError
    //eval('Hello World')

    // Will Produce a URIError
    //decodeURIComponent('%')

    if(!user.name){
        // throw 'User has no name'
        throw new SyntaxError('user has no name')
    }

} catch (e) {
    console.log(`User error: ${e.message}`)
    //console.log(e)
    //console.log(e.message)
    //console.log(e.name)
    //console.log(e instanceof ReferenceError)
}finally{
    console.log('Finally runs reguardless of result')
}

console.log('Program continues...')