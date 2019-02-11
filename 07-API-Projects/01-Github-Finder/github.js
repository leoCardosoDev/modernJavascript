class GitHub{
    constructor(){
        this.client_id = 'ffe1b1b76ad411300ea9'
        this.client_secret = 'a3279b296508de6775213612bb51846bf9368870'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&repos_sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        return {
            profile,
            repos
        }
    }
}