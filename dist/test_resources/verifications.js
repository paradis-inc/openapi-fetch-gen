"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expected_client_1 = require("./expected_client");
const client_without_default_headers = new expected_client_1.Client({});
client_without_default_headers.getUsers({
    query: {
        page: 1,
        pageSize: 10,
        membershipType: "REGULAR",
    },
});
client_without_default_headers.getUsersBulkJobid({
    header: {
        Authorization: "Bearer token",
        "Application-Version": "1.0",
        "Something-Id": "123",
    },
    path: { jobId: "123" },
});
const client_with_partial_default_headers = new expected_client_1.Client({}, { Authorization: "Bearer token", "Application-Version": "1.0" });
client_with_partial_default_headers.getUsers({
    query: {
        page: 1,
        pageSize: 10,
        membershipType: "REGULAR",
    },
});
client_with_partial_default_headers.getUsersBulkJobid({
    header: {
        "Something-Id": "123",
    },
    path: { jobId: "123" },
});
client_with_partial_default_headers.getUsersBulkJobid({
    header: {
        Authorization: "Bearer token",
        "Application-Version": "1.0",
        "Something-Id": "123",
    },
    path: { jobId: "123" },
});
const client_with_all_default_headers = new expected_client_1.Client({}, {
    Authorization: "Bearer token",
    "Application-Version": "1.0",
    "Something-Id": "123",
});
client_with_all_default_headers.getUsers({
    query: {
        page: 1,
        pageSize: 10,
        membershipType: "REGULAR",
    },
});
client_with_all_default_headers.getUsersBulkJobid({
    path: { jobId: "123" },
});
client_with_all_default_headers.getUsersBulkJobid({
    header: {
        Authorization: "Bearer token",
        "Application-Version": "1.0",
        "Something-Id": "123",
    },
    path: { jobId: "123" },
});
//# sourceMappingURL=verifications.js.map