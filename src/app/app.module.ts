import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PanelComponent } from './components/panel/panel.component';
import { UsernameComponent } from './components/username/username.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { IpListComponent } from './components/ip-list/ip-list.component';
import { IpItemComponent } from './components/ip-item/ip-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { FetchErrorComponent } from './components/fetch-error/fetch-error.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapPageComponent,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    PanelComponent,
    UsernameComponent,
    SearchPanelComponent,
    IpListComponent,
    IpItemComponent,
    LoaderComponent,
    FetchErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
