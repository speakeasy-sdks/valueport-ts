/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Tenant } from "./tenant";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class TenantsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Tenant })
  @Expose({ name: "data" })
  @Type(() => Tenant)
  data: Tenant[];

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  meta: Record<string, any>;
}
