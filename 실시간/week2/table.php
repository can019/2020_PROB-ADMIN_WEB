<?php
    if(file_exists('./data/StudentInfo.txt')){
        $fp = fopen('./data/StudentInfo.txt','r');
        $data = [];

        for($i=0;!feof($fp);$i++){
            $data[$i] = (explode('|',fgets($fp)));
            echo 
            '<tr class ="content">
             <td><input class = "chk" type="checkbox"></td><td class="stdname">'
             .$data[$i][0].'</td><td class="number">'.$data[$i][1].'</td><td class="age">
             '.$data[$i][2].'</td><td class = "grade">'.$data[$i][3].'</td><td>'.$data[$i][4].'</td></tr>'; 
        }
    }
   
?>
