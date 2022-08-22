import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @Input() images: carouselImage[] = [
    {
      imageSrc:
        '../assets/images/h1.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
      '../assets/images/h2.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
      '../assets/images/h3.png',
      imageAlt: 'person1',
    },
    
  ]
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000; //3 Seconds

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  // changes Slide in every 3 seconds
  autoSlideImages(): void{
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // sets index of image on dot/indicator click::::::::::::::::::::::::::::::::::
  selectImage(index: number): void {
    this.selectedIndex = index;

  }

  // for prev and next arrows:::::::::::::::::::::::::::::::::::::::::::::::::::::
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick(): void{
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}