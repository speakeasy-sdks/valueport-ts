/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GroupedCostFixedHours } from "./groupedcostfixedhours";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GroupedCostFixedHoursList extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GroupedCostFixedHours })
    @Expose({ name: "data" })
    @Type(() => GroupedCostFixedHours)
    data: GroupedCostFixedHours[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    meta: Record<string, any>;
}
