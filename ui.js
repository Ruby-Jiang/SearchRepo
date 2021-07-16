class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">  
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary col-12 mb-4">View Profile</a>     
                </div>
                <div class="col-md-9">
                    <span class="badge rounded-pill bg-light">Public Repos:${user.public_repos}</span>
                    <span class="badge rounded-pill bg-primary">Public Gists:${user.public_gists}</span>
                    <span class="badge rounded-pill bg-info">Followers:${user.followers}</span>
                    <span class="badge rounded-pill bg-secondary">Following:${user.following}</span>
                    <br><br>

                    <ul class="list-group" mb-4>
                        <li class="list-group-item">Login: ${user.login}</li>
                        <li class="list-group-item">Bio: ${user.bio}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        </div>`;
    }

    showAlert(message, className){
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 2500);
    }

    showRepos(repos){
        let output = '';

        repos.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-4">
                      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-8">
                        <span class="badge rounded-pill bg-light">Stars:${repo.stargazers_count}</span>
                        <span class="badge rounded-pill bg-primary">Watcher:${repo.watchers_count}</span>
                        <span class="badge rounded-pill bg-info">Forks:${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `
        });

        document.querySelector('#repos').innerHTML = output;
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}