/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Error description.
 */
export class ErrorDetailResponseErrorDetail extends SpeakeasyBase {
  /**
   * Error reason.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  /**
   * Error location.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path?: string;
}

/**
 * Unprocessable Entity
 */
export class ErrorDetailResponse extends SpeakeasyBase {
  /**
   * Error description.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => ErrorDetailResponseErrorDetail)
  error?: ErrorDetailResponseErrorDetail;
}
