import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChanged = new EventEmitter<number>();
  currentPage = 1;
  constructor(){}

  ngOnInit(): void {
    
  }

  PageChanged($event: any) {
    this.currentPage = $event;
    this.pageChanged.emit(this.currentPage);
  }
}
