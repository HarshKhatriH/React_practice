let leftButton = document.getElementById('img-btn-left');
let rightButton = document.getElementById(' img-btn-right')
const imageItem = document.querySelectorAll('.image-item')

// let startButton = 0;
// let endButton = (imageItem.length-1) 

// console.log(endButton)

// rightButton.addEventListener(('click'), ()=>{

//     if(startButton<endButton)

//     startButton = startButton-100;

//      imageItem.forEach((item) =>
//     {  
//         item.style.transform = `translateX(${startButton}%)`
//     })

// })
    
let currentIndex = 0;
let maxIndex = imageItem.length - 1;

rightButton.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
  if(currentIndex==maxIndex)
  {
    currentIndex=0;
    updateSlider();
  }
});

leftButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
  
});

function updateSlider() {
  imageItem.forEach((item) => {
    item.style.transform = `translateX(-${currentIndex * 100}%)`;
    item.style.transition = "transform 0.3s ease-in-out";
  });
}
   



