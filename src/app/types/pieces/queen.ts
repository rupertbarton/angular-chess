import { Board } from '../board';
import { Square } from '../square';
import { SquareCoord } from '../squareCoord';
import { BasePiece } from './basePiece';

export class Queen extends BasePiece {
  constructor(colour: string) {
    super(colour);
    this.icon = 'Q';
  }

  override getValidMoves(board: Board, x: number, y: number): SquareCoord[] {
    const validMoves: SquareCoord[] = [];
    let ne = true;
    let se = true;
    let sw = true;
    let nw = true;
    let n = true;
    let e = true;
    let s = true;
    let w = true;
    let i = 1;

    while (ne || se || sw || nw) {
      if (n) {
        const newSquare = board.getSquare(x, y + i);
        if (newSquare === null) {
          n = false;
        } else {
          if (this.isSquareValidMove(newSquare))
            validMoves.push({ x: newSquare?.x, y: newSquare.y });
          if (newSquare.piece) n = false;
        }
      }
      if (s) {
        const newSquare = board.getSquare(x, y - i);
        if (newSquare === null) {
          s = false;
        } else {
          if (this.isSquareValidMove(newSquare))
            validMoves.push({ x: newSquare?.x, y: newSquare.y });
          if (newSquare.piece) s = false;
        }
      }
      if (e) {
        const newSquare = board.getSquare(x + i, y);
        if (newSquare === null) {
          e = false;
        } else {
          if (this.isSquareValidMove(newSquare))
            validMoves.push({ x: newSquare?.x, y: newSquare.y });
          if (newSquare.piece) e = false;
        }
      }
      if (w) {
        const newSquare = board.getSquare(x - i, y);
        if (newSquare === null) {
          w = false;
        } else {
          if (this.isSquareValidMove(newSquare))
            validMoves.push({ x: newSquare?.x, y: newSquare.y });
          if (newSquare.piece) w = false;
        }
      }
      if (ne) {
        const newSquare = board.getSquare(x + i, y + i);
        if (newSquare === null) {
          ne = false;
        } else {
          if (this.isSquareValidMove(newSquare))
            validMoves.push({ x: newSquare?.x, y: newSquare.y });
          if (newSquare.piece) ne = false;
        }
      }
      if (sw) {
        const newSquare = board.getSquare(x - i, y - i);
        if (newSquare === null) {
          sw = false;
        } else {
          if (this.isSquareValidMove(newSquare))
            validMoves.push({ x: newSquare?.x, y: newSquare.y });
          if (newSquare.piece) sw = false;
        }
      }
      if (se) {
        const newSquare = board.getSquare(x + i, y - i);
        if (newSquare === null) {
          se = false;
        } else {
          if (this.isSquareValidMove(newSquare))
            validMoves.push({ x: newSquare?.x, y: newSquare.y });
          if (newSquare.piece) se = false;
        }
      }
      if (nw) {
        const newSquare = board.getSquare(x - i, y + i);
        if (newSquare === null) {
          nw = false;
        } else {
          if (this.isSquareValidMove(newSquare))
            validMoves.push({ x: newSquare?.x, y: newSquare.y });
          if (newSquare.piece) nw = false;
        }
      }

      i++;
    }
    return validMoves;
  }
}
