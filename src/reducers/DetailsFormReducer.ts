import { IDetailsObj } from '../interfacesAndTypes/index';

type DetailsAction =
| { type: 'SET_NAME'; payload: string }
| { type: 'SET_AGE'; payload: string }
| { type: 'SET_EMAIL'; payload: string }
| { type: 'CLEAR_DETAILS' };

export const defaultDetailsState: IDetailsObj = {
details: { 
    name: '', 
    age: 0, 
    email: ''}
};

export function detailsReducer(state: any, action: DetailsAction): IDetailsObj {
switch(action.type) {
    case 'SET_NAME':
        return { ...state, details: 
                    { ...state.Details, name: action.payload } };
    case 'SET_AGE':
        return { ...state, details:
                    { ...state.Details, age: action.payload } };
    case 'SET_EMAIL':
        return { ...state, details:
                    { ...state.Details, email: action.payload } };
    case 'CLEAR_DETAILS':
        return { ...state, details: defaultDetailsState };
    default:
        return state;
    }
}

