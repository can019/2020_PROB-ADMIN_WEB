
/************************global variables************************/
let table1_content = document.getElementsByClassName("content");
let td_grade = document.getElementsByClassName("grade");
let bt_addStudent = document.getElementById("addStudentBt");
let bt_deleteStudent = document.getElementById("deleteStudentBt");
/************************global variables************************/



/*************************Event Listener*************************/
bt_addStudent.addEventListener("click",add_row);


/*************************Event Listener*************************/

window.onload = function(){
    let totNum = calTot(table1_content);
    console.log(totNum);
    if(totNum){
       document.getElementById("numberOfStudent").innerHTML 
       = totNum;
       document.getElementById("avgGrade").innerHTML
       = calAvg(td_grade);
    }
    else{
        alert("저장된 정보가 없습니다!");
    }   
}
function calTot(element){
    if(!element)
        return 0;
    else{
        return element.length;
    }
}

function calAvg(element){
    if(!element){
        return 0;
    }
    else{
        let num = 0;
        let non = 0;
        for(let cursor = 0;cursor<element.length;cursor++){
            switch(element[cursor].innerHTML.trim()){
                case 'A+': num+=4.5;
                    break;
                case 'A': num+=4;
                    break;
                case 'B+': num+=3.5;
                    break;
                case 'B': num+=3;
                    break;
                case 'C+': num+=2.5;
                    break;
                case 'C': num+=2;
                    break;
                case 'D+': num+=1.5;
                    break;
                case'D': num+=1;
                    break;
                case  'F' : num+=0;
                    break;
                default : non++;
                    break;

            }
        }
        return num/(element.length-non);
    }

}

function add_row() {
    let tbody_tbody1 = document.getElementById('tbody1');
    let row = tbody_tbody1.insertRow( tbody_tbody1.rows.length );
    row.className += "content";

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cell1.appendChild(checkbox);
    cell2.innerHTML = "10";
    cell3.innerHTML = "20170000";
    cell4.innerHTML = "23";
    cell5.innerHTML = "A+";
    cell5.className += "grade";
    
  }

  function delete_row() {
    var my_tbody = document.getElementById('tbody1-tbody');
    if (my_tbody.rows.length < 1) return;
    // my_tbody.deleteRow(0); // 상단부터 삭제
    my_tbody.deleteRow( my_tbody.rows.length-1 ); // 하단부터 삭제
  }
