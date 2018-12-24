import { ImgModels } from './img-models';

// Модель марки машины (Страница Catalogs)
export interface ImgCar {
    markName: String;
    models: Array<ImgModels>;
    _id: String;
}
