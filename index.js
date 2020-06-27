const matrixSpriteGenerator = (
  imageWidth, 
  imageHeight, 
  colNumber, 
  rowNumber, 
  numSprites
) => {
  const spriteWidth = imageWidth / colNumber;
  const spriteHeight = imageHeight / rowNumber;
  
  let array = [];
  let widths = [];
  let heights = [];

  for (let i = 0; i < colNumber; i++) {
    let width = i * spriteWidth;

    widths.push(width);
  }

  for (let i = 0; i < rowNumber; i++) {
    let height = i * spriteHeight;

    heights.push(height);
  }

  for (let i = 0; i < rowNumber; i++) {
    for (let j = 0; j < colNumber; j++) {
      array.push([widths[j], heights[i]]);
    }
  }

  array.length = numSprites;

  return {
    matrix: array,
    spriteWidth,
    spriteHeight
  };
};

console.log(matrixSpriteGenerator(2400, 1920, 5, 4, 20));
