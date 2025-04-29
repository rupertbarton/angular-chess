import { Board } from './board';
import { BasePiece } from './pieces/basePiece';

export class Square {
  x: number;
  y: number;
  piece: BasePiece | null;
  endOfColumn: boolean;

  constructor(
    x: number,
    y: number,
    piece: BasePiece | null = null,
    endOfColumn: boolean = false
  ) {
    this.x = x;
    this.y = y;
    this.piece = piece;
    this.endOfColumn = endOfColumn;
  }

  getValidMoves(board: Board) {
    if (this.piece) {
      return this.piece.getValidMoves(board, this.x, this.y)
    }
    else {
      return []
    }
  }
}
