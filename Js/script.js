
const game = (()=>{
    
    const gameBoard = ()=>{
        let board = ['X1','O2','X3','O4','X5','O6','X7','O8','X9'];
        
        return board;
    };
        

    const Players = (name)=>{
        return {name};
    }
    
    const display = (gameBoard)=>{
        const boardBlocks = document.querySelectorAll('.block');
        gameBoard.forEach((value,index,obj) => {
            boardBlocks[index].textContent = value;
        });
    }

    return {gameBoard, Players, display};

})();

const gameBoard = game.gameBoard();

const playerOne = game.Players('X');
const plyaerTwo = game.Players('O');

const display = game.display(gameBoard);
