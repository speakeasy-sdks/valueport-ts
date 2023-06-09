/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Equipment } from "./equipment";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class EquipmentPaged extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Equipment })
  @Expose({ name: "data" })
  @Type(() => Equipment)
  data: Equipment[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  meta: Record<string, any>;
}
