
var arrList = [];
var Bplus = document.querySelector(".plus");
var text = document.querySelector(".text");
var contener = document.querySelector(".contener");
var Bmood = document.querySelector('.d-l');

// transform the array into a content and save it in storage
function list(){
  
    contener.innerHTML="";
   
    arrList.forEach((item,i)=>{
      var con = item.con;
      var check = item.check;
      var alarm = item.alarm;
contener.innerHTML += ` <div class="cell">
<label>
  <div class="check">✔</div>
  <input type="checkbox" onclick="check(this,${i})" ${check}>
  <p>${con}</p>
</label>


<div class="alarm" onclick="alarm(${i})" style="fill:${(alarm=="")?"gray":"rgb(255, 145, 1)"}"><svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM25 16h-3v12l9.49 5.71L33 31.24l-8-4.74V16zm-1.01-8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14z"/></svg></div>

<div class="delet" onclick="delet(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg></div>
</div>`
    });
    localStorage.setItem("llist",JSON.stringify(arrList));
   
   
  document.querySelector('.Ncell').innerHTML= arrList.length;
}
// check if the local storage have any things
if(localStorage.getItem("llist")) {
  arrList = JSON.parse(localStorage.getItem("llist"));
  list();
} 
// get the value of the text input
function add(){
  var Tinput = document.querySelector(".intext").value;
  document.querySelector(".intext").value="";
  if(Tinput!= ""){
    function obj(con,check){
this.con = con;
this.check = check;
this.alarm = "";
    }
    arrList.unshift(new obj(Tinput,""));
   
    Tinput="";
    list();

    Bplus.style = "display: flex;";
    text.style = "display: none;";
    contener.style = "grid-row: 2/9";

  }else{
    var test = ["|","H|","He|","Her|","Here|","Here|","Her|","He|","H|","|","Write here"];
    var time = 150;
    test.forEach((items)=>{
      setTimeout(()=>{document.querySelector(".intext").placeholder= items;},time);
time += 150;
    });
  }
}

// function for delete the element

 function delet(e){
  arrList.splice(e,1);
  list();
 }
 // for save the checked in the storage
 function check(c,f){
if (c.checked==true) {
  arrList[f].check= "checked";
} else {
  arrList[f].check= "";
 }
 list();
}

// add dark mood / light mood
var m = "D";
if (localStorage.getItem("lmood")) {
    var m2 = localStorage.getItem("lmood");
    if (m2=="L") {
      m="D";
    } else {
      m="L";
    }
    
}


function mood() {
  var root = document.querySelector(':root');
  if (m=="D") {
    root.style = " --back: black;--text: white;";
    m= "L";
   Bmood.innerHTML= `<?xml version="1.0" ?><svg id="Layer_1_1_" style="enable-background:new 0 0 16 16;" version="1.1" viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="8.5" cy="7.5" r="4.5"/><rect height="2" width="1" x="8"/><rect height="2" width="1" x="8" y="13"/><rect height="1" width="2" x="14" y="7"/><rect height="1" width="2" x="1" y="7"/><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.7175 12.8033)" width="1" x="12.596" y="11.096"/><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -0.9099 3.6109)" width="1" x="3.404" y="1.904"/><rect height="1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.4099 6.3033)" width="2" x="2.904" y="11.596"/><rect height="1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.7823 10.1107)" width="2" x="12.096" y="2.404"/></svg>`;
  }else{
    root.style = " --back: white;--text: black;";
    m= "D";
    Bmood.innerHTML= `<?xml version="1.0" ?><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>`;
  }
  localStorage.setItem("lmood",m);
}
mood();
// bind the enter key to add button
window.addEventListener('keyup', function (ev) {
  if (ev.keyCode === 13) {
    add();
    
  }
});
// function of plus button
function plus() {
 Bplus.style = "display: none;";
 text.style = "display: flex;";
 contener.style = "grid-row: 2/7";
 document.querySelector(".intext").focus();

}
// for get the cell an alarm
var alarmItem= 0;
function alarm(e) {
  document.querySelector(".date").style.display="flex";
  alarmItem= e;
  
}
function date() {
  arrList[alarmItem].alarm= document.querySelector(".dd").value;
 
  
  document.querySelector(".date").style.display="none";
  list();
}
console.log(arrList);
// update the time
setInterval(function () {
  var time = new Date();
  var y = time.getFullYear();
var m = time.getMonth()+1;
var d = time.getDate();
var h = time.getHours();
var min = time.getMinutes();
  var Time = y+"-"+m+"-"+d+"T"+h+":"+min;
  
  arrList.forEach((itme)=>{
    if (itme.alarm==Time) {
document.querySelector(".para").innerHTML= itme.con;
      document.querySelector(".alert").style.display="flex";
      itme.alarm= "";
      list();
    }
  })
},1000)