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
                </tbody>
            </table>
            <br/>
            
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
                        <button id = "confirm" type="button">✔</button>
                    </p>
                </div>
            </div>

           
        <script src="js/js.js?version=20200728_5"></script>
        </body>
        
    </html>

