letcurrentIndex =0;
 const slides=document.querySelector('.slides');
 consttotalSlides=document.querySelectorAll('.card').length;
 function showSlide(index) {
 if(index>=totalSlides) {
 currentIndex=0;
 } elseif(index<0) {
 currentIndex=totalSlides-1;
 } else{
 currentIndex=index;
 }
 slides.style.transform=`translateX(-${currentIndex*100}%)`;
 }
 function moveSlide(direction) {
 showSlide(currentIndex+ direction);
 }
 // Auto-slide functionality
 setInterval(() =>{
 moveSlide(1);
 }, 4000)
 const video = document.getElementById('animeVideo');
 function downloadVideo() {
 const a = document.createElement('a');
 a.href = video.src;
 a.download = 'white.mp4';
 document.body.appendChild(a);
 a.click(a);
 document.body.removeChild(a);
 }