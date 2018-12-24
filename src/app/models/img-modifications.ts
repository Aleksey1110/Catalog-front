import { ImgUnits } from './img-unit';

// Модель модификации машины (Страница Catalogs)
export interface ImgModifications {
    modificationName: String;
    units: Array<ImgUnits>;
    _id: String;
}
