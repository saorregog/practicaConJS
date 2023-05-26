function findHack(arr) {
  let answer = new Array();
  let goodGrades = "AB";

  for (let i = 0; i < arr.length; ++i) {
    let realPoints = 0;

    if (arr[i][2].length >= 5) {
      let hasGoodGrades = true;

      for (let j = 0; j < arr[i][2].length; j++) {
        if (goodGrades.includes(arr[i][2][j]) === false) {
          hasGoodGrades = false;
          break;
        }
      }

      if (hasGoodGrades) {
        realPoints += 20;
      }
    }

    for (let j = 0; j < arr[i][2].length; j++) {
      switch (arr[i][2][j]) {
        case "A":
          realPoints += 30;
          break;
        case "B":
          realPoints += 20;
          break;
        case "C":
          realPoints += 10;
          break;
        case "D":
          realPoints += 5;
          break;
        default:
          realPoints += 0;
      }
    }

    if (arr[i][1] > 200 || arr[i][1] !== realPoints) {
      answer.push(arr[i][0]);
    }
  }
  return answer;
}

console.log(
  findHack([
    ["Kabin Brown", 5, ["H", "F", "D", "F", "F"]],
    ["Jane Brown", 300, ["E", "F", "F", "A", "G", "B"]],
    ["Doe Bradley", 50, ["E", "F", "A", "E", "G"]],
    ["Bill Lawrence", 50, ["D", "E", "C", "F", "D", "C"]],
    ["Bill Bradley", 30, ["G", "F", "C", "F"]],
    ["Bill Lawrence", 300, ["F", "F", "D", "E"]],
    ["Jane Bradley", 40, ["E", "E", "B", "E", "F", "F"]],
    ["Bill Lawrence", 80, ["B", "C", "B", "C", "B", "F"]],
    ["Kabin Webb", 30, ["B", "E", "C", "G", "G"]],
    ["Jack Bradley", 65, ["C", "F", "E", "C", "B", "D"]],
  ])
);
