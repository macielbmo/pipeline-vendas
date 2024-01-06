import { Component } from '@angular/core';
import { ColunaPipeComponent } from '../../components/coluna-pipe/coluna-pipe.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [CommonModule, ColunaPipeComponent],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.scss'
})
export class PipelineComponent {
  public titleName = 'Mercado'

  public data = [
    {
      id: 1,
      title: 'Mercadooo',
      dados: [
        {
          id: 1,
          name: 'Caseiros da Cida',
          cod: 85499,
          valor: 4800,
        },
        {
          id: 2,
          name: 'Pastelaria Beiçola',
          cod: 45863,
          valor: 7250,
        },
        {
          id: 3,
          name: 'Pipoqueiro LS',
          cod: 13548,
          valor: 4800,
        },
        {
          id: 4,
          name: 'Banca de Revista Santos',
          cod: 96347,
          valor: 2460,
        },
        {
          id: 5,
          name: 'Supermercado BH',
          cod: 24587,
          valor: 16000,
        }
      ]
    },{
      id: 1,
      title: 'Apresentado',
      dados: [
        {
          id: 4,
          name: 'Banca de Revista Santos',
          cod: 96347,
          valor: 2460,
        },
        {
          id: 5,
          name: 'Supermercado BH',
          cod: 24587,
          valor: 16000,
        }
      ]
    },{
      id: 1,
      title: 'Amostra',
      dados: [
        {
          id: 3,
          name: 'Pipoqueiro LS',
          cod: 13548,
          valor: 4800,
        },
        {
          id: 4,
          name: 'Banca de Revista Santos',
          cod: 96347,
          valor: 2460,
        },
        {
          id: 5,
          name: 'Supermercado BH',
          cod: 24587,
          valor: 16000,
        }
      ]
    },{
      id: 1,
      title: 'Padronizado',
      dados: [
        {
          id: 4,
          name: 'Banca de Revista Santos',
          cod: 96347,
          valor: 2460,
        },
        {
          id: 5,
          name: 'Supermercado BH',
          cod: 24587,
          valor: 16000,
        }
      ]
    },{
      id: 1,
      title: 'Em negociação',
      dados: [
        {
          id: 2,
          name: 'Pastelaria Beiçola',
          cod: 45863,
          valor: 7250,
        },
        {
          id: 3,
          name: 'Pipoqueiro LS',
          cod: 13548,
          valor: 4800,
        },
      ]
    },{
      id: 1,
      title: 'Contatos do Dia',
      dados: [
        {
          id: 2,
          name: 'Pastelaria Beiçola',
          cod: 45863,
          valor: 7250,
        },
      ]
    },{
      id: 1,
      title: 'Faturado',
      dados: [
        {
          id: 5,
          name: 'Supermercado BH',
          cod: 24587,
          valor: 16000,
        }
      ]
    }
  ]
}
