import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsernameComponent } from './components/username/username.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { IpListComponent } from './components/ip-list/ip-list.component';
import { IpItemComponent } from './components/ip-item/ip-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { FetchErrorComponent } from './components/fetch-error/fetch-error.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateIpItemComponent } from './components/create-ip-item/create-ip-item.component';
import { ReactiveFormsModule }from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ModalCreateSuccessComponent } from './components/modal-create-success/modal-create-success.component';
import { CopyStringComponent } from './components/copy-string/copy-string.component';
import { EmptyPlaceholderComponent } from './components/empty-placeholder/empty-placeholder.component';
import { SortPipe } from './pipes/sort.pipe';
import { IpListLimitComponent } from './components/ip-list-limit/ip-list-limit.component';
import { ModalDeleteAllConfirmComponent } from './components/modal-delete-all-confirm/modal-delete-all-confirm.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { FormsModule } from '@angular/forms';
import { ViewIpItemComponent } from './components/view-ip-item/view-ip-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapPageComponent,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    UsernameComponent,
    SearchPanelComponent,
    IpListComponent,
    IpItemComponent,
    LoaderComponent,
    FetchErrorComponent,
    CreateIpItemComponent,
    ModalComponent,
    ModalCreateSuccessComponent,
    CopyStringComponent,
    EmptyPlaceholderComponent,
    SortPipe,
    IpListLimitComponent,
    ModalDeleteAllConfirmComponent,
    LoadingScreenComponent,
    ViewIpItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
