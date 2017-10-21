import { OpaqueToken } from '@angular/core';

// import translations
import { Locale_en_name, Locale_en } from '../locale/lang-en';
import { Locale_es_name, Locale_es } from '../locale/lang-es';
import { Locale_zh_name, Locale_zh } from '../locale/lang-zh';

// translation token
export const Translate = new OpaqueToken('translations');

// all traslations
const dictionary = {
    [Locale_en_name]: Locale_en,
    [Locale_es_name]: Locale_es,
    [Locale_zh_name]: Locale_zh,
};

// providers
export const TranslateProvider = [
    { provide: Translate, useValue: dictionary },
];