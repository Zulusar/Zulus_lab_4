import { Input } from "./Input"

export class InputTic extends Input{
    private _sym: string
 
    constructor() {
        super()
        this._sym = "X"
    }

    get sym(): string {
        return this._sym
    }

    move(): void {
        if (this._sym == "X")
            this._sym = "0"
        else
            this._sym = "X"
    }

}