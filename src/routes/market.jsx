import StockCard from "../components/StockCard";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

const STOCK_DATA_QUERY = gql`
  query GetStockData {
    stockData(latest: true) {
      instrument
      closingPrice
      openingPrice
      date
      change
    }
  }
`;

const TOP_GAINERS_QUERY = gql`
query GetTopGainers {
    topGainers(year:true) {
        instrument
        totalChange
    }
}
`
const TOP_LOSERS_QUERY = gql`
query GetTopLosers {
    topLosers(year:true) {
        instrument
        totalChange
    }
}
`
const INSTRUMENTS_QUERY = gql`
  query GetInstruments {
    instruments
  }
`;

export default function Market() {
  const { data: stock_data, error: s_error } = useQuery(STOCK_DATA_QUERY);
  const { data: instrument_data, error: i_error } = useQuery(INSTRUMENTS_QUERY);
  const { data: top_gainers_data, error: tg_error } = useQuery(TOP_GAINERS_QUERY);
  const { data: top_losers_data, error: tl_error } = useQuery(TOP_LOSERS_QUERY);
  const [topLosersEmpty, setTopLosersEmpty] = useState(false)
  const [topGainersEmpty, setTopGainerssEmpty] = useState(false)
  if (s_error) {
    return <p>{s_error.message}</p>;
  }
  if(tl_error) {
    return <p>{tl_error.message}</p>
  }
  useEffect(() => {
    console.log('losers')
    console.log(top_losers_data)
    if(top_losers_data) {
        if(!top_losers_data.topLosers.length > 0 ) {
            setTopLosersEmpty(true)
        }
    }
    if(top_gainers_data) {
        if(!top_gainers_data.topGainers.length > 0 ) {
            setTopGainersEmpty(true)
        }
    }
  }, [top_losers_data, top_gainers_data])
  return (
    <div className="w-full h-full overflow-y-scroll pb-[200px]">
        
        <div className="p-3">
            <div className="flex flex-col items-center p-3">
                <p className="text-2xl text-white font-bold">TOP GAINERS</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-3">
                {
                    top_gainers_data && top_gainers_data.topGainers.map((stock) => (
                        <div className="flex w-full bg-gray-800 p-3 rounded-md justify-between">
                            <p className="text-gray-100">{stock.instrument}</p>
                            <p className="text-[#37fd12]">{(stock.totalChange).toFixed(3)}%</p>
                        </div>
                    ))
                }
            </div>
        </div>
        {
            !topLosersEmpty && (
                <div className="p-2">
                    <div className="flex flex-col items-center p-3">
                        <p className="text-2xl text-white font-bold">TOP LOSERS</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-3">
                        {
                            top_losers_data && top_losers_data.topLosers.map((stock) => (
                                <div className="flex space-x-8 w-full sm:w-[200px] bg-gray-800 p-3 rounded-md">
                                    <p>{stock.instrument}</p>
                                    <p className="text-red-500">{(stock.totalChange).toFixed(3)}%</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        <div className="">
        <div className="flex flex-col items-center p-3">
            <p className="text-2xl text-white font-bold">LATEST MARKET DATA</p>
        </div>
        
        <div className="place-items-center gap-3 grid md:grid-cols-2 lg:grid-cols-4 p-3">
            {stock_data && stock_data.stockData.map((stock, i) => <StockCard key={i} stock={stock}></StockCard>)}
        </div>
        </div>
        <div>
            <div className="flex flex-col items-center p-3">
                <p className="text-2xl text-white font-bold">COMPANIES ON THE MARKET</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-3 place-items-center">
                {
                    instrument_data && instrument_data.instruments.map((ins, i) => (
                        <div key={i} className="p-4 bg-gray-800 w-full h-full rounded-md bg-gradient-to-br from-gray-300 via-gray-700 to-gray-900">
                            <p className="text-green-400 text-2xl font-semibold text-center">{ins}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
}
