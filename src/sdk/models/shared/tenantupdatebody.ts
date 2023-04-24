/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TenantOptions } from "./tenantoptions";
import { Expose, Type } from "class-transformer";

/**
 * Request body for updating a single tenant.
 */
export class TenantUpdateBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "tenant" })
  @Type(() => TenantOptions)
  tenant: TenantOptions;
}