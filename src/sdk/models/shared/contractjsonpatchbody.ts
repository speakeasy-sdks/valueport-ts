/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JsonPatchElement } from "./jsonpatchelement";
import { Expose, Type } from "class-transformer";

/**
 * Request body for updating a single contract.
 */
export class ContractJsonPatchBody extends SpeakeasyBase {
  /**
   * JSON Patch document for schema `Contract`.
   */
  @SpeakeasyMetadata({ elemType: JsonPatchElement })
  @Expose({ name: "contract" })
  @Type(() => JsonPatchElement)
  contract: JsonPatchElement[];
}
