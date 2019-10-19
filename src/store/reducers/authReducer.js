const intiState = {
    authError: null
}

const authReducer = (state = intiState, action) => {
    switch (action.type) {
            case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return {
                ...state,
                authError: null
            };
            case 'LOGIN_ERROR':
                console.log('Login error')
                return {
                ...state,
                authError: 'Login Failed'
            };
            case 'LOGGED_OUT_ERROR':
                console.log('Logout error')
                return {
                ...state,
                authError: 'Logout Failed'
            };
            case 'LOGGED_OUT':
                console.log('Logout Success')
                return {
                    ...state,
                    authError: null
                };
            default: 
                return state
    
    }
    
}

export default authReducer