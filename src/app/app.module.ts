import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FormComponent } from './home/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParallaxSectionComponent } from './home/parallax-section/parallax-section.component';
import { StartTodayComponent } from './home/start-today/start-today.component';
import { TransformationsComponent } from './home/transformations/transformations.component';
import { ParallaxSectionTwoComponent } from './home/parallax-section-two/parallax-section-two.component';
import { PartnershipComponent } from './home/partnership/partnership.component';
import { AboutUsComponent } from './home/nav-components/about-us/about-us.component';
import { PersonalTrainingComponent } from './home/nav-components/personal-training/personal-training.component';
import { ClassesComponent } from './home/nav-components/classes/classes.component';
import { GymComponent } from './home/nav-components/gym/gym.component';
import { OtherServicesComponent } from './home/nav-components/other-services/other-services.component';
import { SpaceRentalsComponent } from './home/nav-components/space-rentals/space-rentals.component';
import { BookOnlineComponent } from './home/nav-components/book-online/book-online.component';
import { TransformationComponent } from './home/nav-components/transformation/transformation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent,
    FormComponent,
    ParallaxSectionComponent,
    StartTodayComponent,
    TransformationsComponent,
    ParallaxSectionTwoComponent,
    PartnershipComponent,
    AboutUsComponent,
    PersonalTrainingComponent,
    ClassesComponent,
    GymComponent,
    OtherServicesComponent,
    SpaceRentalsComponent,
    BookOnlineComponent,
    TransformationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
