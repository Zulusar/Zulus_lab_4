import { BoardParam } from "./Board"
import { GameVC } from "./GameVC"
import { Input } from "./Input"
import { State } from "./State"
import { InputTic } from "./InputTic"

let count = 0

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
        //inputTic: InputTic,
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
        return this.steps[count]
    }

    clone(): Game {
        // TODO
        // Функция должна вернуть копию объекта
        let newSteps: State[] = []
        newSteps.push(this.steps[count].clone())
        //for (let i=0; i<this.steps.length; i++){
        //    newSteps[i]=this.steps[i]
       // }
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
        //this.input.move()
        this.state.sym = this.input.sym
        this.input.move
        this.state.board.move(index, this.state.sym)
        let boardNew = this.state.clone()
        this.steps.push(boardNew)
        //this.steps.push(this.state)
        this.current ++ //увеличение счетчика
        this.toStep
        return true  
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
            this.steps[count] = this.steps[step].clone()
            count = step //переприсваивание step
            this.current = count //переписывание счетчика
            return true
        }        
    }
}