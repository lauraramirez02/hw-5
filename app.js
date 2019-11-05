var xhr = new XMLHttpRequest(); 

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            var result = JSON.parse(this.responseText);
            users(result);
        }
    }   
}
xhr.open("get", 'https://jsonplaceholder.typicode.com/users', true);
    
xhr.send();

function users(arr) {
    var emails = [];
    var display = '';
    var i;
    for(i=0; i<arr.length; i++) {
        emails.push(arr[i].email);
    }
    emails.sort();
    for (i=0; i<emails.length; i++) {
        display += '"'+ emails[i] + '",';
    }
    document.getElementById('output').innerHTML = display;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (result2 => {
        const users = result2.sort ((a,b) => a.username.length -b.username.length);
        var sortUsers = [];
        var parsedUsers = JSON.parse(JSON.stringify(users))
  
        for (i=0; i< parsedUsers.length; i++) {
            sortUsers += '"'+ parsedUsers[i].username + '",';
        }

document.getElementById("output2").innerHTML = sortUsers
    })