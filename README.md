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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [contract](docs/contract/README.md)

* [contractMonthsFetch](docs/contract/README.md#contractmonthsfetch) - Contract months - Fetch
* [contractMonthsList](docs/contract/README.md#contractmonthslist) - Contract months - List
* [contractMonthsListPaged](docs/contract/README.md#contractmonthslistpaged) - Contract months - Paged
* [contractQuartersFetch](docs/contract/README.md#contractquartersfetch) - Contract quarters - Fetch
* [contractQuartersList](docs/contract/README.md#contractquarterslist) - Contract quarters - List
* [contractQuartersListPaged](docs/contract/README.md#contractquarterslistpaged) - Contract quarters - Paged
* [groupedCostFixedHoursFetch](docs/contract/README.md#groupedcostfixedhoursfetch) - Grouped cost fixed hours - Fetch
* [groupedCostFixedHoursList](docs/contract/README.md#groupedcostfixedhourslist) - Grouped cost fixed hours - List
* [groupedCostFixedHoursListPaged](docs/contract/README.md#groupedcostfixedhourslistpaged) - Grouped cost fixed hours - Paged
* [groupedCostHoursFetch](docs/contract/README.md#groupedcosthoursfetch) - Grouped cost hours - Fetch
* [groupedCostHoursList](docs/contract/README.md#groupedcosthourslist) - Grouped cost hours - List
* [groupedCostHoursListPaged](docs/contract/README.md#groupedcosthourslistpaged) - Grouped cost hours - Paged
* [groupedDebtHoursFetch](docs/contract/README.md#groupeddebthoursfetch) - Grouped debt hours - Fetch
* [groupedDebtHoursList](docs/contract/README.md#groupeddebthourslist) - Grouped debt hours - List
* [groupedDebtHoursListPaged](docs/contract/README.md#groupeddebthourslistpaged) - Grouped debt hours - Paged
* [groupedMetricUnitHoursFetch](docs/contract/README.md#groupedmetricunithoursfetch) - Grouped metric unit hours - Fetch
* [groupedMetricUnitHoursList](docs/contract/README.md#groupedmetricunithourslist) - Grouped metric unit hours - List
* [groupedMetricUnitHoursListPaged](docs/contract/README.md#groupedmetricunithourslistpaged) - Grouped metric unit hours - Paged
* [groupedUseMinuteHoursFetch](docs/contract/README.md#groupeduseminutehoursfetch) - Grouped use minute hours - Fetch
* [groupedUseMinuteHoursList](docs/contract/README.md#groupeduseminutehourslist) - Grouped use minute hours - List
* [groupedUseMinuteHoursListPaged](docs/contract/README.md#groupeduseminutehourslistpaged) - Grouped use minute hours - Paged
* [groupedValueHoursFetch](docs/contract/README.md#groupedvaluehoursfetch) - Grouped value hours - Fetch
* [groupedValueHoursList](docs/contract/README.md#groupedvaluehourslist) - Grouped value hours - List
* [groupedValueHoursListPaged](docs/contract/README.md#groupedvaluehourslistpaged) - Grouped value hours - Paged

### [data](docs/data/README.md)

* [ingestCreate](docs/data/README.md#ingestcreate) - Ingest - Create

### [manage](docs/manage/README.md)

* [apiKeyCreate](docs/manage/README.md#apikeycreate) - API key - Create
* [apiKeyDelete](docs/manage/README.md#apikeydelete) - API key - Delete
* [apiKeyFetch](docs/manage/README.md#apikeyfetch) - API key - Fetch
* [apiKeyJsonPatch](docs/manage/README.md#apikeyjsonpatch) - API key - JSON Patch
* [apiKeyList](docs/manage/README.md#apikeylist) - API key - List
* [apiKeyListPaged](docs/manage/README.md#apikeylistpaged) - API key - Paged
* [apiKeyUpdatePatch](docs/manage/README.md#apikeyupdatepatch) - API key - Update
* [apiKeyUpdatePut](docs/manage/README.md#apikeyupdateput) - API key - Update
* [contractCreate](docs/manage/README.md#contractcreate) - Contract - Create
* [contractDelete](docs/manage/README.md#contractdelete) - Contract - Delete
* [contractFetch](docs/manage/README.md#contractfetch) - Contract - Fetch
* [contractJsonPatch](docs/manage/README.md#contractjsonpatch) - Contract - JSON Patch
* [contractList](docs/manage/README.md#contractlist) - Contract - List
* [contractListPaged](docs/manage/README.md#contractlistpaged) - Contract - Paged
* [contractUpdatePatch](docs/manage/README.md#contractupdatepatch) - Contract - Update
* [contractUpdatePut](docs/manage/README.md#contractupdateput) - Contract - Update
* [customerCreate](docs/manage/README.md#customercreate) - Customer - Create
* [customerDelete](docs/manage/README.md#customerdelete) - Customer - Delete
* [customerFetch](docs/manage/README.md#customerfetch) - Customer - Fetch
* [customerJsonPatch](docs/manage/README.md#customerjsonpatch) - Customer - JSON Patch
* [customerList](docs/manage/README.md#customerlist) - Customer - List
* [customerListPaged](docs/manage/README.md#customerlistpaged) - Customer - Paged
* [customerUpdatePatch](docs/manage/README.md#customerupdatepatch) - Customer - Update
* [customerUpdatePut](docs/manage/README.md#customerupdateput) - Customer - Update
* [equipmentCreate](docs/manage/README.md#equipmentcreate) - Equipment - Create
* [equipmentDelete](docs/manage/README.md#equipmentdelete) - Equipment - Delete
* [equipmentFetch](docs/manage/README.md#equipmentfetch) - Equipment - Fetch
* [equipmentJsonPatch](docs/manage/README.md#equipmentjsonpatch) - Equipment - JSON Patch
* [equipmentList](docs/manage/README.md#equipmentlist) - Equipment - List
* [equipmentListPaged](docs/manage/README.md#equipmentlistpaged) - Equipment - Paged
* [equipmentTypeCreate](docs/manage/README.md#equipmenttypecreate) - Equipment type - Create
* [equipmentTypeDelete](docs/manage/README.md#equipmenttypedelete) - Equipment type - Delete
* [equipmentTypeFetch](docs/manage/README.md#equipmenttypefetch) - Equipment type - Fetch
* [equipmentTypeJsonPatch](docs/manage/README.md#equipmenttypejsonpatch) - Equipment type - JSON Patch
* [equipmentTypeList](docs/manage/README.md#equipmenttypelist) - Equipment type - List
* [equipmentTypeListPaged](docs/manage/README.md#equipmenttypelistpaged) - Equipment type - Paged
* [equipmentTypeUpdatePatch](docs/manage/README.md#equipmenttypeupdatepatch) - Equipment type - Update
* [equipmentTypeUpdatePut](docs/manage/README.md#equipmenttypeupdateput) - Equipment type - Update
* [equipmentUpdatePatch](docs/manage/README.md#equipmentupdatepatch) - Equipment - Update
* [equipmentUpdatePut](docs/manage/README.md#equipmentupdateput) - Equipment - Update
* [tenantFetch](docs/manage/README.md#tenantfetch) - Tenant - Fetch
* [tenantJsonPatch](docs/manage/README.md#tenantjsonpatch) - Tenant - JSON Patch
* [tenantList](docs/manage/README.md#tenantlist) - Tenant - List
* [tenantListPaged](docs/manage/README.md#tenantlistpaged) - Tenant - Paged
* [tenantUpdatePatch](docs/manage/README.md#tenantupdatepatch) - Tenant - Update
* [tenantUpdatePut](docs/manage/README.md#tenantupdateput) - Tenant - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

