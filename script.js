
document.addEventListener('DOMContentLoaded', async function () {
    // var projectList = document.getElementById('project-list');
    // var projects = [
    //     { name: 'Project 1', description: 'Description of Project 1' },
    //     { name: 'Project 2', description: 'Description of Project 2' },
    //     { name: 'Project 3', description: 'Description of Project 3' }
    // ];

    // projects.forEach(function (project) {
    //     var projectDiv = document.createElement('div');
    //     projectDiv.innerHTML = '<h3>' + project.name + '</h3><p>' + project.description + '</p>';
    //     projectList.appendChild(projectDiv);
    // });

    const username = 'krishnanand654';

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Process the fetched repositories data
        console.log(data);

        // Example: Render the repositories to a list
        const repoList = document.getElementById('repo-list');
        data.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.textContent = repo.name;
            repoList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
});
