# 2020_PROB/Admin_WEB

* #### Contributor :: whdgusdl48, can019
* #### Term :: 2020.06.27~
<hr/>

## **2020.07.15**
* ###  **HTML5 Validate passed**
<img src = "https://user-images.githubusercontent.com/26926966/87548043-ec73a100-c6e6-11ea-9ada-1a8acc19ead3.png" >


* ###  **webProgramming.html => webProgramming.php**
  + ~~webProgramming.php에서 php를 통하여 Table를 불러옴.~~ 외부 php파일을 ajax로 받아 삽입  
* ###  **php파일**
  + **table.php(new) :: txt 파일을 read -> 동적으로 html코드 생성. request data에 따라 txt파일 write.**<br>   
    - ~~addStudent.php(new) :: request data에 따라 txt write.~~
<hr/> 

## **2020.07.16**
* ### **js.js 수정**
  + **modal 박스를 통한 변경 -> ajax로 서버에 변경사항 즉시 넘김.**
  + **ajax를 위한 data 가공**
    - Form :: Post<br/>
    - Content-type :: application/x-www-form-urlencoded
* ### **table.php 수정**
  + **data.txt가 존재하지 않는 예외 처리 변경**
    - fopen() or die() ->  !file_exist() die()
  + **js에서 넘어온 data parsing -> data.txt modify.**
    - post로 넘어온 data가 없을 시엔 수행 x
* ### **xss해결**
  + **/js/js.js, table.php 방어 코드 작성**
 
<hr/>
  
## **2020.07.17**
* ### ~~**mergeConflict**~~ **해결**

<hr/>

## **2020.07.28**
* ### **week3 업로드**
* ### ~~**mergeConflict**~~ **해결**

 
