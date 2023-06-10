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
    bearer: "",
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


### [contract](docs/sdks/contract/README.md)

* [contractMonthsFetch](docs/sdks/contract/README.md#contractmonthsfetch) - Contract months - Fetch
* [contractMonthsList](docs/sdks/contract/README.md#contractmonthslist) - Contract months - List
* [contractMonthsListPaged](docs/sdks/contract/README.md#contractmonthslistpaged) - Contract months - Paged
* [contractQuartersFetch](docs/sdks/contract/README.md#contractquartersfetch) - Contract quarters - Fetch
* [contractQuartersList](docs/sdks/contract/README.md#contractquarterslist) - Contract quarters - List
* [contractQuartersListPaged](docs/sdks/contract/README.md#contractquarterslistpaged) - Contract quarters - Paged
* [groupedCostFixedHoursFetch](docs/sdks/contract/README.md#groupedcostfixedhoursfetch) - Grouped cost fixed hours - Fetch
* [groupedCostFixedHoursList](docs/sdks/contract/README.md#groupedcostfixedhourslist) - Grouped cost fixed hours - List
* [groupedCostFixedHoursListPaged](docs/sdks/contract/README.md#groupedcostfixedhourslistpaged) - Grouped cost fixed hours - Paged
* [groupedCostHoursFetch](docs/sdks/contract/README.md#groupedcosthoursfetch) - Grouped cost hours - Fetch
* [groupedCostHoursList](docs/sdks/contract/README.md#groupedcosthourslist) - Grouped cost hours - List
* [groupedCostHoursListPaged](docs/sdks/contract/README.md#groupedcosthourslistpaged) - Grouped cost hours - Paged
* [groupedDebtHoursFetch](docs/sdks/contract/README.md#groupeddebthoursfetch) - Grouped debt hours - Fetch
* [groupedDebtHoursList](docs/sdks/contract/README.md#groupeddebthourslist) - Grouped debt hours - List
* [groupedDebtHoursListPaged](docs/sdks/contract/README.md#groupeddebthourslistpaged) - Grouped debt hours - Paged
* [groupedMetricUnitHoursFetch](docs/sdks/contract/README.md#groupedmetricunithoursfetch) - Grouped metric unit hours - Fetch
* [groupedMetricUnitHoursList](docs/sdks/contract/README.md#groupedmetricunithourslist) - Grouped metric unit hours - List
* [groupedMetricUnitHoursListPaged](docs/sdks/contract/README.md#groupedmetricunithourslistpaged) - Grouped metric unit hours - Paged
* [groupedUseMinuteHoursFetch](docs/sdks/contract/README.md#groupeduseminutehoursfetch) - Grouped use minute hours - Fetch
* [groupedUseMinuteHoursList](docs/sdks/contract/README.md#groupeduseminutehourslist) - Grouped use minute hours - List
* [groupedUseMinuteHoursListPaged](docs/sdks/contract/README.md#groupeduseminutehourslistpaged) - Grouped use minute hours - Paged
* [groupedValueHoursFetch](docs/sdks/contract/README.md#groupedvaluehoursfetch) - Grouped value hours - Fetch
* [groupedValueHoursList](docs/sdks/contract/README.md#groupedvaluehourslist) - Grouped value hours - List
* [groupedValueHoursListPaged](docs/sdks/contract/README.md#groupedvaluehourslistpaged) - Grouped value hours - Paged

### [data](docs/sdks/data/README.md)

* [ingestCreate](docs/sdks/data/README.md#ingestcreate) - Ingest - Create

### [manage](docs/sdks/manage/README.md)

* [apiKeyCreate](docs/sdks/manage/README.md#apikeycreate) - API key - Create
* [apiKeyDelete](docs/sdks/manage/README.md#apikeydelete) - API key - Delete
* [apiKeyFetch](docs/sdks/manage/README.md#apikeyfetch) - API key - Fetch
* [apiKeyJsonPatch](docs/sdks/manage/README.md#apikeyjsonpatch) - API key - JSON Patch
* [apiKeyList](docs/sdks/manage/README.md#apikeylist) - API key - List
* [apiKeyListPaged](docs/sdks/manage/README.md#apikeylistpaged) - API key - Paged
* [apiKeyUpdatePatch](docs/sdks/manage/README.md#apikeyupdatepatch) - API key - Update
* [apiKeyUpdatePut](docs/sdks/manage/README.md#apikeyupdateput) - API key - Update
* [contractCreate](docs/sdks/manage/README.md#contractcreate) - Contract - Create
* [contractDelete](docs/sdks/manage/README.md#contractdelete) - Contract - Delete
* [contractFetch](docs/sdks/manage/README.md#contractfetch) - Contract - Fetch
* [contractJsonPatch](docs/sdks/manage/README.md#contractjsonpatch) - Contract - JSON Patch
* [contractList](docs/sdks/manage/README.md#contractlist) - Contract - List
* [contractListPaged](docs/sdks/manage/README.md#contractlistpaged) - Contract - Paged
* [contractUpdatePatch](docs/sdks/manage/README.md#contractupdatepatch) - Contract - Update
* [contractUpdatePut](docs/sdks/manage/README.md#contractupdateput) - Contract - Update
* [customerCreate](docs/sdks/manage/README.md#customercreate) - Customer - Create
* [customerDelete](docs/sdks/manage/README.md#customerdelete) - Customer - Delete
* [customerFetch](docs/sdks/manage/README.md#customerfetch) - Customer - Fetch
* [customerJsonPatch](docs/sdks/manage/README.md#customerjsonpatch) - Customer - JSON Patch
* [customerList](docs/sdks/manage/README.md#customerlist) - Customer - List
* [customerListPaged](docs/sdks/manage/README.md#customerlistpaged) - Customer - Paged
* [customerUpdatePatch](docs/sdks/manage/README.md#customerupdatepatch) - Customer - Update
* [customerUpdatePut](docs/sdks/manage/README.md#customerupdateput) - Customer - Update
* [equipmentCreate](docs/sdks/manage/README.md#equipmentcreate) - Equipment - Create
* [equipmentDelete](docs/sdks/manage/README.md#equipmentdelete) - Equipment - Delete
* [equipmentFetch](docs/sdks/manage/README.md#equipmentfetch) - Equipment - Fetch
* [equipmentJsonPatch](docs/sdks/manage/README.md#equipmentjsonpatch) - Equipment - JSON Patch
* [equipmentList](docs/sdks/manage/README.md#equipmentlist) - Equipment - List
* [equipmentListPaged](docs/sdks/manage/README.md#equipmentlistpaged) - Equipment - Paged
* [equipmentTypeCreate](docs/sdks/manage/README.md#equipmenttypecreate) - Equipment type - Create
* [equipmentTypeDelete](docs/sdks/manage/README.md#equipmenttypedelete) - Equipment type - Delete
* [equipmentTypeFetch](docs/sdks/manage/README.md#equipmenttypefetch) - Equipment type - Fetch
* [equipmentTypeJsonPatch](docs/sdks/manage/README.md#equipmenttypejsonpatch) - Equipment type - JSON Patch
* [equipmentTypeList](docs/sdks/manage/README.md#equipmenttypelist) - Equipment type - List
* [equipmentTypeListPaged](docs/sdks/manage/README.md#equipmenttypelistpaged) - Equipment type - Paged
* [equipmentTypeUpdatePatch](docs/sdks/manage/README.md#equipmenttypeupdatepatch) - Equipment type - Update
* [equipmentTypeUpdatePut](docs/sdks/manage/README.md#equipmenttypeupdateput) - Equipment type - Update
* [equipmentUpdatePatch](docs/sdks/manage/README.md#equipmentupdatepatch) - Equipment - Update
* [equipmentUpdatePut](docs/sdks/manage/README.md#equipmentupdateput) - Equipment - Update
* [tenantFetch](docs/sdks/manage/README.md#tenantfetch) - Tenant - Fetch
* [tenantJsonPatch](docs/sdks/manage/README.md#tenantjsonpatch) - Tenant - JSON Patch
* [tenantList](docs/sdks/manage/README.md#tenantlist) - Tenant - List
* [tenantListPaged](docs/sdks/manage/README.md#tenantlistpaged) - Tenant - Paged
* [tenantUpdatePatch](docs/sdks/manage/README.md#tenantupdatepatch) - Tenant - Update
* [tenantUpdatePut](docs/sdks/manage/README.md#tenantupdateput) - Tenant - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

