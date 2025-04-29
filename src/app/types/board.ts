import { BasePiece } from './pieces/basePiece';
import { Bishop } from './pieces/bishop';
import { King } from './pieces/king';
import { Knight } from './pieces/knight';
import { Pawn } from './pieces/pawn';
import { Queen } from './pieces/queen';
import { Rook } from './pieces/rook';
import { Teleporter } from './pieces/teleporter';
import { Square } from './square';

export class Board {
  rows: Square[][];

  constructor(rowCount: number, columnCount: number) {
    const rows = [];
    rows.push(this.makeDefaultBackRow("red").map((piece, i) => new Square(i + 1, 1, piece)))
    rows.push(this.makeDefaultSecondRow("red", 1).map((piece, i) => new Square(i + 1, 2, piece)))
    for (let y = 3; y <= rowCount - 2; y++) {
      const currentRow = []
      for (let x = 1; x <= columnCount; x++) {
        currentRow.push(new Square(x, y, null));
      }
      rows.push(currentRow)
    }
    rows.push(this.makeDefaultSecondRow("blue", -1).map((piece, i) => new Square(i + 1, 7, piece)))
    rows.push(this.makeDefaultBackRow("blue").map((piece, i) => new Square(i + 1, 8, piece)))
    this.rows = rows
  }

  makeDefaultBackRow(colour: string) {
    return [
      new Rook(colour),
      new Knight(colour),
      new Bishop(colour),
      new King(colour),
      new Queen(colour),
      new Bishop(colour),
      new Knight(colour),
      new Rook(colour),
    ]
  }

  makeDefaultSecondRow(colour: string, direction: number) {
    return [1, 2, 3, 4, 5, 6, 7, 8].map(() => new Pawn(colour, direction))
  }

  getSquare(x: number, y: number): Square | null {
    if (y > this.rows.length || y < 1) return null;

    const currentRow = this.rows[y - 1]
    
    if (x > currentRow.length || x < 1) return null;

    return this.rows[y-1][x-1]
  }
}
