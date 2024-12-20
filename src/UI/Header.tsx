import { useTranslate } from "../context/LanguajeContext";
import { useMode } from "../context/ModeContext";
import ButteonMode from "./logic/ButtonMode";
import CurrencyMode from "./logic/CurrencyMode";
import LanguajeMode from "./logic/LanguajeMode";

export default function Header () {
    const theme = useMode();
    const translate = useTranslate();
    const lang = translate.translate;
    return (
        <header className="flex justify-center items-center flex-col py-3">
            <div className="flex justify-center items-center gap-0 py-3">
                <h1 className={`${theme.text} anton-regular text-5xl`}>{lang.app.title}</h1>
            </div>
            <div className="flex justify-center items-center gap-3">
                <LanguajeMode />
                <ButteonMode />
                <CurrencyMode />
            </div>
        </header>
    )
}
