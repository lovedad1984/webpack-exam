// 이름이 있는 export
const area = function(r) {
  return Math.PI * r * r ;
}

const circumference = function(r) {
  return 2 * Math.PI * r;
}

export {area, circumference};

// export const area = function(r) {
//   return Math.PI * r * r ;
// }