
export interface Inspection {
    id: number,
    companyId: string,
    brokerCode: string,
    productCode: string,
    productName: string,
    inspectionNumber: number,
    reports: Report[]
}

export interface Report {
    id: number,
    status: number,
    observation: string
}