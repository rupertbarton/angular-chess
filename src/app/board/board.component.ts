import { Component, computed, signal } from '@angular/core';
import { SquareComponent } from './square/square.component';

@Component({
  selector: 'app-board',
  imports: [SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  rowCount = 8
  columnCount = 8
  boardArray = computed(() => {
    for (let y = 1; y<=this.rowCount; y++) {
      for (let x = 1; x<=this.columnCount; x++) {

      }
    }
    return Array(this.rowCount).fill(Array(this.columnCount).fill(null))
  })
}
