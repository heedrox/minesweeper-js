export const minesweeper = (boardArray) => {

    const toString = (value) => value + '';
    const isMineValue = (value) => value === '*';
    const isMine = (board, row, col) => {
        const isOutOfBoard = ((row <= -1) || (col <= -1) || (row >= board.length ) || (col >= board[0].length));
        return isOutOfBoard ? 0 : isMineValue(board[row][col])
    };
    const countMinesAround = (board, row, col) =>
        isMine(board, row, col - 1) +
        isMine(board, row, col + 1) +
        isMine(board, row - 1, col - 1) +
        isMine(board, row - 1, col) +
        isMine(board, row - 1, col + 1) +
        isMine(board, row + 1, col - 1) +
        isMine(board, row + 1, col) +
        isMine(board, row + 1, col + 1);


    const cellProcess = (rowIndex, board) => (cellValue, columnIndex) => {
        if (cellValue === '*') return '*';
        return toString(countMinesAround(board, rowIndex, columnIndex));
    };

    const rowProcess = (rowArray, rowIndex, board) => rowArray.map(cellProcess(rowIndex, board));

    return boardArray.map(rowProcess);
};