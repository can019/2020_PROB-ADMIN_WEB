let table1_content = document.getElementsByClassName("content");
let td_grade = document.getElementsByClassName("grade");

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
    var tbody_tbody1 = document.getElementById('tbody1');
    var row = tbody_tbody1.insertRow( my_tbody.rows.length ); // 하단에 추가
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = '항목';
    cell2.innerHTML = new Date().toUTCString();
  }

  function delete_row() {
    var my_tbody = document.getElementById('my-tbody');
    if (my_tbody.rows.length < 1) return;
    // my_tbody.deleteRow(0); // 상단부터 삭제
    my_tbody.deleteRow( my_tbody.rows.length-1 ); // 하단부터 삭제
  }
