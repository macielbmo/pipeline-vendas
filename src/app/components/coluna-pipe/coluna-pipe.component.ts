import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card-pipe/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coluna-pipe',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './coluna-pipe.component.html',
  styleUrl: './coluna-pipe.component.scss'
})
export class ColunaPipeComponent implements OnInit{

  @Input({
    required: true
  }) public titleName: string = ''

  @Input({
    required: true
  }) public dados: Array<object> = []


  ngOnInit(): void {
    console.log(this.dados)
  }
}
