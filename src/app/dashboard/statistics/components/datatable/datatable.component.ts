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
      }, 800);
    }
  }
}