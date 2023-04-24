# valueport

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/valueport-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/valueport-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### contract

* `contractMonthsFetch` - Contract months - Fetch
* `contractMonthsList` - Contract months - List
* `contractMonthsListPaged` - Contract months - Paged
* `contractQuartersFetch` - Contract quarters - Fetch
* `contractQuartersList` - Contract quarters - List
* `contractQuartersListPaged` - Contract quarters - Paged
* `groupedCostFixedHoursFetch` - Grouped cost fixed hours - Fetch
* `groupedCostFixedHoursList` - Grouped cost fixed hours - List
* `groupedCostFixedHoursListPaged` - Grouped cost fixed hours - Paged
* `groupedCostHoursFetch` - Grouped cost hours - Fetch
* `groupedCostHoursList` - Grouped cost hours - List
* `groupedCostHoursListPaged` - Grouped cost hours - Paged
* `groupedDebtHoursFetch` - Grouped debt hours - Fetch
* `groupedDebtHoursList` - Grouped debt hours - List
* `groupedDebtHoursListPaged` - Grouped debt hours - Paged
* `groupedMetricUnitHoursFetch` - Grouped metric unit hours - Fetch
* `groupedMetricUnitHoursList` - Grouped metric unit hours - List
* `groupedMetricUnitHoursListPaged` - Grouped metric unit hours - Paged
* `groupedUseMinuteHoursFetch` - Grouped use minute hours - Fetch
* `groupedUseMinuteHoursList` - Grouped use minute hours - List
* `groupedUseMinuteHoursListPaged` - Grouped use minute hours - Paged
* `groupedValueHoursFetch` - Grouped value hours - Fetch
* `groupedValueHoursList` - Grouped value hours - List
* `groupedValueHoursListPaged` - Grouped value hours - Paged

### data

* `ingestCreate` - Ingest - Create

### manage

* `apiKeyCreate` - API key - Create
* `apiKeyDelete` - API key - Delete
* `apiKeyFetch` - API key - Fetch
* `apiKeyJsonPatch` - API key - JSON Patch
* `apiKeyList` - API key - List
* `apiKeyListPaged` - API key - Paged
* `apiKeyUpdatePatch` - API key - Update
* `apiKeyUpdatePut` - API key - Update
* `contractCreate` - Contract - Create
* `contractDelete` - Contract - Delete
* `contractFetch` - Contract - Fetch
* `contractJsonPatch` - Contract - JSON Patch
* `contractList` - Contract - List
* `contractListPaged` - Contract - Paged
* `contractUpdatePatch` - Contract - Update
* `contractUpdatePut` - Contract - Update
* `customerCreate` - Customer - Create
* `customerDelete` - Customer - Delete
* `customerFetch` - Customer - Fetch
* `customerJsonPatch` - Customer - JSON Patch
* `customerList` - Customer - List
* `customerListPaged` - Customer - Paged
* `customerUpdatePatch` - Customer - Update
* `customerUpdatePut` - Customer - Update
* `equipmentCreate` - Equipment - Create
* `equipmentDelete` - Equipment - Delete
* `equipmentFetch` - Equipment - Fetch
* `equipmentJsonPatch` - Equipment - JSON Patch
* `equipmentList` - Equipment - List
* `equipmentListPaged` - Equipment - Paged
* `equipmentTypeCreate` - Equipment type - Create
* `equipmentTypeDelete` - Equipment type - Delete
* `equipmentTypeFetch` - Equipment type - Fetch
* `equipmentTypeJsonPatch` - Equipment type - JSON Patch
* `equipmentTypeList` - Equipment type - List
* `equipmentTypeListPaged` - Equipment type - Paged
* `equipmentTypeUpdatePatch` - Equipment type - Update
* `equipmentTypeUpdatePut` - Equipment type - Update
* `equipmentUpdatePatch` - Equipment - Update
* `equipmentUpdatePut` - Equipment - Update
* `tenantFetch` - Tenant - Fetch
* `tenantJsonPatch` - Tenant - JSON Patch
* `tenantList` - Tenant - List
* `tenantListPaged` - Tenant - Paged
* `tenantUpdatePatch` - Tenant - Update
* `tenantUpdatePut` - Tenant - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

