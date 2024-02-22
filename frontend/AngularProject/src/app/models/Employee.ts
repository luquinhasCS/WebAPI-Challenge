export interface Employee{
    id?: number;
    name: string;
    surname: string;
    department: string;
    active: boolean;
    shift: string;
    creationDate?: string;
    modificationDate?: string;
}