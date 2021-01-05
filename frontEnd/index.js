import React, { useState, useEffect } from "react"
import { render } from "react-dom"
import { ConfigProvider, message, Table } from "antd"

import zhCN from "antd/lib/locale/zh_CN"
import "antd/dist/antd.css"

const App = () => {
  const [tableData, setTableData] = useState([])
  const [tableCols, setTableCols] = useState([])
  useEffect(() => {
    const isProd = window.location.origin.endsWith("github.io")
    const dataPath = isProd ? "/lc-score-board/getRank/data.json" : "/data.json"
    fetch(`${window.location.origin}${dataPath}`)
      .then(d => d.json())
      .then(d => {
        
      })
  }, []);

  /**
[
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
   */
  return (
    <ConfigProvider locale={zhCN}>
      <Table columns={tableCols} dataSource={tableData} scroll={{ x: 1500 }} sticky />
    </ConfigProvider>
  )
}

render(<App />, document.getElementById("app"))
