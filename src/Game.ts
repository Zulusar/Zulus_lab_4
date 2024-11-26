import { BoardParam } from "./Board"
import { GameVC } from "./GameVC"
import { Input } from "./Input"
import { State } from "./State"
import { InputTic } from "./InputTic"

// Класс
export class Game {
    // Шаги игры
    steps: State[]
    // Номер текущей игры
    current: number
    // Параметры доски (размеры)
    boardParam: BoardParam
    // интерфейс для пользовательского ввода
    input: Input

    constructor(
        steps: State[] | State,
        input: Input,
        boardParam: BoardParam,
        current: number = 0
    ) {
        if (Array.isArray(steps))
            this.steps = steps
        else
            this.steps = [steps]
        this.current = current
        this.boardParam = boardParam
        this.input = input

    }

    get state(): State {
        // TODO
        // Сеттер должен возвращать текущее состояние игры
        return this.steps[this.current]//взятие текущего состояния для работы
    }

    clone(): Game {
        // TODO
        // Функция должна вернуть копию объекта
        let newSteps: State[] = []
        newSteps.push(this.steps[this.current].clone())
        return new Game (newSteps, this.input, this.boardParam)
        }
    

    move(index: number): boolean {
        // TODO        
        // Определяет, какой символ ходит, и пытается сделать ход 
        //  с помощью board.move.
        // Если ход можно сделать, то добавляет  новыу позицию в steps, 
        //  обновляет current и возвращает true, иначе возвращает false
        // Нужно учесть, что если вызывалась функция toStep, то 
        //  current можно указывать не на последний элемент steps
        this.state.board.status()//проверка состояния игры
        if(this.state.board.status()!="Идет игра"){
            return false//конец игры
        }
        else{
            this.state.board.move(index, this.input.sym)//постановка символа
            this.steps.push(this.state.clone())//добавление копии в массив
            this.toStep//проверка, не нужно ли вернуться куда
            this.input.move()//смена символа
            this.current++//увеличение счетчика хода
            GameVC.draw()//вывод доски
            return true 
        }

    }

    toStep(step: number) {
         // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        if (this.steps.length<step) { //проверка на возможность возврата к ходу
            return false
        }
        else {
            this.steps[this.current] = this.steps[step].clone()
            if(step % 2 != 0) this.input.move()//подбор нужного символа в зависимости от step
            GameVC.draw()
            this.current == step //переписывание счетчика
            return true
        }        
    }
}