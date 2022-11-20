import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomepageComponent } from "./homepage/homepage.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { AuthButtonComponent } from "./auth/services/auth-button.component";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import {MatListModule} from '@angular/material/list'; 

import { AuthModule } from "@auth0/auth0-angular";
import { PostListComponent } from './admin/post-list/post-list.component';

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		ToolbarComponent,
		DashboardComponent,
		AuthButtonComponent,
  PostListComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatListModule,
		AuthModule.forRoot({
			domain: "dev-gfb1q8bbhz7br08r.us.auth0.com",
			clientId: "sIHSEXYJmLc2PGLRbqxLr0Vme7SOvWEG",
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
