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
        
        const updateScreen = (board)=>{
            let xIndices = [];
            let oIndices = [];

            board.forEach((currentValue, currentIndex)=>{
                
                if(currentValue === 'X'){
                    xIndices.push(currentIndex);
                }
                else if(currentValue === 'O'){
                    oIndices.push(currentIndex);
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

        return {updateScreen};

    })();

    

    const gameRoundController = (()=>{


        function playRound(){

            const playerOne = Player('X');
            const playerTwo = Player('O');

            let board = gameBoard.createGameBoard();

            let currentPlayer = playerOne;
            let playerChoiceCount = 0;

            function tieCondition(){
                console.log('Its a tie because no one won');
            }

            boardBlockSelector.forEach((currentValue, currentIndex, obj)=>{

                currentValue.addEventListener('click', ()=>{

                    if(currentPlayer == playerOne){

                        if(board[currentIndex] === ''){
                            board[currentIndex] = playerOne.name;
                            currentPlayer = playerTwo;
                            playerChoiceCount++;
                            
                            if(playerChoiceCount === 9){
                                
                                tieCondition();
                            
                            }
                            
                            display.updateScreen(board);
                        }

                        
                    }
                    else{
                        if(board[currentIndex] === ''){
                            board[currentIndex] = playerTwo.name;
                            currentPlayer = playerOne;
                            playerChoiceCount++;

                            if(playerChoiceCount === 9){
                                
                                tieCondition();
                            
                            }

                            display.updateScreen(board);
                        }
                    }
                })


            })
            

        }

        playRound();
        

    })();


})();