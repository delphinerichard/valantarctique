// import {
// 	ActivatedRouteSnapshot,
// 	CanActivate,
// 	Router,
// 	RouterStateSnapshot,
// } from "@angular/router";
// import { Injectable } from "@angular/core";
// import { UserService } from "app/shared/user/user.service";
// import { Observable, of } from "rxjs";
// import { map } from "rxjs/operators";
// import { AuthenticationService } from "./auth.service";
// import { RolesService } from "app/shared/roles/roles.service";

// @Injectable({ providedIn: "root" })
// export class AuthGuard implements CanActivate {
// 	constructor(
// 		private router: Router,
// 		private userService: UserService,
// 		private readonly authenticationService: AuthenticationService,
// 		private readonly rolesService: RolesService
// 	) {}

// 	canActivate(
// 		route: ActivatedRouteSnapshot,
// 		state: RouterStateSnapshot
// 	): Observable<boolean> {
// 		if (this.userService.isAuthenticated) {
// 			return of(true);
// 		}
// 		return this.authenticationService.checkToken().pipe(
// 			map((response) => {
// 				if (response) {
// 					// Get Roles
// 					this.rolesService.requestRoles().subscribe();
// 					return true;
// 				}
// 				this.router.navigate(["/login"], {
// 					queryParams: { returnUrl: state.url },
// 				});
// 				return false;
// 			})
// 		);
// 	}
// }
