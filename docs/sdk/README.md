# SDK

## Overview

# Introduction
The Valueport.io API is organized around REST ([wikipedia](http://en.wikipedia.org/wiki/Representational_State_Transfer)). Our API has predictable resource-oriented URLs, accepts JSON-encoded ([json.org](http://www.json.org)) request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Valueport.io API in test mode, which does not affect your live data. The API key you use to authenticate the request determines whether the request is live mode or test mode.

## Handling Concurrency

When sending updates to REST entities, it's possible to lose writes that happened since the last time an entity was fetched. To prevent writing stale data, REST defines a partial update endpoint with the PATCH method. Valueport.io supports and recommends using JSON Patch ([jsonpatch.com](http://jsonpatch.com)) instead of the PUT and PATCH endpoints from REST. This allows you to define relevant safe-guards for your use and application. To completely disallow concurrent updates, add a JSON Patch operation that tests equality of the `updated_at` property.

## Response Codes
Valueport.io uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a change failed, etc.). Codes in the 5xx range indicate an error with Valueport.io's servers (these are rare).

Some 4xx errors that could be handled programmatically (e.g. a token is expired) include an error code that briefly explains the error reported.

| HTTP Status Code | Summary |
|------------------|---------|
| 200 - OK | Success, everything worked as expected. |
| 201 - Created | Success, everything worked as expected. |
| 204 - No Content | Success, everything worked as expected. |
| 422 - Unprocessable Entity | The request was invalid, often due to missing parameters. Our response pinpoints the problem. |
| 401 - Unauthorized | No valid API key provided. |
| 403 - Forbidden | The API key doesn't have permissions to perform the request. |
| 404 - Not Found | The requested entity did not exist. |
| 409 - Conflict | The requested update did not succeed. |
| 400 - Bad Request | The request was invalid. Our response will try to pinpoint the problem. |
| 429 - Too Many Requests | Your request was rejected due to rate limiting and must be re-sent. |
| 500 - Internal Server Error | Something went wrong on Valueport.io's end. (These are rare.) |

This API documentation is generated from version v0.1.1

### Available Operations

