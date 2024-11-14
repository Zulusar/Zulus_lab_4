import { Board, BoardParam } from "./Board";
//let data ="_"
export class BoardTic extends Board {

    constructor(
        str: string[] | string = ["_________"],
        init: boolean = true        
    ) {
        // TODO
        // Если длина str!=9, то используется строка по умолчанию
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класса
            super(str, BoardTicParam.row, BoardTicParam.col)           
    }

    clone(init: boolean=false): Board {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        return this
    }

    private getLineChar(line: number[]): string[] {
        return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]];
    }

    private static winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    checkWin() {
        // TODO
        // Если имеется комбинация из трех одинаковых символов "X" или "0" 
        //  в линию - возвращает этот символ
        // Иначе возвращает символ "_"
        let data = "_"
        for(let i = 0; i < BoardTic.winPos.length; i++){
            if (this.getLineChar(BoardTic.winPos[i])[0] == this.getLineChar(BoardTic.winPos[i])[1]  && this.getLineChar(BoardTic.winPos[i])[0] == this.getLineChar(BoardTic.winPos[i])[2]&& this.getLineChar(BoardTic.winPos[i])[0] != "_") {
                data = this.getLineChar(BoardTic.winPos[i])[0]
                break
            }
            else  data = "_"   
        }
        return data
    }

    override status(): string {
        // TODO
        // возвращает либо строку с результатом игры, либо, 
        //   если игра не закончена, вызывает status родителя.
        if(this.checkWin()!= "_") return `Победил ${this.checkWin()}`
        else return super.status()
    }

}

export const BoardTicParam: BoardParam = {
    row: 3,
    col: 3
}