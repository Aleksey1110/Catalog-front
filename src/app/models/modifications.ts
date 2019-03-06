import { Unit } from './unit';

// Модель модификации авто (Страница Home)
export interface Modifications {
    modificationName: String;
    parts: Array<Unit>;
    _id: String;
    children: Unit[];
}
