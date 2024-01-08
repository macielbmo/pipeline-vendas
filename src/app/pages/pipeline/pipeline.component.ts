import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ColunaPipeComponent } from '../../components/coluna-pipe/coluna-pipe.component';
import { HeaderPipeComponent } from '../../components/header-pipe/header-pipe.component';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [CommonModule, ColunaPipeComponent, HeaderPipeComponent],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.scss'
})
export class PipelineComponent {
  public titleName = 'Mercado'

  public data = [
    {
      id: 1,
      title: 'Perfil Sem Contato',
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
      title: 'Apresentação Realizada',
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
      title: 'Amostra Enviada',
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
      title: 'Produto Padronizado',
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
      title: 'Em Negociação',
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
      title: 'Ultimos Faturamentos',
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
