/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TenantsIdOnly extends SpeakeasyBase {
    /**
     * Tenant ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}
