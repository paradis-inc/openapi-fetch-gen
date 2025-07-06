"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
class Client {
    client;
    defaultHeaders;
    constructor(clientOptions, defaultHeaders) {
        this.client = (0, openapi_fetch_1.default)(clientOptions);
        this.defaultHeaders = defaultHeaders ?? {};
    }
    async getUsers(params) {
        return await this.client.GET("/users", {
            params,
        });
    }
    async postUsers(body) {
        return await this.client.POST("/users", {
            body,
        });
    }
    async getUsersUserid(params) {
        return await this.client.GET("/users/{userId}", {
            params,
        });
    }
    async putUsersUserid(params, body) {
        return await this.client.PUT("/users/{userId}", {
            params,
            body,
        });
    }
    async deleteUsersUserid(params) {
        return await this.client.DELETE("/users/{userId}", {
            params,
        });
    }
    async patchUsersUserid(params, body) {
        return await this.client.PATCH("/users/{userId}", {
            params,
            body,
        });
    }
    async getUsersUseridLoans(params) {
        return await this.client.GET("/users/{userId}/loans", {
            params,
        });
    }
    async postUsersSearch(body) {
        return await this.client.POST("/users/search", {
            body,
        });
    }
    async postUsersBulk(body) {
        return await this.client.POST("/users/bulk", {
            body,
        });
    }
    async getUsersBulkJobid(params) {
        return await this.client.GET("/users/bulk/{jobId}", {
            params: {
                ...params,
                header: { ...this.defaultHeaders, ...params.header },
            },
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=expected_client.js.map