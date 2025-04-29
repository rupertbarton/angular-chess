import { Board } from '../board';
import { Square } from '../square';
import { SquareCoord } from '../squareCoord';
import { BasePiece } from './basePiece';

export class Rook extends BasePiece {
  constructor(colour: string) {
    super(colour);
    this.icon = 'R';
  }

  override getValidMoves(board: Board, x: number, y: number): SquareCoord[] {
    const validMoves: SquareCoord[] = [];
    let n = true;
    let e = true;
    let s = true;
    let w = true;
    let i = 1;

    while (n || e || s || w) {
        if (n) {
            const newSquare = board.getSquare(x, y + i)
            if (newSquare === null) {
                n = false
            } else {
                if (this.isSquareValidMove(newSquare)) validMoves.push({ x: newSquare?.x, y: newSquare.y })
                if (newSquare.piece) n = false
            }
      }
        if (s) {
            const newSquare = board.getSquare(x, y - i)
            if (newSquare === null) {
                s = false
            } else {
                if (this.isSquareValidMove(newSquare)) validMoves.push({ x: newSquare?.x, y: newSquare.y })
                if (newSquare.piece) s = false
            }
      }
        if (e) {
            const newSquare = board.getSquare(x + i, y);
            if (newSquare === null) {
                e = false
            } else {
                if (this.isSquareValidMove(newSquare)) validMoves.push({ x: newSquare?.x, y: newSquare.y })
                if (newSquare.piece) e = false
            }
      }
        if (w) {
            const newSquare = board.getSquare(x - i, y);
            if (newSquare === null) {
                w = false
            } else {
                if (this.isSquareValidMove(newSquare)) validMoves.push({ x: newSquare?.x, y: newSquare.y })
                if (newSquare.piece) w = false
            }
      }

      i++;
    }
    return validMoves;
  }
}
