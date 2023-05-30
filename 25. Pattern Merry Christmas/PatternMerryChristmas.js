// VERSIÓN 1
function christmasTree1(height) {
  if (height < 3) {
    console.log("");
  }

  let space = " ";
  let star = "*";
  let count = 0;

  let correctedHeight = Math.floor(height / 3);

  for (let i = 1; i <= correctedHeight; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(
        space.repeat((correctedHeight * 2 + 3 - (2 * j - 1 + count)) / 2) +
          star.repeat(2 * j - 1 + count)
      );
    }
    count += 2;
  }

  console.log(space.repeat((correctedHeight * 2) / 2) + "#".repeat(3));
}

christmasTree1(9);

// VERSIÓN 2
function christmasTree2(height) {
  if (height < 3) {
    return "";
  }

  let tree = new Array();

  let space = " ";
  let star = "*";
  let count = 0;

  let correctedHeight = Math.floor(height / 3);

  for (let i = 1; i <= correctedHeight; i++) {
    for (let j = 1; j <= 3; j++) {
      tree.push(
        space.repeat((correctedHeight * 2 + 3 - (2 * j - 1 + count)) / 2) +
          star.repeat(2 * j - 1 + count) +
          "\r\n"
      );
    }
    count += 2;
  }

  tree.push(space.repeat((correctedHeight * 2) / 2) + "#".repeat(3));

  return tree.join("");
}

console.log(christmasTree2(9));
