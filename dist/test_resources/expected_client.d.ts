import { type ClientOptions } from "openapi-fetch";
import type { components } from "./schema.d.ts";
export declare class Client<HT extends Record<string, string>> {
    private readonly client;
    private readonly defaultHeaders;
    constructor(clientOptions: ClientOptions, defaultHeaders?: HT);
    getUsers(params: {
        query: {
            page?: number;
            pageSize?: number;
            membershipType?: "REGULAR" | "PREMIUM" | "STUDENT";
        };
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: components["parameters"]["page"];
                pageSize?: components["parameters"]["pageSize"];
                membershipType?: "REGULAR" | "PREMIUM" | "STUDENT";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPage"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    }, {
        params: {
            query: {
                page?: number;
                pageSize?: number;
                membershipType?: "REGULAR" | "PREMIUM" | "STUDENT";
            };
        };
    }, `${string}/${string}`>>;
    postUsers(body: {
        name: string;
        email: string;
        membershipType: "REGULAR" | "PREMIUM" | "STUDENT";
        address?: {
            postalCode?: string;
            street: string;
            city: string;
            country: string;
        };
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserCreate"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            409: components["responses"]["Conflict"];
        };
    }, {
        body: {
            name: string;
            email: string;
            membershipType: "REGULAR" | "PREMIUM" | "STUDENT";
            address?: {
                postalCode?: string;
                street: string;
                city: string;
                country: string;
            };
        };
    }, `${string}/${string}`>>;
    getUsersUserid(params: {
        path: {
            userId: string;
        };
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: components["parameters"]["userId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    }, {
        params: {
            path: {
                userId: string;
            };
        };
    }, `${string}/${string}`>>;
    putUsersUserid(params: {
        path: {
            userId: string;
        };
    }, body: {
        name: string;
        email: string;
        membershipType: "REGULAR" | "PREMIUM" | "STUDENT";
        address?: {
            postalCode?: string;
            street: string;
            city: string;
            country: string;
        };
    } & {
        id: string;
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: components["parameters"]["userId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserUpdate"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    }, {
        params: {
            path: {
                userId: string;
            };
        };
        body: {
            name: string;
            email: string;
            membershipType: "REGULAR" | "PREMIUM" | "STUDENT";
            address?: {
                postalCode?: string;
                street: string;
                city: string;
                country: string;
            };
        } & {
            id: string;
        };
    }, `${string}/${string}`>>;
    deleteUsersUserid(params: {
        path: {
            userId: string;
        };
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: components["parameters"]["userId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    }, {
        params: {
            path: {
                userId: string;
            };
        };
    }, `${string}/${string}`>>;
    patchUsersUserid(params: {
        path: {
            userId: string;
        };
    }, body: {
        name?: string;
        email?: string;
        membershipType?: "REGULAR" | "PREMIUM" | "STUDENT";
        address?: {
            postalCode?: string;
            street: string;
            city: string;
            country: string;
        };
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: components["parameters"]["userId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserPatch"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    }, {
        params: {
            path: {
                userId: string;
            };
        };
        body: {
            name?: string;
            email?: string;
            membershipType?: "REGULAR" | "PREMIUM" | "STUDENT";
            address?: {
                postalCode?: string;
                street: string;
                city: string;
                country: string;
            };
        };
    }, `${string}/${string}`>>;
    getUsersUseridLoans(params: {
        path: {
            userId: string;
        };
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: components["parameters"]["userId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Loan"][];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    }, {
        params: {
            path: {
                userId: string;
            };
        };
    }, `${string}/${string}`>>;
    postUsersSearch(body: {
        name?: string;
        email?: string;
        joinedAfter?: string;
        membershipType?: "REGULAR" | "PREMIUM" | "STUDENT";
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    email?: string;
                    joinedAfter?: string;
                    membershipType?: "REGULAR" | "PREMIUM" | "STUDENT";
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserList"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    }, {
        body: {
            name?: string;
            email?: string;
            joinedAfter?: string;
            membershipType?: "REGULAR" | "PREMIUM" | "STUDENT";
        };
    }, `${string}/${string}`>>;
    postUsersBulk(body: {
        file?: string;
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    file?: string;
                };
            };
        };
        responses: {
            202: {
                headers: {
                    Location?: string;
                    [name: string]: unknown;
                };
                content?: never;
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
        };
    }, {
        body: {
            file?: string;
        };
    }, `${string}/${string}`>>;
    getUsersBulkJobid(params: [
        Exclude<keyof {
            Authorization: string;
            "Application-Version": string;
            "Something-Id": string;
        }, Extract<keyof HT, keyof {
            Authorization: string;
            "Application-Version": string;
            "Something-Id": string;
        }>>
    ] extends [never] ? {
        header?: {
            Authorization: string;
            "Application-Version": string;
            "Something-Id": string;
        };
        path: {
            jobId: string;
        };
    } : {
        header: (Pick<{
            Authorization: string;
            "Application-Version": string;
            "Something-Id": string;
        }, Exclude<keyof {
            Authorization: string;
            "Application-Version": string;
            "Something-Id": string;
        }, Extract<keyof HT, keyof {
            Authorization: string;
            "Application-Version": string;
            "Something-Id": string;
        }>>> & Partial<Record<Extract<keyof HT, keyof {
            Authorization: string;
            "Application-Version": string;
            "Something-Id": string;
        }>, never>>) | {
            Authorization: string;
            "Application-Version": string;
            "Something-Id": string;
        };
        path: {
            jobId: string;
        };
    }): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: never;
            header: {
                Authorization: string;
                "Application-Version": string;
                "Something-Id": string;
            };
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkJobStatus"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    }, import("openapi-fetch").FetchOptions<{
        parameters: {
            query?: never;
            header: {
                Authorization: string;
                "Application-Version": string;
                "Something-Id": string;
            };
            path: {
                jobId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BulkJobStatus"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
        };
    }>, `${string}/${string}`>>;
}
export type Error = components["schemas"]["Error"];
export type User = components["schemas"]["User"];
export type Address = components["schemas"]["Address"];
export type UserCreate = components["schemas"]["UserCreate"];
export type UserUpdate = components["schemas"]["UserUpdate"];
export type UserPatch = components["schemas"]["UserPatch"];
export type UserList = components["schemas"]["UserList"];
export type UserPage = components["schemas"]["UserPage"];
export type Loan = components["schemas"]["Loan"];
export type Book = components["schemas"]["Book"];
export type BulkJobStatus = components["schemas"]["BulkJobStatus"];
export type ClientSchema = components["schemas"]["Client"];
export type schema_Something = components["schemas"]["schema-Something"];
//# sourceMappingURL=expected_client.d.ts.map