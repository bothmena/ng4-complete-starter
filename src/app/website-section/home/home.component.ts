import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private meta: Meta, private title: Title ) {

    this.title.setTitle('My spiffy home page');
    this.meta.addTags([
      {
        name: 'author', content: 'Aymen Ben Othmen',
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo',
      },
      {
        name: 'description', content: 'This is my home page description!!',
      }
    ]);
  }

  ngOnInit() {
  }

}
