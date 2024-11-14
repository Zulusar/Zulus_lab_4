import { Input } from "./Input";

export class InputBalda extends Input {
    override get html(): string  {
        return "<input id='inputBalda'></input>"
    }

    get sym(): string {
        // TODO
        //  возвращает символ из поля ввода        
        return ""
    }
    move(): void {
        // TODO
        //  очищает поле ввода
    }
}