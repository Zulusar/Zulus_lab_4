export type BoardParam = {
    row: number,
    col: number
}

// Абстрактный класс доски
export abstract class Board {
    cells: string[]

    static row: number
    static col: number

    constructor(
        str: string[] | string,
        row?: number,
        col?: number,
    ) {
        // TODO
        // При наличии row или col 
        //  инициализировать соответсвующие поля
        // Инициализировать массив cells
        this.cells = []
        if(typeof(row) == "number" && typeof(col) == "number" && row == 3) {//инициализация для Tic
            let multiplication = row*col
            for(let i = 0; i < multiplication; i++){
                this.cells[i] = str[0].split("")[i]
            }
        }
        if(typeof(row) == "number" && typeof(col) == "number" && row == 5) {
            let multiplication = row*col
            for(let a = 0; a < 10 ; a++){//инициализация для Балды
                this.cells[a] = "_"
            }
            for(let i = 10; i < 15; i++){
                this.cells[i] = str[i-10]
            }
            for(let b = 15; b < multiplication ; b++){
                this.cells[b] = "_"
            }
        }
    }


    abstract clone(): Board

    isFill(): boolean {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        // Реомендуется реализация без циклов,
        //  с использованием функций массивов
        return (this.cells.includes("_")==true) ? true : false//при заполнении поля - false     
    }

    move(index: number, sym: string): boolean {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        if(this.cells[index]!="_") return false//проверка на возможность хода
        else{
            this.cells[index] = sym
            return true
        }
        
    }

    status(): string {
        // TODO
        // Если доска заполнена возвращает "Игра закончена"
        //если игра не закончена, строку "Идет игра".
        return (this.isFill()!= false)? "Идет игра" : "Игра окончена"//указание статуса игры
    }
}