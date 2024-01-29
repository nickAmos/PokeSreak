

export function handleClick(id, chosenMon, handleCorrect, handleIncorrect) {
    if (id === chosenMon) {
      handleCorrect(id, chosenMon);
      
    } else {
      handleIncorrect(id, chosenMon);
    }
    };