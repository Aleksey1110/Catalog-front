import { AnalogueNumber } from './analogueNumber';

// Модель данных детали (Страница Home)
export interface Items {
    originalNumber: Array<String>;
    analogueNumber: Array<AnalogueNumber>;
    note: String;
    picture: String;
    _id: String;
}
