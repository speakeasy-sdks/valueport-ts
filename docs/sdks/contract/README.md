# contract

## Overview

Current and historical contract information.

### Available Operations

* [contractMonthsFetch](#contractmonthsfetch) - Contract months - Fetch
* [contractMonthsList](#contractmonthslist) - Contract months - List
* [contractMonthsListPaged](#contractmonthslistpaged) - Contract months - Paged
* [contractQuartersFetch](#contractquartersfetch) - Contract quarters - Fetch
* [contractQuartersList](#contractquarterslist) - Contract quarters - List
* [contractQuartersListPaged](#contractquarterslistpaged) - Contract quarters - Paged
* [groupedCostFixedHoursFetch](#groupedcostfixedhoursfetch) - Grouped cost fixed hours - Fetch
* [groupedCostFixedHoursList](#groupedcostfixedhourslist) - Grouped cost fixed hours - List
* [groupedCostFixedHoursListPaged](#groupedcostfixedhourslistpaged) - Grouped cost fixed hours - Paged
* [groupedCostHoursFetch](#groupedcosthoursfetch) - Grouped cost hours - Fetch
* [groupedCostHoursList](#groupedcosthourslist) - Grouped cost hours - List
* [groupedCostHoursListPaged](#groupedcosthourslistpaged) - Grouped cost hours - Paged
* [groupedDebtHoursFetch](#groupeddebthoursfetch) - Grouped debt hours - Fetch
* [groupedDebtHoursList](#groupeddebthourslist) - Grouped debt hours - List
* [groupedDebtHoursListPaged](#groupeddebthourslistpaged) - Grouped debt hours - Paged
* [groupedMetricUnitHoursFetch](#groupedmetricunithoursfetch) - Grouped metric unit hours - Fetch
* [groupedMetricUnitHoursList](#groupedmetricunithourslist) - Grouped metric unit hours - List
* [groupedMetricUnitHoursListPaged](#groupedmetricunithourslistpaged) - Grouped metric unit hours - Paged
* [groupedUseMinuteHoursFetch](#groupeduseminutehoursfetch) - Grouped use minute hours - Fetch
* [groupedUseMinuteHoursList](#groupeduseminutehourslist) - Grouped use minute hours - List
* [groupedUseMinuteHoursListPaged](#groupeduseminutehourslistpaged) - Grouped use minute hours - Paged
* [groupedValueHoursFetch](#groupedvaluehoursfetch) - Grouped value hours - Fetch
* [groupedValueHoursList](#groupedvaluehourslist) - Grouped value hours - List
* [groupedValueHoursListPaged](#groupedvaluehourslistpaged) - Grouped value hours - Paged

## contractMonthsFetch

Retrieve a single contract months entity by ID.

### Example Usage

```typescript
import { SDK } from "valueport";
import { ContractMonthsFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.contractMonthsFetch({
  id: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
}).then((res: ContractMonthsFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ContractMonthsFetchRequest](../../models/operations/contractmonthsfetchrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ContractMonthsFetchResponse](../../models/operations/contractmonthsfetchresponse.md)>**


## contractMonthsList

Retrieve a list of contract months entities by continuation token and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { ContractMonthsListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.contractMonthsList({
  continuationToken: "impedit",
  limit: "cum",
}).then((res: ContractMonthsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ContractMonthsListRequest](../../models/operations/contractmonthslistrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ContractMonthsListResponse](../../models/operations/contractmonthslistresponse.md)>**


## contractMonthsListPaged

Retrieve a list of contract months entities by page number and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { ContractMonthsListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.contractMonthsListPaged({
  page: "esse",
  pageSize: "ipsum",
}).then((res: ContractMonthsListPagedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ContractMonthsListPagedRequest](../../models/operations/contractmonthslistpagedrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ContractMonthsListPagedResponse](../../models/operations/contractmonthslistpagedresponse.md)>**


## contractQuartersFetch

Retrieve a single contract quarters entity by ID.

### Example Usage

```typescript
import { SDK } from "valueport";
import { ContractQuartersFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.contractQuartersFetch({
  id: "92059293-96fe-4a75-96eb-10faaa2352c5",
}).then((res: ContractQuartersFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ContractQuartersFetchRequest](../../models/operations/contractquartersfetchrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ContractQuartersFetchResponse](../../models/operations/contractquartersfetchresponse.md)>**


## contractQuartersList

Retrieve a list of contract quarters entities by continuation token and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { ContractQuartersListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.contractQuartersList({
  continuationToken: "omnis",
  limit: "nemo",
}).then((res: ContractQuartersListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ContractQuartersListRequest](../../models/operations/contractquarterslistrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ContractQuartersListResponse](../../models/operations/contractquarterslistresponse.md)>**


## contractQuartersListPaged

Retrieve a list of contract quarters entities by page number and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { ContractQuartersListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.contractQuartersListPaged({
  page: "minima",
  pageSize: "excepturi",
}).then((res: ContractQuartersListPagedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ContractQuartersListPagedRequest](../../models/operations/contractquarterslistpagedrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ContractQuartersListPagedResponse](../../models/operations/contractquarterslistpagedresponse.md)>**


## groupedCostFixedHoursFetch

Retrieve a single grouped cost fixed hours entity by ID.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedCostFixedHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedCostFixedHoursFetch({
  id: "07aff1a3-a2fa-4946-b739-251aa52c3f5a",
}).then((res: GroupedCostFixedHoursFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GroupedCostFixedHoursFetchRequest](../../models/operations/groupedcostfixedhoursfetchrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GroupedCostFixedHoursFetchResponse](../../models/operations/groupedcostfixedhoursfetchresponse.md)>**


## groupedCostFixedHoursList

Retrieve a list of grouped cost fixed hours entities by continuation token and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedCostFixedHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedCostFixedHoursList({
  continuationToken: "possimus",
  limit: "aut",
  timestampFrom: new Date("2022-05-18T15:52:05.226Z"),
  timestampTo: new Date("2020-12-24T08:13:29.299Z"),
}).then((res: GroupedCostFixedHoursListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GroupedCostFixedHoursListRequest](../../models/operations/groupedcostfixedhourslistrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GroupedCostFixedHoursListResponse](../../models/operations/groupedcostfixedhourslistresponse.md)>**


## groupedCostFixedHoursListPaged

Retrieve a list of grouped cost fixed hours entities by page number and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedCostFixedHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedCostFixedHoursListPaged({
  page: "quasi",
  pageSize: "reiciendis",
  timestampFrom: new Date("2020-05-14T09:04:32.205Z"),
  timestampTo: new Date("2022-06-28T23:41:25.321Z"),
}).then((res: GroupedCostFixedHoursListPagedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GroupedCostFixedHoursListPagedRequest](../../models/operations/groupedcostfixedhourslistpagedrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GroupedCostFixedHoursListPagedResponse](../../models/operations/groupedcostfixedhourslistpagedresponse.md)>**


## groupedCostHoursFetch

Retrieve a single grouped cost hours entity by ID.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedCostHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedCostHoursFetch({
  id: "f097b007-4f15-4471-b5e6-e13b99d488e1",
}).then((res: GroupedCostHoursFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GroupedCostHoursFetchRequest](../../models/operations/groupedcosthoursfetchrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GroupedCostHoursFetchResponse](../../models/operations/groupedcosthoursfetchresponse.md)>**


## groupedCostHoursList

Retrieve a list of grouped cost hours entities by continuation token and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedCostHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedCostHoursList({
  continuationToken: "repudiandae",
  limit: "sint",
  timestampFrom: new Date("2022-01-26T19:21:55.034Z"),
  timestampTo: new Date("2022-09-06T17:20:08.756Z"),
}).then((res: GroupedCostHoursListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GroupedCostHoursListRequest](../../models/operations/groupedcosthourslistrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GroupedCostHoursListResponse](../../models/operations/groupedcosthourslistresponse.md)>**


## groupedCostHoursListPaged

Retrieve a list of grouped cost hours entities by page number and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedCostHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedCostHoursListPaged({
  page: "consequatur",
  pageSize: "est",
  timestampFrom: new Date("2022-08-09T16:21:07.003Z"),
  timestampTo: new Date("2021-07-27T01:56:50.693Z"),
}).then((res: GroupedCostHoursListPagedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GroupedCostHoursListPagedRequest](../../models/operations/groupedcosthourslistpagedrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GroupedCostHoursListPagedResponse](../../models/operations/groupedcosthourslistpagedresponse.md)>**


## groupedDebtHoursFetch

Retrieve a single grouped debt hours entity by ID.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedDebtHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedDebtHoursFetch({
  id: "d4426980-2d50-42a9-8bb4-f63c969e9a3e",
}).then((res: GroupedDebtHoursFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GroupedDebtHoursFetchRequest](../../models/operations/groupeddebthoursfetchrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GroupedDebtHoursFetchResponse](../../models/operations/groupeddebthoursfetchresponse.md)>**


## groupedDebtHoursList

Retrieve a list of grouped debt hours entities by continuation token and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedDebtHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedDebtHoursList({
  continuationToken: "a",
  limit: "dolorum",
  timestampFrom: new Date("2022-07-21T01:01:39.776Z"),
  timestampTo: new Date("2020-01-25T11:09:22.009Z"),
}).then((res: GroupedDebtHoursListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GroupedDebtHoursListRequest](../../models/operations/groupeddebthourslistrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GroupedDebtHoursListResponse](../../models/operations/groupeddebthourslistresponse.md)>**


## groupedDebtHoursListPaged

Retrieve a list of grouped debt hours entities by page number and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedDebtHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedDebtHoursListPaged({
  page: "rerum",
  pageSize: "dicta",
  timestampFrom: new Date("2022-03-27T00:52:20.281Z"),
  timestampTo: new Date("2021-10-07T01:21:59.434Z"),
}).then((res: GroupedDebtHoursListPagedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GroupedDebtHoursListPagedRequest](../../models/operations/groupeddebthourslistpagedrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GroupedDebtHoursListPagedResponse](../../models/operations/groupeddebthourslistpagedresponse.md)>**


## groupedMetricUnitHoursFetch

Retrieve a single grouped metric unit hours entity by ID.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedMetricUnitHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedMetricUnitHoursFetch({
  id: "6ae395ef-b9ba-488f-ba66-997074ba4469",
}).then((res: GroupedMetricUnitHoursFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GroupedMetricUnitHoursFetchRequest](../../models/operations/groupedmetricunithoursfetchrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GroupedMetricUnitHoursFetchResponse](../../models/operations/groupedmetricunithoursfetchresponse.md)>**


## groupedMetricUnitHoursList

Retrieve a list of grouped metric unit hours entities by continuation token and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedMetricUnitHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedMetricUnitHoursList({
  continuationToken: "nobis",
  limit: "eum",
  timestampFrom: new Date("2022-08-05T15:44:28.456Z"),
  timestampTo: new Date("2022-09-14T03:02:47.808Z"),
}).then((res: GroupedMetricUnitHoursListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GroupedMetricUnitHoursListRequest](../../models/operations/groupedmetricunithourslistrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GroupedMetricUnitHoursListResponse](../../models/operations/groupedmetricunithourslistresponse.md)>**


## groupedMetricUnitHoursListPaged

Retrieve a list of grouped metric unit hours entities by page number and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedMetricUnitHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedMetricUnitHoursListPaged({
  page: "et",
  pageSize: "excepturi",
  timestampFrom: new Date("2022-05-30T07:57:16.138Z"),
  timestampTo: new Date("2021-11-07T17:49:17.039Z"),
}).then((res: GroupedMetricUnitHoursListPagedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GroupedMetricUnitHoursListPagedRequest](../../models/operations/groupedmetricunithourslistpagedrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GroupedMetricUnitHoursListPagedResponse](../../models/operations/groupedmetricunithourslistpagedresponse.md)>**


## groupedUseMinuteHoursFetch

Retrieve a single grouped use minute hours entity by ID.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedUseMinuteHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedUseMinuteHoursFetch({
  id: "0afa563e-2516-4fe4-88b7-11e5b7fd2ed0",
}).then((res: GroupedUseMinuteHoursFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GroupedUseMinuteHoursFetchRequest](../../models/operations/groupeduseminutehoursfetchrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GroupedUseMinuteHoursFetchResponse](../../models/operations/groupeduseminutehoursfetchresponse.md)>**


## groupedUseMinuteHoursList

Retrieve a list of grouped use minute hours entities by continuation token and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedUseMinuteHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedUseMinuteHoursList({
  continuationToken: "consequuntur",
  limit: "praesentium",
  timestampFrom: new Date("2022-09-01T04:49:52.515Z"),
  timestampTo: new Date("2022-03-22T15:30:46.869Z"),
}).then((res: GroupedUseMinuteHoursListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GroupedUseMinuteHoursListRequest](../../models/operations/groupeduseminutehourslistrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GroupedUseMinuteHoursListResponse](../../models/operations/groupeduseminutehourslistresponse.md)>**


## groupedUseMinuteHoursListPaged

Retrieve a list of grouped use minute hours entities by page number and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedUseMinuteHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedUseMinuteHoursListPaged({
  page: "illum",
  pageSize: "pariatur",
  timestampFrom: new Date("2021-10-07T12:29:38.109Z"),
  timestampTo: new Date("2022-09-20T19:40:48.375Z"),
}).then((res: GroupedUseMinuteHoursListPagedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GroupedUseMinuteHoursListPagedRequest](../../models/operations/groupeduseminutehourslistpagedrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GroupedUseMinuteHoursListPagedResponse](../../models/operations/groupeduseminutehourslistpagedresponse.md)>**


## groupedValueHoursFetch

Retrieve a single grouped value hours entity by ID.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedValueHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedValueHoursFetch({
  id: "601fb576-b0d5-4f0d-b0c5-fbb258705320",
}).then((res: GroupedValueHoursFetchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GroupedValueHoursFetchRequest](../../models/operations/groupedvaluehoursfetchrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GroupedValueHoursFetchResponse](../../models/operations/groupedvaluehoursfetchresponse.md)>**


## groupedValueHoursList

Retrieve a list of grouped value hours entities by continuation token and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedValueHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedValueHoursList({
  continuationToken: "dolores",
  limit: "minus",
  timestampFrom: new Date("2022-10-11T06:25:10.430Z"),
  timestampTo: new Date("2021-12-18T20:09:27.741Z"),
}).then((res: GroupedValueHoursListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GroupedValueHoursListRequest](../../models/operations/groupedvaluehourslistrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GroupedValueHoursListResponse](../../models/operations/groupedvaluehourslistresponse.md)>**


## groupedValueHoursListPaged

Retrieve a list of grouped value hours entities by page number and page size.

### Example Usage

```typescript
import { SDK } from "valueport";
import { GroupedValueHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "",
  },
});

sdk.contract.groupedValueHoursListPaged({
  page: "hic",
  pageSize: "recusandae",
  timestampFrom: new Date("2021-08-04T18:39:34.709Z"),
  timestampTo: new Date("2022-12-08T18:10:54.422Z"),
}).then((res: GroupedValueHoursListPagedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GroupedValueHoursListPagedRequest](../../models/operations/groupedvaluehourslistpagedrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GroupedValueHoursListPagedResponse](../../models/operations/groupedvaluehourslistpagedresponse.md)>**

