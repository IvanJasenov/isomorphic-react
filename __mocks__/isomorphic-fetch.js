<<<<<<< HEAD
// import jest from 'jest';
let __value = 42;
const isomorphicFetch = jest.fn(()=>__value);
isomorphicFetch.__setValue = v=> __value = v;
=======
let __value = 42;
const isomorphicFetch = jest.fn(()=>__value);
isomorphicFetch.__setValue = v => __value = v;
>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
export default isomorphicFetch;