import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { WidgetRepository } from "../../domain/service/widget-repository";
import { Widget } from "../../domain/entity/widget";

export class DynamoWidgetRepository implements WidgetRepository {

    constructor(
        private readonly client: DocumentClient,
        private readonly tableName: string
    ) { }

    async getWidgets(): Promise<Widget[]> {
        const result = await this.client.scan({ TableName: this.tableName }).promise();
        return result.Items as Widget[];
    }
    
}