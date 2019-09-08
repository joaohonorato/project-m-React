const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('Login sucess');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCESS':
            console.log('Signout sucess');
            return state;
        case 'SIGNUP_SUCESS':
            console.log('Signup sucess')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer