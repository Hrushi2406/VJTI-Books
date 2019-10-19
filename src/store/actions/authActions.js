export const login = (credentials) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((e) => {
            dispatch({type: 'LOGIN_ERROR', err: e})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firebase = getFirebase();
            
        firebase.auth().signOut()
        .then(() => {
            dispatch({type: 'LOGGED_OUT'})
        }).catch((e) => {
            dispatch({type: 'LOGGED_OUT_ERROR', err: e})
        })
    }
}