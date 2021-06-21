import React from 'react';
<<<<<<< HEAD
import TagsList from './TagsList'
import renderer from 'react-test-renderer';


describe("The tags list",()=>{
    /**
     * The tagsList can be tested against an expected snapshot value, as in below.
     */
   it ("renders as expected",()=>{
       const tree = renderer
           .create(<TagsList tags={[`css`,`html`,`typescript`,`coffeescript`]}/>)
           .toJSON();

       expect(tree).toMatchSnapshot();
   });
=======
import TagsList from './TagsList';
import renderer from 'react-test-renderer';

describe("The tags list",()=>{
    it("renders as expected",()=>{
        const tree = renderer
            .create(<TagsList tags={[`css`,`html`,`swift`]} />)
            .toJSON();

        console.log(tree);

        expect(tree).toMatchSnapshot();
    });
>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
});