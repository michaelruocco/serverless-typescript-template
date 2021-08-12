import { Widget } from '../entity/widget';
import { WidgetRepository } from './widget-repository';

export class WidgetService {

    constructor(
        private readonly repository: WidgetRepository
    ) {}

    async getWidgets(): Promise<Widget[]> {
        return this.repository.getWidgets();
    }

}
