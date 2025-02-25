// export default function QueryProcessor(query: string): string {
//   if (query.toLowerCase().includes("shakespeare")) {
//     return (
//       "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
//       "English poet, playwright, and actor, widely regarded as the greatest " +
//       "writer in the English language and the world's pre-eminent dramatist."
//     );
//   }

//   if (query.toLowerCase().includes("andrew id")) {
//     return (
//       "My andrewID is justinzo"
//     );
//   }

//   if (query.toLowerCase().includes("name")) {
//     return "Rohan";
//   }

//   if (query.toLowerCase().includes("name")) {
//     return "Rohan";
//   }

//   query = query.toLowerCase(); // Normalize the query
//   const numberMatch = query.match(/(\d{1,4})/g);
//   if (!numberMatch) return "I don't understand the query.";
//   const numbers = numberMatch.map(Number);

//   function isSixthPower(n) {
//     let root = Math.round(Math.pow(n, 1 / 6));
//     return Math.pow(root, 6) === n;
//   }

//   function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
//   }

//   const validNumbers = numbers.filter(isSixthPower);
//   const primeNumbers = numbers.filter(isPrime);

//   let response = `Which of the following numbers is both a square and a cube: ${numbers.join(", ")}? `;
//     response += validNumbers.length > 0 ? `${validNumbers.join

//   if (query.toLowerCase().includes("prime") && primeNumbers.length > 0) {
//     return `${primeNumbers.join(", ")}`;
//   }

  
//   // Match patterns like "number plus number" or "number multiplied by number"
//   const additionMatch = query.match(/(\d+)\s*plus\s*(\d+)/);
//   const multiplicationMatch = query.match(/(\d+)\s*(multiplied by|times)\s*(\d+)/);
//   const subtractionMatch = query.match(/(\d+)\s*minus\s*(\d+)/);
//   const divisionMatch = query.match(/(\d+)\s*(divided by|over)\s*(\d+)/);

//   if (additionMatch) {
//       return `${parseInt(additionMatch[1]) + parseInt(additionMatch[2])}`;
//   } else if (multiplicationMatch) {
//       return `${parseInt(multiplicationMatch[1]) * parseInt(multiplicationMatch[3])}`;
//   } else if (subtractionMatch) {
//       return `${parseInt(subtractionMatch[1]) - parseInt(subtractionMatch[2])}`;
//   } else if (divisionMatch) {
//       return `${parseInt(divisionMatch[1]) / parseInt(divisionMatch[3])}`;
//   }
//   return "";
// }
export default function QueryProcessor(query: string): string {
  query = query.toLowerCase(); // Normalize the query

  // Handle arithmetic expressions
  let expression = query
      .replace(/plus/g, "+")
      .replace(/minus/g, "-")
      .replace(/multiplied by|times/g, "*")
      .replace(/divided by|over/g, "/");

  // Extract numbers and operators only (to ensure a valid math expression)
  if (/^[\d\s+\-*/]+$/.test(expression)) {
      try {
          return `${Function('"use strict"; return (' + expression + ')')()}`;
      } catch (e) {
          return "Invalid arithmetic expression.";
      }
  }

  return "I don't understand the query.";
}