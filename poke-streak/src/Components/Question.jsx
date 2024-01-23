

export default function Question({pokemonOne, pokemonTwo, pokemonThree, chosenMon}) {

function makeMovepool(moveArray) {
    let movepool = [];
    for (let i = 0; i < moveArray.length; i++) {
        movepool.push(moveArray[i].move.name);
    }
    return movepool
}

function selectMove(movepool) {
    return movepool[(Math.floor(Math.random() * movepool.length))];
}

let monOne = makeMovepool(pokemonOne)
let monTwo = makeMovepool(pokemonTwo)
let monThree = makeMovepool(pokemonThree)
let uniqueMove;

while (true) {
    if (chosenMon === 1) {
        uniqueMove = selectMove(monOne);   
        if ((! monTwo.includes(uniqueMove) && ! monThree.includes(uniqueMove))) {   
            break;
        }
    } else if (chosenMon === 2) {
        uniqueMove = selectMove(monTwo);
        if ((! monOne.includes(uniqueMove) && ! monThree.includes(uniqueMove))) {
            break;
        }
    } else if (chosenMon ===3) {
        uniqueMove = selectMove(monThree);
        if ((! monTwo.includes(uniqueMove) && ! monOne.includes(uniqueMove))) {
            break;
        }
    };   
}

console.log(uniqueMove);




        





    return(
        <>
        <div>The chosen move is {uniqueMove}</div>
        </>
    )
}