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
                default :
                    break;
            }
        }
        return num/element.length;
    }

}
