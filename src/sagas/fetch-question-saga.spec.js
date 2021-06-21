<<<<<<< HEAD
import { handleFetchQuestion }  from './fetch-question-saga';
import fetch from 'isomorphic-fetch';
/**
 * This test is an example of two important Jest testing principles,
 * 1) we're mocking the "fetch" module, so that we don't actually make a request every time we run the test
 *  The module, isomorphic fetch, is conveniently mocked automatically be including the file __mocks__/isomorphic-fetch.js adjacent to to the Node.js folder
 * 2) we're using an async function to automatically deal with the fact that our app isn't synchronous
 */
=======
import { handleFetchQuestion } from './fetch-question-saga';
import fetch from 'isomorphic-fetch';

>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
describe("Fetch questions saga",()=>{
    beforeAll(()=>{
        fetch.__setValue([{question_id:42}]);
    });
<<<<<<< HEAD
    it("should get the questions from the correct endpoint in response to the appropriate action",async ()=>{
        const gen = handleFetchQuestion({question_id:42});
        /**
         * At this point, isomorphic fetch must have been mocked,
         * or an error will occur, or, worse, an unexpected side effect!
         */
        const { value } = await gen.next();
        expect(value).toEqual([{question_id:42}]);

        /**
         * We can also assert that fetch has been called with the values expected (note that we used a spy in the file where we mock fetch.)
         */
        expect(fetch).toHaveBeenCalledWith(`/api/questions/42`);
=======
    it("should fetch the questions",async ()=>{
        const gen = handleFetchQuestion({question_id:42});
        const { value } = await gen.next();
        expect(value).toEqual([{question_id:42}]);
        expect(fetch).toHaveBeenCalledWith(`/api/questions/42`)
>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
    });
});