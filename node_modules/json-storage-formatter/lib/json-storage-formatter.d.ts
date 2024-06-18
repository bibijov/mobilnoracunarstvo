export type IValueWithMetaData = {
    $t?: 'map' | 'set' | 'date' | 'regex' | 'error' | 'function';
    $v?: unknown;
};
/**
 * Deep clone an object, it also suppors Map, Set, Arrays
 * @param value
 * @returns
 * A deep clone of the object
 * */
export declare const clone: <T>(value: T, { shallow, }?: {
    /**
     * If true, it will only clone the first level of the object
     */
    shallow?: boolean;
}) => T;
/**
 * Check if a value is null or undefined
 * @param value
 * @returns
 * true if the value is null or undefined
 * false otherwise
 * */
export declare const isNil: (value: unknown) => boolean;
/**
 * Check if a value is a number
 * @param value
 * @returns
 *  true if the value is a number
 * false otherwise
 *  */
export declare const isNumber: (value: unknown) => boolean;
/**
 * Check if a value is a boolean
 * @param value
 * @returns
 * true if the value is a boolean
 * false otherwise
 * */
export declare const isBoolean: (value: unknown) => boolean;
/**
 * Check if a value is a string
 * @param value
 * @returns
 * true if the value is a string
 * false otherwise
 * */
export declare const isString: (value: unknown) => boolean;
/** Check if a value is a Date
 * @param value
 * @returns
 * true if the value is a Date
 * false otherwise
 */
export declare const isDate: (value: unknown) => boolean;
/**
 * Check if a value is a RegExp
 * @param value The value to check
 * @returns true if the value is a RegExp, false otherwise
 * */
export declare const isRegex: (value: unknown) => boolean;
/**
 * Check if a value is a function
 * @param value The value to check
 * @returns true if the value is a function, false otherwise
 * */
export declare const isFunction: (value: unknown) => boolean;
/**
 * Check if a value is a primitive
 * @param value
 * @returns
 * true if the value is a primitive
 * false otherwise
 * null, number, boolean, string, symbol
 */
export declare const isPrimitive: (value: unknown) => boolean;
/**
 * Format an value with possible metadata to his original form, it also supports Map, Set, Arrays
 * @param value
 * @returns
 * Original form of the value
 */
export declare const formatFromStore: <T = unknown>(value: unknown, { jsonParse, sortKeys, }?: {
    /** If the value should be parsed from json before formatting */
    jsonParse?: boolean;
    sortKeys?: boolean | ((a: string, b: string) => number);
}) => T;
export type TPrimitives = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'function' | 'object';
/**
 * Add metadata to a value to store it as json, it also supports Map, Set, Arrays,
 * Returns a new object which is a clone of the original object with metadata
 * @template {TValue} The type of the value to format
 * @template {TStringify} If the value should be stringified
 * @param {TValue} value The value to format
 * @param {{ stringify: TStringify }} { stringify: boolean } If the value should be stringified
 */
export declare const formatToStore: <TValue, TStringify extends boolean = false>(value: TValue, { stringify, validator, excludeTypes, excludeKeys, sortKeys, }?: {
    stringify?: TStringify;
    excludeTypes?: TPrimitives[] | Set<TPrimitives>;
    excludeKeys?: string[] | Set<string>;
    sortKeys?: boolean | ((a: string, b: string) => number);
    /**
     * Returns true if the value should be included in the stringified version,
     * if provided it will override the default validator and the excludesTypes and excludeKeys
     */
    validator?: ({ obj, key, value, }: {
        obj: unknown;
        key: string;
        value: any;
    }) => boolean | undefined;
}) => TStringify extends true ? string : unknown;
