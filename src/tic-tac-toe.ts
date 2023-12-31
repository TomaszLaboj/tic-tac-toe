/**
 * function description: checks board state and determines if there's a winner and which player won
 * function name: checkRows
 * @param {BoardState} boardState : array of arrays
 * @returns a string 
 */

type Square = ('x' | 'o' | '')
type Row = [Square,Square,Square]
type BoardState = [Row,Row,Row]


function checkWinner (boardState:BoardState):string {
    return 'winner is'
}


function checkRows(oneRow: Row): string | undefined {
if(oneRow.every(item => item === 'x')) {
    return 'x wins'
}else if(oneRow.every(item => item === 'o')) {
    return 'o wins'
}

}

function checkDiagonals(board:BoardState):string|undefined {

    const squareOneSymbol: string = '' // should be 'x' or 'o'

    return squareOneSymbol + ' wins';
}