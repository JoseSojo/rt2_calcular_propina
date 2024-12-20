import { useMode } from "../context/ModeContext";
import Caja from "./Caja";

export default function Main() {

    const theme = useMode();
    
    return (
        <main className="flex justify-center items-start h-full w-full pt-7">
            <div className={`${theme.bg} w-full lg:max-w-xl p-3 rounded shadow grid grid-cols-1 lg:grid-cols-2`}>
                <Caja />
            </div>
        </main>
    )
}
