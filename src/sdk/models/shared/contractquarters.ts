/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomersIdOnly } from "./customersidonly";
import { EquipmentIdOnly } from "./equipmentidonly";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Summary of the contract quarter.
 */
export class ContractQuartersContractQuartersSummary extends SpeakeasyBase {
    /**
     * Amount incurred by base (fixed) usage.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "base_amount" })
    baseAmount?: number;

    /**
     * Billed amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billed_amount" })
    billedAmount?: number;

    /**
     * Currency code (ISO 4217) of billed amount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billed_currency_code" })
    billedCurrencyCode?: string;

    /**
     * Amount incurred by consumption (variable) usage.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumption_amount" })
    consumptionAmount?: number;

    /**
     * Amount of variable metric used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumption_units" })
    consumptionUnits?: number;

    /**
     * End-customer has signed-off for this entry.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customer_signoff" })
    customerSignoff?: boolean;

    /**
     * Quarterly period start in timezone of record.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "period_start_in_timezone" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    periodStartInTimezone?: Date;

    /**
     * Quarterly period start in UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "period_start_utc" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    periodStartUtc?: Date;

    /**
     * Equipment remote ID at period end.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recorded_remote_id" })
    recordedRemoteId?: string;

    /**
     * Tax ID of record at period end.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recorded_tax_id" })
    recordedTaxId?: string;

    /**
     * Timezone (IANA tz) of record at period end.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recorded_timezone" })
    recordedTimezone?: string;

    /**
     * Residual value of equipment at period end.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "residual_value" })
    residualValue?: number;

    /**
     * Currency code (ISO 4217) of residual value.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "residual_value_currency_code" })
    residualValueCurrencyCode?: string;
}

export class ContractQuarters extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customer" })
    @Type(() => CustomersIdOnly)
    customer?: CustomersIdOnly;

    /**
     * Soft-delete timestamp.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deleted_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "equipment" })
    @Type(() => EquipmentIdOnly)
    equipment?: EquipmentIdOnly;

    /**
     * ContractQuarters ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Current and historical quarters summary.
     */
    @SpeakeasyMetadata({ elemType: ContractQuartersContractQuartersSummary })
    @Expose({ name: "summary_quarters" })
    @Type(() => ContractQuartersContractQuartersSummary)
    summaryQuarters: ContractQuartersContractQuartersSummary[];

    /**
     * Last updated timestamp.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
