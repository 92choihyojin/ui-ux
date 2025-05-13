// 1. 객체를 찾는다. Scanner scan = new Scanner(); => 객체 배열 => Collection Freamwork
    // document ( 화면에 있는 모든 UI객체를 다 가지고 있다.) => [ How search?? ]css 선택자 기능을 가지고 찾는다.
    // 한개만 찾고 싶으면 id 값을 준다. class 이름으로 찾으면 => 객체 참조배열 [첨자] 반복문을 이용하면 된다.
    let h1obj=document.querySelector("#heading");
    
    // 2. 객체를 내 마음대로 설정 ( 기본속성 , style 속성 , 이벤트 속성:on (적으면나옴) , content: 이벤트설정 )
    h1obj.onclick = ()=>{
      h1obj.style.color = "#ff0000";
      window.alert("h1클릭하셨습니다.");
    } ;