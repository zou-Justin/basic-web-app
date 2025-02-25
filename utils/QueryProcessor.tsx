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

    // Match patterns like "number plus number" or "number multiplied by number"
    const additionMatch = query.match(/(\d+)\s*plus\s*(\d+)/);
    const multiplicationMatch = query.match(/(\d+)\s*(multiplied by|times)\s*(\d+)/);
    const subtractionMatch = query.match(/(\d+)\s*minus\s*(\d+)/);
    const divisionMatch = query.match(/(\d+)\s*(divided by|over)\s*(\d+)/);

  if (additionMatch) {
      return `${additionMatch[1]} plus ${additionMatch[2]} is ${parseInt(additionMatch[1]) + parseInt(additionMatch[2])}`;
  } else if (multiplicationMatch) {
      return `${multiplicationMatch[1]} multiplied by ${multiplicationMatch[3]} is ${parseInt(multiplicationMatch[1]) * parseInt(multiplicationMatch[3])}`;
  } else if (subtractionMatch) {
      return `${subtractionMatch[1]} minus ${subtractionMatch[2]} is ${parseInt(subtractionMatch[1]) - parseInt(subtractionMatch[2])}`;
  } else if (divisionMatch) {
      return `${divisionMatch[1]} divided by ${divisionMatch[3]} is ${parseInt(divisionMatch[1]) / parseInt(divisionMatch[3])}`;
  }
  return "";
}
