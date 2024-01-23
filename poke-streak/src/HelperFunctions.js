

export function handleClick(id, chosenMon, handleStreak) {
    let prompt; 
    if (id === chosenMon) {
      prompt = 'Correct!';
      handleStreak('correct');
    } else {
      prompt = 'Incorrect!';
      handleStreak('incorrect');
    }
      console.log(`${prompt}`);
    };