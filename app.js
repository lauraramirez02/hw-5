'use strict'
let array = []

let alpha = function(arr){
    let newArr = [];
  for (let i=0; i < arr.length; ++i){
    newArr.push(arr[i].email);
  }
  return (newArr.sort());
}
let div = function(arr){
    arr = alpha(arr);
    let divEl = document.getElementById('emails');
    for (let i=0; i < arr.length; i++){
        let child = document.createElement('p');
        let text = document.createTextNode(arr[i]);
        child.append(text);
        divEl.appendChild(child);
    }
};

let httpRequest = function(){
    const req = new XMLHttpRequest();
    req.open('GET','https://jsonplaceholder.typicode.com/users');
    req.onload = function(){
        if (req.status == 200){
            console.log('Status:',req.status);
            array = JSON.parse(req.response);
            div(array);
        }else{
            console.log('ERROR',req.statusText);
        }
    }
    req.onerror = function(){
            console.log('Network Error');
    }
    req.send()
}
httpRequest();

const byLength = function (x,y){
  if(x.username.length < y.username.length){
    return -1
  }else {
    return 1
  }
}
const writeToFetch = function(data){
  let div2 = document.getElementById('users');
  data = data.sort(byLength);
  for (let i=0; i < data.length; ++i){
    let child = document.createElement('p');
    let text = document.createTextNode(data[i].username);
    child.append(text);
    div2.append(child);
  }
}
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response){
    return response.json()
  }).then(function(data){
      writeToFetch(data);
  })