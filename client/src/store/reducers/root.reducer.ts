import { combineReducers, Reducer } from "redux";
import { UPDATE_CURRENT_PATH } from "../actions/root.actions";
import { IRootStateType, IActionBase, IStateType } from "../models/root.interface";
import productsReducer from "./products.reducer";
import productSubmitReducer from "./productsubmit.reducer";
import notificationReducer from "./notification.reducer";
import userReducer from "./users.reducer";
import orderReducer from "./order.reducer";
import accountReducer from "./account.reducer";
import boxReducer from "./box.reducer";
import categoryReducer from "./doccategory.reducer";
import typeReducer from "./doctype.reducer";
import homeReducer from "./home.reducer";
import departmentReducer from "./docdepartment.reducer";
import requestReducer from "./docrequest.reducer";
import requestApprovalReducer from "./docapproval.reducer";
import requestIssuanceReducer from "./docissuance.reducer";
import docLogSheetReducer from "./doclogsheet.reducer";
import requestIssuanceTakeoutReducer from "./docissuancetakeout.reducer";

import docDestructReducer from "./docdestruct.reducer";
import auditLogListReducer from "./auditlog.reducer";


const initialState: IRootStateType = {
    page: {area: "home", subArea: ""}
};

function rootReducer(state: IRootStateType = initialState, action: IActionBase): IRootStateType {


    switch (action.type) {
        case UPDATE_CURRENT_PATH:
            return { ...state, page: {area: action.area, subArea: action.subArea}};

        default:
            return state;
    }
}

const rootReducers: Reducer<IStateType> = combineReducers({
    root: rootReducer,
    products: productsReducer,
    productSubmit:productSubmitReducer,
    notifications: notificationReducer,
    users: userReducer,
    orders: orderReducer,
    account: accountReducer,
    boxes: boxReducer,
    docCategories: categoryReducer,
    docTypes: typeReducer,
    home: homeReducer,
    docDepartments: departmentReducer,
    docRequests: requestReducer,
    docApprovals : requestApprovalReducer,
    docIssuances : requestIssuanceReducer,
    docLogSheetData : docLogSheetReducer,
    docIssuancesTakeout : requestIssuanceTakeoutReducer,
    docDestructData : docDestructReducer,
    auditLogList : auditLogListReducer
});



export default rootReducers;