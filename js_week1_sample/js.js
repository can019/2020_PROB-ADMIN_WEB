let bt_id = document.getElementById("Id1");
let bt_class = document.getElementsByClassName("class1");

window.onclick = function(e){
    if(e.target==bt_id)
        console.log("1");
    else{
        for(let i = 0; i<bt_class.length;i++){
            if(e.target==bt_class[i]){
                clicked();
                console.log("2");
                break;
            }
        }
    }
}
bt_id.addEventListener("click",clicked);

function clicked(){
    alert("clicked!");
}