export interface Widget {
    id: number;
    name: string;
    status: WidgetStatus;
    price: number;
}

export type WidgetStatus = "online" | "offline";
export const WidgetStatus = {
    online: "online" as WidgetStatus,
    offline: "offline" as WidgetStatus
};