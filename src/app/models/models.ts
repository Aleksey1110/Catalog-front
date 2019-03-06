import { Modifications } from './modifications';

// Модель модели авто (Страница Home)
export interface Models {
    modelsName: String;
    modifications: Array<Modifications>;
    _id: String;
    children?: Modifications[];
}
