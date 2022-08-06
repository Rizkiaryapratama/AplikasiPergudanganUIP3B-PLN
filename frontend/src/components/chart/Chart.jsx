import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import StockQRCode from "../../feature/QRCode/StockQRCode";
import axios from "axios";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,

  Area,
  AreaChart
} from "recharts";

export default function Chart({ title }) {
  const [stocks, setStock] = useState([]);

  useEffect(() => {
    getStocks();
    // eslint-disable-next-line
  }, []);

  const getStocks = async () => {
    const response = await axios.get("http://localhost:5000/stocks");
    setStock(response.data);
    console.log(response.data)
  };

  // const jumlahStock = [
    // <tbody>
    //   {stocks.map((stock) => (
    //     <tr key={stock._id}>
    //       <td>{stock.nama_barang}</td>
    //       <td>{stock.jumlah}</td>
    //       <td>
    //         <Moment format="DD-MM-YYYY">{stock.tgl_masuk}</Moment>
    //       </td>
    //       <td>
    //         <div className="qrcode">
    //           <StockQRCode />
    //         </div>
    //       </td>
    //     </tr>
    //   ))}
    // </tbody>
  // ];

  const stock = [
    {
      jumlah: 5,
      tgl_masuk: "2022-05-09",
    },
    {
      jumlah: 14,
      tgl_masuk: "2022-05-04",
    },
    {
      jumlah: 20,
      tgl_masuk: "2022-05-08",
    },
    {
      jumlah: 18,
      tgl_masuk: "2022-05-01",
    },
    {
      jumlah: 4,
      tgl_masuk: "2022-02-24",
    },
    {
      jumlah: 2,
      tgl_masuk: "2022-03-17",
    },
    {
      jumlah: 1,
      tgl_masuk: "2022-05-02",
    },
    {
      jumlah: 8,
      tgl_masuk: "2022-04-21",
    },
    {
      jumlah: 9,
      tgl_masuk: "2022-04-05",
    },
    {
      jumlah: 2,
      tgl_masuk: "2022-05-24",
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={stock}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="jumlah"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>

      </ResponsiveContainer>
    </div>
  );
}
