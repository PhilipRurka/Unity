const splitTextAtPositions = (text: string, positions: number[]) => {
  const result = [];
  let startIndex = 0;

  positions.forEach((position) => {
    result.push(text.slice(startIndex, position));
    startIndex = position;
  });

  result.push(text.slice(startIndex));

  return result;
};

export default splitTextAtPositions;
