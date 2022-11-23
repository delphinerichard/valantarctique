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
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AuthModule } from "@auth0/auth0-angular";
import { PostListComponent } from "./admin/post-list/post-list.component";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAtD0gKHcqFaqd0it7pZQDQfwwFm4sWSdE",
	authDomain: "valantarctique-b7206.firebaseapp.com",
	projectId: "valantarctique-b7206",
	storageBucket: "valantarctique-b7206.appspot.com",
	messagingSenderId: "395652256191",
	appId: "1:395652256191:web:1c56ea2ba30c265d55910a",
	measurementId: "G-1KTGHT8SXS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
		MatSnackBarModule,
		AuthModule.forRoot({
			domain: "dev-gfb1q8bbhz7br08r.us.auth0.com",
			clientId: "sIHSEXYJmLc2PGLRbqxLr0Vme7SOvWEG",
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
