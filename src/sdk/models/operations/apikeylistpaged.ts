/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ApiKeyListPagedRequest extends SpeakeasyBase {
  /**
   * Page number.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  /**
   * Page size.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_size",
  })
  pageSize?: string;
}

export class ApiKeyListPagedResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  apiKeysPaged?: shared.ApiKeysPaged;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
