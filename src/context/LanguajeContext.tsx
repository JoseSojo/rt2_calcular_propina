import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { StorageTranslate } from "../types/LocalStorage";
import { TranslateType } from "../types/TanslateType";
import TranslateService from "../service/TranslateService";

const trnaslate = window.localStorage.getItem(StorageTranslate) as Payloads | null;

export type Payloads = `es` | `en`
export type TranslateContextType = {payload:`es`,label:`Español`} | {payload:`en`,label:`Inglés`};

interface InterfaceConext {
    payload: TranslateContextType,
    setPayload: Dispatch<SetStateAction<TranslateContextType>>,
    translate: TranslateType
}

const DefaultContex: InterfaceConext = {
    payload: trnaslate && trnaslate === `es` ? {payload:`es`,label:`Español`} : {payload:`en`,label:`Inglés`},
    setPayload: () => {},
    translate: TranslateService(trnaslate ? trnaslate : `es`)
}

const TranslateContext = createContext<InterfaceConext>(DefaultContex);

export function TranslateProvider ({children}:{children:ReactNode}) {
    const [payload, setPayload] = useState<TranslateContextType>(DefaultContex.payload);
    const [translate, setTranslate] = useState<TranslateType>(DefaultContex.translate);

    useEffect(() => {
        if(payload.payload === `es`) {
            setTranslate(TranslateService(`es`));
        } else {
            setTranslate(TranslateService(`en`));
        }
    }, [payload]);

    return (
        <TranslateContext.Provider
            value={{
                payload,
                setPayload,
                translate
            }}
        >
            {children}
        </TranslateContext.Provider>
    )
}

export const useTranslate = () => useContext(TranslateContext);
