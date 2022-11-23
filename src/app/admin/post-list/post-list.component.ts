import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { app } from "src/app/app.module";
import {
	getFirestore,
	collection,
	getDocs,
	Firestore,
} from "firebase/firestore/lite";

export interface Post {
	id: number;
	title: string;
	updated: Date;
	content: string;
}

@Component({
	selector: "app-post-list",
	templateUrl: "./post-list.component.html",
	styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit {
	postList: Post[] = [];

	constructor(private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		const db = getFirestore(app);
		this.getPosts(db).then((list: Post[]) => {
			this.postList = list;
		});
	}

	// Get a list of posts from your database
	async getPosts(db: Firestore): Promise<Post[]> {
		const postsCol = collection(db, "posts");
		const postSnapshot = await getDocs(postsCol);
		let postList = postSnapshot.docs.map((doc) => doc.data());
		postList = postList.map((post) => {
			return { ...post, updated: new Date(post["updated"].seconds * 1000) };
		});
		return postList as Post[];
	}

	onDelete(id: number): void {
		this._snackBar.open(`Suppression de l'article ${id}`, "OK", {
			duration: 5000,
		});
	}

	onUpdate(id: number): void {
		this._snackBar.open(`Modification de l'article ${id}`, "OK", {
			duration: 5000,
		});
	}

	onDisplay(id: number): void {
		this._snackBar.open(`Affichage de l'article ${id}`, "OK", {
			duration: 5000,
		});
	}
}
