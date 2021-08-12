import { Widget } from '../entity/widget';

export interface WidgetRepository {
    getWidgets(): Promise<Widget[]>;
}