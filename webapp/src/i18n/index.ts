import i18n from 'i18next'
import { initReactI18next, Translation } from 'react-i18next'

import enJson from "./translations/en.json"
import esJson from "./translations/es.json"
import ptbrJson from "./translations/ptbr.json" 

i18n.use(initReactI18next).init({

    fallbackLng: "ptbr",
    interpolation:{
        escapeValue: false
    },
    resources: {
        en: enJson,
        es: esJson,
        ptbr: ptbrJson,
    }
})

export default i18n;