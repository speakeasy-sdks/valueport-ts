# data

## Overview

Equipment data operations.

### Available Operations

* [ingestCreate](#ingestcreate) - Ingest - Create

## ingestCreate

Create a single ingest entity.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { IngestCreateBody, IngestCreateResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.IngestCreateBody = {
  ingest: {
    deletedAt: new Date("2022-07-04T15:50:14.407Z"),
    encoded: "blanditiis",
    id: "909b3fe4-9a8d-49cb-b486-33323f9b77f3",
  },
};

sdk.data.ingestCreate(req).then((res: IngestCreateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
