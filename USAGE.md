<!-- Start SDK Example Usage -->
```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractMonthsFetchRequest, ContractMonthsFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractMonthsFetchRequest = {
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.contract.contractMonthsFetch(req).then((res: ContractMonthsFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->