import React from "react";
import { Pagination, PaginationProps, Table } from "antd";

import { ITable } from "./table.types";

const TableContainer: React.FC<ITable> = ({
  columns,
  data,
  loading,
  title,
  current,
  total,
  setCurrent,
  rowKey,
  showExpand = false,
  expandableItems,
}) => {
  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };
  return (
    <>
      <Table
        title={() => (
          <b style={{ fontWeight: 500, fontSize: "18px", color: "#5e5873" }}>
            {title}
          </b>
        )}
        expandable={{
          expandedRowRender: expandableItems,
          showExpandColumn: showExpand,
        }}
        pagination={false}
        footer={() => (
          <Pagination
            style={{ textAlign: "end" }}
            current={current}
            onChange={onChange}
            total={total}
          />
        )}
        rowKey={rowKey}
        columns={columns}
        dataSource={data}
        loading={loading}
        scroll={{ x: 1000 }}
      />
    </>
  );
};

export default TableContainer;
