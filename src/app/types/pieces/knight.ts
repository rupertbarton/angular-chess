import { Board } from '../board';
import { Square } from '../square';
import { SquareCoord } from '../squareCoord';
import { BasePiece } from './basePiece';

export class Knight extends BasePiece {
  constructor(colour: string) {
    super(colour);
    this.icon = 'N';
  }

  override getValidMoves(board: Board, x: number, y: number): SquareCoord[] {
    const validMoves: SquareCoord[] = [];

    [-2, 2].forEach(l => {
      [-1, 1].forEach(w => {
        const newXSquare = board.getSquare(x + l, y + w);
        if (newXSquare && this.isSquareValidMove(newXSquare))
          validMoves.push({ x: newXSquare?.x, y: newXSquare.y });

        const newYSquare = board.getSquare(x + w, y + l);
        if (newYSquare && this.isSquareValidMove(newYSquare))
          validMoves.push({ x: newYSquare?.x, y: newYSquare.y });
      })
    })
    
    return validMoves;
  }
}
