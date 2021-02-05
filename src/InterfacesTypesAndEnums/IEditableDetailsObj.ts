import { IDetailsObj } from './IDetailsObj';

// Aha! We're extending an object! This object takes all the values of IDetailsObj, then it adds an additional .. 
// .. set of attributes to it.
export interface IEditableDetailsObj extends IDetailsObj {
    updateDetails: Function
}