let bt_addStudent = document.getElementById("addStudentBt");
let bt_deleteSutdent = document.getElementById("deleteStudentBt");
let content = document.getElementsByClassName("content");
let grade = document.getElementsByClassName("grade");
let tbody_tbody1 = document.getElementById("tbody1");

let chk_check = document.getElementsByClassName("chk");

let avgGrade = document.getElementById("avgGrade");
let tot = document.getElementById("numberOfStudent");
let checkedList = new Array();

bt_addStudent.addEventListener("click",add_row);
bt_deleteSutdent.addEventListener("click",delete_handler);

window.onload = function(){
     //html 파일 load 후 무언가를 해주세요.
    //이 code는 html load 이후 실행 됩니다.
    avgGrade.innerHTML = 0; 
    tot.innerHTML = content.length;
    let num = 0;
    for(let i =0; i<content.length;i++){
        chk_check[i].addEventListener("click",getChedked);
        let td_grade = grade[i].innerHTML;
        switch(td_grade){
            case 'A+': num += 4.5;
                break;
            default : num+= 3.0;
                break;
        }   
    }
    
    num = num/content.length;
    avgGrade.innerHTML = num;
}
function getChedked(){
    let arr = new Array();
    for(let i=0;i<chk_check.length;i++){
        if(chk_check[i].checked){
            arr.push(i);
        }
    }
    checkedList = arr;
}
function add_row(){

    let row = tbody_tbody1.insertRow(tbody_tbody1.rows.length);
    row.className += "content";

    let checkbox = document.createElement("input");
    checkbox.className = "chk";
    checkbox.type = "checkbox";

    let cell1 = row.insertCell(0);
    cell1.appendChild(checkbox);

    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell2.innerHTML = 11;
    cell3.innerHTML = 20180000;
    cell4.innerHTML = 22;
    cell5.className += "grade";
    cell5.innerHTML = "A";

    
    tot.innerHTML = content.length;
    let num = 0;
    for(let i =0; i<content.length;i++){
        let td_grade = grade[i].innerHTML;
        switch(td_grade){
            case 'A+': num += 4.5;
                break;
            default : num+= 3.0;
                break;
        }   
    }
    num = num/content.length;
    num = num.toFixed(2);
    avgGrade.innerHTML = num;
    checkbox.addEventListener("click",getChedked);
}
function delete_handler(){
    if(checkedList.length){
        delete_checkedRows();
    }
    else{
        delete_row();
    }
}

function delete_row(){
    tbody_tbody1.deleteRow(tbody_tbody1.rows.length-1);
    
    tot.innerHTML = content.length;
    let num = 0;
    for(let i =0; i<content.length;i++){
        let td_grade = grade[i].innerHTML;
        switch(td_grade){
            case 'A+': num += 4.5;
                break;
            default : num+= 3.0;
                break;
        }   
    }
    if(content.length==0)
     num = 0;
     else{
        num = num/content.length;
        num = num.toFixed(2);
     }
    
    
    avgGrade.innerHTML = num;
}
function delete_checkedRows(){
    while(checkedList.length!=0){
        tbody_tbody1.deleteRow(checkedList.pop());
        
    }
    tot.innerHTML = content.length;
    let num = 0;
    for(let i =0; i<content.length;i++){
        let td_grade = grade[i].innerHTML;
        switch(td_grade){
            case 'A+': num += 4.5;
                break;
            default : num+= 3.0;
                break;
        }   
    }
    if(content.length==0)
      num = 0;
     else{
        num = num/content.length;
        num = num.toFixed(2);
     }
    avgGrade.innerHTML = num;
}

