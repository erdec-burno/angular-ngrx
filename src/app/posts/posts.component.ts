import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  Posts = [
    {id: 1, label: 'Url link', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'http://posts.com/1'},
    {id: 2, label: 'Url link', title: 'Lorem ipsum dolor sit amet, consectetur.', link: 'http://posts.com/2'},
    {id: 3, label: 'Url link', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'http://posts.com/3'},
    {id: 4, label: 'Data Desc', title: 'Title 4 with data', link: ''},
    {id: 5, label: 'Url link', title: 'Title with no link', link: ''},
  ];

  CheckUrlLink(label: string, url: string): string {
    if (url.length > 5 && label === 'Url link')
      return '<a href="' + url + '">' + url + '</a>';
    return '';
  }

}
