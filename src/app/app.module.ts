import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomepageComponent } from "./homepage/homepage.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthButtonComponent } from "./auth/services/auth-button.component";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

import { AuthModule } from "@auth0/auth0-angular";

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		ToolbarComponent,
		DashboardComponent,
		AuthButtonComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		AuthModule.forRoot({
			domain: "dev-gfb1q8bbhz7br08r.us.auth0.com",
			clientId: "sIHSEXYJmLc2PGLRbqxLr0Vme7SOvWEG",
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
