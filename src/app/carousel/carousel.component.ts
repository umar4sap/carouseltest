import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  imagesUrls:any=[
  "https://source.unsplash.com/random?landscape,burj khalifa",
  "https://source.unsplash.com/random?landscape,car",
  "https://source.unsplash.com/random?landscape,burj khalifa",
  "https://source.unsplash.com/random?landscape,car",
  "https://source.unsplash.com/random?landscape,burj khalifa",
  "https://source.unsplash.com/random?landscape,car",
  "https://source.unsplash.com/random?landscape,burj khalifa",
  "https://source.unsplash.com/random?landscape,car",
  "https://source.unsplash.com/random?landscape,burj khalifa",
  "https://source.unsplash.com/random?landscape,car",
  "https://source.unsplash.com/random?landscape,burj khalifa",
  "https://source.unsplash.com/random?landscape,car"
]

  constructor() { }

  curSlide:any;
  maxSlide:any;

  ngOnInit(): void {
    var slides = document.querySelectorAll<HTMLElement>(".slide");;
    
    // Select all slides
    setTimeout(() => {
      slides = document.querySelectorAll<HTMLElement>(".slide");
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;

      });
      // current slide counter
 this.curSlide = 0;



// maximum number of slides
 this.maxSlide = this.imagesUrls.length -1;

    }, 10);

  
// loop through slides and set each slides translateX property to index * 100% 
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });


// select next slide button
const nextSlide = document.querySelector(".btn-next");
const nextSlideWeb = document.querySelector(".btn-next-web");



// add event listener and navigation functionality
nextSlide!.addEventListener("click",  () => {
  // check if current slide is the last and reset current slide
  if (this.curSlide === this.maxSlide) {
    this.curSlide = 0;
  } else {
    this.curSlide++;
  }
  //   move slide by -100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${100 * (indx - this.curSlide)}%)`;
});
});
// add event listener and navigation functionality
nextSlideWeb!.addEventListener("click",  () => {
  // check if current slide is the last and reset current slide
  if (this.curSlide === this.maxSlide) {
    this.curSlide = 0;
  } else {
    this.curSlide++;
  }
//   move slide by -100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${100 * (indx - this.curSlide)}%)`;
});
});










//previos btn

// select prev slide button

const prevSlide = document.querySelector(".btn-prev");
const prevSlideWeb = document.querySelector(".btn-prev-web");

// add event listener and navigation functionality
prevSlide!.addEventListener("click",  () => {
  // check if current slide is the first and reset current slide to last
  if (this.curSlide === 0) {
    this.curSlide = this.maxSlide;
  } else {
    this.curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - this.curSlide)}%)`;
  });
});

// add event listener and navigation functionality
prevSlideWeb!.addEventListener("click",  () => {
  // check if current slide is the first and reset current slide to last
  if (this.curSlide === 0) {
    this.curSlide = this.maxSlide;
  } else {
    this.curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - this.curSlide)}%)`;
  });
});


  }



  

}
