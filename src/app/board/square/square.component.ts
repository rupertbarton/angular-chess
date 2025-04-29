import { Component, input, InputSignal} from '@angular/core';
import { Square } from '../../types/square';

@Component({
  selector: 'app-square',
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss',
})
export class SquareComponent {
  square: InputSignal<Square> = input.required();
  isHighlighted: InputSignal<boolean> = input.required();

  getValidMoves() {}
}
