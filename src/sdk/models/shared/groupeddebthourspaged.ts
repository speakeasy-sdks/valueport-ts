/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GroupedDebtHours } from "./groupeddebthours";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GroupedDebtHoursPaged extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GroupedDebtHours })
    @Expose({ name: "data" })
    @Type(() => GroupedDebtHours)
    data: GroupedDebtHours[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    meta: Record<string, any>;
}
