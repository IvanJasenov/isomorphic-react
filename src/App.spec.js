import delay from 'redux-saga';
<<<<<<< HEAD

it("async test 1",done=>{
    setTimeout(done,100);
});
it("async test 2",()=>{
    return new Promise(resolve=>setTimeout(resolve,100))
});
it("async test 3",async ()=>await delay(100));
=======
it("async test 1",done=>{
    setTimeout(done,100);
});

it("async test 2",()=>{
    return new Promise(
        resolve=>setTimeout(resolve,1500)
    );
});

it("async test 3",
    async ()=>await delay(100)
);
>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
