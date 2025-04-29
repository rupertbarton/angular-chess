import { Board } from '../board';
import { SquareCoord } from '../squareCoord';
import { BasePiece } from './basePiece';

export class Teleporter extends BasePiece {
  constructor(colour: string) {
    super(colour);
    this.icon = 'O';
  }

  override getValidMoves(board: Board, x: number, y: number): SquareCoord[] {
    return board.rows.reduce<SquareCoord[]>(
      (acc, row) =>
        acc.concat(
          row
            .filter((square) => {
              if (square?.piece?.colour === this.colour) return false;
              return true;
            })
            .map((square) => {
              return { x: square.x, y: square.y };
            })
        ),
      []
    );
  }
}
