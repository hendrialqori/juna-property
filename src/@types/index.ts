export type FetchStatus = "error" | "success" | "pending"

export type Metadata = {
    page: number;
    limit: number;
    from: number;
    to: number;
    total_row: number;
}

export type Success<T> = {
    status: number
    data: T;
    meta?: Metadata
    message: string;
}

export type Error = {
    status: number;
    type: string;
    message?: string;
    errors?: unknown;
}

export type User = {
    id: string;
    username: string;
    password: string;
    role: "ADMIN" | "MEMBER";
    token: string;
    created_at: Date;
    updated_at: Date;
}

export type Property = {
    id: string;
    type: number;
    price: number;
    thumbnail_url: string;
    view_url: string;
    address: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}