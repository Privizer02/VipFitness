import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './home/nav-components/about-us/about-us.component';
import { TransformationsComponent } from './home/transformations/transformations.component';
import { PersonalTrainingComponent } from './home/nav-components/personal-training/personal-training.component';
import { ClassesComponent } from './home/nav-components/classes/classes.component';
import { GymComponent } from './home/nav-components/gym/gym.component';
import { OtherServicesComponent } from './home/nav-components/other-services/other-services.component';
import { SpaceRentalsComponent } from './home/nav-components/space-rentals/space-rentals.component';
import { BookOnlineComponent } from './home/nav-components/book-online/book-online.component';
import { TransformationComponent } from './home/nav-components/transformation/transformation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'transformation', component: TransformationComponent },
  { path: 'presonal-training', component: PersonalTrainingComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'gym', component: GymComponent },
  { path: 'other-services', component: OtherServicesComponent },
  { path: 'space-rentals', component: SpaceRentalsComponent },
  { path: 'book-online', component: BookOnlineComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
