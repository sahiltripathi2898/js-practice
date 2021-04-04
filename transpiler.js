/* Transpiler 
They are used to run modern / latest code on outdated engines
*/
let a = height ?? 100; //Modern code
//Converted into
let a = height !== undefined && height !== null ? height : 100;
//Babel is an example of transplier

/* Polyfills
They are used to run latest functions or modules on outdated engines
Like Math.trunc(1.23) it removes the decimal part
Webpack are an example of polyfill
*/
