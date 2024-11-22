import { Board } from "./Board"
import { BoardTic } from "./BoardTic"
import { BoardBalda } from "./BoardBalda"


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
        //newBoard.board = this.board.clone()
        //let newBoard
        //newBoard = this.board.clone()
        let newState = new State (this.board.clone(), this.sym)//клонирование состояния
        return newState
    }
}