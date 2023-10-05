//module for gamestartdialog
const gameStartDialog = (()=>{
    const startDialogSelector = document.querySelector('.game-start-dialog');
    startDialogSelector.showModal();

    const anotherPlayerBtn = document.querySelector('.another-player');
    const computerBtn = document.querySelector('.computer');
    
    let anotherPlayerClicked = {
        state: false,
    }

    let computerClicked = {
        state: false,
    }
    
    //change state based on clicked btn
    anotherPlayerBtn.addEventListener('click', (e)=>{

        console.log(e.target.textContent + 'clicked');
        gameStartDialog.anotherPlayerClicked.state = true;
        startDialogSelector.style.display = 'none';
        const difficulty = document.querySelector('.difficulty');
        difficulty.innerHTML = '';
        gameRoundController.createOpponents();

    });

    computerBtn.addEventListener('click', (e)=>{
        console.log(e.target.textContent + 'clicked');
        gameStartDialog.computerClicked.state = true;
        startDialogSelector.style.display = 'none';
        gameRoundController.createOpponents();
    })

    return {anotherPlayerClicked, computerClicked};

})();

//create players, also create a property to save their choice.
const Player = ()=>{
    let name;
    let mark;
    let winner = false;

    return {name, mark, winner};
}

//create an array object to save player choices.
const gameBoard = (()=>{

    const createGameBoard = ()=>{
        let board = Array(9).fill('')
        return board;
    }

    
    return {createGameBoard};

})();


// Logic to check for win condition and endGame based on that.
const winCondition = (()=>{ 

    //If someone wins or its a tie.
    function endGame(e){
        console.log(e.textContent);
        if(e.textContent === 'Yes'){

            //reset everything

            //clear the board
            gameRoundController.board.forEach((currentValue, currentIndex, obj)=>{
                gameRoundController.board[currentIndex] = '';
            })
            
            //reset the vars and props
            gameRoundController.currentPlayer = gameRoundController.playerOne;
            gameRoundController.playerChoiceCount = 0;
            gameRoundController.playerOne.winner = false;
            gameRoundController.playerTwo.winner = false;

            //clear the arrays in display module
            display.oIndices.forEach((currentValue,currentIndex,obj)=>{
                display.oIndices[currentIndex] = null;
            })
            console.log(display.oIndices);
            display.xIndices.forEach((currentValue,currentIndex,obj)=>{
                display.xIndices[currentIndex] = null;
            })
            console.log(display.xIndices);
            //clear the screen.
            const displayTurn = document.querySelector('.turn');
            displayTurn.textContent = '';
            const gameBoardSelector = document.querySelectorAll('.block');
            gameBoardSelector.forEach((currentValue,currentIndex,obj)=>{
                currentValue.classList.remove('choice-added');
                currentValue.innerHTML = '';
            })
        }
        else{
            //reset everything

            //clear the board
            gameRoundController.board.forEach((currentValue, currentIndex, obj)=>{
                gameRoundController.board[currentIndex] = '';
            })
            
            //reset the vars and props
            gameRoundController.currentPlayer = gameRoundController.playerOne;
            gameRoundController.playerChoiceCount = 0;
            gameRoundController.playerOne.winner = false;
            gameRoundController.playerTwo.winner = false;

            //clear the arrays in display module
            display.oIndices.forEach((currentValue,currentIndex,obj)=>{
                display.oIndices[currentIndex] = null;
            })
            console.log(display.oIndices);
            display.xIndices.forEach((currentValue,currentIndex,obj)=>{
                display.xIndices[currentIndex] = null;
            })
            console.log(display.xIndices);
            //clear the screen.
            const displayTurn = document.querySelector('.turn');
            displayTurn.textContent = '';
            const gameBoardSelector = document.querySelectorAll('.block');
            gameBoardSelector.forEach((currentValue,currentIndex,obj)=>{
                currentValue.classList.remove('choice-added');
                currentValue.innerHTML = '';
            })

            window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

        }
    }

    //display the winner on the screen.
    function displayWinner(){
        const gameEndDialog = document.querySelector('.game-end-dialog');
        const winner = document.querySelector('.winner')
        const yesBtn = document.querySelector('.yes-btn');
        const noBtn = document.querySelector('.no-btn');
        const displayTurn = document.querySelector('.turn');
        
        if(gameRoundController.playerOne.winner){
            displayTurn.textContent = gameRoundController.playerOne.name + ' won the game!';
            winner.textContent = gameRoundController.playerOne.name + ' Won!'
            gameEndDialog.showModal();
            yesBtn.addEventListener('click', (e)=>{
                endGame(e.target);
            });
            noBtn. addEventListener('click', (e)=>{
                endGame(e.target);
            });
        }

        else if(gameRoundController.playerTwo.winner){
            displayTurn.textContent = gameRoundController.playerTwo.name + ' won the game!';
            winner.textContent = gameRoundController.playerTwo.name + ' Won!'
            gameEndDialog.showModal();
            yesBtn.addEventListener('click', (e)=>{
                endGame(e.target);
            });
            noBtn. addEventListener('click', (e)=>{
                endGame(e.target);
            });
        }

        else{
            displayTurn.textContent = 'It\'s a tie!';
            winner.textContent = 'Its a tie!'
            gameEndDialog.showModal();
            yesBtn.addEventListener('click', (e)=>{
                endGame(e.target);
            });
            noBtn. addEventListener('click', (e)=>{
                endGame(e.target);
            });
        }

    }
    //check who won the game.
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

//Object to control the flow of game/ turns.
const gameRoundController = (()=>{

    let playerOne = Player();
    let playerTwo = Player();

    //call after the selection of opponent
    function createOpponents(){

        //if opponent is another player get names for both
        if(gameStartDialog.anotherPlayerClicked.state){
            //dialog to get names from user
            const playersName = document.querySelector('.players-name-input');
            playersName.style.display = 'grid';
            playersName.showModal();

            //get names from user, set the names and marks in the relevant objects.
            playersName.addEventListener('submit', ()=>{

                const playerOneName = document.querySelector('.player-one-name');
                const playerTwoName = document.querySelector('.player-two-name');


                playerOne.name = playerOneName.value;
                playerOne.mark = 'X';
                playerTwo.name = playerTwoName.value;
                playerTwo.mark = 'O';

                playersName.style.display = 'none';

            })  

        }

        else if(gameStartDialog.computerClicked.state){
            playerOne.name = 'You';
            playerOne.mark = 'X';
            playerTwo.name = 'Computer';
            playerTwo.mark = 'O';
        }

    }


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





    return {round, board, playerOne, playerTwo, currentPlayer, playerChoiceCount, createOpponents};

})();

//create a module for computer choice
const computerChoice = (()=>{

    function takeComputerChoice(){

        console.log('computer choice added to the gameboardarray');

    }

})();

//create an object to display the choices.
const display = (()=>{

    const boardBlockSelector = document.querySelectorAll('.block');
    const turnDisplay = document.querySelector('.turn');




    let xIndices = Array(9).fill(null);
    let oIndices = Array(9).fill(null);

    const updateScreen = ()=>{

        //display the name of relavant player each turn
        const displayName = ()=>{
            if(gameRoundController.playerChoiceCount%2 === 0){
                turnDisplay.textContent = gameRoundController.playerTwo.name + '\'s turn';
            }
            else{
                turnDisplay.textContent = gameRoundController.playerOne.name + '\'s turn';
            }
        }

        displayName();

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
                    if(!currentValue.classList.contains('choice-added')){
                        // let xSvg = document.createElement('img');
                        // xSvg.src = './images/X.svg';
                        // xSvg.classList.add('x-svg');

                        let svgMarkup = `<?xml version="1.0" encoding="utf-8"?>
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                          <g transform="matrix(0.8710160255432129, 0, 0, 0.8710160255432129, 172.13987731933594, 172.32278442382812)">
                            <g transform="translate(-136.89 -361.85)" stroke="#000" stroke-width="2">
                              <path d="M 140.065 363.319 C 206.025 415.313 259.565 481.138 325.259 533.393 C 303.663 553.424 285.896 511.424 267.488 501.963 C 221.95 457.292 178.303 410.093 127.3 371.511 L 140.065 363.319 Z" style="stroke-width: 11.4808px;"/>
                              <path d="M 289.606 379.62 C 254.513 402.86 225.043 434.157 198.027 466.215 C 181.66 481.501 183.051 512.476 158.931 518.308 C 172.741 484.901 194.101 455.441 221.379 431.74 C 241.742 411.967 261.709 388.375 289.61 379.62 L 289.606 379.62 Z" style="stroke-width: 11.4808px;"/>
                            </g>
                          </g>
                        </svg>`;

                        currentValue.classList.add('choice-added');
                        currentValue.innerHTML = svgMarkup;
                        // currentValue.appendChild(xSvg);
                    }
                    
                }
            })
        })

        boardBlockSelector.forEach((currentValue, currentIndex)=>{
            oIndices.forEach((value, index)=>{
                if(value === currentIndex){
                    if(!currentValue.classList.contains('choice-added')){
                        // var oSvg = document.createElement('img');
                        // oSvg.src = './images/O.svg';
                        // oSvg.classList.add('o-svg');

                        let svgMarkup = `<?xml version="1.0" encoding="utf-8"?>
                            <svg viewBox="8.055 1.151 653.625 500" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(6.821938991546631, 0, 0, 5.760402202606201, -139.6765594482422, -477.5549011230468)" style="">
                                <g transform="translate(-136.89 -361.85)" stroke="#000" stroke-width="2">
                                <path class="o-path" d="M 208.373 473.339 C 205.699 472.843 196.382 475.504 197.928 475.256 C 200.419 473.287 191.705 481.838 193.391 485.761 C 192.208 496.507 203.601 502.716 212.74 503.801 C 215.061 504.01 221.333 501.046 215.991 503.645 C 221.731 496.392 220.217 484.526 214.111 477.751 C 210.271 475.377 202.855 470.05 210.852 470.863 C 219.862 475.018 224.888 485.618 222.491 495.228 C 222.186 505.918 207.392 508.781 200.023 502.982 C 190.455 499.828 186.982 487.577 192.329 479.403 C 195.716 473.373 207.524 470.251 210.782 471.588 L 208.372 473.339 L 208.373 473.339 Z"/>
                                </g>
                            </g>
                            </svg>`;

                        currentValue.classList.add('choice-added');
                        currentValue.innerHTML = svgMarkup;
                        // currentValue.appendChild(oSvg);
                    }
                }
            })
        })
    }

    
    boardBlockSelector.forEach((currentValue, currentIndex, obj)=>{
        currentValue.addEventListener('click', ()=>{
            if(gameRoundController.board[currentIndex] === ''){

                if(gameStartDialog.anotherPlayerClicked.state){
                    if(gameRoundController.currentPlayer === gameRoundController.playerOne){
                        gameRoundController.board[currentIndex] = gameRoundController.playerOne.mark;
                        updateScreen();
                        gameRoundController.round();
                    }
                    else{
                        gameRoundController.board[currentIndex] = gameRoundController.playerTwo.mark;
                        updateScreen();
                        gameRoundController.round();
                    }
                }
                else if(gameStartDialog.computerClicked.state){
                    if(gameRoundController.currentPlayer === gameRoundController.playerOne){
                        gameRoundController.board[currentIndex] = gameRoundController.playerOne.mark;
                        computerChoice.takeComputerChoice();
                        updateScreen();
                        gameRoundController.round();
                    }
                }

            }
        })
    })



    return {xIndices, oIndices};
})();


