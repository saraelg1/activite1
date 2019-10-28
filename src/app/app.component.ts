import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts=[
  	{
  		title : "Post 1",
  		content : "ceci est le contenu du post 1",
  		loveIts : 0,
  		created_at : new Date()
  	},
  	{
  		title : "Post 2",
  		content : "ceci est le contenu du post 2",
  		loveIts : 0,
  		created_at : new Date()
	},
  	{
  		title : "Post 3",
  		content : "ceci est le contenu du post 3",
  		loveIts : 0,
  		created_at : new Date()
  	}
  ];

}
