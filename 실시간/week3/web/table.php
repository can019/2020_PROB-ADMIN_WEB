<?php
    $dataFile = './data/StudentInfo.txt'; 
    if(file_exists($dataFile)){
        /************************************/
        if(isset($_POST['data'])){
            $data1 = $_POST['data'];

            if($data1!='undefined'){
                $modifyFp = fopen($dataFile,'r');
                $newData = '';  
                $explodedData = explode('|',$data1); //배열임 지금
                
                for($i=0;!feof($modifyFp);$i++){
                    if($explodedData[0]==$i){
                        $newData = $newData.$explodedData[1].'|'.$explodedData[2].
                        '|'.$explodedData[3].'|'.$explodedData[4].'|'.$explodedData[5].chr(13).chr(10);
                        $dummy = fgets($modifyFp);
                       
                    }
                    else{
                        $newData = $newData.fgets($modifyFp);
                    }


                }
                
                fclose($modifyFp);
                $modiy_Rfp = fopen($dataFile,'w');
                fwrite($modiy_Rfp,trim($newData));
                fclose($modiy_Rfp);
            }
           
        }

        /***********************************/
        $fp = fopen($dataFile,'r');
        for($i=0;(!feof($fp));$i++){

            $line = trim(fgets($fp));
            if($line!=''){
                $data = explode('|',trim($line));   
                echo
                    '<tr class ="content">
                    <td><input class = "chk" type="checkbox"></td><td class="stdname">'.htmlspecialchars($data[0]).
                    '</td><td class="number">'. htmlspecialchars($data[1]).'</td><td class="age">'.htmlspecialchars($data[2]).
                    '</td><td class = "grade">'.htmlspecialchars($data[3]).'</td><td>'.htmlspecialchars($data[4]).'</td>';
            }
              
           
        }
    
    }
?>
