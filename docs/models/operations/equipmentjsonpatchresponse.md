# EquipmentJsonPatchResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `equipmentResponse`                                                      | [shared.EquipmentResponse](../../models/shared/equipmentresponse.md)     | :heavy_minus_sign:                                                       | Success                                                                  |
| `errorDetailResponse`                                                    | [shared.ErrorDetailResponse](../../models/shared/errordetailresponse.md) | :heavy_minus_sign:                                                       | Unprocessable Entity                                                     |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `rawResponse`                                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema)                 | :heavy_minus_sign:                                                       | N/A                                                                      |