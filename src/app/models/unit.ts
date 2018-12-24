import { Detail } from './detail';

// Модель агрегата авто (Страница Home)
export interface Unit {
    unitName: String;
    details: Array<Detail>;
    _id: String;
}
