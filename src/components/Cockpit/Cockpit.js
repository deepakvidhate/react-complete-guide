import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../auth-context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] clean up with in useEffect');
        };
    }, []);

    useEffect(() => {
        return () => {
            console.log('[Cockpit.js] clean up with in 2nd useEffect');
        };
    });


    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>this is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
                </button>
                {
                    !authContext.authenticated ?
                    <button onClick={authContext.login}>Log in</button>
                    :
                    <button onClick={authContext.logout}>Log out</button>

                }

        </div>
    );
}

export default React.memo(cockpit);