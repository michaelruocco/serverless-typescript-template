import { DynamoWidgetRepository } from "../../adapter/dynamo-db/dynamo-widget-repository";
import { WidgetService } from "./widget-service";
import { buildDynamoDbClient } from "../../adapter/dynamo-db/dynamo-db";

const { WIDGET_TABLE_NAME } = process.env;
const widgetRepository = new DynamoWidgetRepository(buildDynamoDbClient(), WIDGET_TABLE_NAME as string);

export const widgetService = new WidgetService(widgetRepository);