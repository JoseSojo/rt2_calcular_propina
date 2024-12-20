import { Payloads } from "../context/LanguajeContext";
import { TranslateType } from "../types/TanslateType";
import IconsService from "./IconsService";

export default function TranslateService(payload: Payloads): TranslateType {

    if (payload === "en") {
        return {
            app: {
                description: ``,
                keywords: ``,
                meta: ``,
                title: `TipCalc`,
                logoSVG: IconsService(`logo`, {})
            },
            result: {
                title: `Calculation`,
                forPeople: `Per person`,
                gratuity: `Total gratuity`,
                totla: `Total payable`
            },
            form: {
                gratuity: `Percentage of gratuity`,
                people: `Number of people`,
                total: `Total to be paid`
            },
            currency: {
                dollar: `Dolar`,
                euro: `Euro`
            },
            languaje: {
                en: `English`,
                es: `Spanish`
            }
        }
    }

    return {
        app: {
            description: ``,
            keywords: ``,
            meta: ``,
            title: `TipCalc`,
            logoSVG: IconsService(`logo`, {})
        },
        result: {
            title: `Cálculo`,
            forPeople: `Por persona`,
            gratuity: `Total propina`,
            totla: `Total a pagar`
        },
        form: {
            gratuity: `Porcentaje de propina`,
            people: `Cantidad de personas`,
            total: `Total a pagar`
        },
        currency: {
            dollar: `Dolar`,
            euro: `Euro`
        },
        languaje: {
            en: `Inglés`,
            es: `Español`
        }
    }
}
