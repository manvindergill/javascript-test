import { Component, OnInit } from '@angular/core';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {_id:3, text: 'javascript', cols: 3, rows: 3, color: 'lightblue', img_src: 'assets/images/js.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
