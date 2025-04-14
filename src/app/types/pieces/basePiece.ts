import { SquareCoord } from './squareCoord';

export abstract class BasePiece {
    colour: string
    lastTurnMoved: number | null

    constructor(colour: string) {
        this.colour = colour
        this.lastTurnMoved = null
    }

    validMoves(board, _) {
        board.reduce((acc, row) => acc.concat(row.map(square => {x: })), [])
    }
}
