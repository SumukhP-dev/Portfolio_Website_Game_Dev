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
  selector: 'app-aherosjourney',
  imports: [CommonModule, NgbCarouselModule, FormsModule],
  templateUrl: './a-heros-journey.component.html',
})
export class AherosjourneyComponent {
  images = [
    '/images/game-dev/a-heros-journey-game/StartImage.png',
    '/images/game-dev/a-heros-journey-game/IndoorsImage.png',
    '/images/game-dev/a-heros-journey-game/NPCDialogueImage.png',
    '/images/game-dev/a-heros-journey-game/OutdoorsImage.png',
    '/images/game-dev/a-heros-journey-game/IndoorsImage.png',
    '/images/game-dev/a-heros-journey-game/Scenario1.png',
    '/images/game-dev/a-heros-journey-game/Scenario2.png',
  ];

  altTexts = [
    'A Hero\'s Journey RPG - Start Screen',
    'A Hero\'s Journey RPG - Indoors Scene',
    'A Hero\'s Journey RPG - NPC Dialogue',
    'A Hero\'s Journey RPG - Outdoors Scene',
    'A Hero\'s Journey RPG - Indoors Scene',
    'A Hero\'s Journey RPG - Scenario 1',
    'A Hero\'s Journey RPG - Scenario 2',
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
