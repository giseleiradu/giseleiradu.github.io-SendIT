function move(evt, num) {
    var elem = document.querySelector("#myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= num) {
            clearInterval(id);
        } else {
            width++;

            elem.style.width = width + '%';
            elem.innerHTML=width*1 + '%';
        }
    }
}

function edit(){
    var modal = document.querySelector("#order");
    var klik = document.querySelector("#new");
    var span = document.getElementsByClassName("close")[0];
    klik.onclick = function(){
        modal.style.display = "block";
    }
    span.onclick= function(){
        modal.style.display="none";
    }

   
}
var modal, klik, span;
function orders(){
    modal = document.querySelector("#list");
    klik = document.querySelector( "#orders");
    span = document.getElementsByClassName("clos")[0];
    klik.onclick = function(){
        modal.style.display = "block";
    }
    span.onclick= function(){
        modal.style.display="none";
    }
   
}
function editProfile(){
    modal = document.querySelector("#profile");
    klik = document.querySelector("#klik");
    span = document.getElementsByClassName("cloz")[0];
    klik.onclick = function(){
        modal.style.display = "block";
    }
    span.onclick= function(){
        modal.style.display="none";
    }
   
}
Window.onclick = function(event){
    if(event.target== modal){
        modal.style.display="none";
    }
}

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
function view(evt, idName){
    var i, tabcontent, tablinks;
    tabcontent= document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
    tablinks= document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++){
        tablinks[i].className=tablinks[i].className.replace("active", "");
        
    }
    document.getElementById(idName).style.display = "block";
        evt.currentTarget.className += " active"; 
} 

// document.getElementById('defaultOpen').style.display="block";

//User Dash JS

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    document.querySelector(".entrance").style.display= "none";
    evt.currentTarget.className += " active";
}

document.getElementById('defaultOpen').click();
