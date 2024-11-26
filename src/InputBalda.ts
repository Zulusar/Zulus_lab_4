import { Input } from "./Input";
import { GameVC } from "./GameVC";

export class InputBalda extends Input {
    override get html(): string  {
        return "<input id='inputBalda'></input>"
    }

    get sym(): string {
        // TODO
        //  возвращает символ из поля ввода
        let but = <HTMLInputElement>document.getElementById(`inputBalda`) //поле ввода 
        let newBut = but.value//присваиваем значение value новой переменной
        if(newBut == ""){//проверка на тыканье в пустое поле
            newBut = "_"
        }
        return newBut//возврат нового значения
    }
    move(): void {
        // TODO
        //  очищает поле ввода
        let butClear = <HTMLInputElement>document.getElementById(`inputBalda`)
        butClear.value = ""//очистка поля ввода
        }
}