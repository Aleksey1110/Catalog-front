import { ImgDetailItems } from './img-detailitems';

// Модель схемы в разделе (Страница Catalogs)
export interface ImgItems {
    itemImage: String;
    items: Array<ImgDetailItems>;
    _id: String;
}
