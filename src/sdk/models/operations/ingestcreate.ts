/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class IngestCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Unprocessable Entity
   */
  @SpeakeasyMetadata()
  errorDetailResponse?: shared.ErrorDetailResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  ingestResponse?: shared.IngestResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
