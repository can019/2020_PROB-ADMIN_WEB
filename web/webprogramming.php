<!DOCTYPE html>
    <html lang = "ko">
        <head>
            <title>웹 프로그래밍 1주차</title>
            <link rel="stylesheet" href="css.css" />
            <meta charset="utf-8" />
        </head>
    
        <body>
            <h1> 학생관리 시스템 </h1>
    
            <ol>
                <li><a href="./Student_info.php">학생정보 및 학점관리</a></li>
                <li>학생 입휴학 관리</li>
                <li>학생 기숙사 관리</li>
                <li>환경설정</li>
            </ol>
            <table id = "table1">
                <thead>
                    <tr id="head">
                        <th>선택</th><th class="name">이름</th><th class="num">학번</th><th class="age">나이</th><th class="grade">학점</th><th class="ex">비고</th>
                    </tr>
                </thead>
                <tbody id="tbody1">
                <?php
                /*동일 page에서 처리
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
                    }*/
                //ajax 처리
                
                ?>
                </tbody>
            </table>
            <br />
            
            <input id = "addStudentBt" type="button" value="학생 추가"/>
            <input id="deleteStudentBt" type="button" value="학생 삭제"/>
    
            <p>
                평균 학점 : <span id = "avgGrade"></span><br><br>
                
                총 인원 : <span id = "numberOfStudent"></span><br><br>
            </p>
    
            
            <div id="myModal" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <span class="close">&times;</span>                                                               
                    <p><span id="cellName"></span> <br /> <br />
                        <input type="text" id="changeinner" />
                    </p>
                </div>
            </div>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>      
        <script src="js/js.js"></script>
        </body>
        
    </html>

