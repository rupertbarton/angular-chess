import { Component, computed, signal, WritableSignal } from '@angular/core';
import { SquareComponent } from './square/square.component';
import { Board } from '../types/board';
import { Square } from '../types/square';
import { SquareCoord } from '../types/squareCoord';

@Component({
  selector: 'app-board',
  imports: [SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  rowCount = 8;
  columnCount = 8;
  board = signal(new Board(this.rowCount, this.columnCount));
  currentPlayer = signal('blue');
  normalHighlightedSquares: WritableSignal<SquareCoord[]> = signal([]);
  castleHighlightedSquares: WritableSignal<SquareCoord[]> = signal([]);
  highlightedSquares = computed(() =>
    this.normalHighlightedSquares().concat(this.castleHighlightedSquares())
  );
  currentSelectedSquare: WritableSignal<Square | null> = signal(null);
  currentTurn = signal(1);

  handleSquareClick(square: Square) {
    const currentSelectedSquare = this.currentSelectedSquare();
    console.log(square);

    if (square?.piece?.colour === this.currentPlayer()) {
      this.normalHighlightedSquares.set(square.getValidMoves(this.board()));
      this.currentSelectedSquare.set(square);
    } else if (this.isSquareHighlighted(square) && currentSelectedSquare) {
      this.movePiece(currentSelectedSquare, square);
      this.endTurn();
      this.deselectSquare();
      this.currentTurn.update((v) => v + 1);
    } else {
      this.deselectSquare();
    }

    // this.endTurn()
  }

  endTurn() {
    this.currentPlayer.update((colour) => (colour === 'blue' ? 'red' : 'blue'));
  }

  deselectSquare() {
    this.currentSelectedSquare.set(null);
    this.normalHighlightedSquares.set([]);
    this.castleHighlightedSquares.set([]);
  }

  movePiece(from: Square, to: Square) {
    const newBoard = this.board();
    if (from.piece) {
      const piece = from.piece;
      piece.lastTurnMoved = this.currentTurn();

      newBoard.rows[to.y - 1][to.x - 1].piece = piece;
      newBoard.rows[from.y - 1][from.x - 1].piece = null;
      this.board.set(newBoard);
    }
  }

  isSquareSelected(square: Square) {
    return (
      this.currentSelectedSquare()?.x === square.x &&
      this.currentSelectedSquare()?.y === square.y
    );
  }

  isSquareHighlighted(square: Square) {
    return this.highlightedSquares().some(
      (coord) => coord.x === square.x && coord.y === square.y
    );
  }
}
