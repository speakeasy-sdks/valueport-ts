/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GroupedUseMinuteHoursListRequest extends SpeakeasyBase {
    /**
     * List continuation token.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=continuation_token" })
    continuationToken?: string;

    /**
     * Results size limit.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: string;

    /**
     * Earliest timestamp.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp_from" })
    timestampFrom?: Date;

    /**
     * Latest timestamp.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp_to" })
    timestampTo?: Date;
}

export class GroupedUseMinuteHoursListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    groupedUseMinuteHoursList?: shared.GroupedUseMinuteHoursList;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
