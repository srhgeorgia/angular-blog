import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent implements OnInit {

  @Input()
  photo: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';

  constructor() {}

  ngOnInit(): void{}
}
