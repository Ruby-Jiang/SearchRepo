class GitHub{
    constructor(){
        this.client_id = '7ffe047a7216f1fa9e4e';
        this.client_secret = '1efa02196b74e28f084d566b9acc91cdba94b190';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // const profileResponse = await fetch(`http://api.github.com/users/${user}`);

        // const reposResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        return{
            profile: profileData,
            repos: reposData
        }
    }
}