import { BoardTic } from "./BoardTic";

test("Конструктор", () => {
    expect(new BoardTic("00__XX___").cells.join("")).toBe("00__XX___")
    expect(new BoardTic("________").cells.join("")).toBe("_________")
    // expect(new BoardTic("________1").cells.join("")).toBe("_________")
})

test("isFill", () => {
    expect(new BoardTic("000XXX00_").isFill()).toBe(false);
    expect(new BoardTic("000XXX000").isFill()).toBe(true);
})

test("move", () => {
    const board = new BoardTic("000XXX00_");
    expect(board.move(0, "0")).toBe(false);
    expect(board.move(8, "X")).toBe(true);
    expect(board.cells[8]).toBe("X");
})

test("checkWin", () => {
    expect(new BoardTic("000XXX00_").checkWin()).toBe("0");
    expect(new BoardTic("__X_X_X__").checkWin()).toBe("X");
    expect(new BoardTic("_________").checkWin()).toBe("_");
})

test("clone", () => {
    const orig = new BoardTic()
    orig.move(0, "X")
    const clone = orig.clone()
    expect(clone == orig).toBe(false)
    expect(clone.cells == orig.cells).toBe(false)
    expect(clone.cells.join() == orig.cells.join()).toBe(true)
    const copy = new BoardTic(orig.cells)
    expect(copy == orig).toBe(false)
    expect(copy.cells == orig.cells).toBe(false)
    expect(copy.cells.join() == orig.cells.join()).toBe(true)
})
