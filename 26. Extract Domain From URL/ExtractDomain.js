function domainName(url) {
  let domain = new String();

  let count = 1;

  if (
    url.includes("http://www.") ||
    url.includes("https://www.") ||
    url.includes("www.")
  ) {
    for (let i = 0; i < url.length; i++) {
      if (url[i] === ".") {
        while (url[i + count] !== ".") {
          domain += url[i + count];
          count += 1;
        }
        break;
      }
    }
  } else if (url.includes("http://") || url.includes("https://")) {
    for (let i = 0; i < url.length; i++) {
      if (url[i] === "/") {
        while (url[i + count + 1] !== ".") {
          domain += url[i + count + 1];
          count += 1;
        }
        break;
      }
    }
  } else {
    while (url[count - 1] !== ".") {
      domain += url[count - 1];
      count += 1;
    }
  }

  console.log(domain);
}

domainName("google.co.jp");
