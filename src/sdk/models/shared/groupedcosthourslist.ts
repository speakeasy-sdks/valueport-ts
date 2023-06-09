/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GroupedCostHours } from "./groupedcosthours";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GroupedCostHoursList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GroupedCostHours })
  @Expose({ name: "data" })
  @Type(() => GroupedCostHours)
  data: GroupedCostHours[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  meta: Record<string, any>;
}
