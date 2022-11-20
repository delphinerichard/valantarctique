import { DOCUMENT } from "@angular/common";
import { Component, Inject, Input, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
	selector: "app-toolbar",
	templateUrl: "./toolbar.component.html",
	styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {

	constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService) {}
	
	ngOnInit(): void {
	}
}
