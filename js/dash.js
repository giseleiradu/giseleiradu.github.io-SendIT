function openNav() {
    document.querySelector('#mySidenav').style.width = "250px";

}
function closeNav() {
    document.querySelector('#mySidenav').style.width = "0";
}


function move() {
    var elem = document.querySelector("#myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;

            elem.style.width = width + '%';
            elem.innerHTML=width*1 + '%';
        }
    }
}

function edit(){
    var modal = document.querySelector(".mod");
    var klik = document.querySelector(".clik");
    var back = document.querySelector(".backdrop");
    var span = document.getElementsByClassName("close")[0];
    klik.onclick = function(){
        modal.style.display = "block";
        back.style.display = "block";
        back.style.opacity= "0.5";
        // back.style.opacity="0.5"
    }
    span.onclick= function(){
        modal.style.display="none";
        back.style.display="none";
    }
    back.onclick= function(){
        modal.style.display="none";
        back.style.display="none";
    }
   
}
// Window.onclick = function(event){
//     if(event.target== modal){
//         modal.style.display="none";
//     }
// }

function myFunction(){
    var input, filter, ul, li, a, i;
    input= document.querySelector("#myInput");
    filter= input.value.toUpperCase();
    ul= document.querySelector("#myUL");
    li=ul.getElementsByTagName("li");
    
    for(i=0; i<li.length; i++){
        a=li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
            li[i].style.display="";
            
        }else{
            li[i].style.display="none";
            
        }
    }
}

//Admin Dashboard
function view(evt, cityName){
    var i, tabcontent, tablinks;
    tabcontent= document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
    tablinks= document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++){
        tablinks[i].className=tablinks[i].className.replace("active", "");
        
    }
    document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active"; 
} 
document.getElementById('defaultOpen').click();