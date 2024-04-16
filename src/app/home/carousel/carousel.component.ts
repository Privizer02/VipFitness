import { Component } from '@angular/core';
import {
  NgbCarouselModule,
  NgbCarouselConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

  providers: [NgbCarouselConfig],
})
export class CarouselComponent {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
