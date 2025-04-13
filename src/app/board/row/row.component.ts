import { Component, input } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-row',
  imports: [SquareComponent],
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss'
})
export class RowComponent {
  squares = input()
  isEven = input()
}
