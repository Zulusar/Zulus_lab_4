import { Board, BoardParam } from "./Board";


export class BoardBalda extends Board {
    constructor(
        str: string[] | string = "балда",
        init: boolean = true//что такое? что оно выполняет?
    ) {
        // TODO
        // Если длина str==5, то дополняет ее 10 пробелами до и после
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класса
        super(str, BoardBaldaParam.row, BoardBaldaParam.col)

    }
    clone(init: boolean = false): Board {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        let newBoard = new BoardBalda()//клонирование игры
        for(let i=0; i<this.cells.length; i++){//по-другому не получается
            newBoard.cells[i] = this.cells[i]
        }
        return newBoard
    }
}

export const BoardBaldaParam: BoardParam = {
    row: 5,
    col: 5
}