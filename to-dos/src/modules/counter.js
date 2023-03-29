const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const INCREASEone = 'counter/INCREASEone';
const DECREASEone = 'counter/DECREASEone';
const RESET = 'counter/RESET';

export const setDiff = diff => ({type:SET_DIFF, diff});
export const increase = () => ({type:INCREASE});
export const increaseone = () => ({type:INCREASEone});
export const decreaseone = () => ({type:DECREASEone});
export const resetcounter = () => ({type:RESET});

const initialState = {
    number: 0,
    diff: 1
};

export default function counter(state=initialState, action){
    switch(action.type){
        case SET_DIFF:
        return{ ...state, diff: action.diff};
        case INCREASE:
        return{ ...state, number: state.number + state.diff};
        case INCREASEone:
        return{ ...state, number: state.number + 1};
        case DECREASEone:
        return{...state, number: state.number - 1};
        case RESET:
        return{...state, number: 0};
        default:
            return state;
    }
}