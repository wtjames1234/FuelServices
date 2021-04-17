export interface Fueling {
    id: string;
    sroNumber: string;
    date: Date;
    description: string;
    type: string;
    hours: number;
    odometer: number;
    area: string;
    gallons: number;
    requestor: string;
}