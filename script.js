let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")
let start = document.getElementById("start")
let grid = document.getElementById("grid");

    start.addEventListener("click",function(event){
        event.preventDefault();
        if(name1.value != "" && name2.value != ""){
            localStorage.setItem("name1",name1.value)
            localStorage.setItem("name2",name2.value)
            localStorage.setItem("grid",grid.value)
            location.href = "http://127.0.0.1:5500/tictoc.html"
            
        }else{
            name1.style.border = "solid " + "red";
            name2.style.border = "solid " + "red";
            alert("enter name the player pleaz")
        }
    })
