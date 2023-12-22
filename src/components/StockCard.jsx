import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { stockDataAtom } from "../recoil/atom/stockDataAtom"

export default function StockCard(props) {
    const [stockData, setStockData] = useRecoilState(stockDataAtom)
    const navigate = useNavigate()
    const handleClick = () => {
        setStockData(props.stock)
        navigate("/details")
    }
    return (
        <div className="p-2 space-y-2 w-full bg-gray-800 rounded-md" onClick={handleClick}>
            <div className="flex justify-between">
                <p className="text-white">{props.stock.instrument}</p>
                <p className="text-white">{props.stock.closingPrice}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-400 font-semibold">{props.stock.date}</p>
                <p className={`${(props.stock.closingPrice - props.stock.openingPrice).toFixed(3) < 0 && 'text-red-500'} ${Math.ceil(props.stock.closingPrice - props.stock.openingPrice) === 0 && 'text-gray-300'} ${(props.stock.closingPrice - props.stock.openingPrice).toFixed(3) > 0 && 'text-[#37fd12]'} font-semibold text-sm`}>{(props.stock.closingPrice - props.stock.openingPrice).toFixed(3)} ({props.stock.change}%)</p>
            </div>
        </div>
    )
}