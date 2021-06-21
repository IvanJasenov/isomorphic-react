import React from 'react';

import QuestionList from './components/QuestionList'
import QuestionDetail from './components/QuestionDetail'
<<<<<<< HEAD
=======
import { connect } from 'react-redux';
>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
import NotificationsViewer from './components/NotificationsViewer'

import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

/**
 * App Component is the highest level real component in the application, it is the parent of the routes and an
 * an ancestors of all other compoents
 */
const AppDisplay =  ()=>(
    <div>
        <div>
            <Link to={`/`}>
                <h1>Isomorphic React</h1>
            </Link>
        </div>
        <div>
<<<<<<< HEAD

            <NotificationsViewer />

=======
            <NotificationsViewer />
>>>>>>> a56a6c9a9726fdf2c60b1642c3c5bfe46dcbfeeb
        </div>

        {/*Specify a route for the main page which renders when the path is empty*/}
        <Route exact path='/' render={()=><QuestionList />}/>

        {/*Specify a route for questions where the detail renders differently depending on the question selected, the ID of which is passed in at render time*/}
        {/*It would be possible to read the current path from within the component during rendering, but this way all data is passed in through props.*/}
        <Route exact path='/questions/:id' render={({match})=><QuestionDetail question_id={match.params.id}/>}/>
    </div>
);

const mapStateToProps = (state,ownProps)=>({
    ...state,
});

/**
 * The connected component exported below forms the
 * core of our application and is used both on the server and the client
 */
export default connect(mapStateToProps)(AppDisplay);
