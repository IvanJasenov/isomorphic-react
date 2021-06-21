let count = 0;
<<<<<<< HEAD

export default {

    __setCount(_count){

        count = _count;

    },
    async getNotifications(){

        // console.warn("Using mock notification service");
        return { count };

    }
};

=======
export default {
    __setCount(_count) {
        count = _count;
    },
    async GetNotifications(){
        console.warn("GOOD JOB! USING MOCK SERVICE!");
        return { count };
    }
}
>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
