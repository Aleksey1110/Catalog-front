import { ImgDetail } from './img-detail';

// Модель агрегата машины (Страница Catalogs)
export interface ImgUnits {
    unitName: String;
    details: Array<ImgDetail>;
    _id: String;
}
