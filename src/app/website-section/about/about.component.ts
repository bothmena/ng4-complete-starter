import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private meta: Meta, private title: Title ) {

    this.title.setTitle('My spiffy about page');
    this.meta.addTags([
      {
        name: 'author', content: 'Aymen Ben Othmen',
      },
      {
        name: 'keywords', content: 'angular 4 about, about seo',
      },
      {
        name: 'description', content: 'This is my about page description!!',
      }
    ]);
  }

  ngOnInit() {
  }

}
