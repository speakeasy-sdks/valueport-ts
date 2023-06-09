/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JsonPatchElement } from "./jsonpatchelement";
import { Expose, Type } from "class-transformer";

/**
 * Request body for updating a single equipment type.
 */
export class EquipmentTypeJsonPatchBody extends SpeakeasyBase {
  /**
   * JSON Patch document for schema `EquipmentType`.
   */
  @SpeakeasyMetadata({ elemType: JsonPatchElement })
  @Expose({ name: "equipment_type" })
  @Type(() => JsonPatchElement)
  equipmentType: JsonPatchElement[];
}
