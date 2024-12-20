import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { StorageCurrency } from "../types/LocalStorage";

const currency = window.localStorage.getItem(StorageCurrency) as CurrencyContextType | null;

export type CurrencyContextType = `eur` | `$`;

interface InterfaceConext {
    coin: CurrencyContextType,
    setCoin: Dispatch<SetStateAction<CurrencyContextType>>
}

const DefaultContex: InterfaceConext = {
    coin: currency ? currency : `$`,
    setCoin: () => {}
}

const CurrencyContext = createContext<InterfaceConext>(DefaultContex);

export function CurrencyProvider ({children}:{children:ReactNode}) {
    const [coin, setCoin] = useState(DefaultContex.coin);

    return (
        <CurrencyContext.Provider
            value={{
                coin,setCoin
            }}
        >
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => useContext(CurrencyContext);
