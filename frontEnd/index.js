import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import AutoSizer from "react-virtualized-auto-sizer";

import "./index.css";
import "./styles.css";
import { VirtualTable } from "./vitualTable";
import HorizontalList from "./horizontalList";

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [tableCols, setTableCols] = useState([]);
  useEffect(() => {
    const isProd = window.location.origin.endsWith("github.io");
    const dataPath = isProd
      ? `${window.location.origin}/lc-score-board/getRank/data.json`
      : "https://wisdompeak.github.io/lc-score-board/getRank/data.json";
    fetch(`${dataPath}`)
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
          //   console.log(res);
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
          //   console.log(cols);
          setTableCols(cols);
          setTableData(res);
        } catch (e) {
          console.log(e);
        }
      });
  }, []);
  const Row = ({ index, style }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      Row {index}
    </div>
  );
  return (
    <>
      <AutoSizer>
        {({ height, width }) => <HorizontalList width={width} />}
      </AutoSizer>
      {/* <VirtualTable
        pagination={false}
        columns={tableCols}
        dataSource={tableData}
        scroll={{ x: "100vw", y: window.innerHeight }}
      /> */}
    </>
  );
};

render(<App />, document.getElementById("app"));
