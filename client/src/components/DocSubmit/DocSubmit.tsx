import React, { Fragment, Dispatch, useState, useEffect } from "react";
import ProductSubmitList from "./DocSubmitList";
import ProductForm from "./DocSubmitForm"; 
import "./DocSubmit.css";
import { useDispatch, useSelector } from "react-redux";

import {
  IProductSubmitState,
  IStateType,
  IRootPageStateType,
} from "../../store/models/root.interface";
import Popup from "reactjs-popup";
import {
  clearSelectedProduct,
  setModificationState,
  changeSelectedProduct,
  loadListOfProduct,
} from "../../store/actions/productsubmit.action";
import { loadListOfDocCategory } from "../../store/actions/doccategory.action";
import { addNotification } from "../../store/actions/notifications.action";
import {
  ProductModificationStatus,
  IProduct,
  IProductList,
} from "../../store/models/product.interface";
import { IDocCategoryList } from "../../store/models/doccategory.interface";

import { IBoxList } from "../../store/models/box.interface";
import { loadListOfBox } from "../../store/actions/box.action";
import { loadListOfDocType } from "../../store/actions/doctype.action";

import {
  getIssuedDocumentList,
  getDocCategoryList,
  getBoxList,
  getDocTypeList,
  updateDoc,
} from "../../services/index";
import { IAccount } from "../../store/models/account.interface";
import { updateCurrentPath } from "../../store/actions/root.actions";

const Products: React.FC = () => {
  const account: IAccount = useSelector((state: IStateType) => state.account);
  const allowedUsers = ["Superadmin", "Developer", "Qualityuser"];
  const roles: any = useSelector((state: IStateType) => state.account.roles);
  let [userRole] = useState(roles[0] ? roles[0] : "Developer");
  const dispatch: Dispatch<any> = useDispatch();
  const products: IProductSubmitState = useSelector(
    (state: IStateType) => state.productSubmit
  ); 
  const path: IRootPageStateType = useSelector(
    (state: IStateType) => state.root.page
  );
 
  const [popup, setPopup] = useState(false);
 
  useEffect(() => {
    //Load Documents
    getIssuedDocumentList(account.auth, {"userId" : account.emp_id }).then((items: IProductList) => {
      dispatch(loadListOfProduct(items));
    });
    //Load Available Doc Categories
    getDocCategoryList(account.auth).then((items: IDocCategoryList) => {
      dispatch(loadListOfDocCategory(items));
    });
    //Load Available Boxes"
    getBoxList(account.auth).then((items: IBoxList) => {
      dispatch(loadListOfBox(items));
    });

    //Load Available Doc Types
    getDocTypeList(account.auth).then((items: IBoxList) => {
      dispatch(loadListOfDocType(items));
    });
    dispatch(updateCurrentPath("Home", "Document Submit"));
  }, [path.area,  dispatch]);

  function loadMainDocList(){
    
  }

  function onProductSelect(product: IProduct): void {
    dispatch(changeSelectedProduct(product));
    dispatch(setModificationState(ProductModificationStatus.None));
    dispatch(setModificationState(ProductModificationStatus.Edit));
  }

  function onDeleteProduct(product: IProduct): void {
    dispatch(changeSelectedProduct(product));
    dispatch(setModificationState(ProductModificationStatus.None));
    onProductRemove();
  }

  function onProductRemove() {
    if (products.selectedForProductSubmit) {
      setPopup(true);
    }
  }
 

  return (
    <Fragment>
      <h1 className="h5 mb-4 text-gray-800 font-bold">Document Submit</h1>
  

      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-1">
              <h6 className="m-0 font-weight-bold text-white font-12">
                Document List
              </h6>
              {/* <div className="header-buttons">
                <button
                  className="btn btn-border"
                  onClick={() =>
                    dispatch(
                      setModificationState(ProductModificationStatus.Create)
                    )
                  }
                >
                  <i className="fas fa fa-plus"></i>
                </button>
              </div> */}
            </div>
            {products.modificationState === ProductModificationStatus.Create ||
            (products.modificationState === ProductModificationStatus.Edit &&
              products.selectedForProductSubmit) ? (
              <ProductForm />
            ) : null}
            <div className="card-body" style={{ height: "1500px" }}>
              <ProductSubmitList
                onSelect={onProductSelect}
                onSelectDelete={onDeleteProduct}
                allowDelete={allowedUsers.includes(userRole)}
                productModificationStatus={products.modificationState}
                currentUser={account}                
                loadInitialSearchDataNew={loadMainDocList}
              />
            </div>
          </div>
        </div>
      </div>

      <Popup
        className="popup-modal"
        open={popup}
        onClose={() => setPopup(false)}
        closeOnDocumentClick
      >
        <div className="popup-modal">
          <div className="popup-title">Are you sure?</div>
          <div className="popup-content">
            <button
              type="button"
              className="btn btn-danger font-14"
              onClick={() => {
                if (!products.selectedForProductSubmit) {
                  return;
                }

                let boxInfoUpt = {
                  id: products.selectedForProductSubmit._id,
                  isActive: false,
                };
                updateDoc(boxInfoUpt, account)
                  .then(() => {
                    setPopup(false);
                  })
                  .catch((err) => {
                    dispatch(addNotification("Failed", `Product  not removed`));
                    setPopup(false);
                  });
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </Popup>
    </Fragment>
  );
};

export default Products;
