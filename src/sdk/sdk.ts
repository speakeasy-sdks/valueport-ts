/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Contract } from "./contract";
import { Data } from "./data";
import { Manage } from "./manage";
import * as shared from "./models/shared";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["http://localhost:8080"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * # Introduction
 *
 * @remarks
 * The Valueport.io API is organized around REST ([wikipedia](http://en.wikipedia.org/wiki/Representational_State_Transfer)). Our API has predictable resource-oriented URLs, accepts JSON-encoded ([json.org](http://www.json.org)) request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
 *
 * You can use the Valueport.io API in test mode, which does not affect your live data. The API key you use to authenticate the request determines whether the request is live mode or test mode.
 *
 * ## Handling Concurrency
 *
 * When sending updates to REST entities, it's possible to lose writes that happened since the last time an entity was fetched. To prevent writing stale data, REST defines a partial update endpoint with the PATCH method. Valueport.io supports and recommends using JSON Patch ([jsonpatch.com](http://jsonpatch.com)) instead of the PUT and PATCH endpoints from REST. This allows you to define relevant safe-guards for your use and application. To completely disallow concurrent updates, add a JSON Patch operation that tests equality of the `updated_at` property.
 *
 * ## Response Codes
 * Valueport.io uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a change failed, etc.). Codes in the 5xx range indicate an error with Valueport.io's servers (these are rare).
 *
 * Some 4xx errors that could be handled programmatically (e.g. a token is expired) include an error code that briefly explains the error reported.
 *
 * | HTTP Status Code | Summary |
 * |------------------|---------|
 * | 200 - OK | Success, everything worked as expected. |
 * | 201 - Created | Success, everything worked as expected. |
 * | 204 - No Content | Success, everything worked as expected. |
 * | 422 - Unprocessable Entity | The request was invalid, often due to missing parameters. Our response pinpoints the problem. |
 * | 401 - Unauthorized | No valid API key provided. |
 * | 403 - Forbidden | The API key doesn't have permissions to perform the request. |
 * | 404 - Not Found | The requested entity did not exist. |
 * | 409 - Conflict | The requested update did not succeed. |
 * | 400 - Bad Request | The request was invalid. Our response will try to pinpoint the problem. |
 * | 429 - Too Many Requests | Your request was rejected due to rate limiting and must be re-sent. |
 * | 500 - Internal Server Error | Something went wrong on Valueport.io's end. (These are rare.) |
 *
 * This API documentation is generated from version v0.1.1
 */
export class SDK {
  /**
   * Current and historical contract information.
   */
  public contract: Contract;
  /**
   * Equipment data operations.
   */
  public data: Data;
  /**
   * Operations for managing tenant information.
   */
  public manage: Manage;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.3.2";
  private _genVersion = "2.23.6";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.contract = new Contract(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.data = new Data(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.manage = new Manage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
