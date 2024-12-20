import { StorageMode } from "../../types/LocalStorage";
import { useMode } from "../../context/ModeContext";
import IconsService from "../../service/IconsService";

export default function ButteonMode() {
    const theme = useMode();

    const HandleChandeMode = () => {
        window.localStorage.setItem(StorageMode, theme.theme ? `true` : `false`);
        theme.setTheme(!theme.theme);
    }

    return (
        <button 
            onClick={HandleChandeMode}
            className={`flex px-3 py-2 rounded ${theme.button}`}>
            {IconsService(theme.theme ? "light" : `dark`, {height:26,width:26})}
        </button>
    )
}
