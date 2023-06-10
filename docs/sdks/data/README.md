# data

## Overview

Equipment data operations.

### Available Operations

* [ingestCreate](#ingestcreate) - Ingest - Create

## ingestCreate

Create a single ingest entity.

### Example Usage

```typescript
import { SDK } from "valueport";
import { IngestCreateResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.data.ingestCreate({
  ingest: {
    deletedAt: new Date("2022-07-04T15:50:14.407Z"),
    encoded: "blanditiis",
    id: "909b3fe4-9a8d-49cb-b486-33323f9b77f3",
  },
}).then((res: IngestCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.IngestCreateBody](../../models/shared/ingestcreatebody.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.IngestCreateResponse](../../models/operations/ingestcreateresponse.md)>**

