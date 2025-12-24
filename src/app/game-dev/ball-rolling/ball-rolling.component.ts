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
  selector: 'app-ballrollinggame',
  imports: [CommonModule, NgbCarouselModule, FormsModule],
  templateUrl: './ball-rolling.component.html',
})
export class BallrollingComponent {
  images = [
    '/images/game-dev/rolling-ball-game/SceneImage.png',
    '/images/game-dev/rolling-ball-game/StartImage.png',
    '/images/game-dev/rolling-ball-game/WinImage.png',
    '/images/game-dev/rolling-ball-game/LoseImage.png',
  ];

  altTexts = [
    'Unity Ball Rolling Game - Game Scene',
    'Unity Ball Rolling Game - Start Screen',
    'Unity Ball Rolling Game - Win Screen',
    'Unity Ball Rolling Game - Lose Screen',
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

