import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		HttpClientModule,
		SharedModule,
		AppRoutingModule
	],
	entryComponents: [],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
