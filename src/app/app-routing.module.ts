import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
	{
		path: "",
		component: HomepageComponent,
	},
	{
		path: "admin/dashboard",
		component: DashboardComponent,
		canActivate: [AuthGuard]
	},
	{
		path: "**",
		redirectTo: "",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
