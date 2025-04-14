import { Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  evenColumn: InputSignal<boolean> = input(false)
  evenRow: InputSignal<boolean> = input(false)
}
