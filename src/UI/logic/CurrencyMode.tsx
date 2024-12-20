import { CurrencyContextType, useCurrency } from "../../context/CurrencyContext";
import { useTranslate } from "../../context/LanguajeContext";
import IconsService from "../../service/IconsService";
import { StorageCurrency } from "../../types/LocalStorage";

export default function CurrencyMode() {

    const currency = useCurrency();
    const translate = useTranslate();

    const HandleCurrency = (coin: CurrencyContextType) => {
        window.localStorage.setItem(StorageCurrency, coin);
        currency.setCoin(coin);
    }

    return (
            <details className="dropdown flex px-3 py-2 rounded bg-[#31363F] hover:bg-[#222831] text-[#EEEEEE]">
                <summary className="btn m-1 flex">
                    {IconsService(currency.coin, { height: 19, width: 19 })}
                </summary>
                <ul className="absolute menu dropdown-content bg-base-100 rounded-box z-[1] w-52 bg-[#31363F] rounded shadow">
                    <button onClick={()=>HandleCurrency(`$`)} className="grid grid-cols-[.25fr_1fr] w-full place-items-center hover:bg-[#222831] p-2 rounded-t">
                        {IconsService("$", { height:19,width:19 })}
                        <span>{translate.translate.currency.dollar}</span>
                    </button>
                    <button onClick={()=>HandleCurrency(`eur`)} className="grid grid-cols-[.25fr_1fr] w-full place-items-center hover:bg-[#222831] p-2 rounded-b">
                        {IconsService("eur", { height:19,width:19 })}
                        <span>{translate.translate.currency.euro}</span>
                    </button>
                </ul>
            </details>
    )
}
