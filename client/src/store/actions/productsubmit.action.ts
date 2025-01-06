import { IProduct, ProductModificationStatus } from "../models/product.interface";
import {    } from "../../services/index"; 
export const ADD_PRODUCT: string = "ADD_PRODUCT";
export const EDIT_SUBMIT_PRODUCT: string = "EDIT_SUBMIT_PRODUCT";
export const REMOVE_PRODUCT: string = "REMOVE_PRODUCT";
export const CHANGE_PRODUCT_AMOUNT: string = "CHANGE_PRODUCT_AMOUNT";
export const CHANGE_PRODUCT_PENDING_EDIT: string = "CHANGE_PRODUCT_PENDING_EDIT";
export const CLEAR_PRODUCT_PENDING_EDIT: string = "CLEAR_PRODUCT_PENDING_EDIT";
export const SET_PRODUCT_MODIFICATION_STATE: string = "SET_PRODUCT_MODIFICATION_STATE";
export const LIST_SUBMIT_PRODUCT: string = "LIST_SUBMIT_PRODUCT";
export const UPDATE_QR_CODE: string = "UPDATE_QR_CODE";
 


export function updateQrCode(qrCode : string, qrCodeFor : any ) {
    return { type: UPDATE_QR_CODE , qrCode, qrCodeFor};
}


export function loadListOfProduct(items : IProductSubmitList) { 
    return { type: LIST_SUBMIT_PRODUCT , productSubmit:  items  };
}
            
export function addProduct(product: IProduct): IAddProductActionType {
    return { type: ADD_PRODUCT, product: product };
}

export function editProduct(product: IProduct): IEditProductActionType {
    return { type: EDIT_SUBMIT_PRODUCT, product: product };
}

export function removeProduct(id: number): IRemoveProductActionType {
    return { type: REMOVE_PRODUCT, id: id };
}

export function changeProductAmount(id: number, amount: number): IChangeProductAmountType {
    return { type: CHANGE_PRODUCT_AMOUNT, id: id, amount: amount };
}

export function changeSelectedProduct(product: IProduct): IChangeSelectedProductActionType {
    return { type: CHANGE_PRODUCT_PENDING_EDIT, product: product };
}

export function clearSelectedProduct(): IClearSelectedProductActionType {
    return { type: CLEAR_PRODUCT_PENDING_EDIT };
}

export function setModificationState(value: ProductModificationStatus): ISetModificationStateActionType {
    return { type: SET_PRODUCT_MODIFICATION_STATE, value: value };
}

interface IAddProductActionType { type: string, product: IProduct };
interface IEditProductActionType { type: string, product: IProduct };
interface IRemoveProductActionType { type: string, id: number };
interface IChangeSelectedProductActionType { type: string, product: IProduct };
interface IClearSelectedProductActionType { type: string };
interface ISetModificationStateActionType { type: string, value:  ProductModificationStatus};
interface IChangeProductAmountType {type: string, id: number, amount: number};
 

interface IProductSubmitList extends Array<IProduct>{}
 