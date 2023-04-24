/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Equipment } from "./equipment";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class EquipmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Equipment)
  data: Equipment;
}
