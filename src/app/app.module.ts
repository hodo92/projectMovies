import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { MoviesService } from './movies.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { BudgetComponent } from './budget/budget.component';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    MyMoviesComponent,
    MovieCardComponent,
    MoviesFilterComponent,
    BudgetComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
