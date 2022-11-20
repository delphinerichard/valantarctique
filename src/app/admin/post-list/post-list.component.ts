import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  updated: Date;
  content: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: Post[] = [
    {
      title: 'Photos',
      updated: new Date('1/1/16'),
      content: 'bonjour'
    },
    {
      title: 'Recipes',
      updated: new Date('1/17/16'),
      content: 'bonjour'
    },
    {
      title: 'Work',
      updated: new Date('1/28/16'),
      content: 'bonjour'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
