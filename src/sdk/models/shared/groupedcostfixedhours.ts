/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class GroupedCostFixedHours extends SpeakeasyBase {
  /**
   * Currency code (ISO 4217)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency_code" })
  currencyCode: string;

  /**
   * Soft-delete timestamp.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deleted_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  deletedAt?: Date;

  /**
   * GroupedCostFixedHours ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Timestamps in unix epoch ms.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "timestamps_ms" })
  timestampsMs: number[];

  /**
   * Last updated timestamp.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  /**
   * Hourly group fixed costs.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "values" })
  values: number[];
}
