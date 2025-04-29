import { Board } from '../board';
import { Square } from '../square';
import { SquareCoord } from '../squareCoord';
import { BasePiece } from './basePiece';

export class Bishop extends BasePiece {
  constructor(colour: string) {
    super(colour);
    this.icon = 'B';
  }

  override getValidMoves(board: Board, x: number, y: number): SquareCoord[] {
    const validMoves: SquareCoord[] = [];
    let ne = true;
    let se = true;
    let sw = true;
    let nw = true;
    let i = 1;

    while (ne || se || sw || nw) {
        if (ne) {
            const newSquare = board.getSquare(x + i, y + i)
            if (newSquare === null) {
                ne = false
            } else {
                if (this.isSquareValidMove(newSquare)) validMoves.push({ x: newSquare?.x, y: newSquare.y })
                if (newSquare.piece) ne = false
            }
      }
        if (sw) {
            const newSquare = board.getSquare(x - i, y - i)
            if (newSquare === null) {
                sw = false
            } else {
                if (this.isSquareValidMove(newSquare)) validMoves.push({ x: newSquare?.x, y: newSquare.y })
                if (newSquare.piece) sw = false
            }
      }
        if (se) {
            const newSquare = board.getSquare(x + i, y - i);
            if (newSquare === null) {
                se = false
            } else {
                if (this.isSquareValidMove(newSquare)) validMoves.push({ x: newSquare?.x, y: newSquare.y })
                if (newSquare.piece) se = false
            }
      }
        if (nw) {
            const newSquare = board.getSquare(x - i, y + i);
            if (newSquare === null) {
                nw = false
            } else {
                if (this.isSquareValidMove(newSquare)) validMoves.push({ x: newSquare?.x, y: newSquare.y })
                if (newSquare.piece) nw = false
            }
      }

      i++;
    }
    return validMoves;
  }

}
