/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit The rate limit is 50 requests / 10 seconds. If you need a higher rate limit, feel free to contact us on [#developer-support](https://discord.com/channels/897540204506775583/910250162402779146) on Discord.  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node) 
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TransactionObjectAccounttsInner
 */
export interface TransactionObjectAccounttsInner {
    /**
     * 
     * @type {string}
     * @memberof TransactionObjectAccounttsInner
     */
    pubkey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionObjectAccounttsInner
     */
    isSigner?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionObjectAccounttsInner
     */
    isWritable?: boolean;
}

/**
 * Check if a given object implements the TransactionObjectAccounttsInner interface.
 */
export function instanceOfTransactionObjectAccounttsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionObjectAccounttsInnerFromJSON(json: any): TransactionObjectAccounttsInner {
    return TransactionObjectAccounttsInnerFromJSONTyped(json, false);
}

export function TransactionObjectAccounttsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionObjectAccounttsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pubkey': !exists(json, 'pubkey') ? undefined : json['pubkey'],
        'isSigner': !exists(json, 'isSigner') ? undefined : json['isSigner'],
        'isWritable': !exists(json, 'isWritable') ? undefined : json['isWritable'],
    };
}

export function TransactionObjectAccounttsInnerToJSON(value?: TransactionObjectAccounttsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pubkey': value.pubkey,
        'isSigner': value.isSigner,
        'isWritable': value.isWritable,
    };
}

