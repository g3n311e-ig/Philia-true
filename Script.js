const sky = document.getElementById("sky");

let confessions = [
 "She always saved me a seat.",
 "We haven't spoken in years, but I still think of them.",
 "My friend believed in me before I believed in myself.",
 "Some friendships feel like coming home."
];


let stars = [];


function createStar(text){

 let star=document.createElement("div");

 star.className="star";

 let x=Math.random()*90;
 let y=Math.random()*70;

 star.style.left=x+"%";
 star.style.top=y+"%";

 star.onclick=()=>{
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("message").innerHTML=
    text;
 };

 sky.appendChild(star);

 stars.push({
   x:x,
   y:y
 });

}


confessions.forEach(createStar);



function closePopup(){
 document.getElementById("popup")
 .classList.add("hidden");
}



function addConfession(){

 let box=document.getElementById("confession");

 if(box.value.trim()=="") return;

 createStar(box.value);

 box.value="";

 alert("Your star has joined the constellation ✨");

}
