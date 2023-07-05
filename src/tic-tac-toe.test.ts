import calcWinState from "./tic-tac-toe";


test("checks for winning state in columns", () => {
    expect(calcWinState([
        ["x", "o", "o"],
        ["x", "", "o"],
        ["x", "o", "x"]
      ])).toBe('x wins');
    expect(calcWinState([
    ["x", "x", "o"],
    ["o", "", "o"],
    ["x", "x", "o"]
    ])).toBe('o wins');
  });

  test("checks for winning state in rows", () => {
    expect(calcWinState([
        ["x", "x", "x"],
        ["o", "", "o"],
        ["x", "o", "o"]
      ])).toBe('x wins');
    expect(calcWinState([
    ["x", "x", ""],
    ["o", "o", "o"],
    ["x", "x", "o"]
    ])).toBe('o wins');
  });

  test("checks for winning state diagonally", () => {
    expect(calcWinState([
        ["x", "o", ""],
        ["o", "x", "o"],
        ["x", "o", "x"]
      ])).toBe('x wins');
    expect(calcWinState([
    ["x", "", "o"],
    ["o", "o", ""],
    ["o", "x", "x"]
    ])).toBe('o wins');
  });

  test("checks for a draw state", () => {
    expect(calcWinState([
        ["x", "o", "x"],
        ["o", "x", "o"],
        ["o", "x", "o"]
      ])).toBe('a draw');
    expect(calcWinState([
    ["x", "x", "o"],
    ["o", "o", "x"],
    ["x", "x", "o"]
    ])).toBe('a draw');
  });


  test("checks for not finished game", () => {
    expect(calcWinState([
        ["x", "o", "x"],
        ["o", "x", ""],
        ["o", "x", ""]
      ])).toBe('keep playing');
    expect(calcWinState([
    ["x", "x", "o"],
    ["", "", ""],
    ["", "", ""]
    ])).toBe('keep playing');
  });

