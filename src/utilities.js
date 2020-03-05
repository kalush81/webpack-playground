//Name export
//Default export

console.log("index.js");

// export const add = (a, b) => a + b;

// export const name = "Name";

// const squer = x => x * x;

// export default squer;

const add = (a, b) => a + b;

const name = "Jon ";

const squer = x => x * x;

export { add, name, squer as default };
