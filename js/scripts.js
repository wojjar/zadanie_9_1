
function getTriangleArea(a,h) {
    if ((a > 0) && (h > 0)) 
        return a*h/2;
    else 
        console.log("Nieprawidłowe dane");
};
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(-10, 0);
var triangle2Area = getTriangleArea(2.5, 0);
var triangle3Area = getTriangleArea(3.2, 7.6);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);


