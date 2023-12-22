import { useRecoilValue } from "recoil";
import { stockDataAtom } from "../recoil/atom/stockDataAtom";
import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, } from "chart.js";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { FiTrendingUp } from "react-icons/fi";

const STOCK_DATA_QUERY = gql`
  query GetStockData($symbol: String!) {
    stockData(start: "2022-01-01", end: "2023-12-31", symbol: $symbol) {
      instrument
      closingPrice
      openingPrice
      date
      change
      week52High
      week52Low
      averagePrice
    }
  }
`;

export default function Stock() {
  const stockData = useRecoilValue(stockDataAtom);
  const { data: allstockData, loading, error } = useQuery(STOCK_DATA_QUERY, {
    variables: {
        symbol: stockData.instrument
    }
  });
  const [color, setColor] = useState('green')
  useEffect(() => {
    const ctx = document.getElementById("chart");

    if (allstockData) {
      // Destroy existing chart if it exists
      if (window.myChart) {
        window.myChart.destroy();
      }

      const d = allstockData.stockData.map((data) => data.date);
      const cp = allstockData.stockData.map(
        (data) => data.closingPrice
      );
      const closingPrices = [...cp].reverse()
      const dasc = [...d].reverse()
      const diff = closingPrices[closingPrices.length-1] - closingPrices[0]
      if(diff > 0) {
        setColor('#37df12')
      } else if(diff == 0) {
        setColor('blue')
      } else {
        setColor('red')
      }
      const dates = dasc.map(date => new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }));
      Chart.register(LinearScale, LineController, CategoryScale, PointElement, LineElement)
      window.myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Price Movement",
              data: closingPrices,
              borderWidth: 2,
              borderColor: color,
              pointRadius: 0
            },
          ],
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true,
              position: 'right'
            },
            x: {
                grid: {
                    display: false
                }
            }
          },
          tooltips: {
            callback: {
                label: function(context) {
                    return context.label
                }
            }
          }
        },
      });

      console.log(allstockData.stockData);
    }
    
  }, [allstockData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching stock data: {error.message}</p>;
  }

  return (
    <div className="p-3 flex flex-col overflow-y-scroll w-full h-full pb-[200px] space-y-3">
      <div className="flex flex-col px-10 bg-gray-800 rounded-lg">
        <div className="flex space-x-2 text-lg items-center">
          <p className="text-5xl text-white">{stockData.closingPrice}</p>
          <div className="flex items-center space-x-2 text-3xl">
            <p
              className={`${
                (stockData.closingPrice - stockData.openingPrice).toFixed(3) < 0
                  ? "text-red-500"
                  : ""
              } ${
                (stockData.closingPrice - stockData.openingPrice) === 0
                  ? "text-blue-500"
                  : ""
              } ${
                (stockData.closingPrice - stockData.openingPrice).toFixed(3) > 0
                  ? "text-[#37fd12]"
                  : ""
              } font-semibold text-sm`}
            >
                {(stockData.closingPrice - stockData.openingPrice).toFixed(3)} {' '}
              ({stockData.change}%)
            </p>
          </div>
        </div>
        <p className="text-gray-300 font-semibold text-2xl">{stockData.date}</p>
      </div>
      <div className="w-full h-fit mb-4">
        <canvas id="chart" className="max-h-[400px] w-full"></canvas>
      </div>
      <div className="flex space-x-10 items-center w-full">
        <div className="flex flex-grow justify-around border-2 border-gray-500 p-1 rounded-md">
            <p className="font-bold">1W</p>
            <p className="font-bold">1M</p>
            <p className="font-bold">1Y</p>
            <p className="font-bold">MAX</p>
        </div>
        <div>
            <p className="p-1 px-3 rounded-md border-2 border-gray-500"><FiTrendingUp className="text-2xl"/></p>
        </div>
      </div>

      <div>
        <div>
            <p className="text-xl text-white">Key Statistics</p>
        </div>
        <div>
            <div className="flex justify-between items-center border-b border-gray-600">
                <p className="text-gray-100 font-semibold">Change</p>
                <p className="text-gray-200 text-sm font-semibold">{allstockData.stockData[0].change}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-600">
                <p className="text-gray-100 font-semibold">52wk High</p>
                <p className="text-gray-200 text-sm font-semibold">{allstockData.stockData[0].week52High}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-600">
                <p className="text-gray-100 font-semibold">52wk Low</p>
                <p className="text-gray-200 text-sm font-semibold">{allstockData.stockData[0].week52Low}</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-600">
                <p className="text-gray-100 font-semibold">Average Price</p>
                <p className="text-gray-200 text-sm font-semibold">{allstockData.stockData[0].averagePrice}</p>
            </div>
        </div>
      </div>
    </div>
  );
}