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
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractMonthsFetchRequest, ContractMonthsFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractMonthsFetchRequest = {
  id: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
};

sdk.contract.contractMonthsFetch(req).then((res: ContractMonthsFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractMonthsList

Retrieve a list of contract months entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractMonthsListRequest, ContractMonthsListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractMonthsListRequest = {
  continuationToken: "impedit",
  limit: "cum",
};

sdk.contract.contractMonthsList(req).then((res: ContractMonthsListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractMonthsListPaged

Retrieve a list of contract months entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractMonthsListPagedRequest, ContractMonthsListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractMonthsListPagedRequest = {
  page: "esse",
  pageSize: "ipsum",
};

sdk.contract.contractMonthsListPaged(req).then((res: ContractMonthsListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractQuartersFetch

Retrieve a single contract quarters entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractQuartersFetchRequest, ContractQuartersFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractQuartersFetchRequest = {
  id: "92059293-96fe-4a75-96eb-10faaa2352c5",
};

sdk.contract.contractQuartersFetch(req).then((res: ContractQuartersFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractQuartersList

Retrieve a list of contract quarters entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractQuartersListRequest, ContractQuartersListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractQuartersListRequest = {
  continuationToken: "omnis",
  limit: "nemo",
};

sdk.contract.contractQuartersList(req).then((res: ContractQuartersListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractQuartersListPaged

Retrieve a list of contract quarters entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractQuartersListPagedRequest, ContractQuartersListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractQuartersListPagedRequest = {
  page: "minima",
  pageSize: "excepturi",
};

sdk.contract.contractQuartersListPaged(req).then((res: ContractQuartersListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedCostFixedHoursFetch

Retrieve a single grouped cost fixed hours entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedCostFixedHoursFetchRequest, GroupedCostFixedHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedCostFixedHoursFetchRequest = {
  id: "07aff1a3-a2fa-4946-b739-251aa52c3f5a",
};

sdk.contract.groupedCostFixedHoursFetch(req).then((res: GroupedCostFixedHoursFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedCostFixedHoursList

Retrieve a list of grouped cost fixed hours entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedCostFixedHoursListRequest, GroupedCostFixedHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedCostFixedHoursListRequest = {
  continuationToken: "possimus",
  limit: "aut",
  timestampFrom: new Date("2022-05-18T15:52:05.226Z"),
  timestampTo: new Date("2020-12-24T08:13:29.299Z"),
};

sdk.contract.groupedCostFixedHoursList(req).then((res: GroupedCostFixedHoursListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedCostFixedHoursListPaged

Retrieve a list of grouped cost fixed hours entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedCostFixedHoursListPagedRequest, GroupedCostFixedHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedCostFixedHoursListPagedRequest = {
  page: "quasi",
  pageSize: "reiciendis",
  timestampFrom: new Date("2020-05-14T09:04:32.205Z"),
  timestampTo: new Date("2022-06-28T23:41:25.321Z"),
};

sdk.contract.groupedCostFixedHoursListPaged(req).then((res: GroupedCostFixedHoursListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedCostHoursFetch

Retrieve a single grouped cost hours entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedCostHoursFetchRequest, GroupedCostHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedCostHoursFetchRequest = {
  id: "f097b007-4f15-4471-b5e6-e13b99d488e1",
};

sdk.contract.groupedCostHoursFetch(req).then((res: GroupedCostHoursFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedCostHoursList

Retrieve a list of grouped cost hours entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedCostHoursListRequest, GroupedCostHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedCostHoursListRequest = {
  continuationToken: "repudiandae",
  limit: "sint",
  timestampFrom: new Date("2022-01-26T19:21:55.034Z"),
  timestampTo: new Date("2022-09-06T17:20:08.756Z"),
};

sdk.contract.groupedCostHoursList(req).then((res: GroupedCostHoursListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedCostHoursListPaged

Retrieve a list of grouped cost hours entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedCostHoursListPagedRequest, GroupedCostHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedCostHoursListPagedRequest = {
  page: "consequatur",
  pageSize: "est",
  timestampFrom: new Date("2022-08-09T16:21:07.003Z"),
  timestampTo: new Date("2021-07-27T01:56:50.693Z"),
};

sdk.contract.groupedCostHoursListPaged(req).then((res: GroupedCostHoursListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedDebtHoursFetch

Retrieve a single grouped debt hours entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedDebtHoursFetchRequest, GroupedDebtHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedDebtHoursFetchRequest = {
  id: "d4426980-2d50-42a9-8bb4-f63c969e9a3e",
};

sdk.contract.groupedDebtHoursFetch(req).then((res: GroupedDebtHoursFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedDebtHoursList

Retrieve a list of grouped debt hours entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedDebtHoursListRequest, GroupedDebtHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedDebtHoursListRequest = {
  continuationToken: "a",
  limit: "dolorum",
  timestampFrom: new Date("2022-07-21T01:01:39.776Z"),
  timestampTo: new Date("2020-01-25T11:09:22.009Z"),
};

sdk.contract.groupedDebtHoursList(req).then((res: GroupedDebtHoursListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedDebtHoursListPaged

Retrieve a list of grouped debt hours entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedDebtHoursListPagedRequest, GroupedDebtHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedDebtHoursListPagedRequest = {
  page: "rerum",
  pageSize: "dicta",
  timestampFrom: new Date("2022-03-27T00:52:20.281Z"),
  timestampTo: new Date("2021-10-07T01:21:59.434Z"),
};

sdk.contract.groupedDebtHoursListPaged(req).then((res: GroupedDebtHoursListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedMetricUnitHoursFetch

Retrieve a single grouped metric unit hours entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedMetricUnitHoursFetchRequest, GroupedMetricUnitHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedMetricUnitHoursFetchRequest = {
  id: "6ae395ef-b9ba-488f-ba66-997074ba4469",
};

sdk.contract.groupedMetricUnitHoursFetch(req).then((res: GroupedMetricUnitHoursFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedMetricUnitHoursList

Retrieve a list of grouped metric unit hours entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedMetricUnitHoursListRequest, GroupedMetricUnitHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedMetricUnitHoursListRequest = {
  continuationToken: "nobis",
  limit: "eum",
  timestampFrom: new Date("2022-08-05T15:44:28.456Z"),
  timestampTo: new Date("2022-09-14T03:02:47.808Z"),
};

sdk.contract.groupedMetricUnitHoursList(req).then((res: GroupedMetricUnitHoursListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedMetricUnitHoursListPaged

Retrieve a list of grouped metric unit hours entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedMetricUnitHoursListPagedRequest, GroupedMetricUnitHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedMetricUnitHoursListPagedRequest = {
  page: "et",
  pageSize: "excepturi",
  timestampFrom: new Date("2022-05-30T07:57:16.138Z"),
  timestampTo: new Date("2021-11-07T17:49:17.039Z"),
};

sdk.contract.groupedMetricUnitHoursListPaged(req).then((res: GroupedMetricUnitHoursListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedUseMinuteHoursFetch

Retrieve a single grouped use minute hours entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedUseMinuteHoursFetchRequest, GroupedUseMinuteHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedUseMinuteHoursFetchRequest = {
  id: "0afa563e-2516-4fe4-88b7-11e5b7fd2ed0",
};

sdk.contract.groupedUseMinuteHoursFetch(req).then((res: GroupedUseMinuteHoursFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedUseMinuteHoursList

Retrieve a list of grouped use minute hours entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedUseMinuteHoursListRequest, GroupedUseMinuteHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedUseMinuteHoursListRequest = {
  continuationToken: "consequuntur",
  limit: "praesentium",
  timestampFrom: new Date("2022-09-01T04:49:52.515Z"),
  timestampTo: new Date("2022-03-22T15:30:46.869Z"),
};

sdk.contract.groupedUseMinuteHoursList(req).then((res: GroupedUseMinuteHoursListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedUseMinuteHoursListPaged

Retrieve a list of grouped use minute hours entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedUseMinuteHoursListPagedRequest, GroupedUseMinuteHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedUseMinuteHoursListPagedRequest = {
  page: "illum",
  pageSize: "pariatur",
  timestampFrom: new Date("2021-10-07T12:29:38.109Z"),
  timestampTo: new Date("2022-09-20T19:40:48.375Z"),
};

sdk.contract.groupedUseMinuteHoursListPaged(req).then((res: GroupedUseMinuteHoursListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedValueHoursFetch

Retrieve a single grouped value hours entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedValueHoursFetchRequest, GroupedValueHoursFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedValueHoursFetchRequest = {
  id: "601fb576-b0d5-4f0d-b0c5-fbb258705320",
};

sdk.contract.groupedValueHoursFetch(req).then((res: GroupedValueHoursFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedValueHoursList

Retrieve a list of grouped value hours entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedValueHoursListRequest, GroupedValueHoursListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedValueHoursListRequest = {
  continuationToken: "dolores",
  limit: "minus",
  timestampFrom: new Date("2022-10-11T06:25:10.430Z"),
  timestampTo: new Date("2021-12-18T20:09:27.741Z"),
};

sdk.contract.groupedValueHoursList(req).then((res: GroupedValueHoursListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## groupedValueHoursListPaged

Retrieve a list of grouped value hours entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { GroupedValueHoursListPagedRequest, GroupedValueHoursListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GroupedValueHoursListPagedRequest = {
  page: "hic",
  pageSize: "recusandae",
  timestampFrom: new Date("2021-08-04T18:39:34.709Z"),
  timestampTo: new Date("2022-12-08T18:10:54.422Z"),
};

sdk.contract.groupedValueHoursListPaged(req).then((res: GroupedValueHoursListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
