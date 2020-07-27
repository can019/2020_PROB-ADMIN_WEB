/************************global variables************************/
let table1_content = document.getElementsByClassName("content");
let td_grade = document.getElementsByClassName("grade");
let bt_addStudent = document.getElementById("addStudentBt");
let bt_deleteStudent = document.getElementById("deleteStudentBt");
let chk_check = document.getElementsByClassName("chk");
let totNum = calTot(table1_content);
let tbody_tbody1 = document.getElementById('tbody1');
let changeCell;
let checkedList = new Array();
/************************global variables************************/

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var bt_confirm = document.getElementById("confrim");                                        
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target ==span||event.target==modal) {
        modal.style.display = "none";
    }

    switch(event.target.className){
        case 'stdname':
            modal.style.display = "block";
            document.getElementById('cellName').innerHTML = "이름을 변경하세요!";
            changeCell = event.target;
            document.getElementById("changeinner").value = event.target.innerHTML;
            break;    
        case 'number':
            modal.style.display = "block";
            document.getElementById('cellName').innerHTML = "학번을 변경하세요!";
            changeCell = event.target;
            document.getElementById("changeinner").value = event.target.innerHTML;
            break;    
        case 'age':
            modal.style.display = "block";
            document.getElementById('cellName').innerHTML = "나이를 변경하세요!";
            changeCell = event.target;
            document.getElementById("changeinner").value = event.target.innerHTML;
            break;    
        case 'grade':
            modal.style.display = "block";
            document.getElementById('cellName').innerHTML = "학점을 변경하세요!";
            changeCell = event.target;
            document.getElementById("changeinner").value = event.target.innerHTML;
            break;          
    }
    if(event.target == bt_confirm){
        let txt = document.getElementById('changeinner').value;

        changeCell.innerHTML = txt;
        modal.style.display = "none";
       // console.log(changeCell.parentNode().rowIndex);
    }
    
}
function eventBinding(){
    bt_addStudent.addEventListener("click",add_row);
    bt_deleteStudent.addEventListener("click",delete_rowHandler);

    for(let i=0;i<chk_check.length;i++){
        chk_check[i].addEventListener("click",getChecked);
    } 
}
window.onload = function(){
    loadTable();
}
function setAvgGrade(){
    if(totNum){
     document.getElementById("avgGrade").innerHTML
     = calAvg(td_grade);
    }
}


function setTot(){
    totNum = calTot(table1_content);
    document.getElementById("numberOfStudent").innerHTML = totNum;
    if(!totNum) 
        alert('저장된 정보가 없습니다!');
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
        let result = num/(element.length-non).toFixed(2);
        result = result.toFixed(2);
        return result;
    }

}

function getChecked(){
    let arr = new Array();
    for(let i = 0;i<table1_content.length;i++){
        if(chk_check[i].checked==true){
            arr.push(i);
        }
    }
    checkedList = arr;
}

function add_row() {
    
    let row = tbody_tbody1.insertRow( tbody_tbody1.rows.length);
    row.className += "content";

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    
    let checkbox = document.createElement("input");
    checkbox.className += "chk";
    checkbox.type = "checkbox";
    
    cell1.appendChild(checkbox);
    
    cell2.innerHTML = "10";
    cell3.innerHTML = "20170000";
    cell4.innerHTML = "23";
    cell5.innerHTML = "A";
    cell5.className += "grade";
    setTot();
    setAvgGrade();
    
    checkbox.addEventListener("click",getChecked);
    
  }
  

  function delete_rowHandler(){
    if(checkedList.length)
        delete_checkedrows();
    else
        delete_row();
  }
  function delete_row() {
     
    if (tbody_tbody1.rows.length < 1) return;
    
    tbody_tbody1.deleteRow( tbody_tbody1.rows.length-1);
    setTot();
    setAvgGrade();
  }

  function delete_checkedrows(){
     
    if (tbody_tbody1.rows.length < 1) return;

    while(checkedList.length!=0)
        tbody_tbody1.deleteRow(checkedList.pop());
    setTot();
    setAvgGrade();
  }
  function loadTable(data){
	var httpRequest = new XMLHttpRequest(); // ajax 객체를 생성한다.
	 if(!httpRequest){ //객체 생성 실패(시스템 원인)
		 alert("알 수 없는 오류 발생(XMLHttpRequest generate fail)");
		 return false;
	 }
	 else{
		 httpRequest.onreadystatechange = alertContents;
		 httpRequest.open('POST',"./table.php");//request table
         httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
         httpRequest.send('data=' + encodeURIComponent(data));
     }
     
	 function alertContents() {
		try {
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
				if (httpRequest.status === 200){
                    tbody_tbody1.innerHTML = httpRequest.responseText;	
                setTot();
                setAvgGrade(); 
                eventBinding();
                }
			}
		}
		catch( e ) {
			alert('Caught Exception: ' + e.description);
			}
        }
        return true;
}