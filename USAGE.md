<!-- Start SDK Example Usage -->
```typescript
import {
  ContractMonthsFetchRequest,
  ContractMonthsFetchResponse
} from "valueport/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "valueport";
const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractMonthsFetchRequest = {
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
};

sdk.contract.contractMonthsFetch(req).then((res: ContractMonthsFetchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->