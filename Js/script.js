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

            console.log(xIndices);
            console.log(oIndices);

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

            display.updateScreen(board);

        }

        playRound();
        

    })();


})();