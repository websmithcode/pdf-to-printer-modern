export default function getPagesNumbers(pagesString: string) {
  // parse pages string to array of numbers
  const pagesArray = pagesString.split(",");
  const pagesNumbers: number[] = [];
  pagesArray.forEach((page) => {
    if (page.includes("-")) {
      const [start, end] = page.split("-");
      if (!isNumber(start) || !isNumber(end)) {
        throw new Error(`Invalid page numbers: ${page}`);
      }

      const [parsedStart, parsedEnd] = [parseInt(start), parseInt(end)];
      for (let i = parsedStart; i <= parsedEnd; i++) {
        pagesNumbers.push(i);
      }
    } else {
      const trimmedPage = page.trim();
      if (!isNumber(trimmedPage)) {
        throw new Error(`Invalid page number: ${page}`);
      }
      pagesNumbers.push(parseInt(trimmedPage));
    }
  });

  return pagesNumbers;
}

function isNumber(value: string | number): boolean {
  return value != null && /^\d+$/.test(value.toString());
}
