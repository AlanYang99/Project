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
        document.getElementById("frm2").reset();
    }
}
