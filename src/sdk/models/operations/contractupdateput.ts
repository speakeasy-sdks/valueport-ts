/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ContractUpdatePutRequest extends SpeakeasyBase {
  /**
   * Request body with contract details.
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  contractUpdateBody: shared.ContractUpdateBody;

  /**
   * Contract ID.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class ContractUpdatePutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  contractResponse?: shared.ContractResponse;

  /**
   * Unprocessable Entity
   */
  @SpeakeasyMetadata()
  errorDetailResponse?: shared.ErrorDetailResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
