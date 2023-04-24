/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CustomerListRequest extends SpeakeasyBase {
  /**
   * List continuation token.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=continuation_token",
  })
  continuationToken?: string;

  /**
   * Results size limit.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;
}

export class CustomerListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  customersList?: shared.CustomersList;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
