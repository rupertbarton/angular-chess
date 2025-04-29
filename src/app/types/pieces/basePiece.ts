import { Board } from '../board';
import { Square } from '../square';
import { SquareCoord } from '../squareCoord';

export abstract class BasePiece {
  colour: string;
  lastTurnMoved: number | null;
  icon: string;

  constructor(colour: string) {
    this.colour = colour;
    this.lastTurnMoved = null;
    this.icon = "null";
  }

  getValidMoves(board: Board, x: number, y: number): SquareCoord[] {
    return [];
  }
  
  getValidCastleSquares(board: Board, x: number, y: number): SquareCoord[] {
    return [];
  }

  isSquareValidMove(square: Square): boolean {
    if (square.piece === null) return true;
    if (square.piece.colour !== this.colour) return true;
    return false;
  }
}
