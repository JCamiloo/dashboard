import { CommerceResult } from './../../../../interfaces/interfaces';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnChanges {
  
  @Input() results;
  rows: CommerceResult[] = [];
  loadingIndicator = true;
  messagesTable = { emptyMessage: 'No hay datos disponibles para tu búsqueda' };
  scrollbarH = (window.innerWidth < 1200);
  columns = [
    { name: 'Id', sortable: true, },
    { name: 'Dirección', sortable: false },
    { name: 'Días de atención', sortable: false },
    { name: 'Nombre', sortable: true },
    { name: 'Nit', sortable: true },
    { name: 'Propietario', sortable: true },
    { name: 'Teléfono', sortable: false },
    { name: 'Ventas', sortable: true },
    { name: 'Horario', sortable: false },
  ];

  constructor() {
    window.onresize = () => {
      this.scrollbarH = (window.innerWidth < 1200);
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.results && !changes.results.firstChange){
      setTimeout(() => {
        this.loadingIndicator = false;
        this.rows = this.results;
      }, 1500);
    }
  }
}