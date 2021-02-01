import { IDetailsObj } from '../interfacesTypesAndEnums/index';

type DetailsAction =
| { type: 'SET_NAME'; payload: string }
| { type: 'SET_AGE'; payload: string }
| { type: 'SET_EMAIL'; payload: string }
| { type: 'CLEAR_DETAILS' };

export const defaultDetailsState: IDetailsObj = {
Details: { 
    name: '', 
    age: 0, 
    email: ''}
};

export function detailsReducer(state: any, action: DetailsAction): IDetailsObj {
switch(action.type) {
    case 'SET_NAME':
        return { ...state, Details: 
                    { ...state.Details, name: action.payload } };
    case 'SET_AGE':
        return { ...state, Details:
                    { ...state.Details, age: action.payload } };
    case 'SET_EMAIL':
        return { ...state, Details:
                    { ...state.Details, email: action.payload } };
    case 'CLEAR_DETAILS':
        return { ...state, Details: defaultDetailsState };
    default:
        return state;
    }
}

