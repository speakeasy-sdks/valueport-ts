/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GroupedValueHours } from "./groupedvaluehours";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GroupedValueHoursResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => GroupedValueHours)
    data: GroupedValueHours;
}
