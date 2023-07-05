/**
 * function description: checks board state and determines if there's a winner and which player won
 * function name: calcWinState
 * @param {BoardState} boardState : array of arrays
 * @returns a string 
 */

type Input = ('x' | 'o' | '')
type Row = [Input,Input,Input]
type BoardState = [Row,Row,Row]

function calcWinState(boardState: BoardState): string {
let result;



    return 'x wins';
}

export default calcWinState;

function checkRows(oneRow: Row): string | undefined {
if(oneRow.every(item => item === 'x')) {
    return 'x wins'
}else if(oneRow.every(item => item === 'o')) {
    return 'o wins'
}

}