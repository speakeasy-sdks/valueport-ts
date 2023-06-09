/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JsonPatchElement } from "./jsonpatchelement";
import { Expose, Type } from "class-transformer";

/**
 * Request body for updating a single tenant.
 */
export class TenantJsonPatchBody extends SpeakeasyBase {
  /**
   * JSON Patch document for schema `Tenant`.
   */
  @SpeakeasyMetadata({ elemType: JsonPatchElement })
  @Expose({ name: "tenant" })
  @Type(() => JsonPatchElement)
  tenant: JsonPatchElement[];
}
