module.exports = function towelSort (matrix) {
  if (!matrix) {return []}
  let result = [];
  for (let i=0; i<matrix.length; i++){
      let smallArr = matrix[i].sort((a, b) => (i%2 != 0) ?  b - a : a - b);
   result.push(smallArr);
   }  
  return result.flat();
}
