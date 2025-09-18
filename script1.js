let nam1 = localStorage.getItem("name1")
let nam2 = localStorage.getItem("name2")

let body = document.querySelector(".body");
let f = document.getElementById("f");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let restart = document.getElementById("restart");
let change_grid = document.getElementById("change_grid");
let out = document.getElementById("out");
let turn = document.getElementById("turn");
let grad = document.getElementById("grad");

player1.textContent = nam1 +" :"
player2.textContent = nam2 +" :"
let buton=[];
grad = 3
    let change = "X";
    let numbre = 1;
    let contur_X = 0;
    let contur_O = 0;
    let length = grad*grad
    
function creatbuton(){
for(let i=0;i<length;i++){
     buton[i] = document.createElement("button");
    buton[i].textContent = "";
    f.appendChild(buton[i])
}
}
function click(){
    for(let i=0;i<length;i++){
        buton[i].addEventListener("click",function(){
            tern_player()
           X_or_O(i);
           is_win();
        });
        
    }
}
function X_or_O(i){
        buton[i].textContent = change;
           if(change=="X"){
            change = "O"
        }else{
            change = "X"
        }
    }
    let value ;
    function is_win(){
         value = "";
        for(let i=0;i<grad;i++){
            value += buton[i].textContent
        }
        if(value == "X".repeat(grad)|| value == "O".repeat(grad)){
            scor(value);
            cleardata();
        }
        value = "";
        for(let i=length-grad;i<length;i++){
            value += buton[i].textContent
        }
        if(value == "X".repeat(grad) || value == "O".repeat(grad)){
            scor(value);
            cleardata();
        }
         value = "";
        for(let i=0;i<length;i=i+grad){
            value += buton[i].textContent
        }
        if(value == "X".repeat(grad) || value == "O".repeat(grad)){
            scor(value);
            cleardata();
        }
         value = "";
        for(let i=grad-1;i<length;i=i+grad){
            value += buton[i].textContent
        }
        if(value == "X".repeat(grad) || value == "O".repeat(grad)){
            scor(value);
            cleardata();
        }
         value = "";
        for(let i=0;i<length;i=i+(grad+1)){
            value += buton[i].textContent
        }
        if(value == "X".repeat(grad) || value == "O".repeat(grad)){
            scor(value);
            cleardata();
        }
         value = "";
        for(let i=grad-1;i<length;i=i+(grad-1)){
            value += buton[i].textContent
        }
        if(value == "X".repeat(grad) || value == "O".repeat(grad)){
            scor(value);
            cleardata();
        }
    }

    function grid(){
        let colomn = "";
        for(let i=0;i<grad;i++){
            colomn += "0fr ";
        }
        f.style.gridTemplateColumns =`${colomn}`;
        f.style.gridTemplateRows =  `${colomn}`;
    }

    function footer(){
        if(grad>3){
            let foter = document.querySelector("footer");
            foter.style.marginTop = 35+"px";
        }
    }

    function tern_player(){
        if(numbre == 1){
            numbre =2;
        }else{
            numbre =1
        }
        turn.innerHTML = `turn player ${numbre}`
    }

    function scor(check){
        if(check[0]=="X"){
          player1.innerHTML = `${nam1} : ${++contur_X}`;
        }else{
        player2.innerHTML = `${nam2} : ${++contur_O}`;
        }
    }

    function cleardata(){
        for(let i=0;i<length;i++){
            buton[i].textContent = "";
        }
    }
    function restarted(){
        restart.addEventListener("click",function(){
           location.reload();
        });
    }
    // function changes_grid(){
    //     change_grid.addEventListener("click",function(){
           
    //     });
    // }
    function out_game(){
        out.addEventListener("click",function(){
           location.href = "http://127.0.0.1:5500/project.html"
        });
    }
// ------------------- function ---------------
creatbuton();
click();
grid();
footer();
restarted();
out_game();