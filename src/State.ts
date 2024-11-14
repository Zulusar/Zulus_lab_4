import { Board } from "./Board"


export class State {
    board: Board
    sym: string

    constructor(
        board: Board,
        sym: string
    ) {
        this.board = board
        this.sym = sym
    }

    clone(): State{
        // TODO
        // Функция должна вернуть копию объекта
        return this
    }
}