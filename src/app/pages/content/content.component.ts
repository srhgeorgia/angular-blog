import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  cover: string = '';
  title: string = '';
  description: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => (this.id = params.get('id')));

    this.setValues(this.id);
  }

  setValues(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.cover = result.photo;
    this.title = result.title;
    this.description = result.description;
  }
}
