import { Component, signal } from '@angular/core';
import { RowComponent } from './row/row.component';

@Component({
  selector: 'app-board',
  imports: [RowComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  rowCount = 8
  columnCount = 8
  boardArray = signal([])
    constructor() {
      boardArray = []
  }
}
