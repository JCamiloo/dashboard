import { CommerceResult } from './../../../../interfaces/interfaces';
import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() results;

  rows: CommerceResult[] = [];
  tempRows: CommerceResult[] = [];
  loadingIndicator = true;
  messagesTable = { emptyMessage: 'No hay datos disponibles para tu búsqueda' };
  scrollbarH = (window.innerWidth < 1200);
  searchField = new FormControl('');
  searchFieldSubs: Subscription;


  constructor() {
    window.onresize = () => {
      this.scrollbarH = (window.innerWidth < 1200);
    };
  }

  ngOnInit() {
    this.initFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.results && !changes.results.firstChange){
        this.loadingIndicator = false;
        this.rows = this.results;
        this.tempRows = [...this.results];
    }
  }

  // Se usa debounceTime para no disparar el subscribe por cada tecla presionada.
  // Se usa map para remover espacios en blanco adelante y atrás.
  // Se usa distinctUntilChanged para no disparar el subscribe cuando el valor actual
  // es igual al anterior.
  initFilter() {
    this.searchFieldSubs = this.searchField.valueChanges.pipe(
      debounceTime(500),
      map((value: string) => value.toLowerCase().trim()),
      distinctUntilChanged()
    ).subscribe(value => this.filterData(value));
  }

  filterData(value: string) {
    let dataAux = [...this.tempRows];

    if (value !== '') {
      const valueArray = value.split(' ');
      dataAux = this.tempRows.filter(commerce => {
        let query = `${commerce.id}
                     ${commerce.name.toLowerCase()}
                     ${commerce.owner.toLowerCase()}`;

        return valueArray.every(word => query.includes(word));
      });
    }

    this.rows = dataAux;
  }

  ngOnDestroy() {
    this.searchFieldSubs.unsubscribe();
  }
}