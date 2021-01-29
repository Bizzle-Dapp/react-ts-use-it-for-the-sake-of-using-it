import { IDetailsObj } from './IDetailsObj';

export interface IEditableDetailsObj extends IDetailsObj {
    updateDetails: Function
}