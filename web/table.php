<?php
$fp = fopen("./data/StudentInfo.txt","r") or die("파일을 열 수 없습니다！");
$data = [];
for($i=0;!trim(feof($fp));$i++){
$temp = trim(fgets($fp));
if($temp!=''){
$data[$i] = explode('|',trim($temp));
echo
'<tr class ="content">
<td><input class = "chk" type="checkbox"></td><td class="stdname">',$data[$i][0],
'</td><td class="number">',$data[$i][1],'</td><td class="age">',$data[$i][2],
'</td><td class = "grade">',$data[$i][3],'</td><td>',$data[$i][4],'</td>';      
}             
}
?>
