import { APIGatewayProxyResultV2 } from "aws-lambda";
import { widgetService } from "../domain/service/widget-index";

export const handle = async (): Promise<APIGatewayProxyResultV2> => {
    try {
        const widgets = JSON.stringify(await widgetService.getWidgets());
        return toOkResponse(widgets);
    } catch (err) {
        return toUnexpectedError(err);
    }
}

function toOkResponse(body: string) {
    return {
        statusCode: 200,
        body: body
    };
}

function toUnexpectedError(message: string) {
    return  {
        statusCode: 500,
        body: `{ message: ${message} }`
    };
}