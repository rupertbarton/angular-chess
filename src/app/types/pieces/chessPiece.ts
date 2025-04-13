import { SquareCoord } from './squareCoord';

interface ChessPiece {
    x: number,
    y: number,
    colour: string,
    hasMove?: boolean
    validMoves(): [SquareCoord]
    conditionalMoves(): {

    }
}

interface ConditionalMove {
    condition
}