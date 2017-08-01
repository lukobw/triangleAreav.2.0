var triangle1Area = getTriangleArea(12,16);
var triangle2Area = getTriangleArea(-4,20);
var triangle3Area = getTriangleArea(5,11);

function getTriangleArea(a, h){
  if (a === 0 || h === 0) {
    console.log ('Nieprawidłowe dane');
  } else {
    return (a * h / 2);
  }
};

console.log(triangle2Area);
