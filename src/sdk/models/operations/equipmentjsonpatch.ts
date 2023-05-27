/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class EquipmentJsonPatchRequest extends SpeakeasyBase {
    /**
     * Request body with equipment details as a JSON Patch.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
    equipmentJsonPatchBody: shared.EquipmentJsonPatchBody;

    /**
     * Equipment ID.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class EquipmentJsonPatchResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    equipmentResponse?: shared.EquipmentResponse;

    /**
     * Unprocessable Entity
     */
    @SpeakeasyMetadata()
    errorDetailResponse?: shared.ErrorDetailResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
