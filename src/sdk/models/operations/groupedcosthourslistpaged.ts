/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GroupedCostHoursListPagedRequest extends SpeakeasyBase {
    /**
     * Page number.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: string;

    /**
     * Page size.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: string;

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

export class GroupedCostHoursListPagedResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    groupedCostHoursPaged?: shared.GroupedCostHoursPaged;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
