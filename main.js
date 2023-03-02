// setting up variables
let saves = []
let comments = []
let likes = {}
let contacts = []

// this function will run on pageload
function pageLoad(){

    // setting up session storage on pageload
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
         sessionStorage.setItem("savesList", JSON.stringify(saves));
         sessionStorage.setItem("likesList", JSON.stringify(likes));
         sessionStorage.setItem("commentsList", JSON.stringify(comments));
         sessionStorage.setItem("contactsList", JSON.stringify(contacts));
         sessionStorage.setItem("hasCodeRunBefore", true);
     } else {
        saves = JSON.parse(sessionStorage.getItem("savesList"))
        likes = JSON.parse(sessionStorage.getItem("likesList"))
        comments = JSON.parse(sessionStorage.getItem("commentsList"))
        contacts = JSON.parse(sessionStorage.getItem("contactsList"))        
    }

    // it will display saved items if they are found in sessionStorage
    if ((document.getElementById('420') !== null)){
        displaySaves()
    }

    // it will toggle like buuton to blue color if likes are found in sessionStorage
    for (k in likes){
        if ((document.getElementById(likes[`${k}`]) !== null)){
            document.getElementById(likes[`${k}`]).setAttribute("class", "toggle")
        }
    }

    // it will display comments if they are found in sessionStorage
    if ((document.getElementById('9999') !== null)){
        displayComments()
    }

}

// on mouse over it will border the element
function mouseOv(id){
    document.getElementById(`${id}`).setAttribute('style', 'border: solid black')
}

// on mouse leave it will remove border
function mouseLe(id){
    document.getElementById(`${id}`).setAttribute('style', 'border: none')
}

// function to save items
function saveItem(id){
    saves.push(document.getElementById(`${id}`).innerHTML)
    alert(`Item Saved.\n You have ${saves.length} items saved in your folder.`)
    sessionStorage.setItem("savesList", JSON.stringify(saves));
}

// function to display saved items
function displaySaves(){
    let items = ''
    saves = JSON.parse(sessionStorage.getItem("savesList"))

    for (let i = 0; i< saves.length; i++){ 
        items += `<div>${saves[i]}</div>`
    }

    document.getElementById('420').innerHTML = saves
}

// function to update likes array
function likeItem(id){

    if (`${id}` in likes){
        delete likes[`${id}`]
        document.getElementById(`b${id}`).setAttribute("class", "notoggle")
    }else{
        likes[`${id}`] = `b${id}`
        document.getElementById(`b${id}`).setAttribute("class", "toggle")
    }
    sessionStorage.setItem("likesList", JSON.stringify(likes));
}

// function to save comments
function comment (){
    comments.push(document.getElementById('commentForm').value)
    sessionStorage.setItem("commentsList", JSON.stringify(comments));

    displayComments()
}

// funtion to display comments
function displayComments(){
    let lists = ''
    for (i of comments){
        lists += `<li>${i}</li>` 
    }

    document.getElementById('9999').innerHTML = lists
}

// funtion to update contacts array
function contact(){
    
    contacts.push(document.getElementById("contactForm").value)
    sessionStorage.setItem("contactsList", JSON.stringify(contacts));
    alert('Thank you for your email address. We will contact you as soon as possible.')
}