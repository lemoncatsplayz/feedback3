let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("text").value ;
    document.getElementById("feedback_test").textContent = `Hello ${username},thank you for giving feedback`
    console.log(username);
}
