import { ImgItems } from './img-items';

// Модель раздела (Страница Catalogs)
export interface ImgDetail {
    detailName: String;
    detailImage: String;
    detailItems: Array<ImgItems>;
    _id: String;
}
