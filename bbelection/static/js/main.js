document.addEventListener("DOMContentLoaded", function() {

    axios.get('https://bb-election-api.herokuapp.com/')
        .then(response => {
            let data = response.data.candidates;
            var list = document.getElementById('candidates');
            data.forEach(candidate => {
                let liTag = document.createElement('li');
                liTag.innerText = candidate.name + "\n" + "Votes: " + candidate.votes
                list.appendChild(liTag)
            });
        });
});