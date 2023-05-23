import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../page/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchComponent } from './components/search/search.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations:[
    SearchComponent,
    HomeComponent,
    TopBarComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  exports: [
    SearchComponent,
    HomeComponent
  ],
})
export class SharedModule {}
