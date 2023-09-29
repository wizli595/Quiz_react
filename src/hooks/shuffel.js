export function shuffleArray(answer) {
  let currentIndex = answer.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [answer[currentIndex], answer[randomIndex]] = [
      answer[randomIndex],
      answer[currentIndex],
    ];
  }

  return answer;
}
