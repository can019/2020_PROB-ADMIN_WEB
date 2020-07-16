<?php

    if(isset($_POST['data'])){
        $request = $_POST['data'];
        if($request!='undefined'){
            $fp = fopen("./data/StudentInfo.txt","r") or die("파일을 열 수 없습니다！");
            $explodedData = [];
            $explodedData = explode('|',$request);
            $newData ='';
           for($i = 0; !feof($fp);$i++){
               $temp = fgets($fp);
                if($i==$explodedData[0]){
                    $newData = $newData. 
                    $explodedData[1].'|'.$explodedData[2].'|'.
                    $explodedData[3].'|'.$explodedData[4].'|'.
                    $explodedData[5].Chr(13).Chr(10);
                }
                else{
                    $newData = $newData.$temp;
                }
           }
            fclose($fp);
            $rfp = fopen("./data/StudentInfo.txt","w");
            fwrite($rfp,trim($newData));
            fclose($rfp);
        } 
      }
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
fclose($fp);
?>
