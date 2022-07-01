alert("For better experience use headphones 🎧,\nAnd open it in your Desktop/Laptop💻,\nThanks for you visit😎.");
let elem = document.getElementsByTagName("h1");
// console.log(elem);
let size=30;


for (let i=1;i<elem.length;i++){
    elem[i].style.paddingLeft=size+"px";
    size+=30;

}
let audio = new Audio('./sound3.mp3');
function playSound(optName){
    // console.log(optName);
    optName= audio.play();
}
if(screen.width<430){
    for (let i=1;i<elem.length;i++){
        size=0
        elem[i].style.paddingLeft=size+"px";
    }    
}
if(screen.width<=425){
    for (let i=1;i<elem.length;i++){
        size=30;
        elem[i].style.paddingLeft=size+"%";
    }  
 }