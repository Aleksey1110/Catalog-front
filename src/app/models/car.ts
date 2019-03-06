import { Models } from './models';

// Модель марки машины (страница Home)
export interface Car {
    markName: String;
    models: Array<Models>;
    _id: String;
    children?: Array<Car>;
}
