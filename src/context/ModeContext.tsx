import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { StorageMode } from "../types/LocalStorage";

const theme = window.localStorage.getItem(StorageMode) ? true : false;

export type ModeContextType = boolean;

interface InterfaceConext {
    theme: ModeContextType,
    setTheme: Dispatch<SetStateAction<ModeContextType>>,
    bg: string,
    bg2: string,
    text: string,
    button: string,
    border: string,
}

const DefaultContex: InterfaceConext = {
    theme: theme ? theme : false,
    setTheme: () => {},
    bg: `bg-white`,
    bg2: `bg-slate-200`,
    border: `text-slate-800`,
    button: `bg-[#31363F] hover:bg-[#222831] text-[#EEEEEE]`,
    text: `border-slate-600`,
}

const ModeContext = createContext<InterfaceConext>(DefaultContex);

export function ModeProvider ({children}:{children:ReactNode}) {
    const [theme, setTheme] = useState(DefaultContex.theme);
    const [bg, setBg] = useState(DefaultContex.bg);
    const [bg2, setBg2] = useState(DefaultContex.bg2);
    const [text, setText] = useState(DefaultContex.text);
    const [button, setButton] = useState(DefaultContex.button);
    const [border, setBorder] = useState(DefaultContex.border);

    useEffect(() => {
        if(theme) {
            setBg(`bg-slate-900`);
            setBg2(`bg-slate-700`);
            setText(`text-slate-100`);
            setButton(`bg-[#31363F] hover:bg-[#222831] text-[#EEEEEE]`);
            setBorder(`border-slate-400`);
        }
        else {
            setBg(DefaultContex.bg);
            setBg2(DefaultContex.bg2);
            setText(DefaultContex.text);
            setButton(DefaultContex.button);
            setBorder(DefaultContex.border);
        }
    }, [theme]);

    return (
        <ModeContext.Provider
            value={{
                theme,setTheme,
                bg,bg2,border,button,text
            }}
        >
            {children}
        </ModeContext.Provider>
    )
}

export const useMode = () => useContext(ModeContext);
