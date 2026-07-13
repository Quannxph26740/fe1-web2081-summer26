import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import {StoriesComponent} from './pages/stories/stories';
import { ProductsComponent } from './pages/products/products.component';
import { AddStoryComponent } from './pages/add-story/add-story';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-story', component: AddStoryComponent },

];