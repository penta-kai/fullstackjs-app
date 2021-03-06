import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/classes/auth.guard";
import {TokenInterceptor} from "./shared/classes/token.interceptor";

import {AppComponent} from './app.component';

import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {OverviewPageComponent} from './overview-page/overview-page.component';
import {AnalyticsPageComponent} from './analytics-page/analytics-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {CategoriesPageComponent} from './categories-page/categories-page.component';
import {CategoriesService} from "./shared/services/categories.service";
import {LoaderComponent} from './shared/components/loader/loader.component';
import {CategoriesFormComponent} from './categories-page/categories-form/categories-form.component';
import {PositionsFormComponent} from './categories-page/categories-form/positions-form/positions-form.component';
import {PositionsService} from "./shared/services/positions.service";
import {OrderCategoriesComponent} from './order-page/order-categories/order-categories.component';
import {OrderPositionsComponent} from './order-page/order-positions/order-positions.component';


@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent,
        SiteLayoutComponent,
        LoginPageComponent,
        RegisterPageComponent,
        OverviewPageComponent,
        AnalyticsPageComponent,
        HistoryPageComponent,
        OrderPageComponent,
        CategoriesPageComponent,
        LoaderComponent,
        CategoriesFormComponent,
        PositionsFormComponent,
        OrderCategoriesComponent,
        OrderPositionsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor
        },
        CategoriesService,
        PositionsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
