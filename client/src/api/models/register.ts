/* tslint:disable */
/* eslint-disable */
/**
 * CatchUp API
 * CatchUp API for the CatchUp project
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface Register
 */
export interface Register {
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof Register
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof Register
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof Register
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof Register
     */
    password2: string;
}
