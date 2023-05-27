// VERSIÓN 1
function balanceStatements(list) {
  let stringsArray = list.split(", ").map(function (element) {
    return element.split(" ");
  });

  let status = "BS";

  let exception = new Array();

  let buy = 0;
  let sell = 0;

  for (let i = 0; i < stringsArray.length; i++) {
    let isExcepted = false;

    if (stringsArray[i][1].includes(".")) {
      isExcepted = true;
    }

    if (isExcepted === false && stringsArray[i][2].includes(".") === false) {
      isExcepted = true;
    }

    if (isExcepted === false && !status.includes(stringsArray[i][3])) {
      isExcepted = true;
    }

    if (isExcepted) {
      exception.push(i);
    } else if (stringsArray[i][3] === "B") {
      buy += Number(stringsArray[i][1]) * Number(stringsArray[i][2]);
    } else {
      sell += Number(stringsArray[i][1]) * Number(stringsArray[i][2]);
    }
  }

  if (exception.length > 0) {
    exceptionString = "";

    exception.forEach(function (element) {
      return (exceptionString += stringsArray[element].join(" ") + " ;");
    });

    console.log(
      `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}; Badly formed ${
        exception.length
      }: ${exceptionString}`
    );
  } else {
    console.log(`Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}`);
  }
}

balanceStatements(
  "ZNGA 1300 2.66 S, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S"
);

// VERSIÓN 2
function balanceStatements(list) {
  let stringsArray = list.split(", ").map(function (element) {
    return element.split(" ");
  });

  let exception = new Array();

  let buy = 0;
  let sell = 0;

  for (let i = 0; i < stringsArray.length; i++) {
    let isExcepted = false;

    for (let j = 0; j < stringsArray[i][1].length; j++) {
      if (stringsArray[i][1][j] === ".") {
        isExcepted = true;
        break;
      }
    }

    if (isExcepted === false) {
      isExcepted = true;
      for (let j = 0; j < stringsArray[i][2].length; j++) {
        if (stringsArray[i][2][j] === ".") {
          isExcepted = false;
          break;
        }
      }
    }

    if (
      isExcepted === false &&
      stringsArray[i][3] !== "B" &&
      stringsArray[i][3] !== "S"
    ) {
      isExcepted = true;
    }

    if (isExcepted) {
      exception.push(i);
    } else if (stringsArray[i][3] === "B") {
      buy += Number(stringsArray[i][1]) * Number(stringsArray[i][2]);
    } else {
      sell += Number(stringsArray[i][1]) * Number(stringsArray[i][2]);
    }
  }

  if (exception.length > 0) {
    exceptionString = "";

    exception.forEach(function (element) {
      return (exceptionString += stringsArray[element].join(" ") + " ;");
    });

    console.log(
      `Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}; Badly formed ${
        exception.length
      }: ${exceptionString}`
    );
  } else {
    console.log(`Buy: ${Math.round(buy)} Sell: ${Math.round(sell)}`);
  }
}

balanceStatements(
  "GOOG 90 160.45 B, JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S"
);
