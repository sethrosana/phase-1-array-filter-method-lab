// Code your solution here
function findMatching(solution, slur) {
  return solution.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === slur.toLowerCase()
  );
}

function fuzzyMatch(source, section) {
  return source.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(section.toLowerCase()) === 0
  );
}

function matchName(source, soughtName) {
  return source.filter((record) => record.name === soughtName);
}