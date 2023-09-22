
const game = (()=>{
    
    const gameBoard = ()=>{
        let board = ['X1','O2','X3','O4','X5','O6','X7','O8','X9'];
        
        return board;
    };
        

    const Players = (name)=>{
        return {name};
    }
    
    const playerOne = Players('X');
    const playerTwo = Players('O');
    console.log(playerOne.name);
    console.log(playerTwo.name);


    return {gameBoard};

})();




