/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Ingest } from "./ingest";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class IngestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => Ingest)
  data: Ingest;
}
