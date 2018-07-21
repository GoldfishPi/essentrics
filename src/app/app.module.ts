import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ScheduleComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
