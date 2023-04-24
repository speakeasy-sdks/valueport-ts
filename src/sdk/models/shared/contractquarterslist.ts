/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContractQuarters } from "./contractquarters";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ContractQuartersList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ContractQuarters })
  @Expose({ name: "data" })
  @Type(() => ContractQuarters)
  data: ContractQuarters[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  meta: Record<string, any>;
}