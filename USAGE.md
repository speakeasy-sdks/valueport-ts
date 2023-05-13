<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "valueport";
import { ContractMonthsFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.contract.contractMonthsFetch({
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
}).then((res: ContractMonthsFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->