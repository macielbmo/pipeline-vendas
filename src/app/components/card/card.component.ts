import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface IdataCard {
  id: number,
  name: string,
  cod: number,
  valor: number
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input({
    required: true
  }) public dataCard: any = {}

  ngOnInit(): void {
    console.log(this.dataCard)
  }
}
