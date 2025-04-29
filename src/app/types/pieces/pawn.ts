import { Board } from '../board';
import { Square } from '../square';
import { SquareCoord } from '../squareCoord';
import { BasePiece } from './basePiece';

export class Pawn extends BasePiece {
  direction: number;

  constructor(colour: string, direction: number) {
    super(colour);
    this.icon = 'P';
    this.direction = direction/Math.abs(direction);
  }

  override getValidMoves(board: Board, x: number, y: number): SquareCoord[] {
    const validMoves: SquareCoord[] = [];

      const singleMoveSquare = board.getSquare(x, y + this.direction);
      console.log(singleMoveSquare);
    if (singleMoveSquare && !singleMoveSquare.piece) {
      if (!singleMoveSquare.piece) {
        validMoves.push(singleMoveSquare);
        if (!this.lastTurnMoved) {
          const doubleMoveSquare = board.getSquare(x, y + this.direction * 2);
          if (doubleMoveSquare && !doubleMoveSquare.piece) {
            validMoves.push(doubleMoveSquare);
          }
        }
      }
    }

    [-1, 1].forEach((w) => {
      const newSquare = board.getSquare(x + w, y + this.direction);
      if (newSquare && newSquare.piece && newSquare.piece?.colour !== this.colour)
        validMoves.push(newSquare);
    });
    return validMoves;
  }

  canMoveForward(board: Board, x: number, y: number) {}
}
