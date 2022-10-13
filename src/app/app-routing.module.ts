import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewIpItemComponent } from './components/view-ip-item/view-ip-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'view/:ipitemId', component: ViewIpItemComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
