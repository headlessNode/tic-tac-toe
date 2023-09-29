const game = (()=>{
    
    const boardBlockSelector = document.querySelectorAll('.block');

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


    //create an object to display the choices.

    const display = (()=>{

        let xIndices = [];
        let oIndices = [];
        let alreadyCheckedIndices = [];

        const updateScreen = (board)=>{


            board.forEach((currentValue, currentIndex)=>{
                
                if(currentValue === 'X'){
                    xIndices[currentIndex] = currentIndex;
                    // alreadyCheckedIndices.push(currentIndex);
                }
                else if(currentValue === 'O'){
                    oIndices[currentIndex] = currentIndex;
                    // alreadyCheckedIndices.push(currentIndex);
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

        const checkWin = (board)=>{
            console.log('xIndices ' + xIndices);
            console.log('oIndices ' + oIndices);
        }

        return {updateScreen, checkWin};

    })();

    

    const gameRoundController = (()=>{


        function playRound(){

            const playerOne = Player('X');
            const playerTwo = Player('O');

            let board = gameBoard.createGameBoard();

            let currentPlayer = playerOne;


            boardBlockSelector.forEach((currentValue, currentIndex, obj)=>{

                currentValue.addEventListener('click', ()=>{

                    if(currentPlayer == playerOne){

                        if(board[currentIndex] === ''){
                            board[currentIndex] = playerOne.name;
                            currentPlayer = playerTwo;
                            
                            display.updateScreen(board);
                            display.checkWin(board);
                        }

                        
                    }
                    else{
                        if(board[currentIndex] === ''){
                            board[currentIndex] = playerTwo.name;
                            currentPlayer = playerOne;

                            display.updateScreen(board);
                            display.checkWin(board);
                        }
                    }
                })


            })
            

        }

        playRound();
        

    })();


})();