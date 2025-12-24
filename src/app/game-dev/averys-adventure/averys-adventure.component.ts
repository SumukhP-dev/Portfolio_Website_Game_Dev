import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-averysadventure',
  imports: [CommonModule, NgbCarouselModule, FormsModule],
  templateUrl: './averys-adventure.component.html',
})
export class AverysadventureComponent {
  images = [
    '/images/game-dev/averys-adventure/StartImage.png',
    '/images/game-dev/averys-adventure/BeginningImage.png',
    '/images/game-dev/averys-adventure/MidwayImage.png',
    '/images/game-dev/averys-adventure/WinImage.png',
  ];

  altTexts = [
    'Avery\'s Adventure - Start Screen',
    'Avery\'s Adventure - Beginning Level',
    'Avery\'s Adventure - Midway Level',
    'Avery\'s Adventure - Win Screen',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel: NgbCarousel = new NgbCarousel();

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}

