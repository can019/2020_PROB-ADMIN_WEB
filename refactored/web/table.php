<?php
    if(isset($_POST['data'])){
        $request = $_POST['data'];
        if($request!='undefined'){
            if(!file_exists("./data/StudentInfo.txt")) die();
            $fp = fopen("./data/StudentInfo.txt","r");
            $request = htmlspecialchars($request); // xss
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
    if(!file_exists("./data/StudentInfo.txt")) die();
    $fp = fopen("./data/StudentInfo.txt","r");

    $data = [];
    for($i=0;!trim(feof($fp));$i++){
        $temp = trim(fgets($fp));
        if($temp!=''){
            $data[$i] = explode('|',trim($temp));
            //xss
            echo
            '<tr class ="content">
            <td><input class = "chk" type="checkbox"></td><td class="stdname">'.htmlspecialchars($data[$i][0]).
            '</td><td class="number">'.htmlspecialchars($data[$i][1]).'</td><td class="age">'.htmlspecialchars($data[$i][2]).
            '</td><td class = "grade">'.htmlspecialchars($data[$i][3]).'</td><td>'.htmlspecialchars($data[$i][4]).'</td>';
    }             
}
fclose($fp);
?>
