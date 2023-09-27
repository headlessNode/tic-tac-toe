const game = (()=>{
    
    const boardBlockSelector = document.querySelectorAll('.block');

    alert('X goes first');

    //create players, also create a property to save their choice.
    const Player = (name)=>{
        name;
        let choiceIndex;
        let choiceMark;
        return {name, choiceIndex, choiceMark};
    }

    const playerOne = Player('X');
    const playerTwo = Player('O');
    playerOne.choiceMark = 'X';
    playerTwo.choiceMark = 'O';
    console.log(playerOne);
    console.log(playerTwo);

    //get the index of playerChoice on the board.
    playerOne.choiceIndex = prompt('At what index to place your mark? (0-8)', '1');
    alert('Player O\'s turn');
    playerTwo.choiceIndex = prompt('At what index to place your mark? (0-8)', '1');

    //create an array object to save player choices.
    const gameBoard = ((playerOne, playerTwo)=>{
        const board = Array(9).fill('');

        console.log(board);
        console.log('PlayerOne choiceIndex: ' + playerOne.choiceIndex + ' playerTwo choiceIndex: ' + playerTwo.choiceIndex);

        board[playerOne.choiceIndex] = playerOne.choiceMark;
        board[playerTwo.choiceIndex] = playerTwo.choiceMark;

        return {board};
    })(playerOne, playerTwo);

    const board = gameBoard.board;

    console.log(board);


    //create an object to display the choices.

    const display = ((board)=>{
        
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

    })(board);

})();