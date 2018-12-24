import { ImgModifications } from './img-modifications';

// Модель модели машины (Страница Catalogs)
export interface ImgModels {
    modelsName: String;
    modifications: Array<ImgModifications>;
    _id: String;
}
