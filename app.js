
var config = {
    apiKey: "AIzaSyASicbYLqooAOR98f1gHhJL4DDIqw2n1Pw",
    authDomain: "code-create-project.firebaseapp.com",
    databaseURL: "https://code-create-project.firebaseio.com",
    projectId: "code-create-project",
    storageBucket: "",
    messagingSenderId: "456395618787"
  };
  firebase.initializeApp(config);
  console.log(firebase);

/*
  var dbRefObject = firebase.database().ref().child('newsfeed');
  dbRefObject.on('value', snap=> {
    preObject.innerText = JSON.stringify(snap.val(), null, 3 );
  });
*/


//Gets current time



//Get whats in database  
var database = firebase.database();
var ref = database.ref('messages/');  
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    }); 
var messageBox = document.getElementById('newsfeed');
var playersRef = firebase.database().ref("messages/");

playersRef.orderByKey().on("child_added", function(data) {
   console.log(data.key);
});
ref.on('child_added', snap=> {
    var paragraph = document.createElement("p");
    paragraph.innerText = snap.val(); 
    paragraph.id = snap.key;
    messageBox.appendChild(paragraph);
 }); 

ref.on('child_changed', snap => {
    var paragraphChanged = document.getElementById(snap.key);
    paragraphChanged.innerText = snap.val();
});

ref.on('child_removed', snap => {
    var paragraphRemove = document.getElementById(snap.key);
    paragraphRemove.remove();
});

/*
timeRef.on('child_added', snap=> {
var timeRef = database.ref('time/');    
    var span = document.createElement("span");
    span.innerText = snap.val(); 
    span.id = snap.key;
    messageBox.appendChild(span);
     timeRef.push(utcDate);
   
 }); 
*/
//To save new data in database
function save(add) {
    var database = firebase.database();
    var ref = database.ref('messages');
    var dt = new Date();
    var utcDate = dt.toUTCString();    
    messages = add;
    ref.push(messages);
}

//To make new post on website
function deletePost() {
    var userinput = document.getElementById("comment").value; 

    if(userinput == "") {
        alert("Please write a comment!");
    } else if (userinput == "Comment...") {
        alert("Please write a comment!");    
    } else {
        console.log(userinput);  
        save(userinput);
       
        document.getElementById("frm2").reset();
    }
}
/*
        var small = document.createElement("span");
        var node = document.createTextNode(utcDate);
        para.appendChild(node);
        var element = document.getElementById("newsfeed");  
        element.appendChild(small);   

/* My ex function when firebase was not introduced.
function deletePost() {
    var userinput = document.getElementById("comment").value; 

    if(userinput == "") {
        alert("Please write a comment!");
    } else if (userinput == "Comment...") {
        alert("Please write a comment!");    
    } else {
        console.log(userinput);  
        var para = document.createElement("p");
        var node = document.createTextNode(userinput);
        para.appendChild(node);
        var element = document.getElementById("newsfeed");  
        element.appendChild(para);  
        save(userinput);
        document.getElementById("frm2").reset();
    }
}
*/
  //    messageBox.innerText = JSON.stringify(snap.val(), null, 3 );
