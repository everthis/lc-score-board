import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { ConfigProvider, message, Table } from "antd";

import zhCN from "antd/lib/locale/zh_CN";
import "antd/dist/antd.css";

import { VirtualTable } from "./vitualTable";

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [tableCols, setTableCols] = useState([]);
  useEffect(() => {
    const isProd = window.location.origin.endsWith("github.io");
    const dataPath = isProd
      ? "/lc-score-board/getRank/data.json"
      : "/data.json";
    fetch(`${window.location.origin}${dataPath}`)
      .then((d) => d.json())
      .then((d) => {
        try {
          const obj = JSON.parse(d);
          const res = [];
          const cols = [];
          const set = new Set();
          set.add("name");
          Object.keys(obj).forEach((k) => {
            if (k == null || k === "") return;
            const name = k,
              data = obj[k];
            const el = { name, key: name };
            Object.keys(data).forEach((num) => {
              const key = `c_${num}`;
              el[key] = data[num][0];
              set.add(key);
            });
            res.push(el);
          });
          console.log(res);
          const contests = Array.from(set).sort((a, b) => b - a);
          contests.forEach((k) => {
            const tmp = {
              title: k === "name" ? "Name" : k,
              key: k,
              dataIndex: k,
              width: 200,
            };
            if (k === "name") {
              tmp.fixed = "left";
              tmp.width = 150;
            } else {
              tmp.width = 100;
            }
            cols.push(tmp);
          });
          console.log(cols);
          setTableCols(cols);
          setTableData(res);
        } catch (e) {
          console.log(e);
        }
      });
  }, []);

  return (
    <ConfigProvider locale={zhCN}>
      <VirtualTable
        pagination={false}
        columns={tableCols}
        dataSource={tableData}
        scroll={{ x: "100vw", y: window.innerHeight }}
      />
    </ConfigProvider>
  );
};

render(<App />, document.getElementById("app"));
