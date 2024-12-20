import { ChangeEvent, useEffect, useState } from "react"
import IconsService from "../service/IconsService";
import { BoxResult } from "../types/Box";
import { useCurrency } from "../context/CurrencyContext";
import { useMode } from "../context/ModeContext";
import { useTranslate } from "../context/LanguajeContext";

export default function Caja() {
    const translate = useTranslate();
    const lang = translate.translate;
    const currency = useCurrency();
    const theme = useMode();

    const [mount, setMount] = useState(0.00);
    const [peoples, setPeoples] = useState(1);
    const [gratuityPercentaje, setGratuityPercentaje] = useState(10);

    const [result, setResult] = useState<BoxResult>({grantury:0,peoples:0,total:0}); 

    const HandleChangeGratuity = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = Number(e.target.value); // parse el dato a numero para el estado
        setGratuityPercentaje(value);
    }

    const HandleChangePeople = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value); // parse el dato a numero para el estado
        setPeoples(value);
    }

    const HandleChangeMount = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value); // parse el dato a numero para el estado
        setMount(value);
    }

    useEffect(() => {
        // Retorno anticipado para la validación del monto, peoples, y porcentaje de descuento
        if(!mount || !peoples) return;

        // Calcula inicio

        // calcular propina
        let granturyCalc = (gratuityPercentaje / mount) * 100;
        
        // calcular total
        let totalCalc = granturyCalc + mount;
        
        // calcular por persona
        let peoplesCalc = totalCalc / peoples;

        setResult({
            grantury: granturyCalc,
            peoples: peoplesCalc,
            total: totalCalc
        })
    }, [mount, peoples, gratuityPercentaje])

    // ClassList
    const label = `${theme.text} text-sm`
    const icoInput = `text-sm outline-none rounded-lg w-full ${theme.text}`
    const inputClass = `w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg ${theme.text}`;

    return (
        <>
            <div className="p-2 rounded-lg w-full">
                <label className={label}>
                    {lang.form.total}
                </label>

                <div className="relative mt-2 w-full text-gray-500">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-7 justify-center">
                        <span className={`${icoInput}`}>
                            {IconsService(`coin`, { width: 20, height: 20 })}
                        </span>
                    </div>
                    <input
                        onChange={HandleChangeMount}
                        type="number"
                        value={`${mount}`}
                        placeholder="Ingrese total a pagar"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="p-2 rounded-lg w-full">
                <label className={label}>
                    {lang.form.people}
                </label>

                <div className="relative mt-2 w-full text-gray-500">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-7 justify-center">
                        <span className={`${icoInput}`}>
                            {IconsService(`peoples`, { width: 20, height: 20 })}
                        </span>
                    </div>
                    <input
                        onChange={HandleChangePeople}
                        type="number"
                        value={`${peoples}`}
                        placeholder="Ingrese la cantidad de personas"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="p-2 rounded-lg w-full">
                <label className={label}>
                    {lang.form.gratuity}
                </label>

                <div className="relative mt-2 w-full text-gray-500">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-3">
                        <select onChange={HandleChangeGratuity} className={`${icoInput} h-full ${theme.bg2} ${theme.text}`}>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                        </select>
                    </div>
                    <input
                        onChange={HandleChangeGratuity}
                        type="number"
                        value={`${gratuityPercentaje}`}
                        placeholder="10 %"
                        className={inputClass}
                    />
                    <div className="absolute inset-y-0 right-10 my-auto h-6 flex items-center border-r pr-2">
                        {IconsService(`logo`, { height: 20, width: 20 })}
                    </div>
                </div>

            </div>

            <div className="p-2 rounded-lg w-full flex justify-center items-center flex-col font-mono border border-slate-600">
                <h2 className={`${theme.text    } text-xl font-bold`}>{lang.result.title}</h2>
                <ol className={`${label} font-mono`}>
                    <li className="px-4 grid grid-cols-2 gap-3 border-b border-dashed border-slate-600">{lang.result.gratuity}: <b className="flex gap-2">{result.grantury} {IconsService(currency.coin, {width:20,height:20})}</b></li>
                    <li className="px-4 grid grid-cols-2 gap-3 border-b border-dashed border-slate-600">{lang.result.totla}: <b className="flex gap-2">{result.total} {IconsService(currency.coin, {width:20,height:20})}</b></li>
                    <li className="px-4 grid grid-cols-2 gap-3 border-b border-dashed border-slate-600">{lang.result.forPeople}: <b className="flex gap-2">{result.peoples} {IconsService(currency.coin, {width:20,height:20})}</b></li>
                </ol>
            </div>

        </>
    )
}
