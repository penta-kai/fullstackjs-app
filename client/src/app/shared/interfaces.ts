export interface User {
    email: string;
    password: string;
}

export interface Category {
    name: string;
    imageSrc?: string;
    user?: string;
    _id?: string;
}

export interface Message {
    message: string;
}

export interface Position {
    name: string;
    cost: number;
    category: string;
    _id?: string;
    user?: string;
    quantity?: number;
}

export interface Order {
    date?: Date;
    order?: number;
    user?: string;
    list: OrderPosition[];
    _id?: string;
}

export interface OrderPosition {
    name: string;
    quantity: number;
    cost: number;
    _id?: string;
}