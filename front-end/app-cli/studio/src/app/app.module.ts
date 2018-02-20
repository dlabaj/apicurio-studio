import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApisServiceProvider} from './services/apis.service.provider';
import {LinkedAccountsServiceProvider} from './services/accounts.service.provider';
import {AuthenticationServiceProvider} from './services/auth.service.provider';
import {ConfigService} from './services/config.service';
import {AuthenticationCanActivateGuard} from './guards/auth.guard';
import {DashboardPageComponent} from './pages/dashboard/dashboard.page';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {BreadcrumbComponent} from './components/breadcrumbs/breadcrumb.component';
import {PageErrorComponent} from './components/page-error.component';
import {VerticalNavComponent} from './components/vertical-nav.component';
import {NavHeaderComponent} from './components/nav-header.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, DashboardPageComponent, BreadcrumbsComponent, BreadcrumbComponent, PageErrorComponent,
    VerticalNavComponent, NavHeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [
    ApisServiceProvider, LinkedAccountsServiceProvider, AuthenticationServiceProvider, ConfigService,
    AuthenticationCanActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
