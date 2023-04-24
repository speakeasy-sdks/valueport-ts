/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JsonPatchElement } from "./jsonpatchelement";
import { Expose, Type } from "class-transformer";

/**
 * Request body for updating a single equipment.
 */
export class EquipmentJsonPatchBody extends SpeakeasyBase {
  /**
   * JSON Patch document for schema `Equipment`.
   */
  @SpeakeasyMetadata({ elemType: JsonPatchElement })
  @Expose({ name: "equipment" })
  @Type(() => JsonPatchElement)
  equipment: JsonPatchElement[];
}
