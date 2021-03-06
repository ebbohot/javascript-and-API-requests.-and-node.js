let allowsound="false";
//===================================================================//
const slides=document.querySelectorAll('.slide')
let index=0
const nextSlide = () => {
    slides.forEach(slide=>{
    slide.style.display="none"    
    })
    if(index >= slides.length-1){
        index = 0 
    }else{
        index++
    }
    slides[index].style.display='block'
}
setInterval(()=>{
    nextSlide()
},3000);
//===================================================================//
const openMenu=document.getElementById('openMenu')
const menu=document.getElementById('menu').classList
openMenu.onclick=()=>menu.contains('activeMenu')
? menu.remove('activeMenu')
:menu.add('activeMenu')
//===================================================================//
const catPictureUrl="https://aws.random.cat/meow"
const image=document.getElementById('image')

const fetchImage=async()=>{
    const res = await fetch(catPictureUrl)
    const json = await res.json()
    image.setAttribute('src',json.file)
}
fetchImage() 
//===================================================================//

  function printDate(){
    var date = new Date()
    var d = date.getDate();
    document.getElementById("nutid").innerHTML =" DATE: "+ date.getDate() +"/"+(date.getMonth()+1) +"/"+date.getFullYear();  
}
//===================================================================//
var audio = document.getElementById("audio");
var playPauseBTN =document.getElementById('playPauseBTN')
var count=0;
function playPause(){
if(count==0){    
count=1;
audio.play();
playPauseBTN.innerHTML="pause  &#9208;";
}else{
    count=0;
    audio.pause();
    playPauseBTN.innerHTML=" \uf001;";
}
}
//==================================================================================
function translatetoenglish(){  
document.getElementById('aboutusp').innerHTML='We who started Hot Yoga Stockholm are called Angelica Majoros and Johanna Horisk and have been friends since our early teens. Since 2007, we run one of the first yoga schools in Stockholm, which has grown into a large community for everyone who shares a passion for yoga. We have a strong ambition to constantly develop, improve and deepen our knowledge of yoga and convey it to the students who train in the yoga studio. We do this together with the rest of the teaching team. In the studio, the teachers meet every week to immerse themselves in a subject in yoga. It can range from discussions about how to teach most effectively, to helping someone who does yoga with a hip prosthesis, various injuries or illnesses to immersing themselves in the yoga philosophy and the eight branches of yoga. The teachers also continuously take each other s yoga courses and give each other feedback. All to support, help and challenge each other to constantly develop and improve as teachers. We love to practice, teach and talk about yoga. Improve and deepen our knowledge in yoga and convey it to the students who practice in the yoga studio. This is what we learn'
}
function translattosvenska(){  
    document.getElementById('aboutusp').innerHTML='Vi som startade Hot Yoga Stockholm heter Angelica Majoros och Johanna Horisk och ??r v??nner sedan tidiga ton??ren. Sedan 2007 driver vi en av de f??rsta yogaskolorna i Stockholm vilket vuxit till ett stort community f??r alla som delar en passion f??r yoga. Vi har en stark ambition att hela tiden utveckla, f??rb??ttra och f??rdjupa v??r kunskap inom yogan och f??rmedla den vidare till de elever som praktiserar i yogastudion. Detta g??r vi tillsammans med resten av l??rar-teamet. I studion tr??ffas l??rarna varje vecka f??r att f??rdjupa sig i n??got ??mne inom yogan. Det kan vara alltifr??n diskussioner kring hur man undervisar mest effektivt, hj??lper n??gon som yogar med en h??ftprotes, olika skador eller sjukdomstillst??nd till att tillsammans f??rdjupa sig inom yogafilosofin och yogans ??tta grenar.L??rarna tar dessutom kontinuerligt varandras yogaklasser och ger varandra feedback. Allt f??r att st??tta, hj??lpa och utmana varandra att hela tiden utvecklas och f??rb??ttras som l??rare. Vi ??lskar att praktisera, undervisa och prata om yoga.f??rb??ttra och f??rdjupa v??r kunskap inom yogan och f??rmedla den vidare till de elever som praktiserar i yogastudion. Detta g??r vi l??rar.'
    }
    //==================================================================================
