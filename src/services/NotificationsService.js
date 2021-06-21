import { delay } from 'redux-saga';
<<<<<<< HEAD

export default {

    async getNotifications(){

        // console.warn("Contacting real notifications server!");
        await delay(2000);
        return { count : 3 };

    }

};
=======
export default {
    async GetNotifications(){
        console.warn("REAL NOTIFICATION SERVICE! REALLY CONTACTING APIS!");
        await delay(1000);
        return { count: 42 };
    }
}
>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
