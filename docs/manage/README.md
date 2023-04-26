# manage

## Overview

Operations for managing tenant information.

### Available Operations

* [apiKeyCreate](#apikeycreate) - API key - Create
* [apiKeyDelete](#apikeydelete) - API key - Delete
* [apiKeyFetch](#apikeyfetch) - API key - Fetch
* [apiKeyJsonPatch](#apikeyjsonpatch) - API key - JSON Patch
* [apiKeyList](#apikeylist) - API key - List
* [apiKeyListPaged](#apikeylistpaged) - API key - Paged
* [apiKeyUpdatePatch](#apikeyupdatepatch) - API key - Update
* [apiKeyUpdatePut](#apikeyupdateput) - API key - Update
* [contractCreate](#contractcreate) - Contract - Create
* [contractDelete](#contractdelete) - Contract - Delete
* [contractFetch](#contractfetch) - Contract - Fetch
* [contractJsonPatch](#contractjsonpatch) - Contract - JSON Patch
* [contractList](#contractlist) - Contract - List
* [contractListPaged](#contractlistpaged) - Contract - Paged
* [contractUpdatePatch](#contractupdatepatch) - Contract - Update
* [contractUpdatePut](#contractupdateput) - Contract - Update
* [customerCreate](#customercreate) - Customer - Create
* [customerDelete](#customerdelete) - Customer - Delete
* [customerFetch](#customerfetch) - Customer - Fetch
* [customerJsonPatch](#customerjsonpatch) - Customer - JSON Patch
* [customerList](#customerlist) - Customer - List
* [customerListPaged](#customerlistpaged) - Customer - Paged
* [customerUpdatePatch](#customerupdatepatch) - Customer - Update
* [customerUpdatePut](#customerupdateput) - Customer - Update
* [equipmentCreate](#equipmentcreate) - Equipment - Create
* [equipmentDelete](#equipmentdelete) - Equipment - Delete
* [equipmentFetch](#equipmentfetch) - Equipment - Fetch
* [equipmentJsonPatch](#equipmentjsonpatch) - Equipment - JSON Patch
* [equipmentList](#equipmentlist) - Equipment - List
* [equipmentListPaged](#equipmentlistpaged) - Equipment - Paged
* [equipmentTypeCreate](#equipmenttypecreate) - Equipment type - Create
* [equipmentTypeDelete](#equipmenttypedelete) - Equipment type - Delete
* [equipmentTypeFetch](#equipmenttypefetch) - Equipment type - Fetch
* [equipmentTypeJsonPatch](#equipmenttypejsonpatch) - Equipment type - JSON Patch
* [equipmentTypeList](#equipmenttypelist) - Equipment type - List
* [equipmentTypeListPaged](#equipmenttypelistpaged) - Equipment type - Paged
* [equipmentTypeUpdatePatch](#equipmenttypeupdatepatch) - Equipment type - Update
* [equipmentTypeUpdatePut](#equipmenttypeupdateput) - Equipment type - Update
* [equipmentUpdatePatch](#equipmentupdatepatch) - Equipment - Update
* [equipmentUpdatePut](#equipmentupdateput) - Equipment - Update
* [tenantFetch](#tenantfetch) - Tenant - Fetch
* [tenantJsonPatch](#tenantjsonpatch) - Tenant - JSON Patch
* [tenantList](#tenantlist) - Tenant - List
* [tenantListPaged](#tenantlistpaged) - Tenant - Paged
* [tenantUpdatePatch](#tenantupdatepatch) - Tenant - Update
* [tenantUpdatePut](#tenantupdateput) - Tenant - Update

## apiKeyCreate

Create a single API key entity.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ApiKeyCreateBody, ApiKeyCreateResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.ApiKeyCreateBody = {
  apiKey: {
    deletedAt: new Date("2022-06-29T07:40:27.174Z"),
    grantedPermissions: [
      "ipsa",
    ],
    id: "0674ebf6-9280-4d1b-a77a-89ebf737ae42",
    isSingleTenant: false,
    key: "perferendis",
    name: "Marianne Thompson",
    singleTenantReceiver: {
      id: "6a95d8a0-d446-4ce2-af7a-73cf3be453f8",
    },
    startDate: new Date("2022-12-22T15:11:39.695Z"),
    tenant: {
      id: "b326b5a7-3429-4cdb-9a84-22bb679d2322",
    },
    updatedAt: new Date("2022-11-16T10:27:43.717Z"),
  },
};

sdk.manage.apiKeyCreate(req).then((res: ApiKeyCreateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## apiKeyDelete

Delete a single API key entity by ID (soft deletion).

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ApiKeyDeleteRequest, ApiKeyDeleteResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ApiKeyDeleteRequest = {
  id: "5bf0cbb1-e31b-48b9-8f34-43a1108e0adc",
};

sdk.manage.apiKeyDelete(req).then((res: ApiKeyDeleteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## apiKeyFetch

Retrieve a single API key entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ApiKeyFetchRequest, ApiKeyFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ApiKeyFetchRequest = {
  id: "f4b92187-9fce-4953-b73e-f7fbc7abd74d",
};

sdk.manage.apiKeyFetch(req).then((res: ApiKeyFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## apiKeyJsonPatch

Update a single API key entity.
PATCH with `Content-Type: application/json-patch+json` supports a JSON Patch ([jsonpatch.com](http://jsonpatch.com)) document in `api_key` that has paths relative to schema `ApiKey`.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ApiKeyJsonPatchRequest, ApiKeyJsonPatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ApiKeyJsonPatchRequest = {
  apiKeyJsonPatchBody: {
    apiKey: [
      {
        from: "sequi",
        op: "natus",
        path: "impedit",
        value: "aut",
      },
      {
        from: "voluptatibus",
        op: "exercitationem",
        path: "nulla",
        value: "fugit",
      },
      {
        from: "porro",
        op: "maiores",
        path: "doloribus",
        value: "iusto",
      },
      {
        from: "eligendi",
        op: "ducimus",
        path: "alias",
        value: "officia",
      },
    ],
  },
  id: "45626d43-6813-4f16-99f5-fce6c556146c",
};

sdk.manage.apiKeyJsonPatch(req).then((res: ApiKeyJsonPatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## apiKeyList

Retrieve a list of API key entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ApiKeyListRequest, ApiKeyListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ApiKeyListRequest = {
  continuationToken: "consectetur",
  limit: "recusandae",
};

sdk.manage.apiKeyList(req).then((res: ApiKeyListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## apiKeyListPaged

Retrieve a list of API key entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ApiKeyListPagedRequest, ApiKeyListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ApiKeyListPagedRequest = {
  page: "aspernatur",
  pageSize: "minima",
};

sdk.manage.apiKeyListPaged(req).then((res: ApiKeyListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## apiKeyUpdatePatch

Update a single API key entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [API key - JSON Patch](#operation/api_key-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ApiKeyUpdatePatchRequest, ApiKeyUpdatePatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ApiKeyUpdatePatchRequest = {
  apiKeyUpdateBody: {
    apiKey: {
      deletedAt: new Date("2022-01-18T04:51:10.466Z"),
      grantedPermissions: [
        "aut",
        "aut",
        "deleniti",
      ],
      id: "c42e141a-ac36-46c8-9d6b-144290747477",
      isSingleTenant: false,
      key: "rem",
      name: "Mitchell Predovic",
      singleTenantReceiver: {
        id: "66d28c10-ab3c-4dca-8251-904e523c7e0b",
      },
      startDate: new Date("2021-07-12T13:17:11.802Z"),
      tenant: {
        id: "178e4796-f2a7-40c6-8828-2aa482562f22",
      },
      updatedAt: new Date("2022-02-05T01:06:02.008Z"),
    },
  },
  id: "9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4",
};

sdk.manage.apiKeyUpdatePatch(req).then((res: ApiKeyUpdatePatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## apiKeyUpdatePut

Update a single API key entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [API key - JSON Patch](#operation/api_key-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ApiKeyUpdatePutRequest, ApiKeyUpdatePutResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ApiKeyUpdatePutRequest = {
  apiKeyUpdateBody: {
    apiKey: {
      deletedAt: new Date("2022-04-21T00:17:42.407Z"),
      grantedPermissions: [
        "blanditiis",
        "provident",
      ],
      id: "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04",
      isSingleTenant: false,
      key: "sapiente",
      name: "Marion Kihn",
      singleTenantReceiver: {
        id: "082d68ea-19f1-4d17-8513-39d08086a184",
      },
      startDate: new Date("2022-10-12T06:37:48.702Z"),
      tenant: {
        id: "94c26071-f93f-45f0-a42d-ac7af515cc41",
      },
      updatedAt: new Date("2022-04-26T11:54:02.741Z"),
    },
  },
  id: "a63aae8d-6786-44db-b675-fd5e60b375ed",
};

sdk.manage.apiKeyUpdatePut(req).then((res: ApiKeyUpdatePutResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractCreate

Create a single contract entity.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractCreateBody, ContractCreateResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.ContractCreateBody = {
  contract: {
    customer: {
      id: "4f6fbee4-1f33-4317-be35-b60eb1ea4265",
    },
    data: {
      "minima": "nobis",
      "dolorum": "adipisci",
    },
    deletedAt: new Date("2022-06-26T19:42:01.136Z"),
    id: "8744ed53-b88f-43a8-98f5-c0b2f2fb7b19",
    tenant: {
      id: "4a276b26-916f-4e1f-88f4-294e3698f447",
    },
    updatedAt: new Date("2021-10-18T02:58:04.604Z"),
  },
};

sdk.manage.contractCreate(req).then((res: ContractCreateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractDelete

Delete a single contract entity by ID (soft deletion).

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractDeleteRequest, ContractDeleteResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractDeleteRequest = {
  id: "03e8b445-e80c-4a55-afd2-0e457e1858b6",
};

sdk.manage.contractDelete(req).then((res: ContractDeleteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractFetch

Retrieve a single contract entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractFetchRequest, ContractFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractFetchRequest = {
  id: "a89fbe3a-5aa8-4e48-a4d0-ab4075088e51",
};

sdk.manage.contractFetch(req).then((res: ContractFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractJsonPatch

Update a single contract entity.
PATCH with `Content-Type: application/json-patch+json` supports a JSON Patch ([jsonpatch.com](http://jsonpatch.com)) document in `contract` that has paths relative to schema `Contract`.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractJsonPatchRequest, ContractJsonPatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractJsonPatchRequest = {
  contractJsonPatchBody: {
    contract: [
      {
        from: "ex",
        op: "sed",
        path: "sit",
        value: "vel",
      },
      {
        from: "nostrum",
        op: "saepe",
        path: "error",
        value: "consequatur",
      },
      {
        from: "incidunt",
        op: "reiciendis",
        path: "dolorem",
        value: "harum",
      },
    ],
  },
  id: "1194b8ab-f603-4a79-b9df-e0ab7da8a50c",
};

sdk.manage.contractJsonPatch(req).then((res: ContractJsonPatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractList

Retrieve a list of contract entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractListRequest, ContractListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractListRequest = {
  continuationToken: "repudiandae",
  limit: "quasi",
};

sdk.manage.contractList(req).then((res: ContractListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractListPaged

Retrieve a list of contract entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractListPagedRequest, ContractListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractListPagedRequest = {
  page: "atque",
  pageSize: "reprehenderit",
};

sdk.manage.contractListPaged(req).then((res: ContractListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractUpdatePatch

Update a single contract entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Contract - JSON Patch](#operation/contract-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractUpdatePatchRequest, ContractUpdatePatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractUpdatePatchRequest = {
  contractUpdateBody: {
    contract: {
      customer: {
        id: "f86bc173-d689-4eee-9526-f8d986e881ea",
      },
      data: {
        "labore": "reiciendis",
        "doloremque": "repudiandae",
        "dicta": "accusantium",
        "beatae": "dolores",
      },
      deletedAt: new Date("2022-08-11T23:10:48.145Z"),
      id: "3f94e29e-973e-4922-a57a-15be3e060807",
      tenant: {
        id: "e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9",
      },
      updatedAt: new Date("2022-07-10T15:48:59.296Z"),
    },
  },
  id: "64a3e865-e795-46f9-a51a-5a9da660ff57",
};

sdk.manage.contractUpdatePatch(req).then((res: ContractUpdatePatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## contractUpdatePut

Update a single contract entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Contract - JSON Patch](#operation/contract-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { ContractUpdatePutRequest, ContractUpdatePutResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: ContractUpdatePutRequest = {
  contractUpdateBody: {
    contract: {
      customer: {
        id: "bfaad4f9-efc1-4b45-92c1-032648dc2f61",
      },
      data: {
        "beatae": "cupiditate",
        "provident": "earum",
      },
      deletedAt: new Date("2021-02-13T05:30:19.145Z"),
      id: "d0e9fe6c-632c-4a3a-ad01-17996312fde0",
      tenant: {
        id: "4771778f-f61d-4017-8763-60a15db6a660",
      },
      updatedAt: new Date("2022-08-17T05:09:58.137Z"),
    },
  },
  id: "9a1adeaa-b585-41d6-8645-b08b61891baa",
};

sdk.manage.contractUpdatePut(req).then((res: ContractUpdatePutResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## customerCreate

Create a single customer entity.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { CustomerCreateBody, CustomerCreateResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.CustomerCreateBody = {
  customer: {
    deletedAt: new Date("2022-01-15T21:54:49.962Z"),
    email: "Beatrice_Parker2@hotmail.com",
    id: "08e6f8c5-f350-4d8c-9b5a-341814301042",
    name: "Marsha Bergstrom",
    taxId: "ipsam",
    tenant: {
      id: "208ece7e-253b-4668-851c-6c6e205e16de",
    },
    updatedAt: new Date("2021-08-14T17:27:02.277Z"),
  },
};

sdk.manage.customerCreate(req).then((res: CustomerCreateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## customerDelete

Delete a single customer entity by ID (soft deletion).

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { CustomerDeleteRequest, CustomerDeleteResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CustomerDeleteRequest = {
  id: "3fec9578-a645-4842-b3a8-418d162309fb",
};

sdk.manage.customerDelete(req).then((res: CustomerDeleteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## customerFetch

Retrieve a single customer entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { CustomerFetchRequest, CustomerFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CustomerFetchRequest = {
  id: "0929921a-efb9-4f58-84d8-6e68e4be0560",
};

sdk.manage.customerFetch(req).then((res: CustomerFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## customerJsonPatch

Update a single customer entity.
PATCH with `Content-Type: application/json-patch+json` supports a JSON Patch ([jsonpatch.com](http://jsonpatch.com)) document in `customer` that has paths relative to schema `Customer`.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { CustomerJsonPatchRequest, CustomerJsonPatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CustomerJsonPatchRequest = {
  customerJsonPatchBody: {
    customer: [
      {
        from: "non",
        op: "maiores",
        path: "enim",
        value: "sint",
      },
    ],
  },
  id: "da757a59-ecfe-4f66-af1c-aa3383c2beb4",
};

sdk.manage.customerJsonPatch(req).then((res: CustomerJsonPatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## customerList

Retrieve a list of customer entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { CustomerListRequest, CustomerListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CustomerListRequest = {
  continuationToken: "iusto",
  limit: "voluptate",
};

sdk.manage.customerList(req).then((res: CustomerListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## customerListPaged

Retrieve a list of customer entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { CustomerListPagedRequest, CustomerListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CustomerListPagedRequest = {
  page: "sequi",
  pageSize: "dignissimos",
};

sdk.manage.customerListPaged(req).then((res: CustomerListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## customerUpdatePatch

Update a single customer entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Customer - JSON Patch](#operation/customer-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { CustomerUpdatePatchRequest, CustomerUpdatePatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CustomerUpdatePatchRequest = {
  customerUpdateBody: {
    customer: {
      deletedAt: new Date("2022-03-22T23:13:00.381Z"),
      email: "Rosalind97@yahoo.com",
      id: "64d1db1f-2c43-4106-a1e9-6349e1cf9e06",
      name: "Jacob Pacocha",
      taxId: "iusto",
      tenant: {
        id: "000ae6b6-bc9b-48f7-99ea-c55a9741d311",
      },
      updatedAt: new Date("2022-09-05T11:07:40.496Z"),
    },
  },
  id: "2965bb8a-7202-4611-835e-139dbc2259b1",
};

sdk.manage.customerUpdatePatch(req).then((res: CustomerUpdatePatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## customerUpdatePut

Update a single customer entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Customer - JSON Patch](#operation/customer-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { CustomerUpdatePutRequest, CustomerUpdatePutResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CustomerUpdatePutRequest = {
  customerUpdateBody: {
    customer: {
      deletedAt: new Date("2021-07-18T15:23:57.911Z"),
      email: "Louvenia.Luettgen47@hotmail.com",
      id: "0e1084cb-0672-4d1a-9879-eeb9665b85ef",
      name: "Josh Abshire",
      taxId: "fuga",
      tenant: {
        id: "e0be2d78-2259-4e3e-a4b5-197f92443da7",
      },
      updatedAt: new Date("2020-04-21T15:18:08.742Z"),
    },
  },
  id: "52b895c5-37c6-4454-afb0-b34896c3ca5a",
};

sdk.manage.customerUpdatePut(req).then((res: CustomerUpdatePutResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentCreate

Create a single equipment entity.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentCreateBody, EquipmentCreateResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.EquipmentCreateBody = {
  equipment: {
    contract: {
      id: "cfbe2fd5-7075-4779-a917-7deac646ecb5",
    },
    customer: {
      id: "73409e3e-b1e5-4a2b-92eb-07f116db9954",
    },
    data: {
      "doloribus": "eligendi",
      "sint": "enim",
    },
    deletedAt: new Date("2021-01-11T05:39:31.724Z"),
    id: "88970e18-9dbb-430f-8b33-ea055b197cd4",
    name: "Kellie Corwin",
    remoteId: "consequuntur",
    tenant: {
      id: "d82d3513-bb6f-448b-a56b-cdb35ff2e4b2",
    },
    updatedAt: new Date("2022-08-27T21:22:12.876Z"),
  },
};

sdk.manage.equipmentCreate(req).then((res: EquipmentCreateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentDelete

Delete a single equipment entity by ID (soft deletion).

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentDeleteRequest, EquipmentDeleteResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentDeleteRequest = {
  id: "37a8cd9e-7319-4c17-bd52-5f77b114eeb5",
};

sdk.manage.equipmentDelete(req).then((res: EquipmentDeleteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentFetch

Retrieve a single equipment entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentFetchRequest, EquipmentFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentFetchRequest = {
  id: "2ff785fc-3781-44d4-898e-0c2bb89eb75d",
};

sdk.manage.equipmentFetch(req).then((res: EquipmentFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentJsonPatch

Update a single equipment entity.
PATCH with `Content-Type: application/json-patch+json` supports a JSON Patch ([jsonpatch.com](http://jsonpatch.com)) document in `equipment` that has paths relative to schema `Equipment`.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentJsonPatchRequest, EquipmentJsonPatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentJsonPatchRequest = {
  equipmentJsonPatchBody: {
    equipment: [
      {
        from: "repellendus",
        op: "iure",
        path: "dolorem",
        value: "commodi",
      },
      {
        from: "impedit",
        op: "commodi",
        path: "aut",
        value: "voluptatem",
      },
      {
        from: "ad",
        op: "quae",
        path: "amet",
        value: "illum",
      },
    ],
  },
  id: "8bb31180-f739-4ae9-a057-eb809e281033",
};

sdk.manage.equipmentJsonPatch(req).then((res: EquipmentJsonPatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentList

Retrieve a list of equipment entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentListRequest, EquipmentListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentListRequest = {
  continuationToken: "sunt",
  limit: "a",
};

sdk.manage.equipmentList(req).then((res: EquipmentListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentListPaged

Retrieve a list of equipment entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentListPagedRequest, EquipmentListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentListPagedRequest = {
  page: "dolor",
  pageSize: "occaecati",
};

sdk.manage.equipmentListPaged(req).then((res: EquipmentListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentTypeCreate

Create a single equipment type entity.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentTypeCreateBody, EquipmentTypeCreateResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: shared.EquipmentTypeCreateBody = {
  equipmentType: {
    deletedAt: new Date("2022-10-14T13:04:49.369Z"),
    id: "d4c700b6-07f3-4c93-873b-9da3f2ceda7e",
    name: "Mr. Edith Zieme",
    tenant: {
      id: "7411faf4-b754-44e4-b2e8-02857a5b4046",
    },
    updatedAt: new Date("2022-05-07T23:23:18.376Z"),
  },
};

sdk.manage.equipmentTypeCreate(req).then((res: EquipmentTypeCreateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentTypeDelete

Delete a single equipment type entity by ID (soft deletion).

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentTypeDeleteRequest, EquipmentTypeDeleteResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentTypeDeleteRequest = {
  id: "7d575f14-00e7-464a-9733-4ec1b781b36a",
};

sdk.manage.equipmentTypeDelete(req).then((res: EquipmentTypeDeleteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentTypeFetch

Retrieve a single equipment type entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentTypeFetchRequest, EquipmentTypeFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentTypeFetchRequest = {
  id: "08088d10-0efa-4da2-80ef-0422eb2164cf",
};

sdk.manage.equipmentTypeFetch(req).then((res: EquipmentTypeFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentTypeJsonPatch

Update a single equipment type entity.
PATCH with `Content-Type: application/json-patch+json` supports a JSON Patch ([jsonpatch.com](http://jsonpatch.com)) document in `equipment_type` that has paths relative to schema `EquipmentType`.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentTypeJsonPatchRequest, EquipmentTypeJsonPatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentTypeJsonPatchRequest = {
  equipmentTypeJsonPatchBody: {
    equipmentType: [
      {
        from: "officia",
        op: "libero",
        path: "totam",
        value: "sequi",
      },
      {
        from: "aliquid",
        op: "ea",
        path: "impedit",
        value: "ducimus",
      },
      {
        from: "odit",
        op: "velit",
        path: "reiciendis",
        value: "repellat",
      },
    ],
  },
  id: "da9e06be-e482-45c1-bc0e-115c80bff918",
};

sdk.manage.equipmentTypeJsonPatch(req).then((res: EquipmentTypeJsonPatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentTypeList

Retrieve a list of equipment type entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentTypeListRequest, EquipmentTypeListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentTypeListRequest = {
  continuationToken: "ullam",
  limit: "dolore",
};

sdk.manage.equipmentTypeList(req).then((res: EquipmentTypeListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentTypeListPaged

Retrieve a list of equipment type entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentTypeListPagedRequest, EquipmentTypeListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentTypeListPagedRequest = {
  page: "modi",
  pageSize: "itaque",
};

sdk.manage.equipmentTypeListPaged(req).then((res: EquipmentTypeListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentTypeUpdatePatch

Update a single equipment type entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Equipment type - JSON Patch](#operation/equipment_type-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentTypeUpdatePatchRequest, EquipmentTypeUpdatePatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentTypeUpdatePatchRequest = {
  equipmentTypeUpdateBody: {
    equipmentType: {
      deletedAt: new Date("2022-03-15T19:59:59.350Z"),
      id: "2defcce8-f197-4777-be63-562a7b408f05",
      name: "Luis Schumm",
      tenant: {
        id: "fdaf313a-1f5f-4d94-a59c-0b36f25ea944",
      },
      updatedAt: new Date("2022-04-16T17:09:27.790Z"),
    },
  },
  id: "b756c11f-6c37-4a51-a624-3835bbc05a23",
};

sdk.manage.equipmentTypeUpdatePatch(req).then((res: EquipmentTypeUpdatePatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentTypeUpdatePut

Update a single equipment type entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Equipment type - JSON Patch](#operation/equipment_type-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentTypeUpdatePutRequest, EquipmentTypeUpdatePutResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentTypeUpdatePutRequest = {
  equipmentTypeUpdateBody: {
    equipmentType: {
      deletedAt: new Date("2022-06-18T20:13:03.373Z"),
      id: "5cefc5fd-e10a-40ce-a169-e510019c6dc5",
      name: "Melvin Gusikowski",
      tenant: {
        id: "2799bfbb-e694-49fb-abb4-ecae6c3d5db3",
      },
      updatedAt: new Date("2021-05-07T06:03:57.365Z"),
    },
  },
  id: "ebd5daea-4c50-46a8-aa94-c02644cf5e9d",
};

sdk.manage.equipmentTypeUpdatePut(req).then((res: EquipmentTypeUpdatePutResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentUpdatePatch

Update a single equipment entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Equipment - JSON Patch](#operation/equipment-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentUpdatePatchRequest, EquipmentUpdatePatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentUpdatePatchRequest = {
  equipmentUpdateBody: {
    equipment: {
      contract: {
        id: "9a4578ad-c1ac-4600-9ec0-01ac802e2ec0",
      },
      customer: {
        id: "9ff8f0f8-16ff-4347-bc13-e902c14125b0",
      },
      data: {
        "vel": "accusantium",
        "id": "laboriosam",
        "ex": "quas",
      },
      deletedAt: new Date("2022-08-23T21:35:10.953Z"),
      id: "1a472af9-23c5-4949-b83f-350cf876ffb9",
      name: "Mildred Schinner",
      remoteId: "porro",
      tenant: {
        id: "bb4e243c-f789-4ffa-beda-53e5ae6e0ac1",
      },
      updatedAt: new Date("2022-06-24T12:50:17.676Z"),
    },
  },
  id: "c2b9c247-c883-473a-80e1-942f32e55055",
};

sdk.manage.equipmentUpdatePatch(req).then((res: EquipmentUpdatePatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## equipmentUpdatePut

Update a single equipment entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Equipment - JSON Patch](#operation/equipment-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { EquipmentUpdatePutRequest, EquipmentUpdatePutResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: EquipmentUpdatePutRequest = {
  equipmentUpdateBody: {
    equipment: {
      contract: {
        id: "756f5d56-d0bd-40af-adfe-13db4f62cba3",
      },
      customer: {
        id: "f8941aeb-c0b8-40a6-924d-3b2ecfcc8f89",
      },
      data: {
        "accusantium": "illo",
        "aut": "doloribus",
      },
      deletedAt: new Date("2022-02-17T12:07:51.076Z"),
      id: "d3d6fa18-04e5-44c8-af16-8a363c8873e4",
      name: "Herbert Dietrich MD",
      remoteId: "veritatis",
      tenant: {
        id: "f6b8ca27-5a60-4a04-8495-cc699171b51c",
      },
      updatedAt: new Date("2022-04-24T15:07:59.283Z"),
    },
  },
  id: "db1cf4b8-88eb-4dfc-8ccc-a99bc7fc0b2d",
};

sdk.manage.equipmentUpdatePut(req).then((res: EquipmentUpdatePutResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## tenantFetch

Retrieve a single tenant entity by ID.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { TenantFetchRequest, TenantFetchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TenantFetchRequest = {
  id: "ce10873e-42b0-406d-a788-78ba8581a582",
};

sdk.manage.tenantFetch(req).then((res: TenantFetchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## tenantJsonPatch

Update a single tenant entity.
PATCH with `Content-Type: application/json-patch+json` supports a JSON Patch ([jsonpatch.com](http://jsonpatch.com)) document in `tenant` that has paths relative to schema `Tenant`.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { TenantJsonPatchRequest, TenantJsonPatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TenantJsonPatchRequest = {
  tenantJsonPatchBody: {
    tenant: [
      {
        from: "quas",
        op: "placeat",
        path: "enim",
        value: "labore",
      },
    ],
  },
  id: "fefa9c95-f2ea-4c55-a5d3-07cfee81206e",
};

sdk.manage.tenantJsonPatch(req).then((res: TenantJsonPatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## tenantList

Retrieve a list of tenant entities by continuation token and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { TenantListRequest, TenantListResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TenantListRequest = {
  continuationToken: "sed",
  limit: "deleniti",
};

sdk.manage.tenantList(req).then((res: TenantListResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## tenantListPaged

Retrieve a list of tenant entities by page number and page size.

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { TenantListPagedRequest, TenantListPagedResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TenantListPagedRequest = {
  page: "sunt",
  pageSize: "nesciunt",
};

sdk.manage.tenantListPaged(req).then((res: TenantListPagedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## tenantUpdatePatch

Update a single tenant entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Tenant - JSON Patch](#operation/tenant-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { TenantUpdatePatchRequest, TenantUpdatePatchResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TenantUpdatePatchRequest = {
  tenantUpdateBody: {
    tenant: {
      deletedAt: new Date("2020-12-24T08:23:31.094Z"),
      id: "4a41c480-d3f2-4132-af03-102d514f4cc6",
      name: "Eric Lesch",
      updatedAt: new Date("2022-03-17T11:23:26.153Z"),
    },
  },
  id: "21a6a4f7-7a87-4ee3-a4be-752c65b34418",
};

sdk.manage.tenantUpdatePatch(req).then((res: TenantUpdatePatchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## tenantUpdatePut

Update a single tenant entity.
PUT and PATCH update semantics as defined by REST.
 - **PUT**: Update properties and assign null where not defined in the request body.
 - **PATCH**: Update non-null properties from the request body and leave the remaining intact.

See also: [Tenant - JSON Patch](#operation/tenant-json-patch)

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "valueport";
import { TenantUpdatePutRequest, TenantUpdatePutResponse } from "valueport/dist/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: TenantUpdatePutRequest = {
  tenantUpdateBody: {
    tenant: {
      deletedAt: new Date("2022-05-03T03:35:37.503Z"),
      id: "bb91c8d9-75e0-4e84-99d8-f84f144f3e07",
      name: "Bryant Schamberger",
      updatedAt: new Date("2021-09-17T06:37:53.473Z"),
    },
  },
  id: "5f3cabd9-05a9-472e-8567-28227b2d3094",
};

sdk.manage.tenantUpdatePut(req).then((res: TenantUpdatePutResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
