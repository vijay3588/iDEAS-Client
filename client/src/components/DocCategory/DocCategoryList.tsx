import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  IStateType,
  IDocCategoryState,
} from "../../store/models/root.interface";
import { IDocCategory } from "../../store/models/doccategory.interface";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { IAccount } from "../../store/models/account.interface";
export type productListProps = {
  onSelect?: (product: IDocCategory) => void;
  onSelectDelete?: (product: IDocCategory) => void;
  children?: React.ReactNode;
  docCategoryModificationStatus: any;
  allowDelete: boolean;
};

function DocCategoryList(props: productListProps): JSX.Element {
  const docCategories: IDocCategoryState = useSelector(
    (state: IStateType) => state.docCategories
  );
const roles: any = useSelector((state: IStateType) => state.account.roles);
let [userRole] = useState(roles[0] ? roles[0] : "Superadmin");
  function onClickProductSelected(cell: any, row: any, rowIndex: any) {
    if (props.onSelect) props.onSelect(row);
  }
  function onClickProductDelete(cell: any, row: any, rowIndex: any) {
    if (props.onSelectDelete) props.onSelectDelete(row);
  }

  function buttonFormatter(
    cell: any,
    row: any,
    enumObject: any,
    rowIndex: any
  ) {
    const { docCategoryModificationStatus = 0, allowDelete } = props;
    if (docCategoryModificationStatus === 0) {
      return (
        <>
          <button
            type="button" className="btn btn-border"
            onClick={() => onClickProductSelected(cell, row, rowIndex)}
          >
            <i className="fas fa fa-pen"></i>
          </button>
          {["Superadmin"].includes(userRole) && (
            <button
              className="btn btn-border btn-red-color"
              onClick={() => onClickProductDelete(cell, row, rowIndex)}
            >
              <i className="fas fa fa-trash" aria-hidden="true"></i>
            </button>
          )}
        </>
      );
    } else {
      return (
        <>
          <button type="button" className="btn btn-border" disabled style={{ cursor: "not-allowed" }}>
            <i className="fas fa fa-pen"></i>
          </button>
          {["Superadmin"].includes(userRole) && (
          <button
            className="btn btn-border  btn-red-color"
            onClick={() => onClickProductDelete(cell, row, rowIndex)}
          >
            <i className="fas fa fa-trash" aria-hidden="true"></i>
          </button>
          )}
        </>
      );
    }
  }

  const options = {
    clearSearch: true,
  };
  return (
    <div className="portlet">
      <BootstrapTable
        options={options}
        data={docCategories.docCategories}
        pagination={true}
        hover={true}
        search={true}
      >
        <TableHeaderColumn
          dataField="_id"
          isKey
          searchable={false}
          hidden={true}
        >
          ID
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="name"
          width="16%"
          className="thead-light-1"
        >
          Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="description"
          className="thead-light-1"
          width="16%"
        >
          Description
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="button"
          dataFormat={buttonFormatter}
          className="thead-light-1"
          width="10%"
        >
          Action
        </TableHeaderColumn>
      </BootstrapTable>
      {/*  <Table
        columns={columns}
        data={products.products}
        formatFunction={convertDate}
        onCustomSelect={props.onSelect}
      /> */}
      {/*  <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Box</th>
            <th scope="col">Rack</th>
            <th scope="col">M Date</th>
            <th scope="col">E Date</th>
          </tr>
        </thead>
        <tbody>{productElements}</tbody>
      </table> */}
    </div>
  );
}

export default DocCategoryList;
