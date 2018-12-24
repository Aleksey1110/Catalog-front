import { Items } from './items';

// Модель детали (страница Home)
export interface Detail {
    detailName: String;
    detailItems: Array<Items>;
    _id: String;
}
