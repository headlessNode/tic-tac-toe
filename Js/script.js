//create players, also create a property to save their choice.
const Player = (name)=>{
    name;

    let winner = false;

    return {name};
}

//create an array object to save player choices.
const gameBoard = (()=>{

    const createGameBoard = ()=>{
        let board = Array(9).fill('')
        return board;
    }

    
    return {createGameBoard};

})();


// Logic to check for win condition.
const winCondition = (()=>{

    function displayWinner(){
        const gameEndDialog = document.querySelector('.game-end-dialog');
        if(gameRoundController.playerOne.winner){
            console.log('Player one Won the game');
            gameEndDialog.showModal();
        }

        else if(gameRoundController.playerTwo.winner){
            console.log('Player two Won the game');
            gameEndDialog.showModal();
        }

        else{
            console.log('Its a tie!');
            gameEndDialog.showModal();
        }

    }

    function checkWin (){

        if(gameRoundController.board[0] === 'X' && gameRoundController.board[1] ==='X' && gameRoundController.board[2] === 'X' || gameRoundController.board[3] === 'X' && gameRoundController.board[4] === 'X' && gameRoundController.board[5] === 'X' || gameRoundController.board[6] === 'X' && gameRoundController.board[7] === 'X' && gameRoundController.board[8] === 'X'
            || gameRoundController.board[0] === 'X' && gameRoundController.board[4] === 'X' && gameRoundController.board[8] === 'X'
            || gameRoundController.board[2] === 'X' && gameRoundController.board[4] === 'X' && gameRoundController.board[6] === 'X' || gameRoundController.board[0] === 'X' && gameRoundController.board[3] === 'X' && gameRoundController.board[6] === 'X'
            || gameRoundController.board[1] === 'X' && gameRoundController.board[4] === 'X' && gameRoundController.board[7] === 'X' || gameRoundController.board[2] === 'X' && gameRoundController.board[5] === 'X' && gameRoundController.board[8] === 'X'){

                gameRoundController.playerOne.winner = true;
                displayWinner();           

        }

        else if(gameRoundController.board[0] === 'O' && gameRoundController.board[1] ==='O' && gameRoundController.board[2] === 'O' || gameRoundController.board[3] === 'O' && gameRoundController.board[4] === 'O' && gameRoundController.board[5] === 'O'
            || gameRoundController.board[6] === 'O' && gameRoundController.board[7] === 'O' && gameRoundController.board[8] === 'O'
            || gameRoundController.board[0] === 'O' && gameRoundController.board[4] === 'O' && gameRoundController.board[8] === 'O'
            || gameRoundController.board[2] === 'O' && gameRoundController.board[4] === 'O' && gameRoundController.board[6] === 'O' || gameRoundController.board[0] === 'O' && gameRoundController.board[3] === 'O' && gameRoundController.board[6] === 'O'
            || gameRoundController.board[1] === 'O' && gameRoundController.board[4] === 'O' && gameRoundController.board[7] === 'O' || gameRoundController.board[2] === 'O' && gameRoundController.board[5] === 'O' && gameRoundController.board[8] === 'O'){

                gameRoundController.playerTwo.winner = true;
                displayWinner();
        }

        else if (gameRoundController.playerChoiceCount === 9){
            displayWinner();
        }
    }



        return {checkWin};

})();

//Object to control the flow of game.
const gameRoundController = (()=>{

    const playerOne = Player('X');
    const playerTwo = Player('O');

    const board = gameBoard.createGameBoard();

    let currentPlayer = playerOne;
    let playerChoiceCount = 0;

    function round(){

        if(gameRoundController.currentPlayer === playerOne){
            gameRoundController.playerChoiceCount++;
            gameRoundController.currentPlayer = playerTwo;

            winCondition.checkWin();
        }
        else{
            gameRoundController.playerChoiceCount++;
            gameRoundController.currentPlayer = playerOne;

            winCondition.checkWin();
        }
    }





    return {round, board, playerOne, playerTwo, currentPlayer, playerChoiceCount};

})();

//create an object to display the choices.

const display = (()=>{

    const boardBlockSelector = document.querySelectorAll('.block');


    let xIndices = Array(9).fill(null);
    let oIndices = Array(9).fill(null);

    const updateScreen = ()=>{


        gameRoundController.board.forEach((currentValue, currentIndex)=>{

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

    
    boardBlockSelector.forEach((currentValue, currentIndex, obj)=>{
        currentValue.addEventListener('click', ()=>{
            if(gameRoundController.board[currentIndex] === ''){
                if(gameRoundController.currentPlayer === gameRoundController.playerOne){
                    gameRoundController.board[currentIndex] = gameRoundController.playerOne.name;
                    updateScreen();
                    gameRoundController.round();
                }
                else{
                    gameRoundController.board[currentIndex] = gameRoundController.playerTwo.name;
                    updateScreen();
                    gameRoundController.round();
                }
            }
        })
    })




})();


