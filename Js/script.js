//create players, also create a property to save their choice.
const Player = (name)=>{
    name;

    let choiceIndex;


    return {name, choiceIndex};
}

//create an array object to save player choices.
const gameBoard = (()=>{

    const createGameBoard = ()=>{
        let board = Array(9).fill('')
        return board;
    }

    
    return {createGameBoard};

})();


//Object to controll the flow of game.
const gameRoundController = (()=>{

    const playerOne = Player('X');
    const playerTwo = Player('O');

    const board = gameBoard.createGameBoard();

    function afterDOM(){
        console.log('boardAfertDOM: '+board)
    }

    let currentPlayer = playerOne;
    let playerChoiceCount = 0;



    return {afterDOM, board, playerOne, playerTwo};

})();

//create an object to display the choices.

const display = (()=>{

    const boardBlockSelector = document.querySelectorAll('.block');

    let xIndices = Array(9).fill(null);
    let oIndices = Array(9).fill(null);


    const getPlayerChoice = (board, playerOne)=>{
        boardBlockSelector.forEach((currentValue, currentIndex, obj)=>{
            currentValue.addEventListener('click', ()=>{
                if(board[currentIndex] === ''){
                    board[currentIndex] = playerOne.name;
                    gameRoundController.afterDOM();
                }
            })
        })
    }

    const updateScreen = (board)=>{


        board.forEach((currentValue, currentIndex)=>{

            if(currentValue === 'X'){
                xIndices[currentIndex] = currentIndex;

            }
            else if(currentValue === 'O'){
                oIndices[currentIndex] = currentIndex;

            }
        });


        boardBlockSelector.forEach((currentValue, currentIndex)=>{
            xIndices.forEach((value, index)=>{
                if(value === currentIndex){
                    currentValue.textContent = 'X';
                }
            })
        })

        boardBlockSelector.forEach((currentValue, currentIndex)=>{
            oIndices.forEach((value, index)=>{
                if(value === currentIndex){
                    currentValue.textContent = 'O';
                }
            })
        })
    }

        return {updateScreen, getPlayerChoice};
})();

// Logic to check for win condition.
const winCondition = (()=>{

    function checkWin (board, playerChoiceCount){
        console.table(board);

        if(board[0] === 'X' && board[1] ==='X' && board[2] === 'X' || board[3] === 'X' && board[4] === 'X' && board[5] === 'X'
            || board[6] === 'X' && board[7] === 'X' && board[8] === 'X'
            || board[0] === 'X' && board[4] === 'X' && board[8] === 'X'
            || board[2] === 'X' && board[4] === 'X' && board[6] === 'X'){

            console.log('X Wins the game');
        }

        else if(board[0] === 'O' && board[1] ==='O' && board[2] === 'O' || board[3] === 'O' && board[4] === 'O' && board[5] === 'O'
            || board[6] === 'O' && board[7] === 'O' && board[8] === 'O'
            || board[0] === 'O' && board[4] === 'O' && board[8] === 'O'
            || board[2] === 'O' && board[4] === 'O' && board[6] === 'O'){

            console.log('O Wins the game');
        }

        else if (playerChoiceCount === 9){
            console.log('Its a tie.');
        }
    }

        return {checkWin};

})();


const game = (()=>{

    display.getPlayerChoice(gameRoundController.board,gameRoundController.playerOne);

})();
