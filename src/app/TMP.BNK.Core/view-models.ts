export interface Account {
    Number: string;
    Title: string;
    Type: string;
    Balance: number;
    ClientId: number;
}
export interface Client {
    Id: number;
    Name: string;
}
export interface OperationResponse {
    IsSuccess: boolean;
    ErrorCode: number;
    Message: string;
}
