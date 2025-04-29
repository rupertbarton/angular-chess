import { Board } from '../board';
import { Square } from '../square';
import { SquareCoord } from '../squareCoord';
import { BasePiece } from './basePiece';

export class King extends BasePiece {
  constructor(colour: string) {
    super(colour);
    this.icon = 'K';
  }

  override getValidMoves(board: Board, x: number, y: number): SquareCoord[] {
    const validMoves: SquareCoord[] = [];

    [-1, 0, 1].forEach((l) => {
      [-1, 0, 1].forEach((w) => {
        const newXSquare = board.getSquare(x + l, y + w);
        if (newXSquare && this.isSquareValidMove(newXSquare))
          validMoves.push({ x: newXSquare?.x, y: newXSquare.y });

        const newYSquare = board.getSquare(x + w, y + l);
        if (newYSquare && this.isSquareValidMove(newYSquare))
          validMoves.push({ x: newYSquare?.x, y: newYSquare.y });
      });
    });

    return validMoves;
  }

  getValidCastleSquares(board: Board, x: number, y: number): SquareCoord[] {
    const validCastleMoves: SquareCoord[] = [];
    if (this.lastTurnMoved) {
      return validCastleMoves;
    }

    let e = true;
    let w = true;
    let i = 1;
    while (e || w) {
      if (e) {
        const newSquare = board.getSquare(x + i, y);
        if (newSquare === null) {
          e = false;
        } else {
          if (newSquare.piece) e = false;
        }
      }
      if (w) {
        const newSquare = board.getSquare(x - i, y);
        if (newSquare === null) {
          w = false;
        } else {
          if (newSquare.piece.)
          if (newSquare.piece) w = false;
        }
      }
    }

    return validCastleMoves;
  }
}
