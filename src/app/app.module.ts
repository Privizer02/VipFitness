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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
