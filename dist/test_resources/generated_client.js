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
    async listUsers(params) {
        return await this.client.GET("/users", {
            params,
        });
    }
    async createUser(body) {
        return await this.client.POST("/users", {
            body,
        });
    }
    async getUserDetails(params) {
        return await this.client.GET("/users/{userId}", {
            params,
        });
    }
    async replaceUser(params, body) {
        return await this.client.PUT("/users/{userId}", {
            params,
            body,
        });
    }
    async deleteUser(params) {
        return await this.client.DELETE("/users/{userId}", {
            params,
        });
    }
    async updateUserFields(params, body) {
        return await this.client.PATCH("/users/{userId}", {
            params,
            body,
        });
    }
    async listUserLoans(params) {
        return await this.client.GET("/users/{userId}/loans", {
            params,
        });
    }
    async searchUsers(body) {
        return await this.client.POST("/users/search", {
            body,
        });
    }
    async bulk_User_Imp_ort(body) {
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
//# sourceMappingURL=generated_client.js.map