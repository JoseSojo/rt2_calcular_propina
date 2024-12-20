import { IconsType } from "../types/IconsType";

export default function IconsService(param: IconsType, { height, width }: { width?: number, height?: number }) {

    const currency = window.localStorage.getItem(`rt2_currency`);

    if (param === "logo") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
        <path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M6 18l12 -12"></path>
    </svg>
    else if (param === "translate") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
        <path d="M4 5h7" />
        <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
        <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
        <path d="M12 20l4 -9l4 9" />
        <path d="M19.1 18h-6.2" />
    </svg>
    else if (param === "dark") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
  </svg>
    else if (param === "light") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
    <path d="M3 3l18 18"></path>
    <path d="M16 12a4 4 0 0 0 -4 -4m-2.834 1.177a4 4 0 0 0 5.66 5.654"></path>
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
  </svg>
    else if (param === "mode") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
    </svg>
    else if (param === "peoples") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
    </svg>
    else if (param === "coin") {

        return currency === `eur`
            ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
                <path d="M17.2 7a6 7 0 1 0 0 10"></path>
                <path d="M13 10h-8m0 4h8"></path>
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
                <path d="M12 3v3m0 12v3"></path>
            </svg>

    }
    else if (param === "calc") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
        <path d="M5 3v18"></path>
        <path d="M19 21v-18"></path>
        <path d="M5 7h14"></path>
        <path d="M5 15h14"></path>
        <path d="M8 13v4"></path>
        <path d="M11 13v4"></path>
        <path d="M16 13v4"></path>
        <path d="M14 5v4"></path>
        <path d="M11 5v4"></path>
        <path d="M8 5v4"></path>
        <path d="M3 21h18"></path>
    </svg>
    else if (param === "$") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
        <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
        <path d="M12 3v3m0 12v3"></path>
    </svg>
    else if (param === "eur") return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width ? width : 24} height={height ? height : 24} stroke-width="1.75">
        <path d="M17.2 7a6 7 0 1 0 0 10"></path>
        <path d="M13 10h-8m0 4h8"></path>
    </svg>
}
