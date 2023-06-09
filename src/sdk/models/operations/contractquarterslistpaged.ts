/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ContractQuartersListPagedRequest extends SpeakeasyBase {
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

export class ContractQuartersListPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  contractQuartersPaged?: shared.ContractQuartersPaged;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
