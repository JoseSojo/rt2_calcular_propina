import { Payloads, useTranslate } from "../../context/LanguajeContext";
import IconsService from "../../service/IconsService";
import { StorageTranslate } from "../../types/LocalStorage";

export default function LanguajeMode() {
    
    const translate = useTranslate();
    const translateContext = useTranslate();

    const HandleTranslate = (payload: Payloads) => {
        window.localStorage.setItem(StorageTranslate, payload);
        translateContext.setPayload(payload === `en` ? {label:`Inglés`,payload:`en`} : {label:`Español`,payload:"es"});
    }

    return (
            <details className="dropdown flex px-3 py-2 rounded bg-[#31363F] hover:bg-[#222831] text-[#EEEEEE]">
                <summary className="btn m-1 flex">
                    {IconsService(`translate`, { height: 19, width: 19 })}
                </summary>
                <ul className="absolute menu dropdown-content bg-base-100 rounded-box z-[1] w-52 bg-[#31363F] rounded shadow">
                    <button onClick={()=>HandleTranslate(`es`)} className="grid w-full place-items-center hover:bg-[#222831] p-2 rounded-t">
                        <span>{translate.translate.languaje.es}</span>
                    </button>
                    <button onClick={()=>HandleTranslate(`en`)} className="grid w-full place-items-center hover:bg-[#222831] p-2 rounded-b">
                        <span>{translate.translate.languaje.en}</span>
                    </button>
                </ul>
            </details>
    )
}
