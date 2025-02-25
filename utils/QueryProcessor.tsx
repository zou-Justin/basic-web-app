export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My andrewID is justinzo"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  query = query.toLowerCase(); // Normalize the query
  const numberMatch = query.match(/(\d{1,4})/g);
  if (!numberMatch) return "I don't understand the query.";
  const numbers = numberMatch.map(Number);

  function isSixthPower(n) {
    let root = Math.round(Math.pow(n, 1 / 6));
    return Math.pow(root, 6) === n;
  }

  const validNumbers = numbers.filter(isSixthPower);
  if (validNumbers.length > 0) {
    return `${validNumbers.join(", ")}`;
  }
  
  // Match patterns like "number plus number" or "number multiplied by number"
  const additionMatch = query.match(/(\d+)\s*plus\s*(\d+)/);
  const multiplicationMatch = query.match(/(\d+)\s*(multiplied by|times)\s*(\d+)/);
  const subtractionMatch = query.match(/(\d+)\s*minus\s*(\d+)/);
  const divisionMatch = query.match(/(\d+)\s*(divided by|over)\s*(\d+)/);

  if (additionMatch) {
      return `${parseInt(additionMatch[1]) + parseInt(additionMatch[2])}`;
  } else if (multiplicationMatch) {
      return `${parseInt(multiplicationMatch[1]) * parseInt(multiplicationMatch[3])}`;
  } else if (subtractionMatch) {
      return `${parseInt(subtractionMatch[1]) - parseInt(subtractionMatch[2])}`;
  } else if (divisionMatch) {
      return `${parseInt(divisionMatch[1]) / parseInt(divisionMatch[3])}`;
  }
  return "";
}
