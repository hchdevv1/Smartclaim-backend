
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ClaimStatus
 * 
 */
export type ClaimStatus = $Result.DefaultSelection<Prisma.$ClaimStatusPayload>
/**
 * Model IllnessSurgery
 * 
 */
export type IllnessSurgery = $Result.DefaultSelection<Prisma.$IllnessSurgeryPayload>
/**
 * Model IllnessType
 * 
 */
export type IllnessType = $Result.DefaultSelection<Prisma.$IllnessTypePayload>
/**
 * Model PolicyType
 * 
 */
export type PolicyType = $Result.DefaultSelection<Prisma.$PolicyTypePayload>
/**
 * Model ServiceSetting
 * 
 */
export type ServiceSetting = $Result.DefaultSelection<Prisma.$ServiceSettingPayload>
/**
 * Model Claimants
 * 
 */
export type Claimants = $Result.DefaultSelection<Prisma.$ClaimantsPayload>
/**
 * Model Insurers
 * 
 */
export type Insurers = $Result.DefaultSelection<Prisma.$InsurersPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model DiagnosisTypeMapping
 * 
 */
export type DiagnosisTypeMapping = $Result.DefaultSelection<Prisma.$DiagnosisTypeMappingPayload>
/**
 * Model accidentplace
 * 
 */
export type accidentplace = $Result.DefaultSelection<Prisma.$accidentplacePayload>
/**
 * Model causeofinjurywoundtype
 * 
 */
export type causeofinjurywoundtype = $Result.DefaultSelection<Prisma.$causeofinjurywoundtypePayload>
/**
 * Model causeofinjuryside
 * 
 */
export type causeofinjuryside = $Result.DefaultSelection<Prisma.$causeofinjurysidePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ClaimStatuses
 * const claimStatuses = await prisma.claimStatus.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ClaimStatuses
   * const claimStatuses = await prisma.claimStatus.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.claimStatus`: Exposes CRUD operations for the **ClaimStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClaimStatuses
    * const claimStatuses = await prisma.claimStatus.findMany()
    * ```
    */
  get claimStatus(): Prisma.ClaimStatusDelegate<ExtArgs>;

  /**
   * `prisma.illnessSurgery`: Exposes CRUD operations for the **IllnessSurgery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IllnessSurgeries
    * const illnessSurgeries = await prisma.illnessSurgery.findMany()
    * ```
    */
  get illnessSurgery(): Prisma.IllnessSurgeryDelegate<ExtArgs>;

  /**
   * `prisma.illnessType`: Exposes CRUD operations for the **IllnessType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IllnessTypes
    * const illnessTypes = await prisma.illnessType.findMany()
    * ```
    */
  get illnessType(): Prisma.IllnessTypeDelegate<ExtArgs>;

  /**
   * `prisma.policyType`: Exposes CRUD operations for the **PolicyType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicyTypes
    * const policyTypes = await prisma.policyType.findMany()
    * ```
    */
  get policyType(): Prisma.PolicyTypeDelegate<ExtArgs>;

  /**
   * `prisma.serviceSetting`: Exposes CRUD operations for the **ServiceSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceSettings
    * const serviceSettings = await prisma.serviceSetting.findMany()
    * ```
    */
  get serviceSetting(): Prisma.ServiceSettingDelegate<ExtArgs>;

  /**
   * `prisma.claimants`: Exposes CRUD operations for the **Claimants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claimants
    * const claimants = await prisma.claimants.findMany()
    * ```
    */
  get claimants(): Prisma.ClaimantsDelegate<ExtArgs>;

  /**
   * `prisma.insurers`: Exposes CRUD operations for the **Insurers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insurers
    * const insurers = await prisma.insurers.findMany()
    * ```
    */
  get insurers(): Prisma.InsurersDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs>;

  /**
   * `prisma.diagnosisTypeMapping`: Exposes CRUD operations for the **DiagnosisTypeMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosisTypeMappings
    * const diagnosisTypeMappings = await prisma.diagnosisTypeMapping.findMany()
    * ```
    */
  get diagnosisTypeMapping(): Prisma.DiagnosisTypeMappingDelegate<ExtArgs>;

  /**
   * `prisma.accidentplace`: Exposes CRUD operations for the **accidentplace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accidentplaces
    * const accidentplaces = await prisma.accidentplace.findMany()
    * ```
    */
  get accidentplace(): Prisma.accidentplaceDelegate<ExtArgs>;

  /**
   * `prisma.causeofinjurywoundtype`: Exposes CRUD operations for the **causeofinjurywoundtype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Causeofinjurywoundtypes
    * const causeofinjurywoundtypes = await prisma.causeofinjurywoundtype.findMany()
    * ```
    */
  get causeofinjurywoundtype(): Prisma.causeofinjurywoundtypeDelegate<ExtArgs>;

  /**
   * `prisma.causeofinjuryside`: Exposes CRUD operations for the **causeofinjuryside** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Causeofinjurysides
    * const causeofinjurysides = await prisma.causeofinjuryside.findMany()
    * ```
    */
  get causeofinjuryside(): Prisma.causeofinjurysideDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ClaimStatus: 'ClaimStatus',
    IllnessSurgery: 'IllnessSurgery',
    IllnessType: 'IllnessType',
    PolicyType: 'PolicyType',
    ServiceSetting: 'ServiceSetting',
    Claimants: 'Claimants',
    Insurers: 'Insurers',
    Transactions: 'Transactions',
    DiagnosisTypeMapping: 'DiagnosisTypeMapping',
    accidentplace: 'accidentplace',
    causeofinjurywoundtype: 'causeofinjurywoundtype',
    causeofinjuryside: 'causeofinjuryside'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "claimStatus" | "illnessSurgery" | "illnessType" | "policyType" | "serviceSetting" | "claimants" | "insurers" | "transactions" | "diagnosisTypeMapping" | "accidentplace" | "causeofinjurywoundtype" | "causeofinjuryside"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ClaimStatus: {
        payload: Prisma.$ClaimStatusPayload<ExtArgs>
        fields: Prisma.ClaimStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload>
          }
          findFirst: {
            args: Prisma.ClaimStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload>
          }
          findMany: {
            args: Prisma.ClaimStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload>[]
          }
          create: {
            args: Prisma.ClaimStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload>
          }
          createMany: {
            args: Prisma.ClaimStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload>[]
          }
          delete: {
            args: Prisma.ClaimStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload>
          }
          update: {
            args: Prisma.ClaimStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload>
          }
          deleteMany: {
            args: Prisma.ClaimStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClaimStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimStatusPayload>
          }
          aggregate: {
            args: Prisma.ClaimStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaimStatus>
          }
          groupBy: {
            args: Prisma.ClaimStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimStatusCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimStatusCountAggregateOutputType> | number
          }
        }
      }
      IllnessSurgery: {
        payload: Prisma.$IllnessSurgeryPayload<ExtArgs>
        fields: Prisma.IllnessSurgeryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IllnessSurgeryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IllnessSurgeryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          findFirst: {
            args: Prisma.IllnessSurgeryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IllnessSurgeryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          findMany: {
            args: Prisma.IllnessSurgeryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>[]
          }
          create: {
            args: Prisma.IllnessSurgeryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          createMany: {
            args: Prisma.IllnessSurgeryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IllnessSurgeryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>[]
          }
          delete: {
            args: Prisma.IllnessSurgeryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          update: {
            args: Prisma.IllnessSurgeryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          deleteMany: {
            args: Prisma.IllnessSurgeryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IllnessSurgeryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IllnessSurgeryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessSurgeryPayload>
          }
          aggregate: {
            args: Prisma.IllnessSurgeryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIllnessSurgery>
          }
          groupBy: {
            args: Prisma.IllnessSurgeryGroupByArgs<ExtArgs>
            result: $Utils.Optional<IllnessSurgeryGroupByOutputType>[]
          }
          count: {
            args: Prisma.IllnessSurgeryCountArgs<ExtArgs>
            result: $Utils.Optional<IllnessSurgeryCountAggregateOutputType> | number
          }
        }
      }
      IllnessType: {
        payload: Prisma.$IllnessTypePayload<ExtArgs>
        fields: Prisma.IllnessTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IllnessTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IllnessTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          findFirst: {
            args: Prisma.IllnessTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IllnessTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          findMany: {
            args: Prisma.IllnessTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>[]
          }
          create: {
            args: Prisma.IllnessTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          createMany: {
            args: Prisma.IllnessTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IllnessTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>[]
          }
          delete: {
            args: Prisma.IllnessTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          update: {
            args: Prisma.IllnessTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          deleteMany: {
            args: Prisma.IllnessTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IllnessTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IllnessTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IllnessTypePayload>
          }
          aggregate: {
            args: Prisma.IllnessTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIllnessType>
          }
          groupBy: {
            args: Prisma.IllnessTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IllnessTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IllnessTypeCountArgs<ExtArgs>
            result: $Utils.Optional<IllnessTypeCountAggregateOutputType> | number
          }
        }
      }
      PolicyType: {
        payload: Prisma.$PolicyTypePayload<ExtArgs>
        fields: Prisma.PolicyTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          findFirst: {
            args: Prisma.PolicyTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          findMany: {
            args: Prisma.PolicyTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>[]
          }
          create: {
            args: Prisma.PolicyTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          createMany: {
            args: Prisma.PolicyTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>[]
          }
          delete: {
            args: Prisma.PolicyTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          update: {
            args: Prisma.PolicyTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          deleteMany: {
            args: Prisma.PolicyTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PolicyTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          aggregate: {
            args: Prisma.PolicyTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicyType>
          }
          groupBy: {
            args: Prisma.PolicyTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyTypeCountAggregateOutputType> | number
          }
        }
      }
      ServiceSetting: {
        payload: Prisma.$ServiceSettingPayload<ExtArgs>
        fields: Prisma.ServiceSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload>
          }
          findFirst: {
            args: Prisma.ServiceSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload>
          }
          findMany: {
            args: Prisma.ServiceSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload>[]
          }
          create: {
            args: Prisma.ServiceSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload>
          }
          createMany: {
            args: Prisma.ServiceSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload>[]
          }
          delete: {
            args: Prisma.ServiceSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload>
          }
          update: {
            args: Prisma.ServiceSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload>
          }
          deleteMany: {
            args: Prisma.ServiceSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceSettingPayload>
          }
          aggregate: {
            args: Prisma.ServiceSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceSetting>
          }
          groupBy: {
            args: Prisma.ServiceSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceSettingCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceSettingCountAggregateOutputType> | number
          }
        }
      }
      Claimants: {
        payload: Prisma.$ClaimantsPayload<ExtArgs>
        fields: Prisma.ClaimantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload>
          }
          findFirst: {
            args: Prisma.ClaimantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload>
          }
          findMany: {
            args: Prisma.ClaimantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload>[]
          }
          create: {
            args: Prisma.ClaimantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload>
          }
          createMany: {
            args: Prisma.ClaimantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload>[]
          }
          delete: {
            args: Prisma.ClaimantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload>
          }
          update: {
            args: Prisma.ClaimantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload>
          }
          deleteMany: {
            args: Prisma.ClaimantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClaimantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimantsPayload>
          }
          aggregate: {
            args: Prisma.ClaimantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaimants>
          }
          groupBy: {
            args: Prisma.ClaimantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimantsCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimantsCountAggregateOutputType> | number
          }
        }
      }
      Insurers: {
        payload: Prisma.$InsurersPayload<ExtArgs>
        fields: Prisma.InsurersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsurersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsurersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          findFirst: {
            args: Prisma.InsurersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsurersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          findMany: {
            args: Prisma.InsurersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>[]
          }
          create: {
            args: Prisma.InsurersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          createMany: {
            args: Prisma.InsurersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsurersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>[]
          }
          delete: {
            args: Prisma.InsurersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          update: {
            args: Prisma.InsurersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          deleteMany: {
            args: Prisma.InsurersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsurersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InsurersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          aggregate: {
            args: Prisma.InsurersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsurers>
          }
          groupBy: {
            args: Prisma.InsurersGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsurersGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsurersCountArgs<ExtArgs>
            result: $Utils.Optional<InsurersCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      DiagnosisTypeMapping: {
        payload: Prisma.$DiagnosisTypeMappingPayload<ExtArgs>
        fields: Prisma.DiagnosisTypeMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosisTypeMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosisTypeMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload>
          }
          findFirst: {
            args: Prisma.DiagnosisTypeMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosisTypeMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload>
          }
          findMany: {
            args: Prisma.DiagnosisTypeMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload>[]
          }
          create: {
            args: Prisma.DiagnosisTypeMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload>
          }
          createMany: {
            args: Prisma.DiagnosisTypeMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosisTypeMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload>[]
          }
          delete: {
            args: Prisma.DiagnosisTypeMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload>
          }
          update: {
            args: Prisma.DiagnosisTypeMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosisTypeMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosisTypeMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosisTypeMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisTypeMappingPayload>
          }
          aggregate: {
            args: Prisma.DiagnosisTypeMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosisTypeMapping>
          }
          groupBy: {
            args: Prisma.DiagnosisTypeMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisTypeMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosisTypeMappingCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisTypeMappingCountAggregateOutputType> | number
          }
        }
      }
      accidentplace: {
        payload: Prisma.$accidentplacePayload<ExtArgs>
        fields: Prisma.accidentplaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accidentplaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accidentplaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload>
          }
          findFirst: {
            args: Prisma.accidentplaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accidentplaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload>
          }
          findMany: {
            args: Prisma.accidentplaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload>[]
          }
          create: {
            args: Prisma.accidentplaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload>
          }
          createMany: {
            args: Prisma.accidentplaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accidentplaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload>[]
          }
          delete: {
            args: Prisma.accidentplaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload>
          }
          update: {
            args: Prisma.accidentplaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload>
          }
          deleteMany: {
            args: Prisma.accidentplaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accidentplaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accidentplaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accidentplacePayload>
          }
          aggregate: {
            args: Prisma.AccidentplaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccidentplace>
          }
          groupBy: {
            args: Prisma.accidentplaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccidentplaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.accidentplaceCountArgs<ExtArgs>
            result: $Utils.Optional<AccidentplaceCountAggregateOutputType> | number
          }
        }
      }
      causeofinjurywoundtype: {
        payload: Prisma.$causeofinjurywoundtypePayload<ExtArgs>
        fields: Prisma.causeofinjurywoundtypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.causeofinjurywoundtypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.causeofinjurywoundtypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload>
          }
          findFirst: {
            args: Prisma.causeofinjurywoundtypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.causeofinjurywoundtypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload>
          }
          findMany: {
            args: Prisma.causeofinjurywoundtypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload>[]
          }
          create: {
            args: Prisma.causeofinjurywoundtypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload>
          }
          createMany: {
            args: Prisma.causeofinjurywoundtypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.causeofinjurywoundtypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload>[]
          }
          delete: {
            args: Prisma.causeofinjurywoundtypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload>
          }
          update: {
            args: Prisma.causeofinjurywoundtypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload>
          }
          deleteMany: {
            args: Prisma.causeofinjurywoundtypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.causeofinjurywoundtypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.causeofinjurywoundtypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurywoundtypePayload>
          }
          aggregate: {
            args: Prisma.CauseofinjurywoundtypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCauseofinjurywoundtype>
          }
          groupBy: {
            args: Prisma.causeofinjurywoundtypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CauseofinjurywoundtypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.causeofinjurywoundtypeCountArgs<ExtArgs>
            result: $Utils.Optional<CauseofinjurywoundtypeCountAggregateOutputType> | number
          }
        }
      }
      causeofinjuryside: {
        payload: Prisma.$causeofinjurysidePayload<ExtArgs>
        fields: Prisma.causeofinjurysideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.causeofinjurysideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.causeofinjurysideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload>
          }
          findFirst: {
            args: Prisma.causeofinjurysideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.causeofinjurysideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload>
          }
          findMany: {
            args: Prisma.causeofinjurysideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload>[]
          }
          create: {
            args: Prisma.causeofinjurysideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload>
          }
          createMany: {
            args: Prisma.causeofinjurysideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.causeofinjurysideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload>[]
          }
          delete: {
            args: Prisma.causeofinjurysideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload>
          }
          update: {
            args: Prisma.causeofinjurysideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload>
          }
          deleteMany: {
            args: Prisma.causeofinjurysideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.causeofinjurysideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.causeofinjurysideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$causeofinjurysidePayload>
          }
          aggregate: {
            args: Prisma.CauseofinjurysideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCauseofinjuryside>
          }
          groupBy: {
            args: Prisma.causeofinjurysideGroupByArgs<ExtArgs>
            result: $Utils.Optional<CauseofinjurysideGroupByOutputType>[]
          }
          count: {
            args: Prisma.causeofinjurysideCountArgs<ExtArgs>
            result: $Utils.Optional<CauseofinjurysideCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClaimStatusCountOutputType
   */

  export type ClaimStatusCountOutputType = {
    Transactions: number
  }

  export type ClaimStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transactions?: boolean | ClaimStatusCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ClaimStatusCountOutputType without action
   */
  export type ClaimStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatusCountOutputType
     */
    select?: ClaimStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClaimStatusCountOutputType without action
   */
  export type ClaimStatusCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type ClaimantsCountOutputType
   */

  export type ClaimantsCountOutputType = {
    Transactions: number
  }

  export type ClaimantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transactions?: boolean | ClaimantsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ClaimantsCountOutputType without action
   */
  export type ClaimantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimantsCountOutputType
     */
    select?: ClaimantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClaimantsCountOutputType without action
   */
  export type ClaimantsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type InsurersCountOutputType
   */

  export type InsurersCountOutputType = {
    ClaimStatus: number
    Claimants: number
    IllnessSurgery: number
    IllnessType: number
    PolicyType: number
    ServiceSetting: number
    Transactions: number
  }

  export type InsurersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClaimStatus?: boolean | InsurersCountOutputTypeCountClaimStatusArgs
    Claimants?: boolean | InsurersCountOutputTypeCountClaimantsArgs
    IllnessSurgery?: boolean | InsurersCountOutputTypeCountIllnessSurgeryArgs
    IllnessType?: boolean | InsurersCountOutputTypeCountIllnessTypeArgs
    PolicyType?: boolean | InsurersCountOutputTypeCountPolicyTypeArgs
    ServiceSetting?: boolean | InsurersCountOutputTypeCountServiceSettingArgs
    Transactions?: boolean | InsurersCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsurersCountOutputType
     */
    select?: InsurersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountClaimStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimStatusWhereInput
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountClaimantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimantsWhereInput
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountIllnessSurgeryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IllnessSurgeryWhereInput
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountIllnessTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IllnessTypeWhereInput
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountPolicyTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyTypeWhereInput
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountServiceSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceSettingWhereInput
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ClaimStatus
   */

  export type AggregateClaimStatus = {
    _count: ClaimStatusCountAggregateOutputType | null
    _avg: ClaimStatusAvgAggregateOutputType | null
    _sum: ClaimStatusSumAggregateOutputType | null
    _min: ClaimStatusMinAggregateOutputType | null
    _max: ClaimStatusMaxAggregateOutputType | null
  }

  export type ClaimStatusAvgAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type ClaimStatusSumAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type ClaimStatusMinAggregateOutputType = {
    id: number | null
    StatusCode: string | null
    StatusDescTH: string | null
    StatusDescEN: string | null
    insurerid: number | null
  }

  export type ClaimStatusMaxAggregateOutputType = {
    id: number | null
    StatusCode: string | null
    StatusDescTH: string | null
    StatusDescEN: string | null
    insurerid: number | null
  }

  export type ClaimStatusCountAggregateOutputType = {
    id: number
    StatusCode: number
    StatusDescTH: number
    StatusDescEN: number
    insurerid: number
    _all: number
  }


  export type ClaimStatusAvgAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type ClaimStatusSumAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type ClaimStatusMinAggregateInputType = {
    id?: true
    StatusCode?: true
    StatusDescTH?: true
    StatusDescEN?: true
    insurerid?: true
  }

  export type ClaimStatusMaxAggregateInputType = {
    id?: true
    StatusCode?: true
    StatusDescTH?: true
    StatusDescEN?: true
    insurerid?: true
  }

  export type ClaimStatusCountAggregateInputType = {
    id?: true
    StatusCode?: true
    StatusDescTH?: true
    StatusDescEN?: true
    insurerid?: true
    _all?: true
  }

  export type ClaimStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimStatus to aggregate.
     */
    where?: ClaimStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimStatuses to fetch.
     */
    orderBy?: ClaimStatusOrderByWithRelationInput | ClaimStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClaimStatuses
    **/
    _count?: true | ClaimStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimStatusMaxAggregateInputType
  }

  export type GetClaimStatusAggregateType<T extends ClaimStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateClaimStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaimStatus[P]>
      : GetScalarType<T[P], AggregateClaimStatus[P]>
  }




  export type ClaimStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimStatusWhereInput
    orderBy?: ClaimStatusOrderByWithAggregationInput | ClaimStatusOrderByWithAggregationInput[]
    by: ClaimStatusScalarFieldEnum[] | ClaimStatusScalarFieldEnum
    having?: ClaimStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimStatusCountAggregateInputType | true
    _avg?: ClaimStatusAvgAggregateInputType
    _sum?: ClaimStatusSumAggregateInputType
    _min?: ClaimStatusMinAggregateInputType
    _max?: ClaimStatusMaxAggregateInputType
  }

  export type ClaimStatusGroupByOutputType = {
    id: number
    StatusCode: string
    StatusDescTH: string | null
    StatusDescEN: string | null
    insurerid: number | null
    _count: ClaimStatusCountAggregateOutputType | null
    _avg: ClaimStatusAvgAggregateOutputType | null
    _sum: ClaimStatusSumAggregateOutputType | null
    _min: ClaimStatusMinAggregateOutputType | null
    _max: ClaimStatusMaxAggregateOutputType | null
  }

  type GetClaimStatusGroupByPayload<T extends ClaimStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimStatusGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimStatusGroupByOutputType[P]>
        }
      >
    >


  export type ClaimStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    StatusCode?: boolean
    StatusDescTH?: boolean
    StatusDescEN?: boolean
    insurerid?: boolean
    insurers?: boolean | ClaimStatus$insurersArgs<ExtArgs>
    Transactions?: boolean | ClaimStatus$TransactionsArgs<ExtArgs>
    _count?: boolean | ClaimStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claimStatus"]>

  export type ClaimStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    StatusCode?: boolean
    StatusDescTH?: boolean
    StatusDescEN?: boolean
    insurerid?: boolean
    insurers?: boolean | ClaimStatus$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["claimStatus"]>

  export type ClaimStatusSelectScalar = {
    id?: boolean
    StatusCode?: boolean
    StatusDescTH?: boolean
    StatusDescEN?: boolean
    insurerid?: boolean
  }

  export type ClaimStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | ClaimStatus$insurersArgs<ExtArgs>
    Transactions?: boolean | ClaimStatus$TransactionsArgs<ExtArgs>
    _count?: boolean | ClaimStatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClaimStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | ClaimStatus$insurersArgs<ExtArgs>
  }

  export type $ClaimStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClaimStatus"
    objects: {
      insurers: Prisma.$InsurersPayload<ExtArgs> | null
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      StatusCode: string
      StatusDescTH: string | null
      StatusDescEN: string | null
      insurerid: number | null
    }, ExtArgs["result"]["claimStatus"]>
    composites: {}
  }

  type ClaimStatusGetPayload<S extends boolean | null | undefined | ClaimStatusDefaultArgs> = $Result.GetResult<Prisma.$ClaimStatusPayload, S>

  type ClaimStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaimStatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaimStatusCountAggregateInputType | true
    }

  export interface ClaimStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClaimStatus'], meta: { name: 'ClaimStatus' } }
    /**
     * Find zero or one ClaimStatus that matches the filter.
     * @param {ClaimStatusFindUniqueArgs} args - Arguments to find a ClaimStatus
     * @example
     * // Get one ClaimStatus
     * const claimStatus = await prisma.claimStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimStatusFindUniqueArgs>(args: SelectSubset<T, ClaimStatusFindUniqueArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClaimStatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClaimStatusFindUniqueOrThrowArgs} args - Arguments to find a ClaimStatus
     * @example
     * // Get one ClaimStatus
     * const claimStatus = await prisma.claimStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClaimStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimStatusFindFirstArgs} args - Arguments to find a ClaimStatus
     * @example
     * // Get one ClaimStatus
     * const claimStatus = await prisma.claimStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimStatusFindFirstArgs>(args?: SelectSubset<T, ClaimStatusFindFirstArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClaimStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimStatusFindFirstOrThrowArgs} args - Arguments to find a ClaimStatus
     * @example
     * // Get one ClaimStatus
     * const claimStatus = await prisma.claimStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClaimStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClaimStatuses
     * const claimStatuses = await prisma.claimStatus.findMany()
     * 
     * // Get first 10 ClaimStatuses
     * const claimStatuses = await prisma.claimStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimStatusWithIdOnly = await prisma.claimStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimStatusFindManyArgs>(args?: SelectSubset<T, ClaimStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClaimStatus.
     * @param {ClaimStatusCreateArgs} args - Arguments to create a ClaimStatus.
     * @example
     * // Create one ClaimStatus
     * const ClaimStatus = await prisma.claimStatus.create({
     *   data: {
     *     // ... data to create a ClaimStatus
     *   }
     * })
     * 
     */
    create<T extends ClaimStatusCreateArgs>(args: SelectSubset<T, ClaimStatusCreateArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClaimStatuses.
     * @param {ClaimStatusCreateManyArgs} args - Arguments to create many ClaimStatuses.
     * @example
     * // Create many ClaimStatuses
     * const claimStatus = await prisma.claimStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimStatusCreateManyArgs>(args?: SelectSubset<T, ClaimStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClaimStatuses and returns the data saved in the database.
     * @param {ClaimStatusCreateManyAndReturnArgs} args - Arguments to create many ClaimStatuses.
     * @example
     * // Create many ClaimStatuses
     * const claimStatus = await prisma.claimStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClaimStatuses and only return the `id`
     * const claimStatusWithIdOnly = await prisma.claimStatus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClaimStatus.
     * @param {ClaimStatusDeleteArgs} args - Arguments to delete one ClaimStatus.
     * @example
     * // Delete one ClaimStatus
     * const ClaimStatus = await prisma.claimStatus.delete({
     *   where: {
     *     // ... filter to delete one ClaimStatus
     *   }
     * })
     * 
     */
    delete<T extends ClaimStatusDeleteArgs>(args: SelectSubset<T, ClaimStatusDeleteArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClaimStatus.
     * @param {ClaimStatusUpdateArgs} args - Arguments to update one ClaimStatus.
     * @example
     * // Update one ClaimStatus
     * const claimStatus = await prisma.claimStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimStatusUpdateArgs>(args: SelectSubset<T, ClaimStatusUpdateArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClaimStatuses.
     * @param {ClaimStatusDeleteManyArgs} args - Arguments to filter ClaimStatuses to delete.
     * @example
     * // Delete a few ClaimStatuses
     * const { count } = await prisma.claimStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimStatusDeleteManyArgs>(args?: SelectSubset<T, ClaimStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaimStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClaimStatuses
     * const claimStatus = await prisma.claimStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimStatusUpdateManyArgs>(args: SelectSubset<T, ClaimStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClaimStatus.
     * @param {ClaimStatusUpsertArgs} args - Arguments to update or create a ClaimStatus.
     * @example
     * // Update or create a ClaimStatus
     * const claimStatus = await prisma.claimStatus.upsert({
     *   create: {
     *     // ... data to create a ClaimStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClaimStatus we want to update
     *   }
     * })
     */
    upsert<T extends ClaimStatusUpsertArgs>(args: SelectSubset<T, ClaimStatusUpsertArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClaimStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimStatusCountArgs} args - Arguments to filter ClaimStatuses to count.
     * @example
     * // Count the number of ClaimStatuses
     * const count = await prisma.claimStatus.count({
     *   where: {
     *     // ... the filter for the ClaimStatuses we want to count
     *   }
     * })
    **/
    count<T extends ClaimStatusCountArgs>(
      args?: Subset<T, ClaimStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClaimStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimStatusAggregateArgs>(args: Subset<T, ClaimStatusAggregateArgs>): Prisma.PrismaPromise<GetClaimStatusAggregateType<T>>

    /**
     * Group by ClaimStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimStatusGroupByArgs['orderBy'] }
        : { orderBy?: ClaimStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClaimStatus model
   */
  readonly fields: ClaimStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClaimStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insurers<T extends ClaimStatus$insurersArgs<ExtArgs> = {}>(args?: Subset<T, ClaimStatus$insurersArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Transactions<T extends ClaimStatus$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, ClaimStatus$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClaimStatus model
   */ 
  interface ClaimStatusFieldRefs {
    readonly id: FieldRef<"ClaimStatus", 'Int'>
    readonly StatusCode: FieldRef<"ClaimStatus", 'String'>
    readonly StatusDescTH: FieldRef<"ClaimStatus", 'String'>
    readonly StatusDescEN: FieldRef<"ClaimStatus", 'String'>
    readonly insurerid: FieldRef<"ClaimStatus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClaimStatus findUnique
   */
  export type ClaimStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClaimStatus to fetch.
     */
    where: ClaimStatusWhereUniqueInput
  }

  /**
   * ClaimStatus findUniqueOrThrow
   */
  export type ClaimStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClaimStatus to fetch.
     */
    where: ClaimStatusWhereUniqueInput
  }

  /**
   * ClaimStatus findFirst
   */
  export type ClaimStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClaimStatus to fetch.
     */
    where?: ClaimStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimStatuses to fetch.
     */
    orderBy?: ClaimStatusOrderByWithRelationInput | ClaimStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimStatuses.
     */
    cursor?: ClaimStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimStatuses.
     */
    distinct?: ClaimStatusScalarFieldEnum | ClaimStatusScalarFieldEnum[]
  }

  /**
   * ClaimStatus findFirstOrThrow
   */
  export type ClaimStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClaimStatus to fetch.
     */
    where?: ClaimStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimStatuses to fetch.
     */
    orderBy?: ClaimStatusOrderByWithRelationInput | ClaimStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimStatuses.
     */
    cursor?: ClaimStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimStatuses.
     */
    distinct?: ClaimStatusScalarFieldEnum | ClaimStatusScalarFieldEnum[]
  }

  /**
   * ClaimStatus findMany
   */
  export type ClaimStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * Filter, which ClaimStatuses to fetch.
     */
    where?: ClaimStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimStatuses to fetch.
     */
    orderBy?: ClaimStatusOrderByWithRelationInput | ClaimStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClaimStatuses.
     */
    cursor?: ClaimStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimStatuses.
     */
    skip?: number
    distinct?: ClaimStatusScalarFieldEnum | ClaimStatusScalarFieldEnum[]
  }

  /**
   * ClaimStatus create
   */
  export type ClaimStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a ClaimStatus.
     */
    data: XOR<ClaimStatusCreateInput, ClaimStatusUncheckedCreateInput>
  }

  /**
   * ClaimStatus createMany
   */
  export type ClaimStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClaimStatuses.
     */
    data: ClaimStatusCreateManyInput | ClaimStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClaimStatus createManyAndReturn
   */
  export type ClaimStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClaimStatuses.
     */
    data: ClaimStatusCreateManyInput | ClaimStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClaimStatus update
   */
  export type ClaimStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a ClaimStatus.
     */
    data: XOR<ClaimStatusUpdateInput, ClaimStatusUncheckedUpdateInput>
    /**
     * Choose, which ClaimStatus to update.
     */
    where: ClaimStatusWhereUniqueInput
  }

  /**
   * ClaimStatus updateMany
   */
  export type ClaimStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClaimStatuses.
     */
    data: XOR<ClaimStatusUpdateManyMutationInput, ClaimStatusUncheckedUpdateManyInput>
    /**
     * Filter which ClaimStatuses to update
     */
    where?: ClaimStatusWhereInput
  }

  /**
   * ClaimStatus upsert
   */
  export type ClaimStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the ClaimStatus to update in case it exists.
     */
    where: ClaimStatusWhereUniqueInput
    /**
     * In case the ClaimStatus found by the `where` argument doesn't exist, create a new ClaimStatus with this data.
     */
    create: XOR<ClaimStatusCreateInput, ClaimStatusUncheckedCreateInput>
    /**
     * In case the ClaimStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimStatusUpdateInput, ClaimStatusUncheckedUpdateInput>
  }

  /**
   * ClaimStatus delete
   */
  export type ClaimStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    /**
     * Filter which ClaimStatus to delete.
     */
    where: ClaimStatusWhereUniqueInput
  }

  /**
   * ClaimStatus deleteMany
   */
  export type ClaimStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimStatuses to delete
     */
    where?: ClaimStatusWhereInput
  }

  /**
   * ClaimStatus.insurers
   */
  export type ClaimStatus$insurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    where?: InsurersWhereInput
  }

  /**
   * ClaimStatus.Transactions
   */
  export type ClaimStatus$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * ClaimStatus without action
   */
  export type ClaimStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
  }


  /**
   * Model IllnessSurgery
   */

  export type AggregateIllnessSurgery = {
    _count: IllnessSurgeryCountAggregateOutputType | null
    _avg: IllnessSurgeryAvgAggregateOutputType | null
    _sum: IllnessSurgerySumAggregateOutputType | null
    _min: IllnessSurgeryMinAggregateOutputType | null
    _max: IllnessSurgeryMaxAggregateOutputType | null
  }

  export type IllnessSurgeryAvgAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type IllnessSurgerySumAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type IllnessSurgeryMinAggregateOutputType = {
    id: number | null
    ISCode: string | null
    ISDescription: string | null
    insurerid: number | null
  }

  export type IllnessSurgeryMaxAggregateOutputType = {
    id: number | null
    ISCode: string | null
    ISDescription: string | null
    insurerid: number | null
  }

  export type IllnessSurgeryCountAggregateOutputType = {
    id: number
    ISCode: number
    ISDescription: number
    insurerid: number
    _all: number
  }


  export type IllnessSurgeryAvgAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type IllnessSurgerySumAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type IllnessSurgeryMinAggregateInputType = {
    id?: true
    ISCode?: true
    ISDescription?: true
    insurerid?: true
  }

  export type IllnessSurgeryMaxAggregateInputType = {
    id?: true
    ISCode?: true
    ISDescription?: true
    insurerid?: true
  }

  export type IllnessSurgeryCountAggregateInputType = {
    id?: true
    ISCode?: true
    ISDescription?: true
    insurerid?: true
    _all?: true
  }

  export type IllnessSurgeryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IllnessSurgery to aggregate.
     */
    where?: IllnessSurgeryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessSurgeries to fetch.
     */
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IllnessSurgeryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessSurgeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessSurgeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IllnessSurgeries
    **/
    _count?: true | IllnessSurgeryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IllnessSurgeryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IllnessSurgerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IllnessSurgeryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IllnessSurgeryMaxAggregateInputType
  }

  export type GetIllnessSurgeryAggregateType<T extends IllnessSurgeryAggregateArgs> = {
        [P in keyof T & keyof AggregateIllnessSurgery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIllnessSurgery[P]>
      : GetScalarType<T[P], AggregateIllnessSurgery[P]>
  }




  export type IllnessSurgeryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IllnessSurgeryWhereInput
    orderBy?: IllnessSurgeryOrderByWithAggregationInput | IllnessSurgeryOrderByWithAggregationInput[]
    by: IllnessSurgeryScalarFieldEnum[] | IllnessSurgeryScalarFieldEnum
    having?: IllnessSurgeryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IllnessSurgeryCountAggregateInputType | true
    _avg?: IllnessSurgeryAvgAggregateInputType
    _sum?: IllnessSurgerySumAggregateInputType
    _min?: IllnessSurgeryMinAggregateInputType
    _max?: IllnessSurgeryMaxAggregateInputType
  }

  export type IllnessSurgeryGroupByOutputType = {
    id: number
    ISCode: string
    ISDescription: string | null
    insurerid: number | null
    _count: IllnessSurgeryCountAggregateOutputType | null
    _avg: IllnessSurgeryAvgAggregateOutputType | null
    _sum: IllnessSurgerySumAggregateOutputType | null
    _min: IllnessSurgeryMinAggregateOutputType | null
    _max: IllnessSurgeryMaxAggregateOutputType | null
  }

  type GetIllnessSurgeryGroupByPayload<T extends IllnessSurgeryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IllnessSurgeryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IllnessSurgeryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IllnessSurgeryGroupByOutputType[P]>
            : GetScalarType<T[P], IllnessSurgeryGroupByOutputType[P]>
        }
      >
    >


  export type IllnessSurgerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ISCode?: boolean
    ISDescription?: boolean
    insurerid?: boolean
    insurers?: boolean | IllnessSurgery$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["illnessSurgery"]>

  export type IllnessSurgerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ISCode?: boolean
    ISDescription?: boolean
    insurerid?: boolean
    insurers?: boolean | IllnessSurgery$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["illnessSurgery"]>

  export type IllnessSurgerySelectScalar = {
    id?: boolean
    ISCode?: boolean
    ISDescription?: boolean
    insurerid?: boolean
  }

  export type IllnessSurgeryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | IllnessSurgery$insurersArgs<ExtArgs>
  }
  export type IllnessSurgeryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | IllnessSurgery$insurersArgs<ExtArgs>
  }

  export type $IllnessSurgeryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IllnessSurgery"
    objects: {
      insurers: Prisma.$InsurersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ISCode: string
      ISDescription: string | null
      insurerid: number | null
    }, ExtArgs["result"]["illnessSurgery"]>
    composites: {}
  }

  type IllnessSurgeryGetPayload<S extends boolean | null | undefined | IllnessSurgeryDefaultArgs> = $Result.GetResult<Prisma.$IllnessSurgeryPayload, S>

  type IllnessSurgeryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IllnessSurgeryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IllnessSurgeryCountAggregateInputType | true
    }

  export interface IllnessSurgeryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IllnessSurgery'], meta: { name: 'IllnessSurgery' } }
    /**
     * Find zero or one IllnessSurgery that matches the filter.
     * @param {IllnessSurgeryFindUniqueArgs} args - Arguments to find a IllnessSurgery
     * @example
     * // Get one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IllnessSurgeryFindUniqueArgs>(args: SelectSubset<T, IllnessSurgeryFindUniqueArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IllnessSurgery that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IllnessSurgeryFindUniqueOrThrowArgs} args - Arguments to find a IllnessSurgery
     * @example
     * // Get one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IllnessSurgeryFindUniqueOrThrowArgs>(args: SelectSubset<T, IllnessSurgeryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IllnessSurgery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryFindFirstArgs} args - Arguments to find a IllnessSurgery
     * @example
     * // Get one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IllnessSurgeryFindFirstArgs>(args?: SelectSubset<T, IllnessSurgeryFindFirstArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IllnessSurgery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryFindFirstOrThrowArgs} args - Arguments to find a IllnessSurgery
     * @example
     * // Get one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IllnessSurgeryFindFirstOrThrowArgs>(args?: SelectSubset<T, IllnessSurgeryFindFirstOrThrowArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IllnessSurgeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IllnessSurgeries
     * const illnessSurgeries = await prisma.illnessSurgery.findMany()
     * 
     * // Get first 10 IllnessSurgeries
     * const illnessSurgeries = await prisma.illnessSurgery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const illnessSurgeryWithIdOnly = await prisma.illnessSurgery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IllnessSurgeryFindManyArgs>(args?: SelectSubset<T, IllnessSurgeryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IllnessSurgery.
     * @param {IllnessSurgeryCreateArgs} args - Arguments to create a IllnessSurgery.
     * @example
     * // Create one IllnessSurgery
     * const IllnessSurgery = await prisma.illnessSurgery.create({
     *   data: {
     *     // ... data to create a IllnessSurgery
     *   }
     * })
     * 
     */
    create<T extends IllnessSurgeryCreateArgs>(args: SelectSubset<T, IllnessSurgeryCreateArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IllnessSurgeries.
     * @param {IllnessSurgeryCreateManyArgs} args - Arguments to create many IllnessSurgeries.
     * @example
     * // Create many IllnessSurgeries
     * const illnessSurgery = await prisma.illnessSurgery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IllnessSurgeryCreateManyArgs>(args?: SelectSubset<T, IllnessSurgeryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IllnessSurgeries and returns the data saved in the database.
     * @param {IllnessSurgeryCreateManyAndReturnArgs} args - Arguments to create many IllnessSurgeries.
     * @example
     * // Create many IllnessSurgeries
     * const illnessSurgery = await prisma.illnessSurgery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IllnessSurgeries and only return the `id`
     * const illnessSurgeryWithIdOnly = await prisma.illnessSurgery.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IllnessSurgeryCreateManyAndReturnArgs>(args?: SelectSubset<T, IllnessSurgeryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IllnessSurgery.
     * @param {IllnessSurgeryDeleteArgs} args - Arguments to delete one IllnessSurgery.
     * @example
     * // Delete one IllnessSurgery
     * const IllnessSurgery = await prisma.illnessSurgery.delete({
     *   where: {
     *     // ... filter to delete one IllnessSurgery
     *   }
     * })
     * 
     */
    delete<T extends IllnessSurgeryDeleteArgs>(args: SelectSubset<T, IllnessSurgeryDeleteArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IllnessSurgery.
     * @param {IllnessSurgeryUpdateArgs} args - Arguments to update one IllnessSurgery.
     * @example
     * // Update one IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IllnessSurgeryUpdateArgs>(args: SelectSubset<T, IllnessSurgeryUpdateArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IllnessSurgeries.
     * @param {IllnessSurgeryDeleteManyArgs} args - Arguments to filter IllnessSurgeries to delete.
     * @example
     * // Delete a few IllnessSurgeries
     * const { count } = await prisma.illnessSurgery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IllnessSurgeryDeleteManyArgs>(args?: SelectSubset<T, IllnessSurgeryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IllnessSurgeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IllnessSurgeries
     * const illnessSurgery = await prisma.illnessSurgery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IllnessSurgeryUpdateManyArgs>(args: SelectSubset<T, IllnessSurgeryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IllnessSurgery.
     * @param {IllnessSurgeryUpsertArgs} args - Arguments to update or create a IllnessSurgery.
     * @example
     * // Update or create a IllnessSurgery
     * const illnessSurgery = await prisma.illnessSurgery.upsert({
     *   create: {
     *     // ... data to create a IllnessSurgery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IllnessSurgery we want to update
     *   }
     * })
     */
    upsert<T extends IllnessSurgeryUpsertArgs>(args: SelectSubset<T, IllnessSurgeryUpsertArgs<ExtArgs>>): Prisma__IllnessSurgeryClient<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IllnessSurgeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryCountArgs} args - Arguments to filter IllnessSurgeries to count.
     * @example
     * // Count the number of IllnessSurgeries
     * const count = await prisma.illnessSurgery.count({
     *   where: {
     *     // ... the filter for the IllnessSurgeries we want to count
     *   }
     * })
    **/
    count<T extends IllnessSurgeryCountArgs>(
      args?: Subset<T, IllnessSurgeryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IllnessSurgeryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IllnessSurgery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IllnessSurgeryAggregateArgs>(args: Subset<T, IllnessSurgeryAggregateArgs>): Prisma.PrismaPromise<GetIllnessSurgeryAggregateType<T>>

    /**
     * Group by IllnessSurgery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessSurgeryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IllnessSurgeryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IllnessSurgeryGroupByArgs['orderBy'] }
        : { orderBy?: IllnessSurgeryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IllnessSurgeryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIllnessSurgeryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IllnessSurgery model
   */
  readonly fields: IllnessSurgeryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IllnessSurgery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IllnessSurgeryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insurers<T extends IllnessSurgery$insurersArgs<ExtArgs> = {}>(args?: Subset<T, IllnessSurgery$insurersArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IllnessSurgery model
   */ 
  interface IllnessSurgeryFieldRefs {
    readonly id: FieldRef<"IllnessSurgery", 'Int'>
    readonly ISCode: FieldRef<"IllnessSurgery", 'String'>
    readonly ISDescription: FieldRef<"IllnessSurgery", 'String'>
    readonly insurerid: FieldRef<"IllnessSurgery", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * IllnessSurgery findUnique
   */
  export type IllnessSurgeryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * Filter, which IllnessSurgery to fetch.
     */
    where: IllnessSurgeryWhereUniqueInput
  }

  /**
   * IllnessSurgery findUniqueOrThrow
   */
  export type IllnessSurgeryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * Filter, which IllnessSurgery to fetch.
     */
    where: IllnessSurgeryWhereUniqueInput
  }

  /**
   * IllnessSurgery findFirst
   */
  export type IllnessSurgeryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * Filter, which IllnessSurgery to fetch.
     */
    where?: IllnessSurgeryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessSurgeries to fetch.
     */
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IllnessSurgeries.
     */
    cursor?: IllnessSurgeryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessSurgeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessSurgeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IllnessSurgeries.
     */
    distinct?: IllnessSurgeryScalarFieldEnum | IllnessSurgeryScalarFieldEnum[]
  }

  /**
   * IllnessSurgery findFirstOrThrow
   */
  export type IllnessSurgeryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * Filter, which IllnessSurgery to fetch.
     */
    where?: IllnessSurgeryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessSurgeries to fetch.
     */
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IllnessSurgeries.
     */
    cursor?: IllnessSurgeryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessSurgeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessSurgeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IllnessSurgeries.
     */
    distinct?: IllnessSurgeryScalarFieldEnum | IllnessSurgeryScalarFieldEnum[]
  }

  /**
   * IllnessSurgery findMany
   */
  export type IllnessSurgeryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * Filter, which IllnessSurgeries to fetch.
     */
    where?: IllnessSurgeryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessSurgeries to fetch.
     */
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IllnessSurgeries.
     */
    cursor?: IllnessSurgeryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessSurgeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessSurgeries.
     */
    skip?: number
    distinct?: IllnessSurgeryScalarFieldEnum | IllnessSurgeryScalarFieldEnum[]
  }

  /**
   * IllnessSurgery create
   */
  export type IllnessSurgeryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * The data needed to create a IllnessSurgery.
     */
    data: XOR<IllnessSurgeryCreateInput, IllnessSurgeryUncheckedCreateInput>
  }

  /**
   * IllnessSurgery createMany
   */
  export type IllnessSurgeryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IllnessSurgeries.
     */
    data: IllnessSurgeryCreateManyInput | IllnessSurgeryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IllnessSurgery createManyAndReturn
   */
  export type IllnessSurgeryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IllnessSurgeries.
     */
    data: IllnessSurgeryCreateManyInput | IllnessSurgeryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IllnessSurgery update
   */
  export type IllnessSurgeryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * The data needed to update a IllnessSurgery.
     */
    data: XOR<IllnessSurgeryUpdateInput, IllnessSurgeryUncheckedUpdateInput>
    /**
     * Choose, which IllnessSurgery to update.
     */
    where: IllnessSurgeryWhereUniqueInput
  }

  /**
   * IllnessSurgery updateMany
   */
  export type IllnessSurgeryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IllnessSurgeries.
     */
    data: XOR<IllnessSurgeryUpdateManyMutationInput, IllnessSurgeryUncheckedUpdateManyInput>
    /**
     * Filter which IllnessSurgeries to update
     */
    where?: IllnessSurgeryWhereInput
  }

  /**
   * IllnessSurgery upsert
   */
  export type IllnessSurgeryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * The filter to search for the IllnessSurgery to update in case it exists.
     */
    where: IllnessSurgeryWhereUniqueInput
    /**
     * In case the IllnessSurgery found by the `where` argument doesn't exist, create a new IllnessSurgery with this data.
     */
    create: XOR<IllnessSurgeryCreateInput, IllnessSurgeryUncheckedCreateInput>
    /**
     * In case the IllnessSurgery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IllnessSurgeryUpdateInput, IllnessSurgeryUncheckedUpdateInput>
  }

  /**
   * IllnessSurgery delete
   */
  export type IllnessSurgeryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    /**
     * Filter which IllnessSurgery to delete.
     */
    where: IllnessSurgeryWhereUniqueInput
  }

  /**
   * IllnessSurgery deleteMany
   */
  export type IllnessSurgeryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IllnessSurgeries to delete
     */
    where?: IllnessSurgeryWhereInput
  }

  /**
   * IllnessSurgery.insurers
   */
  export type IllnessSurgery$insurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    where?: InsurersWhereInput
  }

  /**
   * IllnessSurgery without action
   */
  export type IllnessSurgeryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
  }


  /**
   * Model IllnessType
   */

  export type AggregateIllnessType = {
    _count: IllnessTypeCountAggregateOutputType | null
    _avg: IllnessTypeAvgAggregateOutputType | null
    _sum: IllnessTypeSumAggregateOutputType | null
    _min: IllnessTypeMinAggregateOutputType | null
    _max: IllnessTypeMaxAggregateOutputType | null
  }

  export type IllnessTypeAvgAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type IllnessTypeSumAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type IllnessTypeMinAggregateOutputType = {
    id: number | null
    IllnessTypeCode: string | null
    IllnessTypeDesc: string | null
    insurerid: number | null
  }

  export type IllnessTypeMaxAggregateOutputType = {
    id: number | null
    IllnessTypeCode: string | null
    IllnessTypeDesc: string | null
    insurerid: number | null
  }

  export type IllnessTypeCountAggregateOutputType = {
    id: number
    IllnessTypeCode: number
    IllnessTypeDesc: number
    insurerid: number
    _all: number
  }


  export type IllnessTypeAvgAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type IllnessTypeSumAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type IllnessTypeMinAggregateInputType = {
    id?: true
    IllnessTypeCode?: true
    IllnessTypeDesc?: true
    insurerid?: true
  }

  export type IllnessTypeMaxAggregateInputType = {
    id?: true
    IllnessTypeCode?: true
    IllnessTypeDesc?: true
    insurerid?: true
  }

  export type IllnessTypeCountAggregateInputType = {
    id?: true
    IllnessTypeCode?: true
    IllnessTypeDesc?: true
    insurerid?: true
    _all?: true
  }

  export type IllnessTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IllnessType to aggregate.
     */
    where?: IllnessTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessTypes to fetch.
     */
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IllnessTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IllnessTypes
    **/
    _count?: true | IllnessTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IllnessTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IllnessTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IllnessTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IllnessTypeMaxAggregateInputType
  }

  export type GetIllnessTypeAggregateType<T extends IllnessTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateIllnessType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIllnessType[P]>
      : GetScalarType<T[P], AggregateIllnessType[P]>
  }




  export type IllnessTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IllnessTypeWhereInput
    orderBy?: IllnessTypeOrderByWithAggregationInput | IllnessTypeOrderByWithAggregationInput[]
    by: IllnessTypeScalarFieldEnum[] | IllnessTypeScalarFieldEnum
    having?: IllnessTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IllnessTypeCountAggregateInputType | true
    _avg?: IllnessTypeAvgAggregateInputType
    _sum?: IllnessTypeSumAggregateInputType
    _min?: IllnessTypeMinAggregateInputType
    _max?: IllnessTypeMaxAggregateInputType
  }

  export type IllnessTypeGroupByOutputType = {
    id: number
    IllnessTypeCode: string
    IllnessTypeDesc: string | null
    insurerid: number | null
    _count: IllnessTypeCountAggregateOutputType | null
    _avg: IllnessTypeAvgAggregateOutputType | null
    _sum: IllnessTypeSumAggregateOutputType | null
    _min: IllnessTypeMinAggregateOutputType | null
    _max: IllnessTypeMaxAggregateOutputType | null
  }

  type GetIllnessTypeGroupByPayload<T extends IllnessTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IllnessTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IllnessTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IllnessTypeGroupByOutputType[P]>
            : GetScalarType<T[P], IllnessTypeGroupByOutputType[P]>
        }
      >
    >


  export type IllnessTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    IllnessTypeCode?: boolean
    IllnessTypeDesc?: boolean
    insurerid?: boolean
    insurers?: boolean | IllnessType$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["illnessType"]>

  export type IllnessTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    IllnessTypeCode?: boolean
    IllnessTypeDesc?: boolean
    insurerid?: boolean
    insurers?: boolean | IllnessType$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["illnessType"]>

  export type IllnessTypeSelectScalar = {
    id?: boolean
    IllnessTypeCode?: boolean
    IllnessTypeDesc?: boolean
    insurerid?: boolean
  }

  export type IllnessTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | IllnessType$insurersArgs<ExtArgs>
  }
  export type IllnessTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | IllnessType$insurersArgs<ExtArgs>
  }

  export type $IllnessTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IllnessType"
    objects: {
      insurers: Prisma.$InsurersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      IllnessTypeCode: string
      IllnessTypeDesc: string | null
      insurerid: number | null
    }, ExtArgs["result"]["illnessType"]>
    composites: {}
  }

  type IllnessTypeGetPayload<S extends boolean | null | undefined | IllnessTypeDefaultArgs> = $Result.GetResult<Prisma.$IllnessTypePayload, S>

  type IllnessTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IllnessTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IllnessTypeCountAggregateInputType | true
    }

  export interface IllnessTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IllnessType'], meta: { name: 'IllnessType' } }
    /**
     * Find zero or one IllnessType that matches the filter.
     * @param {IllnessTypeFindUniqueArgs} args - Arguments to find a IllnessType
     * @example
     * // Get one IllnessType
     * const illnessType = await prisma.illnessType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IllnessTypeFindUniqueArgs>(args: SelectSubset<T, IllnessTypeFindUniqueArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IllnessType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IllnessTypeFindUniqueOrThrowArgs} args - Arguments to find a IllnessType
     * @example
     * // Get one IllnessType
     * const illnessType = await prisma.illnessType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IllnessTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, IllnessTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IllnessType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeFindFirstArgs} args - Arguments to find a IllnessType
     * @example
     * // Get one IllnessType
     * const illnessType = await prisma.illnessType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IllnessTypeFindFirstArgs>(args?: SelectSubset<T, IllnessTypeFindFirstArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IllnessType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeFindFirstOrThrowArgs} args - Arguments to find a IllnessType
     * @example
     * // Get one IllnessType
     * const illnessType = await prisma.illnessType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IllnessTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, IllnessTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IllnessTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IllnessTypes
     * const illnessTypes = await prisma.illnessType.findMany()
     * 
     * // Get first 10 IllnessTypes
     * const illnessTypes = await prisma.illnessType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const illnessTypeWithIdOnly = await prisma.illnessType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IllnessTypeFindManyArgs>(args?: SelectSubset<T, IllnessTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IllnessType.
     * @param {IllnessTypeCreateArgs} args - Arguments to create a IllnessType.
     * @example
     * // Create one IllnessType
     * const IllnessType = await prisma.illnessType.create({
     *   data: {
     *     // ... data to create a IllnessType
     *   }
     * })
     * 
     */
    create<T extends IllnessTypeCreateArgs>(args: SelectSubset<T, IllnessTypeCreateArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IllnessTypes.
     * @param {IllnessTypeCreateManyArgs} args - Arguments to create many IllnessTypes.
     * @example
     * // Create many IllnessTypes
     * const illnessType = await prisma.illnessType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IllnessTypeCreateManyArgs>(args?: SelectSubset<T, IllnessTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IllnessTypes and returns the data saved in the database.
     * @param {IllnessTypeCreateManyAndReturnArgs} args - Arguments to create many IllnessTypes.
     * @example
     * // Create many IllnessTypes
     * const illnessType = await prisma.illnessType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IllnessTypes and only return the `id`
     * const illnessTypeWithIdOnly = await prisma.illnessType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IllnessTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, IllnessTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IllnessType.
     * @param {IllnessTypeDeleteArgs} args - Arguments to delete one IllnessType.
     * @example
     * // Delete one IllnessType
     * const IllnessType = await prisma.illnessType.delete({
     *   where: {
     *     // ... filter to delete one IllnessType
     *   }
     * })
     * 
     */
    delete<T extends IllnessTypeDeleteArgs>(args: SelectSubset<T, IllnessTypeDeleteArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IllnessType.
     * @param {IllnessTypeUpdateArgs} args - Arguments to update one IllnessType.
     * @example
     * // Update one IllnessType
     * const illnessType = await prisma.illnessType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IllnessTypeUpdateArgs>(args: SelectSubset<T, IllnessTypeUpdateArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IllnessTypes.
     * @param {IllnessTypeDeleteManyArgs} args - Arguments to filter IllnessTypes to delete.
     * @example
     * // Delete a few IllnessTypes
     * const { count } = await prisma.illnessType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IllnessTypeDeleteManyArgs>(args?: SelectSubset<T, IllnessTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IllnessTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IllnessTypes
     * const illnessType = await prisma.illnessType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IllnessTypeUpdateManyArgs>(args: SelectSubset<T, IllnessTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IllnessType.
     * @param {IllnessTypeUpsertArgs} args - Arguments to update or create a IllnessType.
     * @example
     * // Update or create a IllnessType
     * const illnessType = await prisma.illnessType.upsert({
     *   create: {
     *     // ... data to create a IllnessType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IllnessType we want to update
     *   }
     * })
     */
    upsert<T extends IllnessTypeUpsertArgs>(args: SelectSubset<T, IllnessTypeUpsertArgs<ExtArgs>>): Prisma__IllnessTypeClient<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IllnessTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeCountArgs} args - Arguments to filter IllnessTypes to count.
     * @example
     * // Count the number of IllnessTypes
     * const count = await prisma.illnessType.count({
     *   where: {
     *     // ... the filter for the IllnessTypes we want to count
     *   }
     * })
    **/
    count<T extends IllnessTypeCountArgs>(
      args?: Subset<T, IllnessTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IllnessTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IllnessType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IllnessTypeAggregateArgs>(args: Subset<T, IllnessTypeAggregateArgs>): Prisma.PrismaPromise<GetIllnessTypeAggregateType<T>>

    /**
     * Group by IllnessType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IllnessTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IllnessTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IllnessTypeGroupByArgs['orderBy'] }
        : { orderBy?: IllnessTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IllnessTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIllnessTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IllnessType model
   */
  readonly fields: IllnessTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IllnessType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IllnessTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insurers<T extends IllnessType$insurersArgs<ExtArgs> = {}>(args?: Subset<T, IllnessType$insurersArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IllnessType model
   */ 
  interface IllnessTypeFieldRefs {
    readonly id: FieldRef<"IllnessType", 'Int'>
    readonly IllnessTypeCode: FieldRef<"IllnessType", 'String'>
    readonly IllnessTypeDesc: FieldRef<"IllnessType", 'String'>
    readonly insurerid: FieldRef<"IllnessType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * IllnessType findUnique
   */
  export type IllnessTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * Filter, which IllnessType to fetch.
     */
    where: IllnessTypeWhereUniqueInput
  }

  /**
   * IllnessType findUniqueOrThrow
   */
  export type IllnessTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * Filter, which IllnessType to fetch.
     */
    where: IllnessTypeWhereUniqueInput
  }

  /**
   * IllnessType findFirst
   */
  export type IllnessTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * Filter, which IllnessType to fetch.
     */
    where?: IllnessTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessTypes to fetch.
     */
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IllnessTypes.
     */
    cursor?: IllnessTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IllnessTypes.
     */
    distinct?: IllnessTypeScalarFieldEnum | IllnessTypeScalarFieldEnum[]
  }

  /**
   * IllnessType findFirstOrThrow
   */
  export type IllnessTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * Filter, which IllnessType to fetch.
     */
    where?: IllnessTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessTypes to fetch.
     */
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IllnessTypes.
     */
    cursor?: IllnessTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IllnessTypes.
     */
    distinct?: IllnessTypeScalarFieldEnum | IllnessTypeScalarFieldEnum[]
  }

  /**
   * IllnessType findMany
   */
  export type IllnessTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * Filter, which IllnessTypes to fetch.
     */
    where?: IllnessTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IllnessTypes to fetch.
     */
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IllnessTypes.
     */
    cursor?: IllnessTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IllnessTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IllnessTypes.
     */
    skip?: number
    distinct?: IllnessTypeScalarFieldEnum | IllnessTypeScalarFieldEnum[]
  }

  /**
   * IllnessType create
   */
  export type IllnessTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a IllnessType.
     */
    data: XOR<IllnessTypeCreateInput, IllnessTypeUncheckedCreateInput>
  }

  /**
   * IllnessType createMany
   */
  export type IllnessTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IllnessTypes.
     */
    data: IllnessTypeCreateManyInput | IllnessTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IllnessType createManyAndReturn
   */
  export type IllnessTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IllnessTypes.
     */
    data: IllnessTypeCreateManyInput | IllnessTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IllnessType update
   */
  export type IllnessTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a IllnessType.
     */
    data: XOR<IllnessTypeUpdateInput, IllnessTypeUncheckedUpdateInput>
    /**
     * Choose, which IllnessType to update.
     */
    where: IllnessTypeWhereUniqueInput
  }

  /**
   * IllnessType updateMany
   */
  export type IllnessTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IllnessTypes.
     */
    data: XOR<IllnessTypeUpdateManyMutationInput, IllnessTypeUncheckedUpdateManyInput>
    /**
     * Filter which IllnessTypes to update
     */
    where?: IllnessTypeWhereInput
  }

  /**
   * IllnessType upsert
   */
  export type IllnessTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the IllnessType to update in case it exists.
     */
    where: IllnessTypeWhereUniqueInput
    /**
     * In case the IllnessType found by the `where` argument doesn't exist, create a new IllnessType with this data.
     */
    create: XOR<IllnessTypeCreateInput, IllnessTypeUncheckedCreateInput>
    /**
     * In case the IllnessType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IllnessTypeUpdateInput, IllnessTypeUncheckedUpdateInput>
  }

  /**
   * IllnessType delete
   */
  export type IllnessTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    /**
     * Filter which IllnessType to delete.
     */
    where: IllnessTypeWhereUniqueInput
  }

  /**
   * IllnessType deleteMany
   */
  export type IllnessTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IllnessTypes to delete
     */
    where?: IllnessTypeWhereInput
  }

  /**
   * IllnessType.insurers
   */
  export type IllnessType$insurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    where?: InsurersWhereInput
  }

  /**
   * IllnessType without action
   */
  export type IllnessTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
  }


  /**
   * Model PolicyType
   */

  export type AggregatePolicyType = {
    _count: PolicyTypeCountAggregateOutputType | null
    _avg: PolicyTypeAvgAggregateOutputType | null
    _sum: PolicyTypeSumAggregateOutputType | null
    _min: PolicyTypeMinAggregateOutputType | null
    _max: PolicyTypeMaxAggregateOutputType | null
  }

  export type PolicyTypeAvgAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type PolicyTypeSumAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type PolicyTypeMinAggregateOutputType = {
    id: number | null
    PolicyTypeCode: string | null
    PolicyTypeDesc: string | null
    insurerid: number | null
  }

  export type PolicyTypeMaxAggregateOutputType = {
    id: number | null
    PolicyTypeCode: string | null
    PolicyTypeDesc: string | null
    insurerid: number | null
  }

  export type PolicyTypeCountAggregateOutputType = {
    id: number
    PolicyTypeCode: number
    PolicyTypeDesc: number
    insurerid: number
    _all: number
  }


  export type PolicyTypeAvgAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type PolicyTypeSumAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type PolicyTypeMinAggregateInputType = {
    id?: true
    PolicyTypeCode?: true
    PolicyTypeDesc?: true
    insurerid?: true
  }

  export type PolicyTypeMaxAggregateInputType = {
    id?: true
    PolicyTypeCode?: true
    PolicyTypeDesc?: true
    insurerid?: true
  }

  export type PolicyTypeCountAggregateInputType = {
    id?: true
    PolicyTypeCode?: true
    PolicyTypeDesc?: true
    insurerid?: true
    _all?: true
  }

  export type PolicyTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyType to aggregate.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicyTypes
    **/
    _count?: true | PolicyTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicyTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyTypeMaxAggregateInputType
  }

  export type GetPolicyTypeAggregateType<T extends PolicyTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicyType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicyType[P]>
      : GetScalarType<T[P], AggregatePolicyType[P]>
  }




  export type PolicyTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyTypeWhereInput
    orderBy?: PolicyTypeOrderByWithAggregationInput | PolicyTypeOrderByWithAggregationInput[]
    by: PolicyTypeScalarFieldEnum[] | PolicyTypeScalarFieldEnum
    having?: PolicyTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyTypeCountAggregateInputType | true
    _avg?: PolicyTypeAvgAggregateInputType
    _sum?: PolicyTypeSumAggregateInputType
    _min?: PolicyTypeMinAggregateInputType
    _max?: PolicyTypeMaxAggregateInputType
  }

  export type PolicyTypeGroupByOutputType = {
    id: number
    PolicyTypeCode: string
    PolicyTypeDesc: string | null
    insurerid: number | null
    _count: PolicyTypeCountAggregateOutputType | null
    _avg: PolicyTypeAvgAggregateOutputType | null
    _sum: PolicyTypeSumAggregateOutputType | null
    _min: PolicyTypeMinAggregateOutputType | null
    _max: PolicyTypeMaxAggregateOutputType | null
  }

  type GetPolicyTypeGroupByPayload<T extends PolicyTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyTypeGroupByOutputType[P]>
        }
      >
    >


  export type PolicyTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    PolicyTypeCode?: boolean
    PolicyTypeDesc?: boolean
    insurerid?: boolean
    insurers?: boolean | PolicyType$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["policyType"]>

  export type PolicyTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    PolicyTypeCode?: boolean
    PolicyTypeDesc?: boolean
    insurerid?: boolean
    insurers?: boolean | PolicyType$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["policyType"]>

  export type PolicyTypeSelectScalar = {
    id?: boolean
    PolicyTypeCode?: boolean
    PolicyTypeDesc?: boolean
    insurerid?: boolean
  }

  export type PolicyTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | PolicyType$insurersArgs<ExtArgs>
  }
  export type PolicyTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | PolicyType$insurersArgs<ExtArgs>
  }

  export type $PolicyTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolicyType"
    objects: {
      insurers: Prisma.$InsurersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      PolicyTypeCode: string
      PolicyTypeDesc: string | null
      insurerid: number | null
    }, ExtArgs["result"]["policyType"]>
    composites: {}
  }

  type PolicyTypeGetPayload<S extends boolean | null | undefined | PolicyTypeDefaultArgs> = $Result.GetResult<Prisma.$PolicyTypePayload, S>

  type PolicyTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PolicyTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PolicyTypeCountAggregateInputType | true
    }

  export interface PolicyTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolicyType'], meta: { name: 'PolicyType' } }
    /**
     * Find zero or one PolicyType that matches the filter.
     * @param {PolicyTypeFindUniqueArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyTypeFindUniqueArgs>(args: SelectSubset<T, PolicyTypeFindUniqueArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PolicyType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PolicyTypeFindUniqueOrThrowArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PolicyType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindFirstArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyTypeFindFirstArgs>(args?: SelectSubset<T, PolicyTypeFindFirstArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PolicyType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindFirstOrThrowArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PolicyTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicyTypes
     * const policyTypes = await prisma.policyType.findMany()
     * 
     * // Get first 10 PolicyTypes
     * const policyTypes = await prisma.policyType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyTypeWithIdOnly = await prisma.policyType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyTypeFindManyArgs>(args?: SelectSubset<T, PolicyTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PolicyType.
     * @param {PolicyTypeCreateArgs} args - Arguments to create a PolicyType.
     * @example
     * // Create one PolicyType
     * const PolicyType = await prisma.policyType.create({
     *   data: {
     *     // ... data to create a PolicyType
     *   }
     * })
     * 
     */
    create<T extends PolicyTypeCreateArgs>(args: SelectSubset<T, PolicyTypeCreateArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PolicyTypes.
     * @param {PolicyTypeCreateManyArgs} args - Arguments to create many PolicyTypes.
     * @example
     * // Create many PolicyTypes
     * const policyType = await prisma.policyType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyTypeCreateManyArgs>(args?: SelectSubset<T, PolicyTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolicyTypes and returns the data saved in the database.
     * @param {PolicyTypeCreateManyAndReturnArgs} args - Arguments to create many PolicyTypes.
     * @example
     * // Create many PolicyTypes
     * const policyType = await prisma.policyType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolicyTypes and only return the `id`
     * const policyTypeWithIdOnly = await prisma.policyType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PolicyType.
     * @param {PolicyTypeDeleteArgs} args - Arguments to delete one PolicyType.
     * @example
     * // Delete one PolicyType
     * const PolicyType = await prisma.policyType.delete({
     *   where: {
     *     // ... filter to delete one PolicyType
     *   }
     * })
     * 
     */
    delete<T extends PolicyTypeDeleteArgs>(args: SelectSubset<T, PolicyTypeDeleteArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PolicyType.
     * @param {PolicyTypeUpdateArgs} args - Arguments to update one PolicyType.
     * @example
     * // Update one PolicyType
     * const policyType = await prisma.policyType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyTypeUpdateArgs>(args: SelectSubset<T, PolicyTypeUpdateArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PolicyTypes.
     * @param {PolicyTypeDeleteManyArgs} args - Arguments to filter PolicyTypes to delete.
     * @example
     * // Delete a few PolicyTypes
     * const { count } = await prisma.policyType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyTypeDeleteManyArgs>(args?: SelectSubset<T, PolicyTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicyTypes
     * const policyType = await prisma.policyType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyTypeUpdateManyArgs>(args: SelectSubset<T, PolicyTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PolicyType.
     * @param {PolicyTypeUpsertArgs} args - Arguments to update or create a PolicyType.
     * @example
     * // Update or create a PolicyType
     * const policyType = await prisma.policyType.upsert({
     *   create: {
     *     // ... data to create a PolicyType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicyType we want to update
     *   }
     * })
     */
    upsert<T extends PolicyTypeUpsertArgs>(args: SelectSubset<T, PolicyTypeUpsertArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PolicyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeCountArgs} args - Arguments to filter PolicyTypes to count.
     * @example
     * // Count the number of PolicyTypes
     * const count = await prisma.policyType.count({
     *   where: {
     *     // ... the filter for the PolicyTypes we want to count
     *   }
     * })
    **/
    count<T extends PolicyTypeCountArgs>(
      args?: Subset<T, PolicyTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyTypeAggregateArgs>(args: Subset<T, PolicyTypeAggregateArgs>): Prisma.PrismaPromise<GetPolicyTypeAggregateType<T>>

    /**
     * Group by PolicyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyTypeGroupByArgs['orderBy'] }
        : { orderBy?: PolicyTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolicyType model
   */
  readonly fields: PolicyTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicyType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insurers<T extends PolicyType$insurersArgs<ExtArgs> = {}>(args?: Subset<T, PolicyType$insurersArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PolicyType model
   */ 
  interface PolicyTypeFieldRefs {
    readonly id: FieldRef<"PolicyType", 'Int'>
    readonly PolicyTypeCode: FieldRef<"PolicyType", 'String'>
    readonly PolicyTypeDesc: FieldRef<"PolicyType", 'String'>
    readonly insurerid: FieldRef<"PolicyType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PolicyType findUnique
   */
  export type PolicyTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType findUniqueOrThrow
   */
  export type PolicyTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType findFirst
   */
  export type PolicyTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTypes.
     */
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType findFirstOrThrow
   */
  export type PolicyTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTypes.
     */
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType findMany
   */
  export type PolicyTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyTypes to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType create
   */
  export type PolicyTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PolicyType.
     */
    data: XOR<PolicyTypeCreateInput, PolicyTypeUncheckedCreateInput>
  }

  /**
   * PolicyType createMany
   */
  export type PolicyTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolicyTypes.
     */
    data: PolicyTypeCreateManyInput | PolicyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicyType createManyAndReturn
   */
  export type PolicyTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PolicyTypes.
     */
    data: PolicyTypeCreateManyInput | PolicyTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PolicyType update
   */
  export type PolicyTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PolicyType.
     */
    data: XOR<PolicyTypeUpdateInput, PolicyTypeUncheckedUpdateInput>
    /**
     * Choose, which PolicyType to update.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType updateMany
   */
  export type PolicyTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolicyTypes.
     */
    data: XOR<PolicyTypeUpdateManyMutationInput, PolicyTypeUncheckedUpdateManyInput>
    /**
     * Filter which PolicyTypes to update
     */
    where?: PolicyTypeWhereInput
  }

  /**
   * PolicyType upsert
   */
  export type PolicyTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PolicyType to update in case it exists.
     */
    where: PolicyTypeWhereUniqueInput
    /**
     * In case the PolicyType found by the `where` argument doesn't exist, create a new PolicyType with this data.
     */
    create: XOR<PolicyTypeCreateInput, PolicyTypeUncheckedCreateInput>
    /**
     * In case the PolicyType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyTypeUpdateInput, PolicyTypeUncheckedUpdateInput>
  }

  /**
   * PolicyType delete
   */
  export type PolicyTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter which PolicyType to delete.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType deleteMany
   */
  export type PolicyTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyTypes to delete
     */
    where?: PolicyTypeWhereInput
  }

  /**
   * PolicyType.insurers
   */
  export type PolicyType$insurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    where?: InsurersWhereInput
  }

  /**
   * PolicyType without action
   */
  export type PolicyTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
  }


  /**
   * Model ServiceSetting
   */

  export type AggregateServiceSetting = {
    _count: ServiceSettingCountAggregateOutputType | null
    _avg: ServiceSettingAvgAggregateOutputType | null
    _sum: ServiceSettingSumAggregateOutputType | null
    _min: ServiceSettingMinAggregateOutputType | null
    _max: ServiceSettingMaxAggregateOutputType | null
  }

  export type ServiceSettingAvgAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type ServiceSettingSumAggregateOutputType = {
    id: number | null
    insurerid: number | null
  }

  export type ServiceSettingMinAggregateOutputType = {
    id: number | null
    ServiceSettingCode: string | null
    ServiceSettingDesc: string | null
    insurerid: number | null
  }

  export type ServiceSettingMaxAggregateOutputType = {
    id: number | null
    ServiceSettingCode: string | null
    ServiceSettingDesc: string | null
    insurerid: number | null
  }

  export type ServiceSettingCountAggregateOutputType = {
    id: number
    ServiceSettingCode: number
    ServiceSettingDesc: number
    insurerid: number
    _all: number
  }


  export type ServiceSettingAvgAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type ServiceSettingSumAggregateInputType = {
    id?: true
    insurerid?: true
  }

  export type ServiceSettingMinAggregateInputType = {
    id?: true
    ServiceSettingCode?: true
    ServiceSettingDesc?: true
    insurerid?: true
  }

  export type ServiceSettingMaxAggregateInputType = {
    id?: true
    ServiceSettingCode?: true
    ServiceSettingDesc?: true
    insurerid?: true
  }

  export type ServiceSettingCountAggregateInputType = {
    id?: true
    ServiceSettingCode?: true
    ServiceSettingDesc?: true
    insurerid?: true
    _all?: true
  }

  export type ServiceSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceSetting to aggregate.
     */
    where?: ServiceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceSettings to fetch.
     */
    orderBy?: ServiceSettingOrderByWithRelationInput | ServiceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceSettings
    **/
    _count?: true | ServiceSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceSettingMaxAggregateInputType
  }

  export type GetServiceSettingAggregateType<T extends ServiceSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceSetting[P]>
      : GetScalarType<T[P], AggregateServiceSetting[P]>
  }




  export type ServiceSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceSettingWhereInput
    orderBy?: ServiceSettingOrderByWithAggregationInput | ServiceSettingOrderByWithAggregationInput[]
    by: ServiceSettingScalarFieldEnum[] | ServiceSettingScalarFieldEnum
    having?: ServiceSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceSettingCountAggregateInputType | true
    _avg?: ServiceSettingAvgAggregateInputType
    _sum?: ServiceSettingSumAggregateInputType
    _min?: ServiceSettingMinAggregateInputType
    _max?: ServiceSettingMaxAggregateInputType
  }

  export type ServiceSettingGroupByOutputType = {
    id: number
    ServiceSettingCode: string
    ServiceSettingDesc: string
    insurerid: number | null
    _count: ServiceSettingCountAggregateOutputType | null
    _avg: ServiceSettingAvgAggregateOutputType | null
    _sum: ServiceSettingSumAggregateOutputType | null
    _min: ServiceSettingMinAggregateOutputType | null
    _max: ServiceSettingMaxAggregateOutputType | null
  }

  type GetServiceSettingGroupByPayload<T extends ServiceSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceSettingGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceSettingGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ServiceSettingCode?: boolean
    ServiceSettingDesc?: boolean
    insurerid?: boolean
    insurers?: boolean | ServiceSetting$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["serviceSetting"]>

  export type ServiceSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ServiceSettingCode?: boolean
    ServiceSettingDesc?: boolean
    insurerid?: boolean
    insurers?: boolean | ServiceSetting$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["serviceSetting"]>

  export type ServiceSettingSelectScalar = {
    id?: boolean
    ServiceSettingCode?: boolean
    ServiceSettingDesc?: boolean
    insurerid?: boolean
  }

  export type ServiceSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | ServiceSetting$insurersArgs<ExtArgs>
  }
  export type ServiceSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | ServiceSetting$insurersArgs<ExtArgs>
  }

  export type $ServiceSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceSetting"
    objects: {
      insurers: Prisma.$InsurersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ServiceSettingCode: string
      ServiceSettingDesc: string
      insurerid: number | null
    }, ExtArgs["result"]["serviceSetting"]>
    composites: {}
  }

  type ServiceSettingGetPayload<S extends boolean | null | undefined | ServiceSettingDefaultArgs> = $Result.GetResult<Prisma.$ServiceSettingPayload, S>

  type ServiceSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceSettingCountAggregateInputType | true
    }

  export interface ServiceSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceSetting'], meta: { name: 'ServiceSetting' } }
    /**
     * Find zero or one ServiceSetting that matches the filter.
     * @param {ServiceSettingFindUniqueArgs} args - Arguments to find a ServiceSetting
     * @example
     * // Get one ServiceSetting
     * const serviceSetting = await prisma.serviceSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceSettingFindUniqueArgs>(args: SelectSubset<T, ServiceSettingFindUniqueArgs<ExtArgs>>): Prisma__ServiceSettingClient<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceSettingFindUniqueOrThrowArgs} args - Arguments to find a ServiceSetting
     * @example
     * // Get one ServiceSetting
     * const serviceSetting = await prisma.serviceSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceSettingClient<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSettingFindFirstArgs} args - Arguments to find a ServiceSetting
     * @example
     * // Get one ServiceSetting
     * const serviceSetting = await prisma.serviceSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceSettingFindFirstArgs>(args?: SelectSubset<T, ServiceSettingFindFirstArgs<ExtArgs>>): Prisma__ServiceSettingClient<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSettingFindFirstOrThrowArgs} args - Arguments to find a ServiceSetting
     * @example
     * // Get one ServiceSetting
     * const serviceSetting = await prisma.serviceSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceSettingClient<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceSettings
     * const serviceSettings = await prisma.serviceSetting.findMany()
     * 
     * // Get first 10 ServiceSettings
     * const serviceSettings = await prisma.serviceSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceSettingWithIdOnly = await prisma.serviceSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceSettingFindManyArgs>(args?: SelectSubset<T, ServiceSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceSetting.
     * @param {ServiceSettingCreateArgs} args - Arguments to create a ServiceSetting.
     * @example
     * // Create one ServiceSetting
     * const ServiceSetting = await prisma.serviceSetting.create({
     *   data: {
     *     // ... data to create a ServiceSetting
     *   }
     * })
     * 
     */
    create<T extends ServiceSettingCreateArgs>(args: SelectSubset<T, ServiceSettingCreateArgs<ExtArgs>>): Prisma__ServiceSettingClient<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceSettings.
     * @param {ServiceSettingCreateManyArgs} args - Arguments to create many ServiceSettings.
     * @example
     * // Create many ServiceSettings
     * const serviceSetting = await prisma.serviceSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceSettingCreateManyArgs>(args?: SelectSubset<T, ServiceSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceSettings and returns the data saved in the database.
     * @param {ServiceSettingCreateManyAndReturnArgs} args - Arguments to create many ServiceSettings.
     * @example
     * // Create many ServiceSettings
     * const serviceSetting = await prisma.serviceSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceSettings and only return the `id`
     * const serviceSettingWithIdOnly = await prisma.serviceSetting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceSetting.
     * @param {ServiceSettingDeleteArgs} args - Arguments to delete one ServiceSetting.
     * @example
     * // Delete one ServiceSetting
     * const ServiceSetting = await prisma.serviceSetting.delete({
     *   where: {
     *     // ... filter to delete one ServiceSetting
     *   }
     * })
     * 
     */
    delete<T extends ServiceSettingDeleteArgs>(args: SelectSubset<T, ServiceSettingDeleteArgs<ExtArgs>>): Prisma__ServiceSettingClient<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceSetting.
     * @param {ServiceSettingUpdateArgs} args - Arguments to update one ServiceSetting.
     * @example
     * // Update one ServiceSetting
     * const serviceSetting = await prisma.serviceSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceSettingUpdateArgs>(args: SelectSubset<T, ServiceSettingUpdateArgs<ExtArgs>>): Prisma__ServiceSettingClient<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceSettings.
     * @param {ServiceSettingDeleteManyArgs} args - Arguments to filter ServiceSettings to delete.
     * @example
     * // Delete a few ServiceSettings
     * const { count } = await prisma.serviceSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceSettingDeleteManyArgs>(args?: SelectSubset<T, ServiceSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceSettings
     * const serviceSetting = await prisma.serviceSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceSettingUpdateManyArgs>(args: SelectSubset<T, ServiceSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceSetting.
     * @param {ServiceSettingUpsertArgs} args - Arguments to update or create a ServiceSetting.
     * @example
     * // Update or create a ServiceSetting
     * const serviceSetting = await prisma.serviceSetting.upsert({
     *   create: {
     *     // ... data to create a ServiceSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceSetting we want to update
     *   }
     * })
     */
    upsert<T extends ServiceSettingUpsertArgs>(args: SelectSubset<T, ServiceSettingUpsertArgs<ExtArgs>>): Prisma__ServiceSettingClient<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSettingCountArgs} args - Arguments to filter ServiceSettings to count.
     * @example
     * // Count the number of ServiceSettings
     * const count = await prisma.serviceSetting.count({
     *   where: {
     *     // ... the filter for the ServiceSettings we want to count
     *   }
     * })
    **/
    count<T extends ServiceSettingCountArgs>(
      args?: Subset<T, ServiceSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceSettingAggregateArgs>(args: Subset<T, ServiceSettingAggregateArgs>): Prisma.PrismaPromise<GetServiceSettingAggregateType<T>>

    /**
     * Group by ServiceSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceSettingGroupByArgs['orderBy'] }
        : { orderBy?: ServiceSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceSetting model
   */
  readonly fields: ServiceSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insurers<T extends ServiceSetting$insurersArgs<ExtArgs> = {}>(args?: Subset<T, ServiceSetting$insurersArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceSetting model
   */ 
  interface ServiceSettingFieldRefs {
    readonly id: FieldRef<"ServiceSetting", 'Int'>
    readonly ServiceSettingCode: FieldRef<"ServiceSetting", 'String'>
    readonly ServiceSettingDesc: FieldRef<"ServiceSetting", 'String'>
    readonly insurerid: FieldRef<"ServiceSetting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServiceSetting findUnique
   */
  export type ServiceSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSetting to fetch.
     */
    where: ServiceSettingWhereUniqueInput
  }

  /**
   * ServiceSetting findUniqueOrThrow
   */
  export type ServiceSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSetting to fetch.
     */
    where: ServiceSettingWhereUniqueInput
  }

  /**
   * ServiceSetting findFirst
   */
  export type ServiceSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSetting to fetch.
     */
    where?: ServiceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceSettings to fetch.
     */
    orderBy?: ServiceSettingOrderByWithRelationInput | ServiceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceSettings.
     */
    cursor?: ServiceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceSettings.
     */
    distinct?: ServiceSettingScalarFieldEnum | ServiceSettingScalarFieldEnum[]
  }

  /**
   * ServiceSetting findFirstOrThrow
   */
  export type ServiceSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSetting to fetch.
     */
    where?: ServiceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceSettings to fetch.
     */
    orderBy?: ServiceSettingOrderByWithRelationInput | ServiceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceSettings.
     */
    cursor?: ServiceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceSettings.
     */
    distinct?: ServiceSettingScalarFieldEnum | ServiceSettingScalarFieldEnum[]
  }

  /**
   * ServiceSetting findMany
   */
  export type ServiceSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which ServiceSettings to fetch.
     */
    where?: ServiceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceSettings to fetch.
     */
    orderBy?: ServiceSettingOrderByWithRelationInput | ServiceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceSettings.
     */
    cursor?: ServiceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceSettings.
     */
    skip?: number
    distinct?: ServiceSettingScalarFieldEnum | ServiceSettingScalarFieldEnum[]
  }

  /**
   * ServiceSetting create
   */
  export type ServiceSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceSetting.
     */
    data: XOR<ServiceSettingCreateInput, ServiceSettingUncheckedCreateInput>
  }

  /**
   * ServiceSetting createMany
   */
  export type ServiceSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceSettings.
     */
    data: ServiceSettingCreateManyInput | ServiceSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceSetting createManyAndReturn
   */
  export type ServiceSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceSettings.
     */
    data: ServiceSettingCreateManyInput | ServiceSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceSetting update
   */
  export type ServiceSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceSetting.
     */
    data: XOR<ServiceSettingUpdateInput, ServiceSettingUncheckedUpdateInput>
    /**
     * Choose, which ServiceSetting to update.
     */
    where: ServiceSettingWhereUniqueInput
  }

  /**
   * ServiceSetting updateMany
   */
  export type ServiceSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceSettings.
     */
    data: XOR<ServiceSettingUpdateManyMutationInput, ServiceSettingUncheckedUpdateManyInput>
    /**
     * Filter which ServiceSettings to update
     */
    where?: ServiceSettingWhereInput
  }

  /**
   * ServiceSetting upsert
   */
  export type ServiceSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceSetting to update in case it exists.
     */
    where: ServiceSettingWhereUniqueInput
    /**
     * In case the ServiceSetting found by the `where` argument doesn't exist, create a new ServiceSetting with this data.
     */
    create: XOR<ServiceSettingCreateInput, ServiceSettingUncheckedCreateInput>
    /**
     * In case the ServiceSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceSettingUpdateInput, ServiceSettingUncheckedUpdateInput>
  }

  /**
   * ServiceSetting delete
   */
  export type ServiceSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    /**
     * Filter which ServiceSetting to delete.
     */
    where: ServiceSettingWhereUniqueInput
  }

  /**
   * ServiceSetting deleteMany
   */
  export type ServiceSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceSettings to delete
     */
    where?: ServiceSettingWhereInput
  }

  /**
   * ServiceSetting.insurers
   */
  export type ServiceSetting$insurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    where?: InsurersWhereInput
  }

  /**
   * ServiceSetting without action
   */
  export type ServiceSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
  }


  /**
   * Model Claimants
   */

  export type AggregateClaimants = {
    _count: ClaimantsCountAggregateOutputType | null
    _avg: ClaimantsAvgAggregateOutputType | null
    _sum: ClaimantsSumAggregateOutputType | null
    _min: ClaimantsMinAggregateOutputType | null
    _max: ClaimantsMaxAggregateOutputType | null
  }

  export type ClaimantsAvgAggregateOutputType = {
    claimantid: number | null
    insurerid: number | null
    patientid: number | null
  }

  export type ClaimantsSumAggregateOutputType = {
    claimantid: number | null
    insurerid: number | null
    patientid: number | null
  }

  export type ClaimantsMinAggregateOutputType = {
    claimantid: number | null
    pid: string | null
    passportnumber: string | null
    hn: string | null
    title_th: string | null
    givenname_th: string | null
    surname_th: string | null
    title_en: string | null
    givenname_en: string | null
    surname_en: string | null
    mobilephone: string | null
    insurerid: number | null
    statusactive: boolean | null
    registrationdate: Date | null
    dateofbirth: string | null
    gender: string | null
    patientid: number | null
  }

  export type ClaimantsMaxAggregateOutputType = {
    claimantid: number | null
    pid: string | null
    passportnumber: string | null
    hn: string | null
    title_th: string | null
    givenname_th: string | null
    surname_th: string | null
    title_en: string | null
    givenname_en: string | null
    surname_en: string | null
    mobilephone: string | null
    insurerid: number | null
    statusactive: boolean | null
    registrationdate: Date | null
    dateofbirth: string | null
    gender: string | null
    patientid: number | null
  }

  export type ClaimantsCountAggregateOutputType = {
    claimantid: number
    pid: number
    passportnumber: number
    hn: number
    title_th: number
    givenname_th: number
    surname_th: number
    title_en: number
    givenname_en: number
    surname_en: number
    mobilephone: number
    insurerid: number
    statusactive: number
    registrationdate: number
    dateofbirth: number
    gender: number
    patientid: number
    _all: number
  }


  export type ClaimantsAvgAggregateInputType = {
    claimantid?: true
    insurerid?: true
    patientid?: true
  }

  export type ClaimantsSumAggregateInputType = {
    claimantid?: true
    insurerid?: true
    patientid?: true
  }

  export type ClaimantsMinAggregateInputType = {
    claimantid?: true
    pid?: true
    passportnumber?: true
    hn?: true
    title_th?: true
    givenname_th?: true
    surname_th?: true
    title_en?: true
    givenname_en?: true
    surname_en?: true
    mobilephone?: true
    insurerid?: true
    statusactive?: true
    registrationdate?: true
    dateofbirth?: true
    gender?: true
    patientid?: true
  }

  export type ClaimantsMaxAggregateInputType = {
    claimantid?: true
    pid?: true
    passportnumber?: true
    hn?: true
    title_th?: true
    givenname_th?: true
    surname_th?: true
    title_en?: true
    givenname_en?: true
    surname_en?: true
    mobilephone?: true
    insurerid?: true
    statusactive?: true
    registrationdate?: true
    dateofbirth?: true
    gender?: true
    patientid?: true
  }

  export type ClaimantsCountAggregateInputType = {
    claimantid?: true
    pid?: true
    passportnumber?: true
    hn?: true
    title_th?: true
    givenname_th?: true
    surname_th?: true
    title_en?: true
    givenname_en?: true
    surname_en?: true
    mobilephone?: true
    insurerid?: true
    statusactive?: true
    registrationdate?: true
    dateofbirth?: true
    gender?: true
    patientid?: true
    _all?: true
  }

  export type ClaimantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claimants to aggregate.
     */
    where?: ClaimantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claimants to fetch.
     */
    orderBy?: ClaimantsOrderByWithRelationInput | ClaimantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claimants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claimants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claimants
    **/
    _count?: true | ClaimantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimantsMaxAggregateInputType
  }

  export type GetClaimantsAggregateType<T extends ClaimantsAggregateArgs> = {
        [P in keyof T & keyof AggregateClaimants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaimants[P]>
      : GetScalarType<T[P], AggregateClaimants[P]>
  }




  export type ClaimantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimantsWhereInput
    orderBy?: ClaimantsOrderByWithAggregationInput | ClaimantsOrderByWithAggregationInput[]
    by: ClaimantsScalarFieldEnum[] | ClaimantsScalarFieldEnum
    having?: ClaimantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimantsCountAggregateInputType | true
    _avg?: ClaimantsAvgAggregateInputType
    _sum?: ClaimantsSumAggregateInputType
    _min?: ClaimantsMinAggregateInputType
    _max?: ClaimantsMaxAggregateInputType
  }

  export type ClaimantsGroupByOutputType = {
    claimantid: number
    pid: string | null
    passportnumber: string | null
    hn: string | null
    title_th: string | null
    givenname_th: string | null
    surname_th: string | null
    title_en: string | null
    givenname_en: string | null
    surname_en: string | null
    mobilephone: string | null
    insurerid: number | null
    statusactive: boolean | null
    registrationdate: Date | null
    dateofbirth: string | null
    gender: string | null
    patientid: number | null
    _count: ClaimantsCountAggregateOutputType | null
    _avg: ClaimantsAvgAggregateOutputType | null
    _sum: ClaimantsSumAggregateOutputType | null
    _min: ClaimantsMinAggregateOutputType | null
    _max: ClaimantsMaxAggregateOutputType | null
  }

  type GetClaimantsGroupByPayload<T extends ClaimantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimantsGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimantsGroupByOutputType[P]>
        }
      >
    >


  export type ClaimantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    claimantid?: boolean
    pid?: boolean
    passportnumber?: boolean
    hn?: boolean
    title_th?: boolean
    givenname_th?: boolean
    surname_th?: boolean
    title_en?: boolean
    givenname_en?: boolean
    surname_en?: boolean
    mobilephone?: boolean
    insurerid?: boolean
    statusactive?: boolean
    registrationdate?: boolean
    dateofbirth?: boolean
    gender?: boolean
    patientid?: boolean
    Insurers?: boolean | Claimants$InsurersArgs<ExtArgs>
    Transactions?: boolean | Claimants$TransactionsArgs<ExtArgs>
    _count?: boolean | ClaimantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claimants"]>

  export type ClaimantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    claimantid?: boolean
    pid?: boolean
    passportnumber?: boolean
    hn?: boolean
    title_th?: boolean
    givenname_th?: boolean
    surname_th?: boolean
    title_en?: boolean
    givenname_en?: boolean
    surname_en?: boolean
    mobilephone?: boolean
    insurerid?: boolean
    statusactive?: boolean
    registrationdate?: boolean
    dateofbirth?: boolean
    gender?: boolean
    patientid?: boolean
    Insurers?: boolean | Claimants$InsurersArgs<ExtArgs>
  }, ExtArgs["result"]["claimants"]>

  export type ClaimantsSelectScalar = {
    claimantid?: boolean
    pid?: boolean
    passportnumber?: boolean
    hn?: boolean
    title_th?: boolean
    givenname_th?: boolean
    surname_th?: boolean
    title_en?: boolean
    givenname_en?: boolean
    surname_en?: boolean
    mobilephone?: boolean
    insurerid?: boolean
    statusactive?: boolean
    registrationdate?: boolean
    dateofbirth?: boolean
    gender?: boolean
    patientid?: boolean
  }

  export type ClaimantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Insurers?: boolean | Claimants$InsurersArgs<ExtArgs>
    Transactions?: boolean | Claimants$TransactionsArgs<ExtArgs>
    _count?: boolean | ClaimantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClaimantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Insurers?: boolean | Claimants$InsurersArgs<ExtArgs>
  }

  export type $ClaimantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claimants"
    objects: {
      Insurers: Prisma.$InsurersPayload<ExtArgs> | null
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      claimantid: number
      pid: string | null
      passportnumber: string | null
      hn: string | null
      title_th: string | null
      givenname_th: string | null
      surname_th: string | null
      title_en: string | null
      givenname_en: string | null
      surname_en: string | null
      mobilephone: string | null
      insurerid: number | null
      statusactive: boolean | null
      registrationdate: Date | null
      dateofbirth: string | null
      gender: string | null
      patientid: number | null
    }, ExtArgs["result"]["claimants"]>
    composites: {}
  }

  type ClaimantsGetPayload<S extends boolean | null | undefined | ClaimantsDefaultArgs> = $Result.GetResult<Prisma.$ClaimantsPayload, S>

  type ClaimantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaimantsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaimantsCountAggregateInputType | true
    }

  export interface ClaimantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claimants'], meta: { name: 'Claimants' } }
    /**
     * Find zero or one Claimants that matches the filter.
     * @param {ClaimantsFindUniqueArgs} args - Arguments to find a Claimants
     * @example
     * // Get one Claimants
     * const claimants = await prisma.claimants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimantsFindUniqueArgs>(args: SelectSubset<T, ClaimantsFindUniqueArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Claimants that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClaimantsFindUniqueOrThrowArgs} args - Arguments to find a Claimants
     * @example
     * // Get one Claimants
     * const claimants = await prisma.claimants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimantsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Claimants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimantsFindFirstArgs} args - Arguments to find a Claimants
     * @example
     * // Get one Claimants
     * const claimants = await prisma.claimants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimantsFindFirstArgs>(args?: SelectSubset<T, ClaimantsFindFirstArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Claimants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimantsFindFirstOrThrowArgs} args - Arguments to find a Claimants
     * @example
     * // Get one Claimants
     * const claimants = await prisma.claimants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimantsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Claimants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claimants
     * const claimants = await prisma.claimants.findMany()
     * 
     * // Get first 10 Claimants
     * const claimants = await prisma.claimants.findMany({ take: 10 })
     * 
     * // Only select the `claimantid`
     * const claimantsWithClaimantidOnly = await prisma.claimants.findMany({ select: { claimantid: true } })
     * 
     */
    findMany<T extends ClaimantsFindManyArgs>(args?: SelectSubset<T, ClaimantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Claimants.
     * @param {ClaimantsCreateArgs} args - Arguments to create a Claimants.
     * @example
     * // Create one Claimants
     * const Claimants = await prisma.claimants.create({
     *   data: {
     *     // ... data to create a Claimants
     *   }
     * })
     * 
     */
    create<T extends ClaimantsCreateArgs>(args: SelectSubset<T, ClaimantsCreateArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Claimants.
     * @param {ClaimantsCreateManyArgs} args - Arguments to create many Claimants.
     * @example
     * // Create many Claimants
     * const claimants = await prisma.claimants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimantsCreateManyArgs>(args?: SelectSubset<T, ClaimantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claimants and returns the data saved in the database.
     * @param {ClaimantsCreateManyAndReturnArgs} args - Arguments to create many Claimants.
     * @example
     * // Create many Claimants
     * const claimants = await prisma.claimants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claimants and only return the `claimantid`
     * const claimantsWithClaimantidOnly = await prisma.claimants.createManyAndReturn({ 
     *   select: { claimantid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimantsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Claimants.
     * @param {ClaimantsDeleteArgs} args - Arguments to delete one Claimants.
     * @example
     * // Delete one Claimants
     * const Claimants = await prisma.claimants.delete({
     *   where: {
     *     // ... filter to delete one Claimants
     *   }
     * })
     * 
     */
    delete<T extends ClaimantsDeleteArgs>(args: SelectSubset<T, ClaimantsDeleteArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Claimants.
     * @param {ClaimantsUpdateArgs} args - Arguments to update one Claimants.
     * @example
     * // Update one Claimants
     * const claimants = await prisma.claimants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimantsUpdateArgs>(args: SelectSubset<T, ClaimantsUpdateArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Claimants.
     * @param {ClaimantsDeleteManyArgs} args - Arguments to filter Claimants to delete.
     * @example
     * // Delete a few Claimants
     * const { count } = await prisma.claimants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimantsDeleteManyArgs>(args?: SelectSubset<T, ClaimantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claimants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claimants
     * const claimants = await prisma.claimants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimantsUpdateManyArgs>(args: SelectSubset<T, ClaimantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Claimants.
     * @param {ClaimantsUpsertArgs} args - Arguments to update or create a Claimants.
     * @example
     * // Update or create a Claimants
     * const claimants = await prisma.claimants.upsert({
     *   create: {
     *     // ... data to create a Claimants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claimants we want to update
     *   }
     * })
     */
    upsert<T extends ClaimantsUpsertArgs>(args: SelectSubset<T, ClaimantsUpsertArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Claimants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimantsCountArgs} args - Arguments to filter Claimants to count.
     * @example
     * // Count the number of Claimants
     * const count = await prisma.claimants.count({
     *   where: {
     *     // ... the filter for the Claimants we want to count
     *   }
     * })
    **/
    count<T extends ClaimantsCountArgs>(
      args?: Subset<T, ClaimantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claimants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClaimantsAggregateArgs>(args: Subset<T, ClaimantsAggregateArgs>): Prisma.PrismaPromise<GetClaimantsAggregateType<T>>

    /**
     * Group by Claimants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClaimantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimantsGroupByArgs['orderBy'] }
        : { orderBy?: ClaimantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClaimantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claimants model
   */
  readonly fields: ClaimantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claimants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Insurers<T extends Claimants$InsurersArgs<ExtArgs> = {}>(args?: Subset<T, Claimants$InsurersArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Transactions<T extends Claimants$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Claimants$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Claimants model
   */ 
  interface ClaimantsFieldRefs {
    readonly claimantid: FieldRef<"Claimants", 'Int'>
    readonly pid: FieldRef<"Claimants", 'String'>
    readonly passportnumber: FieldRef<"Claimants", 'String'>
    readonly hn: FieldRef<"Claimants", 'String'>
    readonly title_th: FieldRef<"Claimants", 'String'>
    readonly givenname_th: FieldRef<"Claimants", 'String'>
    readonly surname_th: FieldRef<"Claimants", 'String'>
    readonly title_en: FieldRef<"Claimants", 'String'>
    readonly givenname_en: FieldRef<"Claimants", 'String'>
    readonly surname_en: FieldRef<"Claimants", 'String'>
    readonly mobilephone: FieldRef<"Claimants", 'String'>
    readonly insurerid: FieldRef<"Claimants", 'Int'>
    readonly statusactive: FieldRef<"Claimants", 'Boolean'>
    readonly registrationdate: FieldRef<"Claimants", 'DateTime'>
    readonly dateofbirth: FieldRef<"Claimants", 'String'>
    readonly gender: FieldRef<"Claimants", 'String'>
    readonly patientid: FieldRef<"Claimants", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Claimants findUnique
   */
  export type ClaimantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * Filter, which Claimants to fetch.
     */
    where: ClaimantsWhereUniqueInput
  }

  /**
   * Claimants findUniqueOrThrow
   */
  export type ClaimantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * Filter, which Claimants to fetch.
     */
    where: ClaimantsWhereUniqueInput
  }

  /**
   * Claimants findFirst
   */
  export type ClaimantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * Filter, which Claimants to fetch.
     */
    where?: ClaimantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claimants to fetch.
     */
    orderBy?: ClaimantsOrderByWithRelationInput | ClaimantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claimants.
     */
    cursor?: ClaimantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claimants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claimants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claimants.
     */
    distinct?: ClaimantsScalarFieldEnum | ClaimantsScalarFieldEnum[]
  }

  /**
   * Claimants findFirstOrThrow
   */
  export type ClaimantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * Filter, which Claimants to fetch.
     */
    where?: ClaimantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claimants to fetch.
     */
    orderBy?: ClaimantsOrderByWithRelationInput | ClaimantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claimants.
     */
    cursor?: ClaimantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claimants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claimants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claimants.
     */
    distinct?: ClaimantsScalarFieldEnum | ClaimantsScalarFieldEnum[]
  }

  /**
   * Claimants findMany
   */
  export type ClaimantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * Filter, which Claimants to fetch.
     */
    where?: ClaimantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claimants to fetch.
     */
    orderBy?: ClaimantsOrderByWithRelationInput | ClaimantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claimants.
     */
    cursor?: ClaimantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claimants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claimants.
     */
    skip?: number
    distinct?: ClaimantsScalarFieldEnum | ClaimantsScalarFieldEnum[]
  }

  /**
   * Claimants create
   */
  export type ClaimantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Claimants.
     */
    data?: XOR<ClaimantsCreateInput, ClaimantsUncheckedCreateInput>
  }

  /**
   * Claimants createMany
   */
  export type ClaimantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claimants.
     */
    data: ClaimantsCreateManyInput | ClaimantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claimants createManyAndReturn
   */
  export type ClaimantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Claimants.
     */
    data: ClaimantsCreateManyInput | ClaimantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claimants update
   */
  export type ClaimantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Claimants.
     */
    data: XOR<ClaimantsUpdateInput, ClaimantsUncheckedUpdateInput>
    /**
     * Choose, which Claimants to update.
     */
    where: ClaimantsWhereUniqueInput
  }

  /**
   * Claimants updateMany
   */
  export type ClaimantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claimants.
     */
    data: XOR<ClaimantsUpdateManyMutationInput, ClaimantsUncheckedUpdateManyInput>
    /**
     * Filter which Claimants to update
     */
    where?: ClaimantsWhereInput
  }

  /**
   * Claimants upsert
   */
  export type ClaimantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Claimants to update in case it exists.
     */
    where: ClaimantsWhereUniqueInput
    /**
     * In case the Claimants found by the `where` argument doesn't exist, create a new Claimants with this data.
     */
    create: XOR<ClaimantsCreateInput, ClaimantsUncheckedCreateInput>
    /**
     * In case the Claimants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimantsUpdateInput, ClaimantsUncheckedUpdateInput>
  }

  /**
   * Claimants delete
   */
  export type ClaimantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    /**
     * Filter which Claimants to delete.
     */
    where: ClaimantsWhereUniqueInput
  }

  /**
   * Claimants deleteMany
   */
  export type ClaimantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claimants to delete
     */
    where?: ClaimantsWhereInput
  }

  /**
   * Claimants.Insurers
   */
  export type Claimants$InsurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    where?: InsurersWhereInput
  }

  /**
   * Claimants.Transactions
   */
  export type Claimants$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Claimants without action
   */
  export type ClaimantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
  }


  /**
   * Model Insurers
   */

  export type AggregateInsurers = {
    _count: InsurersCountAggregateOutputType | null
    _avg: InsurersAvgAggregateOutputType | null
    _sum: InsurersSumAggregateOutputType | null
    _min: InsurersMinAggregateOutputType | null
    _max: InsurersMaxAggregateOutputType | null
  }

  export type InsurersAvgAggregateOutputType = {
    insurerid: number | null
    insurercode: number | null
  }

  export type InsurersSumAggregateOutputType = {
    insurerid: number | null
    insurercode: number | null
  }

  export type InsurersMinAggregateOutputType = {
    insurerid: number | null
    insurercode: number | null
    insurername: string | null
    registrationdate: Date | null
  }

  export type InsurersMaxAggregateOutputType = {
    insurerid: number | null
    insurercode: number | null
    insurername: string | null
    registrationdate: Date | null
  }

  export type InsurersCountAggregateOutputType = {
    insurerid: number
    insurercode: number
    insurername: number
    registrationdate: number
    _all: number
  }


  export type InsurersAvgAggregateInputType = {
    insurerid?: true
    insurercode?: true
  }

  export type InsurersSumAggregateInputType = {
    insurerid?: true
    insurercode?: true
  }

  export type InsurersMinAggregateInputType = {
    insurerid?: true
    insurercode?: true
    insurername?: true
    registrationdate?: true
  }

  export type InsurersMaxAggregateInputType = {
    insurerid?: true
    insurercode?: true
    insurername?: true
    registrationdate?: true
  }

  export type InsurersCountAggregateInputType = {
    insurerid?: true
    insurercode?: true
    insurername?: true
    registrationdate?: true
    _all?: true
  }

  export type InsurersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insurers to aggregate.
     */
    where?: InsurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurers to fetch.
     */
    orderBy?: InsurersOrderByWithRelationInput | InsurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insurers
    **/
    _count?: true | InsurersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsurersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsurersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsurersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsurersMaxAggregateInputType
  }

  export type GetInsurersAggregateType<T extends InsurersAggregateArgs> = {
        [P in keyof T & keyof AggregateInsurers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsurers[P]>
      : GetScalarType<T[P], AggregateInsurers[P]>
  }




  export type InsurersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsurersWhereInput
    orderBy?: InsurersOrderByWithAggregationInput | InsurersOrderByWithAggregationInput[]
    by: InsurersScalarFieldEnum[] | InsurersScalarFieldEnum
    having?: InsurersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsurersCountAggregateInputType | true
    _avg?: InsurersAvgAggregateInputType
    _sum?: InsurersSumAggregateInputType
    _min?: InsurersMinAggregateInputType
    _max?: InsurersMaxAggregateInputType
  }

  export type InsurersGroupByOutputType = {
    insurerid: number
    insurercode: number | null
    insurername: string | null
    registrationdate: Date | null
    _count: InsurersCountAggregateOutputType | null
    _avg: InsurersAvgAggregateOutputType | null
    _sum: InsurersSumAggregateOutputType | null
    _min: InsurersMinAggregateOutputType | null
    _max: InsurersMaxAggregateOutputType | null
  }

  type GetInsurersGroupByPayload<T extends InsurersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsurersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsurersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsurersGroupByOutputType[P]>
            : GetScalarType<T[P], InsurersGroupByOutputType[P]>
        }
      >
    >


  export type InsurersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    insurercode?: boolean
    insurername?: boolean
    registrationdate?: boolean
    ClaimStatus?: boolean | Insurers$ClaimStatusArgs<ExtArgs>
    Claimants?: boolean | Insurers$ClaimantsArgs<ExtArgs>
    IllnessSurgery?: boolean | Insurers$IllnessSurgeryArgs<ExtArgs>
    IllnessType?: boolean | Insurers$IllnessTypeArgs<ExtArgs>
    PolicyType?: boolean | Insurers$PolicyTypeArgs<ExtArgs>
    ServiceSetting?: boolean | Insurers$ServiceSettingArgs<ExtArgs>
    Transactions?: boolean | Insurers$TransactionsArgs<ExtArgs>
    _count?: boolean | InsurersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insurers"]>

  export type InsurersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    insurercode?: boolean
    insurername?: boolean
    registrationdate?: boolean
  }, ExtArgs["result"]["insurers"]>

  export type InsurersSelectScalar = {
    insurerid?: boolean
    insurercode?: boolean
    insurername?: boolean
    registrationdate?: boolean
  }

  export type InsurersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClaimStatus?: boolean | Insurers$ClaimStatusArgs<ExtArgs>
    Claimants?: boolean | Insurers$ClaimantsArgs<ExtArgs>
    IllnessSurgery?: boolean | Insurers$IllnessSurgeryArgs<ExtArgs>
    IllnessType?: boolean | Insurers$IllnessTypeArgs<ExtArgs>
    PolicyType?: boolean | Insurers$PolicyTypeArgs<ExtArgs>
    ServiceSetting?: boolean | Insurers$ServiceSettingArgs<ExtArgs>
    Transactions?: boolean | Insurers$TransactionsArgs<ExtArgs>
    _count?: boolean | InsurersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InsurersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InsurersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insurers"
    objects: {
      ClaimStatus: Prisma.$ClaimStatusPayload<ExtArgs>[]
      Claimants: Prisma.$ClaimantsPayload<ExtArgs>[]
      IllnessSurgery: Prisma.$IllnessSurgeryPayload<ExtArgs>[]
      IllnessType: Prisma.$IllnessTypePayload<ExtArgs>[]
      PolicyType: Prisma.$PolicyTypePayload<ExtArgs>[]
      ServiceSetting: Prisma.$ServiceSettingPayload<ExtArgs>[]
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      insurerid: number
      insurercode: number | null
      insurername: string | null
      registrationdate: Date | null
    }, ExtArgs["result"]["insurers"]>
    composites: {}
  }

  type InsurersGetPayload<S extends boolean | null | undefined | InsurersDefaultArgs> = $Result.GetResult<Prisma.$InsurersPayload, S>

  type InsurersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InsurersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InsurersCountAggregateInputType | true
    }

  export interface InsurersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insurers'], meta: { name: 'Insurers' } }
    /**
     * Find zero or one Insurers that matches the filter.
     * @param {InsurersFindUniqueArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsurersFindUniqueArgs>(args: SelectSubset<T, InsurersFindUniqueArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Insurers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InsurersFindUniqueOrThrowArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsurersFindUniqueOrThrowArgs>(args: SelectSubset<T, InsurersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Insurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersFindFirstArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsurersFindFirstArgs>(args?: SelectSubset<T, InsurersFindFirstArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Insurers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersFindFirstOrThrowArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsurersFindFirstOrThrowArgs>(args?: SelectSubset<T, InsurersFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Insurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insurers
     * const insurers = await prisma.insurers.findMany()
     * 
     * // Get first 10 Insurers
     * const insurers = await prisma.insurers.findMany({ take: 10 })
     * 
     * // Only select the `insurerid`
     * const insurersWithInsureridOnly = await prisma.insurers.findMany({ select: { insurerid: true } })
     * 
     */
    findMany<T extends InsurersFindManyArgs>(args?: SelectSubset<T, InsurersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Insurers.
     * @param {InsurersCreateArgs} args - Arguments to create a Insurers.
     * @example
     * // Create one Insurers
     * const Insurers = await prisma.insurers.create({
     *   data: {
     *     // ... data to create a Insurers
     *   }
     * })
     * 
     */
    create<T extends InsurersCreateArgs>(args: SelectSubset<T, InsurersCreateArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Insurers.
     * @param {InsurersCreateManyArgs} args - Arguments to create many Insurers.
     * @example
     * // Create many Insurers
     * const insurers = await prisma.insurers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsurersCreateManyArgs>(args?: SelectSubset<T, InsurersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insurers and returns the data saved in the database.
     * @param {InsurersCreateManyAndReturnArgs} args - Arguments to create many Insurers.
     * @example
     * // Create many Insurers
     * const insurers = await prisma.insurers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insurers and only return the `insurerid`
     * const insurersWithInsureridOnly = await prisma.insurers.createManyAndReturn({ 
     *   select: { insurerid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsurersCreateManyAndReturnArgs>(args?: SelectSubset<T, InsurersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Insurers.
     * @param {InsurersDeleteArgs} args - Arguments to delete one Insurers.
     * @example
     * // Delete one Insurers
     * const Insurers = await prisma.insurers.delete({
     *   where: {
     *     // ... filter to delete one Insurers
     *   }
     * })
     * 
     */
    delete<T extends InsurersDeleteArgs>(args: SelectSubset<T, InsurersDeleteArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Insurers.
     * @param {InsurersUpdateArgs} args - Arguments to update one Insurers.
     * @example
     * // Update one Insurers
     * const insurers = await prisma.insurers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsurersUpdateArgs>(args: SelectSubset<T, InsurersUpdateArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Insurers.
     * @param {InsurersDeleteManyArgs} args - Arguments to filter Insurers to delete.
     * @example
     * // Delete a few Insurers
     * const { count } = await prisma.insurers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsurersDeleteManyArgs>(args?: SelectSubset<T, InsurersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insurers
     * const insurers = await prisma.insurers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsurersUpdateManyArgs>(args: SelectSubset<T, InsurersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Insurers.
     * @param {InsurersUpsertArgs} args - Arguments to update or create a Insurers.
     * @example
     * // Update or create a Insurers
     * const insurers = await prisma.insurers.upsert({
     *   create: {
     *     // ... data to create a Insurers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insurers we want to update
     *   }
     * })
     */
    upsert<T extends InsurersUpsertArgs>(args: SelectSubset<T, InsurersUpsertArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersCountArgs} args - Arguments to filter Insurers to count.
     * @example
     * // Count the number of Insurers
     * const count = await prisma.insurers.count({
     *   where: {
     *     // ... the filter for the Insurers we want to count
     *   }
     * })
    **/
    count<T extends InsurersCountArgs>(
      args?: Subset<T, InsurersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsurersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InsurersAggregateArgs>(args: Subset<T, InsurersAggregateArgs>): Prisma.PrismaPromise<GetInsurersAggregateType<T>>

    /**
     * Group by Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InsurersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsurersGroupByArgs['orderBy'] }
        : { orderBy?: InsurersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InsurersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsurersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insurers model
   */
  readonly fields: InsurersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insurers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsurersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ClaimStatus<T extends Insurers$ClaimStatusArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$ClaimStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "findMany"> | Null>
    Claimants<T extends Insurers$ClaimantsArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$ClaimantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "findMany"> | Null>
    IllnessSurgery<T extends Insurers$IllnessSurgeryArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$IllnessSurgeryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findMany"> | Null>
    IllnessType<T extends Insurers$IllnessTypeArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$IllnessTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findMany"> | Null>
    PolicyType<T extends Insurers$PolicyTypeArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$PolicyTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findMany"> | Null>
    ServiceSetting<T extends Insurers$ServiceSettingArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$ServiceSettingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "findMany"> | Null>
    Transactions<T extends Insurers$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Insurers model
   */ 
  interface InsurersFieldRefs {
    readonly insurerid: FieldRef<"Insurers", 'Int'>
    readonly insurercode: FieldRef<"Insurers", 'Int'>
    readonly insurername: FieldRef<"Insurers", 'String'>
    readonly registrationdate: FieldRef<"Insurers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insurers findUnique
   */
  export type InsurersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where: InsurersWhereUniqueInput
  }

  /**
   * Insurers findUniqueOrThrow
   */
  export type InsurersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where: InsurersWhereUniqueInput
  }

  /**
   * Insurers findFirst
   */
  export type InsurersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where?: InsurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurers to fetch.
     */
    orderBy?: InsurersOrderByWithRelationInput | InsurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insurers.
     */
    cursor?: InsurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insurers.
     */
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * Insurers findFirstOrThrow
   */
  export type InsurersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where?: InsurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurers to fetch.
     */
    orderBy?: InsurersOrderByWithRelationInput | InsurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insurers.
     */
    cursor?: InsurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insurers.
     */
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * Insurers findMany
   */
  export type InsurersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where?: InsurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurers to fetch.
     */
    orderBy?: InsurersOrderByWithRelationInput | InsurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insurers.
     */
    cursor?: InsurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurers.
     */
    skip?: number
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * Insurers create
   */
  export type InsurersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * The data needed to create a Insurers.
     */
    data: XOR<InsurersCreateInput, InsurersUncheckedCreateInput>
  }

  /**
   * Insurers createMany
   */
  export type InsurersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insurers.
     */
    data: InsurersCreateManyInput | InsurersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insurers createManyAndReturn
   */
  export type InsurersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Insurers.
     */
    data: InsurersCreateManyInput | InsurersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insurers update
   */
  export type InsurersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * The data needed to update a Insurers.
     */
    data: XOR<InsurersUpdateInput, InsurersUncheckedUpdateInput>
    /**
     * Choose, which Insurers to update.
     */
    where: InsurersWhereUniqueInput
  }

  /**
   * Insurers updateMany
   */
  export type InsurersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insurers.
     */
    data: XOR<InsurersUpdateManyMutationInput, InsurersUncheckedUpdateManyInput>
    /**
     * Filter which Insurers to update
     */
    where?: InsurersWhereInput
  }

  /**
   * Insurers upsert
   */
  export type InsurersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * The filter to search for the Insurers to update in case it exists.
     */
    where: InsurersWhereUniqueInput
    /**
     * In case the Insurers found by the `where` argument doesn't exist, create a new Insurers with this data.
     */
    create: XOR<InsurersCreateInput, InsurersUncheckedCreateInput>
    /**
     * In case the Insurers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsurersUpdateInput, InsurersUncheckedUpdateInput>
  }

  /**
   * Insurers delete
   */
  export type InsurersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter which Insurers to delete.
     */
    where: InsurersWhereUniqueInput
  }

  /**
   * Insurers deleteMany
   */
  export type InsurersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insurers to delete
     */
    where?: InsurersWhereInput
  }

  /**
   * Insurers.ClaimStatus
   */
  export type Insurers$ClaimStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    where?: ClaimStatusWhereInput
    orderBy?: ClaimStatusOrderByWithRelationInput | ClaimStatusOrderByWithRelationInput[]
    cursor?: ClaimStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimStatusScalarFieldEnum | ClaimStatusScalarFieldEnum[]
  }

  /**
   * Insurers.Claimants
   */
  export type Insurers$ClaimantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    where?: ClaimantsWhereInput
    orderBy?: ClaimantsOrderByWithRelationInput | ClaimantsOrderByWithRelationInput[]
    cursor?: ClaimantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimantsScalarFieldEnum | ClaimantsScalarFieldEnum[]
  }

  /**
   * Insurers.IllnessSurgery
   */
  export type Insurers$IllnessSurgeryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessSurgery
     */
    select?: IllnessSurgerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessSurgeryInclude<ExtArgs> | null
    where?: IllnessSurgeryWhereInput
    orderBy?: IllnessSurgeryOrderByWithRelationInput | IllnessSurgeryOrderByWithRelationInput[]
    cursor?: IllnessSurgeryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IllnessSurgeryScalarFieldEnum | IllnessSurgeryScalarFieldEnum[]
  }

  /**
   * Insurers.IllnessType
   */
  export type Insurers$IllnessTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IllnessType
     */
    select?: IllnessTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IllnessTypeInclude<ExtArgs> | null
    where?: IllnessTypeWhereInput
    orderBy?: IllnessTypeOrderByWithRelationInput | IllnessTypeOrderByWithRelationInput[]
    cursor?: IllnessTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IllnessTypeScalarFieldEnum | IllnessTypeScalarFieldEnum[]
  }

  /**
   * Insurers.PolicyType
   */
  export type Insurers$PolicyTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    where?: PolicyTypeWhereInput
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    cursor?: PolicyTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * Insurers.ServiceSetting
   */
  export type Insurers$ServiceSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceSetting
     */
    select?: ServiceSettingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceSettingInclude<ExtArgs> | null
    where?: ServiceSettingWhereInput
    orderBy?: ServiceSettingOrderByWithRelationInput | ServiceSettingOrderByWithRelationInput[]
    cursor?: ServiceSettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceSettingScalarFieldEnum | ServiceSettingScalarFieldEnum[]
  }

  /**
   * Insurers.Transactions
   */
  export type Insurers$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Insurers without action
   */
  export type InsurersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    statusid: number | null
    insurerid: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    statusid: number | null
    insurerid: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    refid: string | null
    transactionid: string | null
    statusid: number | null
    updatedate: Date | null
    hn: string | null
    vn: string | null
    insurerid: number | null
    accidentdate: string | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    refid: string | null
    transactionid: string | null
    statusid: number | null
    updatedate: Date | null
    hn: string | null
    vn: string | null
    insurerid: number | null
    accidentdate: string | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    refid: number
    transactionid: number
    statusid: number
    updatedate: number
    hn: number
    vn: number
    insurerid: number
    accidentdate: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    statusid?: true
    insurerid?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    statusid?: true
    insurerid?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    refid?: true
    transactionid?: true
    statusid?: true
    updatedate?: true
    hn?: true
    vn?: true
    insurerid?: true
    accidentdate?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    refid?: true
    transactionid?: true
    statusid?: true
    updatedate?: true
    hn?: true
    vn?: true
    insurerid?: true
    accidentdate?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    refid?: true
    transactionid?: true
    statusid?: true
    updatedate?: true
    hn?: true
    vn?: true
    insurerid?: true
    accidentdate?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    refid: string | null
    transactionid: string | null
    statusid: number | null
    updatedate: Date | null
    hn: string | null
    vn: string | null
    insurerid: number | null
    accidentdate: string | null
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refid?: boolean
    transactionid?: boolean
    statusid?: boolean
    updatedate?: boolean
    hn?: boolean
    vn?: boolean
    insurerid?: boolean
    accidentdate?: boolean
    Claimants?: boolean | Transactions$ClaimantsArgs<ExtArgs>
    Insurers?: boolean | Transactions$InsurersArgs<ExtArgs>
    ClaimStatus?: boolean | Transactions$ClaimStatusArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refid?: boolean
    transactionid?: boolean
    statusid?: boolean
    updatedate?: boolean
    hn?: boolean
    vn?: boolean
    insurerid?: boolean
    accidentdate?: boolean
    Claimants?: boolean | Transactions$ClaimantsArgs<ExtArgs>
    Insurers?: boolean | Transactions$InsurersArgs<ExtArgs>
    ClaimStatus?: boolean | Transactions$ClaimStatusArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    refid?: boolean
    transactionid?: boolean
    statusid?: boolean
    updatedate?: boolean
    hn?: boolean
    vn?: boolean
    insurerid?: boolean
    accidentdate?: boolean
  }

  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Claimants?: boolean | Transactions$ClaimantsArgs<ExtArgs>
    Insurers?: boolean | Transactions$InsurersArgs<ExtArgs>
    ClaimStatus?: boolean | Transactions$ClaimStatusArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Claimants?: boolean | Transactions$ClaimantsArgs<ExtArgs>
    Insurers?: boolean | Transactions$InsurersArgs<ExtArgs>
    ClaimStatus?: boolean | Transactions$ClaimStatusArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      Claimants: Prisma.$ClaimantsPayload<ExtArgs> | null
      Insurers: Prisma.$InsurersPayload<ExtArgs> | null
      ClaimStatus: Prisma.$ClaimStatusPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      refid: string | null
      transactionid: string | null
      statusid: number | null
      updatedate: Date | null
      hn: string | null
      vn: string | null
      insurerid: number | null
      accidentdate: string | null
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Claimants<T extends Transactions$ClaimantsArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$ClaimantsArgs<ExtArgs>>): Prisma__ClaimantsClient<$Result.GetResult<Prisma.$ClaimantsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Insurers<T extends Transactions$InsurersArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$InsurersArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    ClaimStatus<T extends Transactions$ClaimStatusArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$ClaimStatusArgs<ExtArgs>>): Prisma__ClaimStatusClient<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */ 
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'Int'>
    readonly refid: FieldRef<"Transactions", 'String'>
    readonly transactionid: FieldRef<"Transactions", 'String'>
    readonly statusid: FieldRef<"Transactions", 'Int'>
    readonly updatedate: FieldRef<"Transactions", 'DateTime'>
    readonly hn: FieldRef<"Transactions", 'String'>
    readonly vn: FieldRef<"Transactions", 'String'>
    readonly insurerid: FieldRef<"Transactions", 'Int'>
    readonly accidentdate: FieldRef<"Transactions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data?: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions.Claimants
   */
  export type Transactions$ClaimantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claimants
     */
    select?: ClaimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimantsInclude<ExtArgs> | null
    where?: ClaimantsWhereInput
  }

  /**
   * Transactions.Insurers
   */
  export type Transactions$InsurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    where?: InsurersWhereInput
  }

  /**
   * Transactions.ClaimStatus
   */
  export type Transactions$ClaimStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimStatus
     */
    select?: ClaimStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimStatusInclude<ExtArgs> | null
    where?: ClaimStatusWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model DiagnosisTypeMapping
   */

  export type AggregateDiagnosisTypeMapping = {
    _count: DiagnosisTypeMappingCountAggregateOutputType | null
    _avg: DiagnosisTypeMappingAvgAggregateOutputType | null
    _sum: DiagnosisTypeMappingSumAggregateOutputType | null
    _min: DiagnosisTypeMappingMinAggregateOutputType | null
    _max: DiagnosisTypeMappingMaxAggregateOutputType | null
  }

  export type DiagnosisTypeMappingAvgAggregateOutputType = {
    insurerid: number | null
  }

  export type DiagnosisTypeMappingSumAggregateOutputType = {
    insurerid: number | null
  }

  export type DiagnosisTypeMappingMinAggregateOutputType = {
    insurerid: number | null
    dxtypecodetrakcare: string | null
    dxtypenametrakcare: string | null
    dxtypecodeinsurance: string | null
    dxtypenameinsurance: string | null
  }

  export type DiagnosisTypeMappingMaxAggregateOutputType = {
    insurerid: number | null
    dxtypecodetrakcare: string | null
    dxtypenametrakcare: string | null
    dxtypecodeinsurance: string | null
    dxtypenameinsurance: string | null
  }

  export type DiagnosisTypeMappingCountAggregateOutputType = {
    insurerid: number
    dxtypecodetrakcare: number
    dxtypenametrakcare: number
    dxtypecodeinsurance: number
    dxtypenameinsurance: number
    _all: number
  }


  export type DiagnosisTypeMappingAvgAggregateInputType = {
    insurerid?: true
  }

  export type DiagnosisTypeMappingSumAggregateInputType = {
    insurerid?: true
  }

  export type DiagnosisTypeMappingMinAggregateInputType = {
    insurerid?: true
    dxtypecodetrakcare?: true
    dxtypenametrakcare?: true
    dxtypecodeinsurance?: true
    dxtypenameinsurance?: true
  }

  export type DiagnosisTypeMappingMaxAggregateInputType = {
    insurerid?: true
    dxtypecodetrakcare?: true
    dxtypenametrakcare?: true
    dxtypecodeinsurance?: true
    dxtypenameinsurance?: true
  }

  export type DiagnosisTypeMappingCountAggregateInputType = {
    insurerid?: true
    dxtypecodetrakcare?: true
    dxtypenametrakcare?: true
    dxtypecodeinsurance?: true
    dxtypenameinsurance?: true
    _all?: true
  }

  export type DiagnosisTypeMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosisTypeMapping to aggregate.
     */
    where?: DiagnosisTypeMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosisTypeMappings to fetch.
     */
    orderBy?: DiagnosisTypeMappingOrderByWithRelationInput | DiagnosisTypeMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosisTypeMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosisTypeMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosisTypeMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosisTypeMappings
    **/
    _count?: true | DiagnosisTypeMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosisTypeMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosisTypeMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosisTypeMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosisTypeMappingMaxAggregateInputType
  }

  export type GetDiagnosisTypeMappingAggregateType<T extends DiagnosisTypeMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosisTypeMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosisTypeMapping[P]>
      : GetScalarType<T[P], AggregateDiagnosisTypeMapping[P]>
  }




  export type DiagnosisTypeMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisTypeMappingWhereInput
    orderBy?: DiagnosisTypeMappingOrderByWithAggregationInput | DiagnosisTypeMappingOrderByWithAggregationInput[]
    by: DiagnosisTypeMappingScalarFieldEnum[] | DiagnosisTypeMappingScalarFieldEnum
    having?: DiagnosisTypeMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosisTypeMappingCountAggregateInputType | true
    _avg?: DiagnosisTypeMappingAvgAggregateInputType
    _sum?: DiagnosisTypeMappingSumAggregateInputType
    _min?: DiagnosisTypeMappingMinAggregateInputType
    _max?: DiagnosisTypeMappingMaxAggregateInputType
  }

  export type DiagnosisTypeMappingGroupByOutputType = {
    insurerid: number
    dxtypecodetrakcare: string
    dxtypenametrakcare: string | null
    dxtypecodeinsurance: string | null
    dxtypenameinsurance: string | null
    _count: DiagnosisTypeMappingCountAggregateOutputType | null
    _avg: DiagnosisTypeMappingAvgAggregateOutputType | null
    _sum: DiagnosisTypeMappingSumAggregateOutputType | null
    _min: DiagnosisTypeMappingMinAggregateOutputType | null
    _max: DiagnosisTypeMappingMaxAggregateOutputType | null
  }

  type GetDiagnosisTypeMappingGroupByPayload<T extends DiagnosisTypeMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosisTypeMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosisTypeMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosisTypeMappingGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosisTypeMappingGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosisTypeMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    dxtypecodetrakcare?: boolean
    dxtypenametrakcare?: boolean
    dxtypecodeinsurance?: boolean
    dxtypenameinsurance?: boolean
  }, ExtArgs["result"]["diagnosisTypeMapping"]>

  export type DiagnosisTypeMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    dxtypecodetrakcare?: boolean
    dxtypenametrakcare?: boolean
    dxtypecodeinsurance?: boolean
    dxtypenameinsurance?: boolean
  }, ExtArgs["result"]["diagnosisTypeMapping"]>

  export type DiagnosisTypeMappingSelectScalar = {
    insurerid?: boolean
    dxtypecodetrakcare?: boolean
    dxtypenametrakcare?: boolean
    dxtypecodeinsurance?: boolean
    dxtypenameinsurance?: boolean
  }


  export type $DiagnosisTypeMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosisTypeMapping"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      insurerid: number
      dxtypecodetrakcare: string
      dxtypenametrakcare: string | null
      dxtypecodeinsurance: string | null
      dxtypenameinsurance: string | null
    }, ExtArgs["result"]["diagnosisTypeMapping"]>
    composites: {}
  }

  type DiagnosisTypeMappingGetPayload<S extends boolean | null | undefined | DiagnosisTypeMappingDefaultArgs> = $Result.GetResult<Prisma.$DiagnosisTypeMappingPayload, S>

  type DiagnosisTypeMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DiagnosisTypeMappingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DiagnosisTypeMappingCountAggregateInputType | true
    }

  export interface DiagnosisTypeMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosisTypeMapping'], meta: { name: 'DiagnosisTypeMapping' } }
    /**
     * Find zero or one DiagnosisTypeMapping that matches the filter.
     * @param {DiagnosisTypeMappingFindUniqueArgs} args - Arguments to find a DiagnosisTypeMapping
     * @example
     * // Get one DiagnosisTypeMapping
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosisTypeMappingFindUniqueArgs>(args: SelectSubset<T, DiagnosisTypeMappingFindUniqueArgs<ExtArgs>>): Prisma__DiagnosisTypeMappingClient<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DiagnosisTypeMapping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DiagnosisTypeMappingFindUniqueOrThrowArgs} args - Arguments to find a DiagnosisTypeMapping
     * @example
     * // Get one DiagnosisTypeMapping
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosisTypeMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosisTypeMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosisTypeMappingClient<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DiagnosisTypeMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisTypeMappingFindFirstArgs} args - Arguments to find a DiagnosisTypeMapping
     * @example
     * // Get one DiagnosisTypeMapping
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosisTypeMappingFindFirstArgs>(args?: SelectSubset<T, DiagnosisTypeMappingFindFirstArgs<ExtArgs>>): Prisma__DiagnosisTypeMappingClient<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DiagnosisTypeMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisTypeMappingFindFirstOrThrowArgs} args - Arguments to find a DiagnosisTypeMapping
     * @example
     * // Get one DiagnosisTypeMapping
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosisTypeMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosisTypeMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosisTypeMappingClient<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DiagnosisTypeMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisTypeMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosisTypeMappings
     * const diagnosisTypeMappings = await prisma.diagnosisTypeMapping.findMany()
     * 
     * // Get first 10 DiagnosisTypeMappings
     * const diagnosisTypeMappings = await prisma.diagnosisTypeMapping.findMany({ take: 10 })
     * 
     * // Only select the `insurerid`
     * const diagnosisTypeMappingWithInsureridOnly = await prisma.diagnosisTypeMapping.findMany({ select: { insurerid: true } })
     * 
     */
    findMany<T extends DiagnosisTypeMappingFindManyArgs>(args?: SelectSubset<T, DiagnosisTypeMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DiagnosisTypeMapping.
     * @param {DiagnosisTypeMappingCreateArgs} args - Arguments to create a DiagnosisTypeMapping.
     * @example
     * // Create one DiagnosisTypeMapping
     * const DiagnosisTypeMapping = await prisma.diagnosisTypeMapping.create({
     *   data: {
     *     // ... data to create a DiagnosisTypeMapping
     *   }
     * })
     * 
     */
    create<T extends DiagnosisTypeMappingCreateArgs>(args: SelectSubset<T, DiagnosisTypeMappingCreateArgs<ExtArgs>>): Prisma__DiagnosisTypeMappingClient<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DiagnosisTypeMappings.
     * @param {DiagnosisTypeMappingCreateManyArgs} args - Arguments to create many DiagnosisTypeMappings.
     * @example
     * // Create many DiagnosisTypeMappings
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosisTypeMappingCreateManyArgs>(args?: SelectSubset<T, DiagnosisTypeMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiagnosisTypeMappings and returns the data saved in the database.
     * @param {DiagnosisTypeMappingCreateManyAndReturnArgs} args - Arguments to create many DiagnosisTypeMappings.
     * @example
     * // Create many DiagnosisTypeMappings
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiagnosisTypeMappings and only return the `insurerid`
     * const diagnosisTypeMappingWithInsureridOnly = await prisma.diagnosisTypeMapping.createManyAndReturn({ 
     *   select: { insurerid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosisTypeMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosisTypeMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DiagnosisTypeMapping.
     * @param {DiagnosisTypeMappingDeleteArgs} args - Arguments to delete one DiagnosisTypeMapping.
     * @example
     * // Delete one DiagnosisTypeMapping
     * const DiagnosisTypeMapping = await prisma.diagnosisTypeMapping.delete({
     *   where: {
     *     // ... filter to delete one DiagnosisTypeMapping
     *   }
     * })
     * 
     */
    delete<T extends DiagnosisTypeMappingDeleteArgs>(args: SelectSubset<T, DiagnosisTypeMappingDeleteArgs<ExtArgs>>): Prisma__DiagnosisTypeMappingClient<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DiagnosisTypeMapping.
     * @param {DiagnosisTypeMappingUpdateArgs} args - Arguments to update one DiagnosisTypeMapping.
     * @example
     * // Update one DiagnosisTypeMapping
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosisTypeMappingUpdateArgs>(args: SelectSubset<T, DiagnosisTypeMappingUpdateArgs<ExtArgs>>): Prisma__DiagnosisTypeMappingClient<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DiagnosisTypeMappings.
     * @param {DiagnosisTypeMappingDeleteManyArgs} args - Arguments to filter DiagnosisTypeMappings to delete.
     * @example
     * // Delete a few DiagnosisTypeMappings
     * const { count } = await prisma.diagnosisTypeMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosisTypeMappingDeleteManyArgs>(args?: SelectSubset<T, DiagnosisTypeMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosisTypeMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisTypeMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosisTypeMappings
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosisTypeMappingUpdateManyArgs>(args: SelectSubset<T, DiagnosisTypeMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiagnosisTypeMapping.
     * @param {DiagnosisTypeMappingUpsertArgs} args - Arguments to update or create a DiagnosisTypeMapping.
     * @example
     * // Update or create a DiagnosisTypeMapping
     * const diagnosisTypeMapping = await prisma.diagnosisTypeMapping.upsert({
     *   create: {
     *     // ... data to create a DiagnosisTypeMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosisTypeMapping we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosisTypeMappingUpsertArgs>(args: SelectSubset<T, DiagnosisTypeMappingUpsertArgs<ExtArgs>>): Prisma__DiagnosisTypeMappingClient<$Result.GetResult<Prisma.$DiagnosisTypeMappingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DiagnosisTypeMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisTypeMappingCountArgs} args - Arguments to filter DiagnosisTypeMappings to count.
     * @example
     * // Count the number of DiagnosisTypeMappings
     * const count = await prisma.diagnosisTypeMapping.count({
     *   where: {
     *     // ... the filter for the DiagnosisTypeMappings we want to count
     *   }
     * })
    **/
    count<T extends DiagnosisTypeMappingCountArgs>(
      args?: Subset<T, DiagnosisTypeMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosisTypeMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosisTypeMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisTypeMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiagnosisTypeMappingAggregateArgs>(args: Subset<T, DiagnosisTypeMappingAggregateArgs>): Prisma.PrismaPromise<GetDiagnosisTypeMappingAggregateType<T>>

    /**
     * Group by DiagnosisTypeMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisTypeMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiagnosisTypeMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosisTypeMappingGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosisTypeMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiagnosisTypeMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosisTypeMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosisTypeMapping model
   */
  readonly fields: DiagnosisTypeMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosisTypeMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosisTypeMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiagnosisTypeMapping model
   */ 
  interface DiagnosisTypeMappingFieldRefs {
    readonly insurerid: FieldRef<"DiagnosisTypeMapping", 'Int'>
    readonly dxtypecodetrakcare: FieldRef<"DiagnosisTypeMapping", 'String'>
    readonly dxtypenametrakcare: FieldRef<"DiagnosisTypeMapping", 'String'>
    readonly dxtypecodeinsurance: FieldRef<"DiagnosisTypeMapping", 'String'>
    readonly dxtypenameinsurance: FieldRef<"DiagnosisTypeMapping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosisTypeMapping findUnique
   */
  export type DiagnosisTypeMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * Filter, which DiagnosisTypeMapping to fetch.
     */
    where: DiagnosisTypeMappingWhereUniqueInput
  }

  /**
   * DiagnosisTypeMapping findUniqueOrThrow
   */
  export type DiagnosisTypeMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * Filter, which DiagnosisTypeMapping to fetch.
     */
    where: DiagnosisTypeMappingWhereUniqueInput
  }

  /**
   * DiagnosisTypeMapping findFirst
   */
  export type DiagnosisTypeMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * Filter, which DiagnosisTypeMapping to fetch.
     */
    where?: DiagnosisTypeMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosisTypeMappings to fetch.
     */
    orderBy?: DiagnosisTypeMappingOrderByWithRelationInput | DiagnosisTypeMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosisTypeMappings.
     */
    cursor?: DiagnosisTypeMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosisTypeMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosisTypeMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosisTypeMappings.
     */
    distinct?: DiagnosisTypeMappingScalarFieldEnum | DiagnosisTypeMappingScalarFieldEnum[]
  }

  /**
   * DiagnosisTypeMapping findFirstOrThrow
   */
  export type DiagnosisTypeMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * Filter, which DiagnosisTypeMapping to fetch.
     */
    where?: DiagnosisTypeMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosisTypeMappings to fetch.
     */
    orderBy?: DiagnosisTypeMappingOrderByWithRelationInput | DiagnosisTypeMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosisTypeMappings.
     */
    cursor?: DiagnosisTypeMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosisTypeMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosisTypeMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosisTypeMappings.
     */
    distinct?: DiagnosisTypeMappingScalarFieldEnum | DiagnosisTypeMappingScalarFieldEnum[]
  }

  /**
   * DiagnosisTypeMapping findMany
   */
  export type DiagnosisTypeMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * Filter, which DiagnosisTypeMappings to fetch.
     */
    where?: DiagnosisTypeMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosisTypeMappings to fetch.
     */
    orderBy?: DiagnosisTypeMappingOrderByWithRelationInput | DiagnosisTypeMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosisTypeMappings.
     */
    cursor?: DiagnosisTypeMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosisTypeMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosisTypeMappings.
     */
    skip?: number
    distinct?: DiagnosisTypeMappingScalarFieldEnum | DiagnosisTypeMappingScalarFieldEnum[]
  }

  /**
   * DiagnosisTypeMapping create
   */
  export type DiagnosisTypeMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * The data needed to create a DiagnosisTypeMapping.
     */
    data: XOR<DiagnosisTypeMappingCreateInput, DiagnosisTypeMappingUncheckedCreateInput>
  }

  /**
   * DiagnosisTypeMapping createMany
   */
  export type DiagnosisTypeMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosisTypeMappings.
     */
    data: DiagnosisTypeMappingCreateManyInput | DiagnosisTypeMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosisTypeMapping createManyAndReturn
   */
  export type DiagnosisTypeMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DiagnosisTypeMappings.
     */
    data: DiagnosisTypeMappingCreateManyInput | DiagnosisTypeMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosisTypeMapping update
   */
  export type DiagnosisTypeMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * The data needed to update a DiagnosisTypeMapping.
     */
    data: XOR<DiagnosisTypeMappingUpdateInput, DiagnosisTypeMappingUncheckedUpdateInput>
    /**
     * Choose, which DiagnosisTypeMapping to update.
     */
    where: DiagnosisTypeMappingWhereUniqueInput
  }

  /**
   * DiagnosisTypeMapping updateMany
   */
  export type DiagnosisTypeMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosisTypeMappings.
     */
    data: XOR<DiagnosisTypeMappingUpdateManyMutationInput, DiagnosisTypeMappingUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosisTypeMappings to update
     */
    where?: DiagnosisTypeMappingWhereInput
  }

  /**
   * DiagnosisTypeMapping upsert
   */
  export type DiagnosisTypeMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * The filter to search for the DiagnosisTypeMapping to update in case it exists.
     */
    where: DiagnosisTypeMappingWhereUniqueInput
    /**
     * In case the DiagnosisTypeMapping found by the `where` argument doesn't exist, create a new DiagnosisTypeMapping with this data.
     */
    create: XOR<DiagnosisTypeMappingCreateInput, DiagnosisTypeMappingUncheckedCreateInput>
    /**
     * In case the DiagnosisTypeMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosisTypeMappingUpdateInput, DiagnosisTypeMappingUncheckedUpdateInput>
  }

  /**
   * DiagnosisTypeMapping delete
   */
  export type DiagnosisTypeMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
    /**
     * Filter which DiagnosisTypeMapping to delete.
     */
    where: DiagnosisTypeMappingWhereUniqueInput
  }

  /**
   * DiagnosisTypeMapping deleteMany
   */
  export type DiagnosisTypeMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosisTypeMappings to delete
     */
    where?: DiagnosisTypeMappingWhereInput
  }

  /**
   * DiagnosisTypeMapping without action
   */
  export type DiagnosisTypeMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisTypeMapping
     */
    select?: DiagnosisTypeMappingSelect<ExtArgs> | null
  }


  /**
   * Model accidentplace
   */

  export type AggregateAccidentplace = {
    _count: AccidentplaceCountAggregateOutputType | null
    _avg: AccidentplaceAvgAggregateOutputType | null
    _sum: AccidentplaceSumAggregateOutputType | null
    _min: AccidentplaceMinAggregateOutputType | null
    _max: AccidentplaceMaxAggregateOutputType | null
  }

  export type AccidentplaceAvgAggregateOutputType = {
    insurerid: number | null
    accidentplacecode: number | null
  }

  export type AccidentplaceSumAggregateOutputType = {
    insurerid: number | null
    accidentplacecode: number | null
  }

  export type AccidentplaceMinAggregateOutputType = {
    insurerid: number | null
    accidentplacecode: number | null
    accidentplacename: string | null
  }

  export type AccidentplaceMaxAggregateOutputType = {
    insurerid: number | null
    accidentplacecode: number | null
    accidentplacename: string | null
  }

  export type AccidentplaceCountAggregateOutputType = {
    insurerid: number
    accidentplacecode: number
    accidentplacename: number
    _all: number
  }


  export type AccidentplaceAvgAggregateInputType = {
    insurerid?: true
    accidentplacecode?: true
  }

  export type AccidentplaceSumAggregateInputType = {
    insurerid?: true
    accidentplacecode?: true
  }

  export type AccidentplaceMinAggregateInputType = {
    insurerid?: true
    accidentplacecode?: true
    accidentplacename?: true
  }

  export type AccidentplaceMaxAggregateInputType = {
    insurerid?: true
    accidentplacecode?: true
    accidentplacename?: true
  }

  export type AccidentplaceCountAggregateInputType = {
    insurerid?: true
    accidentplacecode?: true
    accidentplacename?: true
    _all?: true
  }

  export type AccidentplaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accidentplace to aggregate.
     */
    where?: accidentplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accidentplaces to fetch.
     */
    orderBy?: accidentplaceOrderByWithRelationInput | accidentplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accidentplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accidentplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accidentplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accidentplaces
    **/
    _count?: true | AccidentplaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccidentplaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccidentplaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccidentplaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccidentplaceMaxAggregateInputType
  }

  export type GetAccidentplaceAggregateType<T extends AccidentplaceAggregateArgs> = {
        [P in keyof T & keyof AggregateAccidentplace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccidentplace[P]>
      : GetScalarType<T[P], AggregateAccidentplace[P]>
  }




  export type accidentplaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accidentplaceWhereInput
    orderBy?: accidentplaceOrderByWithAggregationInput | accidentplaceOrderByWithAggregationInput[]
    by: AccidentplaceScalarFieldEnum[] | AccidentplaceScalarFieldEnum
    having?: accidentplaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccidentplaceCountAggregateInputType | true
    _avg?: AccidentplaceAvgAggregateInputType
    _sum?: AccidentplaceSumAggregateInputType
    _min?: AccidentplaceMinAggregateInputType
    _max?: AccidentplaceMaxAggregateInputType
  }

  export type AccidentplaceGroupByOutputType = {
    insurerid: number
    accidentplacecode: number
    accidentplacename: string
    _count: AccidentplaceCountAggregateOutputType | null
    _avg: AccidentplaceAvgAggregateOutputType | null
    _sum: AccidentplaceSumAggregateOutputType | null
    _min: AccidentplaceMinAggregateOutputType | null
    _max: AccidentplaceMaxAggregateOutputType | null
  }

  type GetAccidentplaceGroupByPayload<T extends accidentplaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccidentplaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccidentplaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccidentplaceGroupByOutputType[P]>
            : GetScalarType<T[P], AccidentplaceGroupByOutputType[P]>
        }
      >
    >


  export type accidentplaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    accidentplacecode?: boolean
    accidentplacename?: boolean
  }, ExtArgs["result"]["accidentplace"]>

  export type accidentplaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    accidentplacecode?: boolean
    accidentplacename?: boolean
  }, ExtArgs["result"]["accidentplace"]>

  export type accidentplaceSelectScalar = {
    insurerid?: boolean
    accidentplacecode?: boolean
    accidentplacename?: boolean
  }


  export type $accidentplacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accidentplace"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      insurerid: number
      accidentplacecode: number
      accidentplacename: string
    }, ExtArgs["result"]["accidentplace"]>
    composites: {}
  }

  type accidentplaceGetPayload<S extends boolean | null | undefined | accidentplaceDefaultArgs> = $Result.GetResult<Prisma.$accidentplacePayload, S>

  type accidentplaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<accidentplaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccidentplaceCountAggregateInputType | true
    }

  export interface accidentplaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accidentplace'], meta: { name: 'accidentplace' } }
    /**
     * Find zero or one Accidentplace that matches the filter.
     * @param {accidentplaceFindUniqueArgs} args - Arguments to find a Accidentplace
     * @example
     * // Get one Accidentplace
     * const accidentplace = await prisma.accidentplace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accidentplaceFindUniqueArgs>(args: SelectSubset<T, accidentplaceFindUniqueArgs<ExtArgs>>): Prisma__accidentplaceClient<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Accidentplace that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {accidentplaceFindUniqueOrThrowArgs} args - Arguments to find a Accidentplace
     * @example
     * // Get one Accidentplace
     * const accidentplace = await prisma.accidentplace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accidentplaceFindUniqueOrThrowArgs>(args: SelectSubset<T, accidentplaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accidentplaceClient<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Accidentplace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentplaceFindFirstArgs} args - Arguments to find a Accidentplace
     * @example
     * // Get one Accidentplace
     * const accidentplace = await prisma.accidentplace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accidentplaceFindFirstArgs>(args?: SelectSubset<T, accidentplaceFindFirstArgs<ExtArgs>>): Prisma__accidentplaceClient<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Accidentplace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentplaceFindFirstOrThrowArgs} args - Arguments to find a Accidentplace
     * @example
     * // Get one Accidentplace
     * const accidentplace = await prisma.accidentplace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accidentplaceFindFirstOrThrowArgs>(args?: SelectSubset<T, accidentplaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__accidentplaceClient<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accidentplaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentplaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accidentplaces
     * const accidentplaces = await prisma.accidentplace.findMany()
     * 
     * // Get first 10 Accidentplaces
     * const accidentplaces = await prisma.accidentplace.findMany({ take: 10 })
     * 
     * // Only select the `insurerid`
     * const accidentplaceWithInsureridOnly = await prisma.accidentplace.findMany({ select: { insurerid: true } })
     * 
     */
    findMany<T extends accidentplaceFindManyArgs>(args?: SelectSubset<T, accidentplaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Accidentplace.
     * @param {accidentplaceCreateArgs} args - Arguments to create a Accidentplace.
     * @example
     * // Create one Accidentplace
     * const Accidentplace = await prisma.accidentplace.create({
     *   data: {
     *     // ... data to create a Accidentplace
     *   }
     * })
     * 
     */
    create<T extends accidentplaceCreateArgs>(args: SelectSubset<T, accidentplaceCreateArgs<ExtArgs>>): Prisma__accidentplaceClient<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accidentplaces.
     * @param {accidentplaceCreateManyArgs} args - Arguments to create many Accidentplaces.
     * @example
     * // Create many Accidentplaces
     * const accidentplace = await prisma.accidentplace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accidentplaceCreateManyArgs>(args?: SelectSubset<T, accidentplaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accidentplaces and returns the data saved in the database.
     * @param {accidentplaceCreateManyAndReturnArgs} args - Arguments to create many Accidentplaces.
     * @example
     * // Create many Accidentplaces
     * const accidentplace = await prisma.accidentplace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accidentplaces and only return the `insurerid`
     * const accidentplaceWithInsureridOnly = await prisma.accidentplace.createManyAndReturn({ 
     *   select: { insurerid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accidentplaceCreateManyAndReturnArgs>(args?: SelectSubset<T, accidentplaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Accidentplace.
     * @param {accidentplaceDeleteArgs} args - Arguments to delete one Accidentplace.
     * @example
     * // Delete one Accidentplace
     * const Accidentplace = await prisma.accidentplace.delete({
     *   where: {
     *     // ... filter to delete one Accidentplace
     *   }
     * })
     * 
     */
    delete<T extends accidentplaceDeleteArgs>(args: SelectSubset<T, accidentplaceDeleteArgs<ExtArgs>>): Prisma__accidentplaceClient<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Accidentplace.
     * @param {accidentplaceUpdateArgs} args - Arguments to update one Accidentplace.
     * @example
     * // Update one Accidentplace
     * const accidentplace = await prisma.accidentplace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accidentplaceUpdateArgs>(args: SelectSubset<T, accidentplaceUpdateArgs<ExtArgs>>): Prisma__accidentplaceClient<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accidentplaces.
     * @param {accidentplaceDeleteManyArgs} args - Arguments to filter Accidentplaces to delete.
     * @example
     * // Delete a few Accidentplaces
     * const { count } = await prisma.accidentplace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accidentplaceDeleteManyArgs>(args?: SelectSubset<T, accidentplaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accidentplaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentplaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accidentplaces
     * const accidentplace = await prisma.accidentplace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accidentplaceUpdateManyArgs>(args: SelectSubset<T, accidentplaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accidentplace.
     * @param {accidentplaceUpsertArgs} args - Arguments to update or create a Accidentplace.
     * @example
     * // Update or create a Accidentplace
     * const accidentplace = await prisma.accidentplace.upsert({
     *   create: {
     *     // ... data to create a Accidentplace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accidentplace we want to update
     *   }
     * })
     */
    upsert<T extends accidentplaceUpsertArgs>(args: SelectSubset<T, accidentplaceUpsertArgs<ExtArgs>>): Prisma__accidentplaceClient<$Result.GetResult<Prisma.$accidentplacePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accidentplaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentplaceCountArgs} args - Arguments to filter Accidentplaces to count.
     * @example
     * // Count the number of Accidentplaces
     * const count = await prisma.accidentplace.count({
     *   where: {
     *     // ... the filter for the Accidentplaces we want to count
     *   }
     * })
    **/
    count<T extends accidentplaceCountArgs>(
      args?: Subset<T, accidentplaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccidentplaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accidentplace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccidentplaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccidentplaceAggregateArgs>(args: Subset<T, AccidentplaceAggregateArgs>): Prisma.PrismaPromise<GetAccidentplaceAggregateType<T>>

    /**
     * Group by Accidentplace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accidentplaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accidentplaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accidentplaceGroupByArgs['orderBy'] }
        : { orderBy?: accidentplaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accidentplaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccidentplaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accidentplace model
   */
  readonly fields: accidentplaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accidentplace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accidentplaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the accidentplace model
   */ 
  interface accidentplaceFieldRefs {
    readonly insurerid: FieldRef<"accidentplace", 'Int'>
    readonly accidentplacecode: FieldRef<"accidentplace", 'Int'>
    readonly accidentplacename: FieldRef<"accidentplace", 'String'>
  }
    

  // Custom InputTypes
  /**
   * accidentplace findUnique
   */
  export type accidentplaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * Filter, which accidentplace to fetch.
     */
    where: accidentplaceWhereUniqueInput
  }

  /**
   * accidentplace findUniqueOrThrow
   */
  export type accidentplaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * Filter, which accidentplace to fetch.
     */
    where: accidentplaceWhereUniqueInput
  }

  /**
   * accidentplace findFirst
   */
  export type accidentplaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * Filter, which accidentplace to fetch.
     */
    where?: accidentplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accidentplaces to fetch.
     */
    orderBy?: accidentplaceOrderByWithRelationInput | accidentplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accidentplaces.
     */
    cursor?: accidentplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accidentplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accidentplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accidentplaces.
     */
    distinct?: AccidentplaceScalarFieldEnum | AccidentplaceScalarFieldEnum[]
  }

  /**
   * accidentplace findFirstOrThrow
   */
  export type accidentplaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * Filter, which accidentplace to fetch.
     */
    where?: accidentplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accidentplaces to fetch.
     */
    orderBy?: accidentplaceOrderByWithRelationInput | accidentplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accidentplaces.
     */
    cursor?: accidentplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accidentplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accidentplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accidentplaces.
     */
    distinct?: AccidentplaceScalarFieldEnum | AccidentplaceScalarFieldEnum[]
  }

  /**
   * accidentplace findMany
   */
  export type accidentplaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * Filter, which accidentplaces to fetch.
     */
    where?: accidentplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accidentplaces to fetch.
     */
    orderBy?: accidentplaceOrderByWithRelationInput | accidentplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accidentplaces.
     */
    cursor?: accidentplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accidentplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accidentplaces.
     */
    skip?: number
    distinct?: AccidentplaceScalarFieldEnum | AccidentplaceScalarFieldEnum[]
  }

  /**
   * accidentplace create
   */
  export type accidentplaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * The data needed to create a accidentplace.
     */
    data: XOR<accidentplaceCreateInput, accidentplaceUncheckedCreateInput>
  }

  /**
   * accidentplace createMany
   */
  export type accidentplaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accidentplaces.
     */
    data: accidentplaceCreateManyInput | accidentplaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accidentplace createManyAndReturn
   */
  export type accidentplaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many accidentplaces.
     */
    data: accidentplaceCreateManyInput | accidentplaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accidentplace update
   */
  export type accidentplaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * The data needed to update a accidentplace.
     */
    data: XOR<accidentplaceUpdateInput, accidentplaceUncheckedUpdateInput>
    /**
     * Choose, which accidentplace to update.
     */
    where: accidentplaceWhereUniqueInput
  }

  /**
   * accidentplace updateMany
   */
  export type accidentplaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accidentplaces.
     */
    data: XOR<accidentplaceUpdateManyMutationInput, accidentplaceUncheckedUpdateManyInput>
    /**
     * Filter which accidentplaces to update
     */
    where?: accidentplaceWhereInput
  }

  /**
   * accidentplace upsert
   */
  export type accidentplaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * The filter to search for the accidentplace to update in case it exists.
     */
    where: accidentplaceWhereUniqueInput
    /**
     * In case the accidentplace found by the `where` argument doesn't exist, create a new accidentplace with this data.
     */
    create: XOR<accidentplaceCreateInput, accidentplaceUncheckedCreateInput>
    /**
     * In case the accidentplace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accidentplaceUpdateInput, accidentplaceUncheckedUpdateInput>
  }

  /**
   * accidentplace delete
   */
  export type accidentplaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
    /**
     * Filter which accidentplace to delete.
     */
    where: accidentplaceWhereUniqueInput
  }

  /**
   * accidentplace deleteMany
   */
  export type accidentplaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accidentplaces to delete
     */
    where?: accidentplaceWhereInput
  }

  /**
   * accidentplace without action
   */
  export type accidentplaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accidentplace
     */
    select?: accidentplaceSelect<ExtArgs> | null
  }


  /**
   * Model causeofinjurywoundtype
   */

  export type AggregateCauseofinjurywoundtype = {
    _count: CauseofinjurywoundtypeCountAggregateOutputType | null
    _avg: CauseofinjurywoundtypeAvgAggregateOutputType | null
    _sum: CauseofinjurywoundtypeSumAggregateOutputType | null
    _min: CauseofinjurywoundtypeMinAggregateOutputType | null
    _max: CauseofinjurywoundtypeMaxAggregateOutputType | null
  }

  export type CauseofinjurywoundtypeAvgAggregateOutputType = {
    insurerid: number | null
    id: number | null
  }

  export type CauseofinjurywoundtypeSumAggregateOutputType = {
    insurerid: number | null
    id: number | null
  }

  export type CauseofinjurywoundtypeMinAggregateOutputType = {
    insurerid: number | null
    woundtypename: string | null
    id: number | null
    woundtypecode: string | null
  }

  export type CauseofinjurywoundtypeMaxAggregateOutputType = {
    insurerid: number | null
    woundtypename: string | null
    id: number | null
    woundtypecode: string | null
  }

  export type CauseofinjurywoundtypeCountAggregateOutputType = {
    insurerid: number
    woundtypename: number
    id: number
    woundtypecode: number
    _all: number
  }


  export type CauseofinjurywoundtypeAvgAggregateInputType = {
    insurerid?: true
    id?: true
  }

  export type CauseofinjurywoundtypeSumAggregateInputType = {
    insurerid?: true
    id?: true
  }

  export type CauseofinjurywoundtypeMinAggregateInputType = {
    insurerid?: true
    woundtypename?: true
    id?: true
    woundtypecode?: true
  }

  export type CauseofinjurywoundtypeMaxAggregateInputType = {
    insurerid?: true
    woundtypename?: true
    id?: true
    woundtypecode?: true
  }

  export type CauseofinjurywoundtypeCountAggregateInputType = {
    insurerid?: true
    woundtypename?: true
    id?: true
    woundtypecode?: true
    _all?: true
  }

  export type CauseofinjurywoundtypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which causeofinjurywoundtype to aggregate.
     */
    where?: causeofinjurywoundtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of causeofinjurywoundtypes to fetch.
     */
    orderBy?: causeofinjurywoundtypeOrderByWithRelationInput | causeofinjurywoundtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: causeofinjurywoundtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` causeofinjurywoundtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` causeofinjurywoundtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned causeofinjurywoundtypes
    **/
    _count?: true | CauseofinjurywoundtypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CauseofinjurywoundtypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CauseofinjurywoundtypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CauseofinjurywoundtypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CauseofinjurywoundtypeMaxAggregateInputType
  }

  export type GetCauseofinjurywoundtypeAggregateType<T extends CauseofinjurywoundtypeAggregateArgs> = {
        [P in keyof T & keyof AggregateCauseofinjurywoundtype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCauseofinjurywoundtype[P]>
      : GetScalarType<T[P], AggregateCauseofinjurywoundtype[P]>
  }




  export type causeofinjurywoundtypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: causeofinjurywoundtypeWhereInput
    orderBy?: causeofinjurywoundtypeOrderByWithAggregationInput | causeofinjurywoundtypeOrderByWithAggregationInput[]
    by: CauseofinjurywoundtypeScalarFieldEnum[] | CauseofinjurywoundtypeScalarFieldEnum
    having?: causeofinjurywoundtypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CauseofinjurywoundtypeCountAggregateInputType | true
    _avg?: CauseofinjurywoundtypeAvgAggregateInputType
    _sum?: CauseofinjurywoundtypeSumAggregateInputType
    _min?: CauseofinjurywoundtypeMinAggregateInputType
    _max?: CauseofinjurywoundtypeMaxAggregateInputType
  }

  export type CauseofinjurywoundtypeGroupByOutputType = {
    insurerid: number
    woundtypename: string | null
    id: number
    woundtypecode: string
    _count: CauseofinjurywoundtypeCountAggregateOutputType | null
    _avg: CauseofinjurywoundtypeAvgAggregateOutputType | null
    _sum: CauseofinjurywoundtypeSumAggregateOutputType | null
    _min: CauseofinjurywoundtypeMinAggregateOutputType | null
    _max: CauseofinjurywoundtypeMaxAggregateOutputType | null
  }

  type GetCauseofinjurywoundtypeGroupByPayload<T extends causeofinjurywoundtypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CauseofinjurywoundtypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CauseofinjurywoundtypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CauseofinjurywoundtypeGroupByOutputType[P]>
            : GetScalarType<T[P], CauseofinjurywoundtypeGroupByOutputType[P]>
        }
      >
    >


  export type causeofinjurywoundtypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    woundtypename?: boolean
    id?: boolean
    woundtypecode?: boolean
  }, ExtArgs["result"]["causeofinjurywoundtype"]>

  export type causeofinjurywoundtypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    woundtypename?: boolean
    id?: boolean
    woundtypecode?: boolean
  }, ExtArgs["result"]["causeofinjurywoundtype"]>

  export type causeofinjurywoundtypeSelectScalar = {
    insurerid?: boolean
    woundtypename?: boolean
    id?: boolean
    woundtypecode?: boolean
  }


  export type $causeofinjurywoundtypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "causeofinjurywoundtype"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      insurerid: number
      woundtypename: string | null
      id: number
      woundtypecode: string
    }, ExtArgs["result"]["causeofinjurywoundtype"]>
    composites: {}
  }

  type causeofinjurywoundtypeGetPayload<S extends boolean | null | undefined | causeofinjurywoundtypeDefaultArgs> = $Result.GetResult<Prisma.$causeofinjurywoundtypePayload, S>

  type causeofinjurywoundtypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<causeofinjurywoundtypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CauseofinjurywoundtypeCountAggregateInputType | true
    }

  export interface causeofinjurywoundtypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['causeofinjurywoundtype'], meta: { name: 'causeofinjurywoundtype' } }
    /**
     * Find zero or one Causeofinjurywoundtype that matches the filter.
     * @param {causeofinjurywoundtypeFindUniqueArgs} args - Arguments to find a Causeofinjurywoundtype
     * @example
     * // Get one Causeofinjurywoundtype
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends causeofinjurywoundtypeFindUniqueArgs>(args: SelectSubset<T, causeofinjurywoundtypeFindUniqueArgs<ExtArgs>>): Prisma__causeofinjurywoundtypeClient<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Causeofinjurywoundtype that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {causeofinjurywoundtypeFindUniqueOrThrowArgs} args - Arguments to find a Causeofinjurywoundtype
     * @example
     * // Get one Causeofinjurywoundtype
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends causeofinjurywoundtypeFindUniqueOrThrowArgs>(args: SelectSubset<T, causeofinjurywoundtypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__causeofinjurywoundtypeClient<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Causeofinjurywoundtype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurywoundtypeFindFirstArgs} args - Arguments to find a Causeofinjurywoundtype
     * @example
     * // Get one Causeofinjurywoundtype
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends causeofinjurywoundtypeFindFirstArgs>(args?: SelectSubset<T, causeofinjurywoundtypeFindFirstArgs<ExtArgs>>): Prisma__causeofinjurywoundtypeClient<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Causeofinjurywoundtype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurywoundtypeFindFirstOrThrowArgs} args - Arguments to find a Causeofinjurywoundtype
     * @example
     * // Get one Causeofinjurywoundtype
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends causeofinjurywoundtypeFindFirstOrThrowArgs>(args?: SelectSubset<T, causeofinjurywoundtypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__causeofinjurywoundtypeClient<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Causeofinjurywoundtypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurywoundtypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Causeofinjurywoundtypes
     * const causeofinjurywoundtypes = await prisma.causeofinjurywoundtype.findMany()
     * 
     * // Get first 10 Causeofinjurywoundtypes
     * const causeofinjurywoundtypes = await prisma.causeofinjurywoundtype.findMany({ take: 10 })
     * 
     * // Only select the `insurerid`
     * const causeofinjurywoundtypeWithInsureridOnly = await prisma.causeofinjurywoundtype.findMany({ select: { insurerid: true } })
     * 
     */
    findMany<T extends causeofinjurywoundtypeFindManyArgs>(args?: SelectSubset<T, causeofinjurywoundtypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Causeofinjurywoundtype.
     * @param {causeofinjurywoundtypeCreateArgs} args - Arguments to create a Causeofinjurywoundtype.
     * @example
     * // Create one Causeofinjurywoundtype
     * const Causeofinjurywoundtype = await prisma.causeofinjurywoundtype.create({
     *   data: {
     *     // ... data to create a Causeofinjurywoundtype
     *   }
     * })
     * 
     */
    create<T extends causeofinjurywoundtypeCreateArgs>(args: SelectSubset<T, causeofinjurywoundtypeCreateArgs<ExtArgs>>): Prisma__causeofinjurywoundtypeClient<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Causeofinjurywoundtypes.
     * @param {causeofinjurywoundtypeCreateManyArgs} args - Arguments to create many Causeofinjurywoundtypes.
     * @example
     * // Create many Causeofinjurywoundtypes
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends causeofinjurywoundtypeCreateManyArgs>(args?: SelectSubset<T, causeofinjurywoundtypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Causeofinjurywoundtypes and returns the data saved in the database.
     * @param {causeofinjurywoundtypeCreateManyAndReturnArgs} args - Arguments to create many Causeofinjurywoundtypes.
     * @example
     * // Create many Causeofinjurywoundtypes
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Causeofinjurywoundtypes and only return the `insurerid`
     * const causeofinjurywoundtypeWithInsureridOnly = await prisma.causeofinjurywoundtype.createManyAndReturn({ 
     *   select: { insurerid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends causeofinjurywoundtypeCreateManyAndReturnArgs>(args?: SelectSubset<T, causeofinjurywoundtypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Causeofinjurywoundtype.
     * @param {causeofinjurywoundtypeDeleteArgs} args - Arguments to delete one Causeofinjurywoundtype.
     * @example
     * // Delete one Causeofinjurywoundtype
     * const Causeofinjurywoundtype = await prisma.causeofinjurywoundtype.delete({
     *   where: {
     *     // ... filter to delete one Causeofinjurywoundtype
     *   }
     * })
     * 
     */
    delete<T extends causeofinjurywoundtypeDeleteArgs>(args: SelectSubset<T, causeofinjurywoundtypeDeleteArgs<ExtArgs>>): Prisma__causeofinjurywoundtypeClient<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Causeofinjurywoundtype.
     * @param {causeofinjurywoundtypeUpdateArgs} args - Arguments to update one Causeofinjurywoundtype.
     * @example
     * // Update one Causeofinjurywoundtype
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends causeofinjurywoundtypeUpdateArgs>(args: SelectSubset<T, causeofinjurywoundtypeUpdateArgs<ExtArgs>>): Prisma__causeofinjurywoundtypeClient<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Causeofinjurywoundtypes.
     * @param {causeofinjurywoundtypeDeleteManyArgs} args - Arguments to filter Causeofinjurywoundtypes to delete.
     * @example
     * // Delete a few Causeofinjurywoundtypes
     * const { count } = await prisma.causeofinjurywoundtype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends causeofinjurywoundtypeDeleteManyArgs>(args?: SelectSubset<T, causeofinjurywoundtypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Causeofinjurywoundtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurywoundtypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Causeofinjurywoundtypes
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends causeofinjurywoundtypeUpdateManyArgs>(args: SelectSubset<T, causeofinjurywoundtypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Causeofinjurywoundtype.
     * @param {causeofinjurywoundtypeUpsertArgs} args - Arguments to update or create a Causeofinjurywoundtype.
     * @example
     * // Update or create a Causeofinjurywoundtype
     * const causeofinjurywoundtype = await prisma.causeofinjurywoundtype.upsert({
     *   create: {
     *     // ... data to create a Causeofinjurywoundtype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Causeofinjurywoundtype we want to update
     *   }
     * })
     */
    upsert<T extends causeofinjurywoundtypeUpsertArgs>(args: SelectSubset<T, causeofinjurywoundtypeUpsertArgs<ExtArgs>>): Prisma__causeofinjurywoundtypeClient<$Result.GetResult<Prisma.$causeofinjurywoundtypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Causeofinjurywoundtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurywoundtypeCountArgs} args - Arguments to filter Causeofinjurywoundtypes to count.
     * @example
     * // Count the number of Causeofinjurywoundtypes
     * const count = await prisma.causeofinjurywoundtype.count({
     *   where: {
     *     // ... the filter for the Causeofinjurywoundtypes we want to count
     *   }
     * })
    **/
    count<T extends causeofinjurywoundtypeCountArgs>(
      args?: Subset<T, causeofinjurywoundtypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CauseofinjurywoundtypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Causeofinjurywoundtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseofinjurywoundtypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CauseofinjurywoundtypeAggregateArgs>(args: Subset<T, CauseofinjurywoundtypeAggregateArgs>): Prisma.PrismaPromise<GetCauseofinjurywoundtypeAggregateType<T>>

    /**
     * Group by Causeofinjurywoundtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurywoundtypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends causeofinjurywoundtypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: causeofinjurywoundtypeGroupByArgs['orderBy'] }
        : { orderBy?: causeofinjurywoundtypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, causeofinjurywoundtypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCauseofinjurywoundtypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the causeofinjurywoundtype model
   */
  readonly fields: causeofinjurywoundtypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for causeofinjurywoundtype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__causeofinjurywoundtypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the causeofinjurywoundtype model
   */ 
  interface causeofinjurywoundtypeFieldRefs {
    readonly insurerid: FieldRef<"causeofinjurywoundtype", 'Int'>
    readonly woundtypename: FieldRef<"causeofinjurywoundtype", 'String'>
    readonly id: FieldRef<"causeofinjurywoundtype", 'Int'>
    readonly woundtypecode: FieldRef<"causeofinjurywoundtype", 'String'>
  }
    

  // Custom InputTypes
  /**
   * causeofinjurywoundtype findUnique
   */
  export type causeofinjurywoundtypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjurywoundtype to fetch.
     */
    where: causeofinjurywoundtypeWhereUniqueInput
  }

  /**
   * causeofinjurywoundtype findUniqueOrThrow
   */
  export type causeofinjurywoundtypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjurywoundtype to fetch.
     */
    where: causeofinjurywoundtypeWhereUniqueInput
  }

  /**
   * causeofinjurywoundtype findFirst
   */
  export type causeofinjurywoundtypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjurywoundtype to fetch.
     */
    where?: causeofinjurywoundtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of causeofinjurywoundtypes to fetch.
     */
    orderBy?: causeofinjurywoundtypeOrderByWithRelationInput | causeofinjurywoundtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for causeofinjurywoundtypes.
     */
    cursor?: causeofinjurywoundtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` causeofinjurywoundtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` causeofinjurywoundtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of causeofinjurywoundtypes.
     */
    distinct?: CauseofinjurywoundtypeScalarFieldEnum | CauseofinjurywoundtypeScalarFieldEnum[]
  }

  /**
   * causeofinjurywoundtype findFirstOrThrow
   */
  export type causeofinjurywoundtypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjurywoundtype to fetch.
     */
    where?: causeofinjurywoundtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of causeofinjurywoundtypes to fetch.
     */
    orderBy?: causeofinjurywoundtypeOrderByWithRelationInput | causeofinjurywoundtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for causeofinjurywoundtypes.
     */
    cursor?: causeofinjurywoundtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` causeofinjurywoundtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` causeofinjurywoundtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of causeofinjurywoundtypes.
     */
    distinct?: CauseofinjurywoundtypeScalarFieldEnum | CauseofinjurywoundtypeScalarFieldEnum[]
  }

  /**
   * causeofinjurywoundtype findMany
   */
  export type causeofinjurywoundtypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjurywoundtypes to fetch.
     */
    where?: causeofinjurywoundtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of causeofinjurywoundtypes to fetch.
     */
    orderBy?: causeofinjurywoundtypeOrderByWithRelationInput | causeofinjurywoundtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing causeofinjurywoundtypes.
     */
    cursor?: causeofinjurywoundtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` causeofinjurywoundtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` causeofinjurywoundtypes.
     */
    skip?: number
    distinct?: CauseofinjurywoundtypeScalarFieldEnum | CauseofinjurywoundtypeScalarFieldEnum[]
  }

  /**
   * causeofinjurywoundtype create
   */
  export type causeofinjurywoundtypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * The data needed to create a causeofinjurywoundtype.
     */
    data: XOR<causeofinjurywoundtypeCreateInput, causeofinjurywoundtypeUncheckedCreateInput>
  }

  /**
   * causeofinjurywoundtype createMany
   */
  export type causeofinjurywoundtypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many causeofinjurywoundtypes.
     */
    data: causeofinjurywoundtypeCreateManyInput | causeofinjurywoundtypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * causeofinjurywoundtype createManyAndReturn
   */
  export type causeofinjurywoundtypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many causeofinjurywoundtypes.
     */
    data: causeofinjurywoundtypeCreateManyInput | causeofinjurywoundtypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * causeofinjurywoundtype update
   */
  export type causeofinjurywoundtypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * The data needed to update a causeofinjurywoundtype.
     */
    data: XOR<causeofinjurywoundtypeUpdateInput, causeofinjurywoundtypeUncheckedUpdateInput>
    /**
     * Choose, which causeofinjurywoundtype to update.
     */
    where: causeofinjurywoundtypeWhereUniqueInput
  }

  /**
   * causeofinjurywoundtype updateMany
   */
  export type causeofinjurywoundtypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update causeofinjurywoundtypes.
     */
    data: XOR<causeofinjurywoundtypeUpdateManyMutationInput, causeofinjurywoundtypeUncheckedUpdateManyInput>
    /**
     * Filter which causeofinjurywoundtypes to update
     */
    where?: causeofinjurywoundtypeWhereInput
  }

  /**
   * causeofinjurywoundtype upsert
   */
  export type causeofinjurywoundtypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * The filter to search for the causeofinjurywoundtype to update in case it exists.
     */
    where: causeofinjurywoundtypeWhereUniqueInput
    /**
     * In case the causeofinjurywoundtype found by the `where` argument doesn't exist, create a new causeofinjurywoundtype with this data.
     */
    create: XOR<causeofinjurywoundtypeCreateInput, causeofinjurywoundtypeUncheckedCreateInput>
    /**
     * In case the causeofinjurywoundtype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<causeofinjurywoundtypeUpdateInput, causeofinjurywoundtypeUncheckedUpdateInput>
  }

  /**
   * causeofinjurywoundtype delete
   */
  export type causeofinjurywoundtypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
    /**
     * Filter which causeofinjurywoundtype to delete.
     */
    where: causeofinjurywoundtypeWhereUniqueInput
  }

  /**
   * causeofinjurywoundtype deleteMany
   */
  export type causeofinjurywoundtypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which causeofinjurywoundtypes to delete
     */
    where?: causeofinjurywoundtypeWhereInput
  }

  /**
   * causeofinjurywoundtype without action
   */
  export type causeofinjurywoundtypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjurywoundtype
     */
    select?: causeofinjurywoundtypeSelect<ExtArgs> | null
  }


  /**
   * Model causeofinjuryside
   */

  export type AggregateCauseofinjuryside = {
    _count: CauseofinjurysideCountAggregateOutputType | null
    _avg: CauseofinjurysideAvgAggregateOutputType | null
    _sum: CauseofinjurysideSumAggregateOutputType | null
    _min: CauseofinjurysideMinAggregateOutputType | null
    _max: CauseofinjurysideMaxAggregateOutputType | null
  }

  export type CauseofinjurysideAvgAggregateOutputType = {
    insurerid: number | null
    id: number | null
  }

  export type CauseofinjurysideSumAggregateOutputType = {
    insurerid: number | null
    id: number | null
  }

  export type CauseofinjurysideMinAggregateOutputType = {
    insurerid: number | null
    injurysidename: string | null
    injurysidecode: string | null
    id: number | null
  }

  export type CauseofinjurysideMaxAggregateOutputType = {
    insurerid: number | null
    injurysidename: string | null
    injurysidecode: string | null
    id: number | null
  }

  export type CauseofinjurysideCountAggregateOutputType = {
    insurerid: number
    injurysidename: number
    injurysidecode: number
    id: number
    _all: number
  }


  export type CauseofinjurysideAvgAggregateInputType = {
    insurerid?: true
    id?: true
  }

  export type CauseofinjurysideSumAggregateInputType = {
    insurerid?: true
    id?: true
  }

  export type CauseofinjurysideMinAggregateInputType = {
    insurerid?: true
    injurysidename?: true
    injurysidecode?: true
    id?: true
  }

  export type CauseofinjurysideMaxAggregateInputType = {
    insurerid?: true
    injurysidename?: true
    injurysidecode?: true
    id?: true
  }

  export type CauseofinjurysideCountAggregateInputType = {
    insurerid?: true
    injurysidename?: true
    injurysidecode?: true
    id?: true
    _all?: true
  }

  export type CauseofinjurysideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which causeofinjuryside to aggregate.
     */
    where?: causeofinjurysideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of causeofinjurysides to fetch.
     */
    orderBy?: causeofinjurysideOrderByWithRelationInput | causeofinjurysideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: causeofinjurysideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` causeofinjurysides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` causeofinjurysides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned causeofinjurysides
    **/
    _count?: true | CauseofinjurysideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CauseofinjurysideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CauseofinjurysideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CauseofinjurysideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CauseofinjurysideMaxAggregateInputType
  }

  export type GetCauseofinjurysideAggregateType<T extends CauseofinjurysideAggregateArgs> = {
        [P in keyof T & keyof AggregateCauseofinjuryside]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCauseofinjuryside[P]>
      : GetScalarType<T[P], AggregateCauseofinjuryside[P]>
  }




  export type causeofinjurysideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: causeofinjurysideWhereInput
    orderBy?: causeofinjurysideOrderByWithAggregationInput | causeofinjurysideOrderByWithAggregationInput[]
    by: CauseofinjurysideScalarFieldEnum[] | CauseofinjurysideScalarFieldEnum
    having?: causeofinjurysideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CauseofinjurysideCountAggregateInputType | true
    _avg?: CauseofinjurysideAvgAggregateInputType
    _sum?: CauseofinjurysideSumAggregateInputType
    _min?: CauseofinjurysideMinAggregateInputType
    _max?: CauseofinjurysideMaxAggregateInputType
  }

  export type CauseofinjurysideGroupByOutputType = {
    insurerid: number
    injurysidename: string
    injurysidecode: string | null
    id: number
    _count: CauseofinjurysideCountAggregateOutputType | null
    _avg: CauseofinjurysideAvgAggregateOutputType | null
    _sum: CauseofinjurysideSumAggregateOutputType | null
    _min: CauseofinjurysideMinAggregateOutputType | null
    _max: CauseofinjurysideMaxAggregateOutputType | null
  }

  type GetCauseofinjurysideGroupByPayload<T extends causeofinjurysideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CauseofinjurysideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CauseofinjurysideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CauseofinjurysideGroupByOutputType[P]>
            : GetScalarType<T[P], CauseofinjurysideGroupByOutputType[P]>
        }
      >
    >


  export type causeofinjurysideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    injurysidename?: boolean
    injurysidecode?: boolean
    id?: boolean
  }, ExtArgs["result"]["causeofinjuryside"]>

  export type causeofinjurysideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    injurysidename?: boolean
    injurysidecode?: boolean
    id?: boolean
  }, ExtArgs["result"]["causeofinjuryside"]>

  export type causeofinjurysideSelectScalar = {
    insurerid?: boolean
    injurysidename?: boolean
    injurysidecode?: boolean
    id?: boolean
  }


  export type $causeofinjurysidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "causeofinjuryside"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      insurerid: number
      injurysidename: string
      injurysidecode: string | null
      id: number
    }, ExtArgs["result"]["causeofinjuryside"]>
    composites: {}
  }

  type causeofinjurysideGetPayload<S extends boolean | null | undefined | causeofinjurysideDefaultArgs> = $Result.GetResult<Prisma.$causeofinjurysidePayload, S>

  type causeofinjurysideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<causeofinjurysideFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CauseofinjurysideCountAggregateInputType | true
    }

  export interface causeofinjurysideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['causeofinjuryside'], meta: { name: 'causeofinjuryside' } }
    /**
     * Find zero or one Causeofinjuryside that matches the filter.
     * @param {causeofinjurysideFindUniqueArgs} args - Arguments to find a Causeofinjuryside
     * @example
     * // Get one Causeofinjuryside
     * const causeofinjuryside = await prisma.causeofinjuryside.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends causeofinjurysideFindUniqueArgs>(args: SelectSubset<T, causeofinjurysideFindUniqueArgs<ExtArgs>>): Prisma__causeofinjurysideClient<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Causeofinjuryside that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {causeofinjurysideFindUniqueOrThrowArgs} args - Arguments to find a Causeofinjuryside
     * @example
     * // Get one Causeofinjuryside
     * const causeofinjuryside = await prisma.causeofinjuryside.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends causeofinjurysideFindUniqueOrThrowArgs>(args: SelectSubset<T, causeofinjurysideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__causeofinjurysideClient<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Causeofinjuryside that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurysideFindFirstArgs} args - Arguments to find a Causeofinjuryside
     * @example
     * // Get one Causeofinjuryside
     * const causeofinjuryside = await prisma.causeofinjuryside.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends causeofinjurysideFindFirstArgs>(args?: SelectSubset<T, causeofinjurysideFindFirstArgs<ExtArgs>>): Prisma__causeofinjurysideClient<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Causeofinjuryside that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurysideFindFirstOrThrowArgs} args - Arguments to find a Causeofinjuryside
     * @example
     * // Get one Causeofinjuryside
     * const causeofinjuryside = await prisma.causeofinjuryside.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends causeofinjurysideFindFirstOrThrowArgs>(args?: SelectSubset<T, causeofinjurysideFindFirstOrThrowArgs<ExtArgs>>): Prisma__causeofinjurysideClient<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Causeofinjurysides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurysideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Causeofinjurysides
     * const causeofinjurysides = await prisma.causeofinjuryside.findMany()
     * 
     * // Get first 10 Causeofinjurysides
     * const causeofinjurysides = await prisma.causeofinjuryside.findMany({ take: 10 })
     * 
     * // Only select the `insurerid`
     * const causeofinjurysideWithInsureridOnly = await prisma.causeofinjuryside.findMany({ select: { insurerid: true } })
     * 
     */
    findMany<T extends causeofinjurysideFindManyArgs>(args?: SelectSubset<T, causeofinjurysideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Causeofinjuryside.
     * @param {causeofinjurysideCreateArgs} args - Arguments to create a Causeofinjuryside.
     * @example
     * // Create one Causeofinjuryside
     * const Causeofinjuryside = await prisma.causeofinjuryside.create({
     *   data: {
     *     // ... data to create a Causeofinjuryside
     *   }
     * })
     * 
     */
    create<T extends causeofinjurysideCreateArgs>(args: SelectSubset<T, causeofinjurysideCreateArgs<ExtArgs>>): Prisma__causeofinjurysideClient<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Causeofinjurysides.
     * @param {causeofinjurysideCreateManyArgs} args - Arguments to create many Causeofinjurysides.
     * @example
     * // Create many Causeofinjurysides
     * const causeofinjuryside = await prisma.causeofinjuryside.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends causeofinjurysideCreateManyArgs>(args?: SelectSubset<T, causeofinjurysideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Causeofinjurysides and returns the data saved in the database.
     * @param {causeofinjurysideCreateManyAndReturnArgs} args - Arguments to create many Causeofinjurysides.
     * @example
     * // Create many Causeofinjurysides
     * const causeofinjuryside = await prisma.causeofinjuryside.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Causeofinjurysides and only return the `insurerid`
     * const causeofinjurysideWithInsureridOnly = await prisma.causeofinjuryside.createManyAndReturn({ 
     *   select: { insurerid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends causeofinjurysideCreateManyAndReturnArgs>(args?: SelectSubset<T, causeofinjurysideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Causeofinjuryside.
     * @param {causeofinjurysideDeleteArgs} args - Arguments to delete one Causeofinjuryside.
     * @example
     * // Delete one Causeofinjuryside
     * const Causeofinjuryside = await prisma.causeofinjuryside.delete({
     *   where: {
     *     // ... filter to delete one Causeofinjuryside
     *   }
     * })
     * 
     */
    delete<T extends causeofinjurysideDeleteArgs>(args: SelectSubset<T, causeofinjurysideDeleteArgs<ExtArgs>>): Prisma__causeofinjurysideClient<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Causeofinjuryside.
     * @param {causeofinjurysideUpdateArgs} args - Arguments to update one Causeofinjuryside.
     * @example
     * // Update one Causeofinjuryside
     * const causeofinjuryside = await prisma.causeofinjuryside.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends causeofinjurysideUpdateArgs>(args: SelectSubset<T, causeofinjurysideUpdateArgs<ExtArgs>>): Prisma__causeofinjurysideClient<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Causeofinjurysides.
     * @param {causeofinjurysideDeleteManyArgs} args - Arguments to filter Causeofinjurysides to delete.
     * @example
     * // Delete a few Causeofinjurysides
     * const { count } = await prisma.causeofinjuryside.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends causeofinjurysideDeleteManyArgs>(args?: SelectSubset<T, causeofinjurysideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Causeofinjurysides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurysideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Causeofinjurysides
     * const causeofinjuryside = await prisma.causeofinjuryside.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends causeofinjurysideUpdateManyArgs>(args: SelectSubset<T, causeofinjurysideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Causeofinjuryside.
     * @param {causeofinjurysideUpsertArgs} args - Arguments to update or create a Causeofinjuryside.
     * @example
     * // Update or create a Causeofinjuryside
     * const causeofinjuryside = await prisma.causeofinjuryside.upsert({
     *   create: {
     *     // ... data to create a Causeofinjuryside
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Causeofinjuryside we want to update
     *   }
     * })
     */
    upsert<T extends causeofinjurysideUpsertArgs>(args: SelectSubset<T, causeofinjurysideUpsertArgs<ExtArgs>>): Prisma__causeofinjurysideClient<$Result.GetResult<Prisma.$causeofinjurysidePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Causeofinjurysides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurysideCountArgs} args - Arguments to filter Causeofinjurysides to count.
     * @example
     * // Count the number of Causeofinjurysides
     * const count = await prisma.causeofinjuryside.count({
     *   where: {
     *     // ... the filter for the Causeofinjurysides we want to count
     *   }
     * })
    **/
    count<T extends causeofinjurysideCountArgs>(
      args?: Subset<T, causeofinjurysideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CauseofinjurysideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Causeofinjuryside.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseofinjurysideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CauseofinjurysideAggregateArgs>(args: Subset<T, CauseofinjurysideAggregateArgs>): Prisma.PrismaPromise<GetCauseofinjurysideAggregateType<T>>

    /**
     * Group by Causeofinjuryside.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {causeofinjurysideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends causeofinjurysideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: causeofinjurysideGroupByArgs['orderBy'] }
        : { orderBy?: causeofinjurysideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, causeofinjurysideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCauseofinjurysideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the causeofinjuryside model
   */
  readonly fields: causeofinjurysideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for causeofinjuryside.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__causeofinjurysideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the causeofinjuryside model
   */ 
  interface causeofinjurysideFieldRefs {
    readonly insurerid: FieldRef<"causeofinjuryside", 'Int'>
    readonly injurysidename: FieldRef<"causeofinjuryside", 'String'>
    readonly injurysidecode: FieldRef<"causeofinjuryside", 'String'>
    readonly id: FieldRef<"causeofinjuryside", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * causeofinjuryside findUnique
   */
  export type causeofinjurysideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjuryside to fetch.
     */
    where: causeofinjurysideWhereUniqueInput
  }

  /**
   * causeofinjuryside findUniqueOrThrow
   */
  export type causeofinjurysideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjuryside to fetch.
     */
    where: causeofinjurysideWhereUniqueInput
  }

  /**
   * causeofinjuryside findFirst
   */
  export type causeofinjurysideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjuryside to fetch.
     */
    where?: causeofinjurysideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of causeofinjurysides to fetch.
     */
    orderBy?: causeofinjurysideOrderByWithRelationInput | causeofinjurysideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for causeofinjurysides.
     */
    cursor?: causeofinjurysideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` causeofinjurysides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` causeofinjurysides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of causeofinjurysides.
     */
    distinct?: CauseofinjurysideScalarFieldEnum | CauseofinjurysideScalarFieldEnum[]
  }

  /**
   * causeofinjuryside findFirstOrThrow
   */
  export type causeofinjurysideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjuryside to fetch.
     */
    where?: causeofinjurysideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of causeofinjurysides to fetch.
     */
    orderBy?: causeofinjurysideOrderByWithRelationInput | causeofinjurysideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for causeofinjurysides.
     */
    cursor?: causeofinjurysideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` causeofinjurysides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` causeofinjurysides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of causeofinjurysides.
     */
    distinct?: CauseofinjurysideScalarFieldEnum | CauseofinjurysideScalarFieldEnum[]
  }

  /**
   * causeofinjuryside findMany
   */
  export type causeofinjurysideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * Filter, which causeofinjurysides to fetch.
     */
    where?: causeofinjurysideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of causeofinjurysides to fetch.
     */
    orderBy?: causeofinjurysideOrderByWithRelationInput | causeofinjurysideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing causeofinjurysides.
     */
    cursor?: causeofinjurysideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` causeofinjurysides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` causeofinjurysides.
     */
    skip?: number
    distinct?: CauseofinjurysideScalarFieldEnum | CauseofinjurysideScalarFieldEnum[]
  }

  /**
   * causeofinjuryside create
   */
  export type causeofinjurysideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * The data needed to create a causeofinjuryside.
     */
    data: XOR<causeofinjurysideCreateInput, causeofinjurysideUncheckedCreateInput>
  }

  /**
   * causeofinjuryside createMany
   */
  export type causeofinjurysideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many causeofinjurysides.
     */
    data: causeofinjurysideCreateManyInput | causeofinjurysideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * causeofinjuryside createManyAndReturn
   */
  export type causeofinjurysideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many causeofinjurysides.
     */
    data: causeofinjurysideCreateManyInput | causeofinjurysideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * causeofinjuryside update
   */
  export type causeofinjurysideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * The data needed to update a causeofinjuryside.
     */
    data: XOR<causeofinjurysideUpdateInput, causeofinjurysideUncheckedUpdateInput>
    /**
     * Choose, which causeofinjuryside to update.
     */
    where: causeofinjurysideWhereUniqueInput
  }

  /**
   * causeofinjuryside updateMany
   */
  export type causeofinjurysideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update causeofinjurysides.
     */
    data: XOR<causeofinjurysideUpdateManyMutationInput, causeofinjurysideUncheckedUpdateManyInput>
    /**
     * Filter which causeofinjurysides to update
     */
    where?: causeofinjurysideWhereInput
  }

  /**
   * causeofinjuryside upsert
   */
  export type causeofinjurysideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * The filter to search for the causeofinjuryside to update in case it exists.
     */
    where: causeofinjurysideWhereUniqueInput
    /**
     * In case the causeofinjuryside found by the `where` argument doesn't exist, create a new causeofinjuryside with this data.
     */
    create: XOR<causeofinjurysideCreateInput, causeofinjurysideUncheckedCreateInput>
    /**
     * In case the causeofinjuryside was found with the provided `where` argument, update it with this data.
     */
    update: XOR<causeofinjurysideUpdateInput, causeofinjurysideUncheckedUpdateInput>
  }

  /**
   * causeofinjuryside delete
   */
  export type causeofinjurysideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
    /**
     * Filter which causeofinjuryside to delete.
     */
    where: causeofinjurysideWhereUniqueInput
  }

  /**
   * causeofinjuryside deleteMany
   */
  export type causeofinjurysideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which causeofinjurysides to delete
     */
    where?: causeofinjurysideWhereInput
  }

  /**
   * causeofinjuryside without action
   */
  export type causeofinjurysideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the causeofinjuryside
     */
    select?: causeofinjurysideSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClaimStatusScalarFieldEnum: {
    id: 'id',
    StatusCode: 'StatusCode',
    StatusDescTH: 'StatusDescTH',
    StatusDescEN: 'StatusDescEN',
    insurerid: 'insurerid'
  };

  export type ClaimStatusScalarFieldEnum = (typeof ClaimStatusScalarFieldEnum)[keyof typeof ClaimStatusScalarFieldEnum]


  export const IllnessSurgeryScalarFieldEnum: {
    id: 'id',
    ISCode: 'ISCode',
    ISDescription: 'ISDescription',
    insurerid: 'insurerid'
  };

  export type IllnessSurgeryScalarFieldEnum = (typeof IllnessSurgeryScalarFieldEnum)[keyof typeof IllnessSurgeryScalarFieldEnum]


  export const IllnessTypeScalarFieldEnum: {
    id: 'id',
    IllnessTypeCode: 'IllnessTypeCode',
    IllnessTypeDesc: 'IllnessTypeDesc',
    insurerid: 'insurerid'
  };

  export type IllnessTypeScalarFieldEnum = (typeof IllnessTypeScalarFieldEnum)[keyof typeof IllnessTypeScalarFieldEnum]


  export const PolicyTypeScalarFieldEnum: {
    id: 'id',
    PolicyTypeCode: 'PolicyTypeCode',
    PolicyTypeDesc: 'PolicyTypeDesc',
    insurerid: 'insurerid'
  };

  export type PolicyTypeScalarFieldEnum = (typeof PolicyTypeScalarFieldEnum)[keyof typeof PolicyTypeScalarFieldEnum]


  export const ServiceSettingScalarFieldEnum: {
    id: 'id',
    ServiceSettingCode: 'ServiceSettingCode',
    ServiceSettingDesc: 'ServiceSettingDesc',
    insurerid: 'insurerid'
  };

  export type ServiceSettingScalarFieldEnum = (typeof ServiceSettingScalarFieldEnum)[keyof typeof ServiceSettingScalarFieldEnum]


  export const ClaimantsScalarFieldEnum: {
    claimantid: 'claimantid',
    pid: 'pid',
    passportnumber: 'passportnumber',
    hn: 'hn',
    title_th: 'title_th',
    givenname_th: 'givenname_th',
    surname_th: 'surname_th',
    title_en: 'title_en',
    givenname_en: 'givenname_en',
    surname_en: 'surname_en',
    mobilephone: 'mobilephone',
    insurerid: 'insurerid',
    statusactive: 'statusactive',
    registrationdate: 'registrationdate',
    dateofbirth: 'dateofbirth',
    gender: 'gender',
    patientid: 'patientid'
  };

  export type ClaimantsScalarFieldEnum = (typeof ClaimantsScalarFieldEnum)[keyof typeof ClaimantsScalarFieldEnum]


  export const InsurersScalarFieldEnum: {
    insurerid: 'insurerid',
    insurercode: 'insurercode',
    insurername: 'insurername',
    registrationdate: 'registrationdate'
  };

  export type InsurersScalarFieldEnum = (typeof InsurersScalarFieldEnum)[keyof typeof InsurersScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    refid: 'refid',
    transactionid: 'transactionid',
    statusid: 'statusid',
    updatedate: 'updatedate',
    hn: 'hn',
    vn: 'vn',
    insurerid: 'insurerid',
    accidentdate: 'accidentdate'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const DiagnosisTypeMappingScalarFieldEnum: {
    insurerid: 'insurerid',
    dxtypecodetrakcare: 'dxtypecodetrakcare',
    dxtypenametrakcare: 'dxtypenametrakcare',
    dxtypecodeinsurance: 'dxtypecodeinsurance',
    dxtypenameinsurance: 'dxtypenameinsurance'
  };

  export type DiagnosisTypeMappingScalarFieldEnum = (typeof DiagnosisTypeMappingScalarFieldEnum)[keyof typeof DiagnosisTypeMappingScalarFieldEnum]


  export const AccidentplaceScalarFieldEnum: {
    insurerid: 'insurerid',
    accidentplacecode: 'accidentplacecode',
    accidentplacename: 'accidentplacename'
  };

  export type AccidentplaceScalarFieldEnum = (typeof AccidentplaceScalarFieldEnum)[keyof typeof AccidentplaceScalarFieldEnum]


  export const CauseofinjurywoundtypeScalarFieldEnum: {
    insurerid: 'insurerid',
    woundtypename: 'woundtypename',
    id: 'id',
    woundtypecode: 'woundtypecode'
  };

  export type CauseofinjurywoundtypeScalarFieldEnum = (typeof CauseofinjurywoundtypeScalarFieldEnum)[keyof typeof CauseofinjurywoundtypeScalarFieldEnum]


  export const CauseofinjurysideScalarFieldEnum: {
    insurerid: 'insurerid',
    injurysidename: 'injurysidename',
    injurysidecode: 'injurysidecode',
    id: 'id'
  };

  export type CauseofinjurysideScalarFieldEnum = (typeof CauseofinjurysideScalarFieldEnum)[keyof typeof CauseofinjurysideScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClaimStatusWhereInput = {
    AND?: ClaimStatusWhereInput | ClaimStatusWhereInput[]
    OR?: ClaimStatusWhereInput[]
    NOT?: ClaimStatusWhereInput | ClaimStatusWhereInput[]
    id?: IntFilter<"ClaimStatus"> | number
    StatusCode?: StringFilter<"ClaimStatus"> | string
    StatusDescTH?: StringNullableFilter<"ClaimStatus"> | string | null
    StatusDescEN?: StringNullableFilter<"ClaimStatus"> | string | null
    insurerid?: IntNullableFilter<"ClaimStatus"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
    Transactions?: TransactionsListRelationFilter
  }

  export type ClaimStatusOrderByWithRelationInput = {
    id?: SortOrder
    StatusCode?: SortOrder
    StatusDescTH?: SortOrderInput | SortOrder
    StatusDescEN?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: InsurersOrderByWithRelationInput
    Transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type ClaimStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClaimStatusWhereInput | ClaimStatusWhereInput[]
    OR?: ClaimStatusWhereInput[]
    NOT?: ClaimStatusWhereInput | ClaimStatusWhereInput[]
    StatusCode?: StringFilter<"ClaimStatus"> | string
    StatusDescTH?: StringNullableFilter<"ClaimStatus"> | string | null
    StatusDescEN?: StringNullableFilter<"ClaimStatus"> | string | null
    insurerid?: IntNullableFilter<"ClaimStatus"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
    Transactions?: TransactionsListRelationFilter
  }, "id">

  export type ClaimStatusOrderByWithAggregationInput = {
    id?: SortOrder
    StatusCode?: SortOrder
    StatusDescTH?: SortOrderInput | SortOrder
    StatusDescEN?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    _count?: ClaimStatusCountOrderByAggregateInput
    _avg?: ClaimStatusAvgOrderByAggregateInput
    _max?: ClaimStatusMaxOrderByAggregateInput
    _min?: ClaimStatusMinOrderByAggregateInput
    _sum?: ClaimStatusSumOrderByAggregateInput
  }

  export type ClaimStatusScalarWhereWithAggregatesInput = {
    AND?: ClaimStatusScalarWhereWithAggregatesInput | ClaimStatusScalarWhereWithAggregatesInput[]
    OR?: ClaimStatusScalarWhereWithAggregatesInput[]
    NOT?: ClaimStatusScalarWhereWithAggregatesInput | ClaimStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClaimStatus"> | number
    StatusCode?: StringWithAggregatesFilter<"ClaimStatus"> | string
    StatusDescTH?: StringNullableWithAggregatesFilter<"ClaimStatus"> | string | null
    StatusDescEN?: StringNullableWithAggregatesFilter<"ClaimStatus"> | string | null
    insurerid?: IntNullableWithAggregatesFilter<"ClaimStatus"> | number | null
  }

  export type IllnessSurgeryWhereInput = {
    AND?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    OR?: IllnessSurgeryWhereInput[]
    NOT?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    id?: IntFilter<"IllnessSurgery"> | number
    ISCode?: StringFilter<"IllnessSurgery"> | string
    ISDescription?: StringNullableFilter<"IllnessSurgery"> | string | null
    insurerid?: IntNullableFilter<"IllnessSurgery"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
  }

  export type IllnessSurgeryOrderByWithRelationInput = {
    id?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: InsurersOrderByWithRelationInput
  }

  export type IllnessSurgeryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    OR?: IllnessSurgeryWhereInput[]
    NOT?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    ISCode?: StringFilter<"IllnessSurgery"> | string
    ISDescription?: StringNullableFilter<"IllnessSurgery"> | string | null
    insurerid?: IntNullableFilter<"IllnessSurgery"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
  }, "id">

  export type IllnessSurgeryOrderByWithAggregationInput = {
    id?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    _count?: IllnessSurgeryCountOrderByAggregateInput
    _avg?: IllnessSurgeryAvgOrderByAggregateInput
    _max?: IllnessSurgeryMaxOrderByAggregateInput
    _min?: IllnessSurgeryMinOrderByAggregateInput
    _sum?: IllnessSurgerySumOrderByAggregateInput
  }

  export type IllnessSurgeryScalarWhereWithAggregatesInput = {
    AND?: IllnessSurgeryScalarWhereWithAggregatesInput | IllnessSurgeryScalarWhereWithAggregatesInput[]
    OR?: IllnessSurgeryScalarWhereWithAggregatesInput[]
    NOT?: IllnessSurgeryScalarWhereWithAggregatesInput | IllnessSurgeryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IllnessSurgery"> | number
    ISCode?: StringWithAggregatesFilter<"IllnessSurgery"> | string
    ISDescription?: StringNullableWithAggregatesFilter<"IllnessSurgery"> | string | null
    insurerid?: IntNullableWithAggregatesFilter<"IllnessSurgery"> | number | null
  }

  export type IllnessTypeWhereInput = {
    AND?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    OR?: IllnessTypeWhereInput[]
    NOT?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    id?: IntFilter<"IllnessType"> | number
    IllnessTypeCode?: StringFilter<"IllnessType"> | string
    IllnessTypeDesc?: StringNullableFilter<"IllnessType"> | string | null
    insurerid?: IntNullableFilter<"IllnessType"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
  }

  export type IllnessTypeOrderByWithRelationInput = {
    id?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: InsurersOrderByWithRelationInput
  }

  export type IllnessTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    OR?: IllnessTypeWhereInput[]
    NOT?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    IllnessTypeCode?: StringFilter<"IllnessType"> | string
    IllnessTypeDesc?: StringNullableFilter<"IllnessType"> | string | null
    insurerid?: IntNullableFilter<"IllnessType"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
  }, "id">

  export type IllnessTypeOrderByWithAggregationInput = {
    id?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    _count?: IllnessTypeCountOrderByAggregateInput
    _avg?: IllnessTypeAvgOrderByAggregateInput
    _max?: IllnessTypeMaxOrderByAggregateInput
    _min?: IllnessTypeMinOrderByAggregateInput
    _sum?: IllnessTypeSumOrderByAggregateInput
  }

  export type IllnessTypeScalarWhereWithAggregatesInput = {
    AND?: IllnessTypeScalarWhereWithAggregatesInput | IllnessTypeScalarWhereWithAggregatesInput[]
    OR?: IllnessTypeScalarWhereWithAggregatesInput[]
    NOT?: IllnessTypeScalarWhereWithAggregatesInput | IllnessTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IllnessType"> | number
    IllnessTypeCode?: StringWithAggregatesFilter<"IllnessType"> | string
    IllnessTypeDesc?: StringNullableWithAggregatesFilter<"IllnessType"> | string | null
    insurerid?: IntNullableWithAggregatesFilter<"IllnessType"> | number | null
  }

  export type PolicyTypeWhereInput = {
    AND?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    OR?: PolicyTypeWhereInput[]
    NOT?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    id?: IntFilter<"PolicyType"> | number
    PolicyTypeCode?: StringFilter<"PolicyType"> | string
    PolicyTypeDesc?: StringNullableFilter<"PolicyType"> | string | null
    insurerid?: IntNullableFilter<"PolicyType"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
  }

  export type PolicyTypeOrderByWithRelationInput = {
    id?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: InsurersOrderByWithRelationInput
  }

  export type PolicyTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    OR?: PolicyTypeWhereInput[]
    NOT?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    PolicyTypeCode?: StringFilter<"PolicyType"> | string
    PolicyTypeDesc?: StringNullableFilter<"PolicyType"> | string | null
    insurerid?: IntNullableFilter<"PolicyType"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
  }, "id">

  export type PolicyTypeOrderByWithAggregationInput = {
    id?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    _count?: PolicyTypeCountOrderByAggregateInput
    _avg?: PolicyTypeAvgOrderByAggregateInput
    _max?: PolicyTypeMaxOrderByAggregateInput
    _min?: PolicyTypeMinOrderByAggregateInput
    _sum?: PolicyTypeSumOrderByAggregateInput
  }

  export type PolicyTypeScalarWhereWithAggregatesInput = {
    AND?: PolicyTypeScalarWhereWithAggregatesInput | PolicyTypeScalarWhereWithAggregatesInput[]
    OR?: PolicyTypeScalarWhereWithAggregatesInput[]
    NOT?: PolicyTypeScalarWhereWithAggregatesInput | PolicyTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PolicyType"> | number
    PolicyTypeCode?: StringWithAggregatesFilter<"PolicyType"> | string
    PolicyTypeDesc?: StringNullableWithAggregatesFilter<"PolicyType"> | string | null
    insurerid?: IntNullableWithAggregatesFilter<"PolicyType"> | number | null
  }

  export type ServiceSettingWhereInput = {
    AND?: ServiceSettingWhereInput | ServiceSettingWhereInput[]
    OR?: ServiceSettingWhereInput[]
    NOT?: ServiceSettingWhereInput | ServiceSettingWhereInput[]
    id?: IntFilter<"ServiceSetting"> | number
    ServiceSettingCode?: StringFilter<"ServiceSetting"> | string
    ServiceSettingDesc?: StringFilter<"ServiceSetting"> | string
    insurerid?: IntNullableFilter<"ServiceSetting"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
  }

  export type ServiceSettingOrderByWithRelationInput = {
    id?: SortOrder
    ServiceSettingCode?: SortOrder
    ServiceSettingDesc?: SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: InsurersOrderByWithRelationInput
  }

  export type ServiceSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceSettingWhereInput | ServiceSettingWhereInput[]
    OR?: ServiceSettingWhereInput[]
    NOT?: ServiceSettingWhereInput | ServiceSettingWhereInput[]
    ServiceSettingCode?: StringFilter<"ServiceSetting"> | string
    ServiceSettingDesc?: StringFilter<"ServiceSetting"> | string
    insurerid?: IntNullableFilter<"ServiceSetting"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
  }, "id">

  export type ServiceSettingOrderByWithAggregationInput = {
    id?: SortOrder
    ServiceSettingCode?: SortOrder
    ServiceSettingDesc?: SortOrder
    insurerid?: SortOrderInput | SortOrder
    _count?: ServiceSettingCountOrderByAggregateInput
    _avg?: ServiceSettingAvgOrderByAggregateInput
    _max?: ServiceSettingMaxOrderByAggregateInput
    _min?: ServiceSettingMinOrderByAggregateInput
    _sum?: ServiceSettingSumOrderByAggregateInput
  }

  export type ServiceSettingScalarWhereWithAggregatesInput = {
    AND?: ServiceSettingScalarWhereWithAggregatesInput | ServiceSettingScalarWhereWithAggregatesInput[]
    OR?: ServiceSettingScalarWhereWithAggregatesInput[]
    NOT?: ServiceSettingScalarWhereWithAggregatesInput | ServiceSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceSetting"> | number
    ServiceSettingCode?: StringWithAggregatesFilter<"ServiceSetting"> | string
    ServiceSettingDesc?: StringWithAggregatesFilter<"ServiceSetting"> | string
    insurerid?: IntNullableWithAggregatesFilter<"ServiceSetting"> | number | null
  }

  export type ClaimantsWhereInput = {
    AND?: ClaimantsWhereInput | ClaimantsWhereInput[]
    OR?: ClaimantsWhereInput[]
    NOT?: ClaimantsWhereInput | ClaimantsWhereInput[]
    claimantid?: IntFilter<"Claimants"> | number
    pid?: StringNullableFilter<"Claimants"> | string | null
    passportnumber?: StringNullableFilter<"Claimants"> | string | null
    hn?: StringNullableFilter<"Claimants"> | string | null
    title_th?: StringNullableFilter<"Claimants"> | string | null
    givenname_th?: StringNullableFilter<"Claimants"> | string | null
    surname_th?: StringNullableFilter<"Claimants"> | string | null
    title_en?: StringNullableFilter<"Claimants"> | string | null
    givenname_en?: StringNullableFilter<"Claimants"> | string | null
    surname_en?: StringNullableFilter<"Claimants"> | string | null
    mobilephone?: StringNullableFilter<"Claimants"> | string | null
    insurerid?: IntNullableFilter<"Claimants"> | number | null
    statusactive?: BoolNullableFilter<"Claimants"> | boolean | null
    registrationdate?: DateTimeNullableFilter<"Claimants"> | Date | string | null
    dateofbirth?: StringNullableFilter<"Claimants"> | string | null
    gender?: StringNullableFilter<"Claimants"> | string | null
    patientid?: IntNullableFilter<"Claimants"> | number | null
    Insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
    Transactions?: TransactionsListRelationFilter
  }

  export type ClaimantsOrderByWithRelationInput = {
    claimantid?: SortOrder
    pid?: SortOrderInput | SortOrder
    passportnumber?: SortOrderInput | SortOrder
    hn?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    givenname_th?: SortOrderInput | SortOrder
    surname_th?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    givenname_en?: SortOrderInput | SortOrder
    surname_en?: SortOrderInput | SortOrder
    mobilephone?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    statusactive?: SortOrderInput | SortOrder
    registrationdate?: SortOrderInput | SortOrder
    dateofbirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    patientid?: SortOrderInput | SortOrder
    Insurers?: InsurersOrderByWithRelationInput
    Transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type ClaimantsWhereUniqueInput = Prisma.AtLeast<{
    claimantid?: number
    hn_insurerid?: ClaimantsHnInsureridCompoundUniqueInput
    AND?: ClaimantsWhereInput | ClaimantsWhereInput[]
    OR?: ClaimantsWhereInput[]
    NOT?: ClaimantsWhereInput | ClaimantsWhereInput[]
    pid?: StringNullableFilter<"Claimants"> | string | null
    passportnumber?: StringNullableFilter<"Claimants"> | string | null
    hn?: StringNullableFilter<"Claimants"> | string | null
    title_th?: StringNullableFilter<"Claimants"> | string | null
    givenname_th?: StringNullableFilter<"Claimants"> | string | null
    surname_th?: StringNullableFilter<"Claimants"> | string | null
    title_en?: StringNullableFilter<"Claimants"> | string | null
    givenname_en?: StringNullableFilter<"Claimants"> | string | null
    surname_en?: StringNullableFilter<"Claimants"> | string | null
    mobilephone?: StringNullableFilter<"Claimants"> | string | null
    insurerid?: IntNullableFilter<"Claimants"> | number | null
    statusactive?: BoolNullableFilter<"Claimants"> | boolean | null
    registrationdate?: DateTimeNullableFilter<"Claimants"> | Date | string | null
    dateofbirth?: StringNullableFilter<"Claimants"> | string | null
    gender?: StringNullableFilter<"Claimants"> | string | null
    patientid?: IntNullableFilter<"Claimants"> | number | null
    Insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
    Transactions?: TransactionsListRelationFilter
  }, "claimantid" | "hn_insurerid">

  export type ClaimantsOrderByWithAggregationInput = {
    claimantid?: SortOrder
    pid?: SortOrderInput | SortOrder
    passportnumber?: SortOrderInput | SortOrder
    hn?: SortOrderInput | SortOrder
    title_th?: SortOrderInput | SortOrder
    givenname_th?: SortOrderInput | SortOrder
    surname_th?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    givenname_en?: SortOrderInput | SortOrder
    surname_en?: SortOrderInput | SortOrder
    mobilephone?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    statusactive?: SortOrderInput | SortOrder
    registrationdate?: SortOrderInput | SortOrder
    dateofbirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    patientid?: SortOrderInput | SortOrder
    _count?: ClaimantsCountOrderByAggregateInput
    _avg?: ClaimantsAvgOrderByAggregateInput
    _max?: ClaimantsMaxOrderByAggregateInput
    _min?: ClaimantsMinOrderByAggregateInput
    _sum?: ClaimantsSumOrderByAggregateInput
  }

  export type ClaimantsScalarWhereWithAggregatesInput = {
    AND?: ClaimantsScalarWhereWithAggregatesInput | ClaimantsScalarWhereWithAggregatesInput[]
    OR?: ClaimantsScalarWhereWithAggregatesInput[]
    NOT?: ClaimantsScalarWhereWithAggregatesInput | ClaimantsScalarWhereWithAggregatesInput[]
    claimantid?: IntWithAggregatesFilter<"Claimants"> | number
    pid?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    passportnumber?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    hn?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    givenname_th?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    surname_th?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    title_en?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    givenname_en?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    surname_en?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    mobilephone?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    insurerid?: IntNullableWithAggregatesFilter<"Claimants"> | number | null
    statusactive?: BoolNullableWithAggregatesFilter<"Claimants"> | boolean | null
    registrationdate?: DateTimeNullableWithAggregatesFilter<"Claimants"> | Date | string | null
    dateofbirth?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Claimants"> | string | null
    patientid?: IntNullableWithAggregatesFilter<"Claimants"> | number | null
  }

  export type InsurersWhereInput = {
    AND?: InsurersWhereInput | InsurersWhereInput[]
    OR?: InsurersWhereInput[]
    NOT?: InsurersWhereInput | InsurersWhereInput[]
    insurerid?: IntFilter<"Insurers"> | number
    insurercode?: IntNullableFilter<"Insurers"> | number | null
    insurername?: StringNullableFilter<"Insurers"> | string | null
    registrationdate?: DateTimeNullableFilter<"Insurers"> | Date | string | null
    ClaimStatus?: ClaimStatusListRelationFilter
    Claimants?: ClaimantsListRelationFilter
    IllnessSurgery?: IllnessSurgeryListRelationFilter
    IllnessType?: IllnessTypeListRelationFilter
    PolicyType?: PolicyTypeListRelationFilter
    ServiceSetting?: ServiceSettingListRelationFilter
    Transactions?: TransactionsListRelationFilter
  }

  export type InsurersOrderByWithRelationInput = {
    insurerid?: SortOrder
    insurercode?: SortOrderInput | SortOrder
    insurername?: SortOrderInput | SortOrder
    registrationdate?: SortOrderInput | SortOrder
    ClaimStatus?: ClaimStatusOrderByRelationAggregateInput
    Claimants?: ClaimantsOrderByRelationAggregateInput
    IllnessSurgery?: IllnessSurgeryOrderByRelationAggregateInput
    IllnessType?: IllnessTypeOrderByRelationAggregateInput
    PolicyType?: PolicyTypeOrderByRelationAggregateInput
    ServiceSetting?: ServiceSettingOrderByRelationAggregateInput
    Transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type InsurersWhereUniqueInput = Prisma.AtLeast<{
    insurerid?: number
    AND?: InsurersWhereInput | InsurersWhereInput[]
    OR?: InsurersWhereInput[]
    NOT?: InsurersWhereInput | InsurersWhereInput[]
    insurercode?: IntNullableFilter<"Insurers"> | number | null
    insurername?: StringNullableFilter<"Insurers"> | string | null
    registrationdate?: DateTimeNullableFilter<"Insurers"> | Date | string | null
    ClaimStatus?: ClaimStatusListRelationFilter
    Claimants?: ClaimantsListRelationFilter
    IllnessSurgery?: IllnessSurgeryListRelationFilter
    IllnessType?: IllnessTypeListRelationFilter
    PolicyType?: PolicyTypeListRelationFilter
    ServiceSetting?: ServiceSettingListRelationFilter
    Transactions?: TransactionsListRelationFilter
  }, "insurerid">

  export type InsurersOrderByWithAggregationInput = {
    insurerid?: SortOrder
    insurercode?: SortOrderInput | SortOrder
    insurername?: SortOrderInput | SortOrder
    registrationdate?: SortOrderInput | SortOrder
    _count?: InsurersCountOrderByAggregateInput
    _avg?: InsurersAvgOrderByAggregateInput
    _max?: InsurersMaxOrderByAggregateInput
    _min?: InsurersMinOrderByAggregateInput
    _sum?: InsurersSumOrderByAggregateInput
  }

  export type InsurersScalarWhereWithAggregatesInput = {
    AND?: InsurersScalarWhereWithAggregatesInput | InsurersScalarWhereWithAggregatesInput[]
    OR?: InsurersScalarWhereWithAggregatesInput[]
    NOT?: InsurersScalarWhereWithAggregatesInput | InsurersScalarWhereWithAggregatesInput[]
    insurerid?: IntWithAggregatesFilter<"Insurers"> | number
    insurercode?: IntNullableWithAggregatesFilter<"Insurers"> | number | null
    insurername?: StringNullableWithAggregatesFilter<"Insurers"> | string | null
    registrationdate?: DateTimeNullableWithAggregatesFilter<"Insurers"> | Date | string | null
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: IntFilter<"Transactions"> | number
    refid?: StringNullableFilter<"Transactions"> | string | null
    transactionid?: StringNullableFilter<"Transactions"> | string | null
    statusid?: IntNullableFilter<"Transactions"> | number | null
    updatedate?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    hn?: StringNullableFilter<"Transactions"> | string | null
    vn?: StringNullableFilter<"Transactions"> | string | null
    insurerid?: IntNullableFilter<"Transactions"> | number | null
    accidentdate?: StringNullableFilter<"Transactions"> | string | null
    Claimants?: XOR<ClaimantsNullableRelationFilter, ClaimantsWhereInput> | null
    Insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
    ClaimStatus?: XOR<ClaimStatusNullableRelationFilter, ClaimStatusWhereInput> | null
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    refid?: SortOrderInput | SortOrder
    transactionid?: SortOrderInput | SortOrder
    statusid?: SortOrderInput | SortOrder
    updatedate?: SortOrderInput | SortOrder
    hn?: SortOrderInput | SortOrder
    vn?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    accidentdate?: SortOrderInput | SortOrder
    Claimants?: ClaimantsOrderByWithRelationInput
    Insurers?: InsurersOrderByWithRelationInput
    ClaimStatus?: ClaimStatusOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    refid?: StringNullableFilter<"Transactions"> | string | null
    transactionid?: StringNullableFilter<"Transactions"> | string | null
    statusid?: IntNullableFilter<"Transactions"> | number | null
    updatedate?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    hn?: StringNullableFilter<"Transactions"> | string | null
    vn?: StringNullableFilter<"Transactions"> | string | null
    insurerid?: IntNullableFilter<"Transactions"> | number | null
    accidentdate?: StringNullableFilter<"Transactions"> | string | null
    Claimants?: XOR<ClaimantsNullableRelationFilter, ClaimantsWhereInput> | null
    Insurers?: XOR<InsurersNullableRelationFilter, InsurersWhereInput> | null
    ClaimStatus?: XOR<ClaimStatusNullableRelationFilter, ClaimStatusWhereInput> | null
  }, "id">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    refid?: SortOrderInput | SortOrder
    transactionid?: SortOrderInput | SortOrder
    statusid?: SortOrderInput | SortOrder
    updatedate?: SortOrderInput | SortOrder
    hn?: SortOrderInput | SortOrder
    vn?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    accidentdate?: SortOrderInput | SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transactions"> | number
    refid?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    transactionid?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    statusid?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    updatedate?: DateTimeNullableWithAggregatesFilter<"Transactions"> | Date | string | null
    hn?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    vn?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    insurerid?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    accidentdate?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
  }

  export type DiagnosisTypeMappingWhereInput = {
    AND?: DiagnosisTypeMappingWhereInput | DiagnosisTypeMappingWhereInput[]
    OR?: DiagnosisTypeMappingWhereInput[]
    NOT?: DiagnosisTypeMappingWhereInput | DiagnosisTypeMappingWhereInput[]
    insurerid?: IntFilter<"DiagnosisTypeMapping"> | number
    dxtypecodetrakcare?: StringFilter<"DiagnosisTypeMapping"> | string
    dxtypenametrakcare?: StringNullableFilter<"DiagnosisTypeMapping"> | string | null
    dxtypecodeinsurance?: StringNullableFilter<"DiagnosisTypeMapping"> | string | null
    dxtypenameinsurance?: StringNullableFilter<"DiagnosisTypeMapping"> | string | null
  }

  export type DiagnosisTypeMappingOrderByWithRelationInput = {
    insurerid?: SortOrder
    dxtypecodetrakcare?: SortOrder
    dxtypenametrakcare?: SortOrderInput | SortOrder
    dxtypecodeinsurance?: SortOrderInput | SortOrder
    dxtypenameinsurance?: SortOrderInput | SortOrder
  }

  export type DiagnosisTypeMappingWhereUniqueInput = Prisma.AtLeast<{
    insurerid_dxtypecodetrakcare?: DiagnosisTypeMappingInsureridDxtypecodetrakcareCompoundUniqueInput
    AND?: DiagnosisTypeMappingWhereInput | DiagnosisTypeMappingWhereInput[]
    OR?: DiagnosisTypeMappingWhereInput[]
    NOT?: DiagnosisTypeMappingWhereInput | DiagnosisTypeMappingWhereInput[]
    insurerid?: IntFilter<"DiagnosisTypeMapping"> | number
    dxtypecodetrakcare?: StringFilter<"DiagnosisTypeMapping"> | string
    dxtypenametrakcare?: StringNullableFilter<"DiagnosisTypeMapping"> | string | null
    dxtypecodeinsurance?: StringNullableFilter<"DiagnosisTypeMapping"> | string | null
    dxtypenameinsurance?: StringNullableFilter<"DiagnosisTypeMapping"> | string | null
  }, "insurerid_dxtypecodetrakcare">

  export type DiagnosisTypeMappingOrderByWithAggregationInput = {
    insurerid?: SortOrder
    dxtypecodetrakcare?: SortOrder
    dxtypenametrakcare?: SortOrderInput | SortOrder
    dxtypecodeinsurance?: SortOrderInput | SortOrder
    dxtypenameinsurance?: SortOrderInput | SortOrder
    _count?: DiagnosisTypeMappingCountOrderByAggregateInput
    _avg?: DiagnosisTypeMappingAvgOrderByAggregateInput
    _max?: DiagnosisTypeMappingMaxOrderByAggregateInput
    _min?: DiagnosisTypeMappingMinOrderByAggregateInput
    _sum?: DiagnosisTypeMappingSumOrderByAggregateInput
  }

  export type DiagnosisTypeMappingScalarWhereWithAggregatesInput = {
    AND?: DiagnosisTypeMappingScalarWhereWithAggregatesInput | DiagnosisTypeMappingScalarWhereWithAggregatesInput[]
    OR?: DiagnosisTypeMappingScalarWhereWithAggregatesInput[]
    NOT?: DiagnosisTypeMappingScalarWhereWithAggregatesInput | DiagnosisTypeMappingScalarWhereWithAggregatesInput[]
    insurerid?: IntWithAggregatesFilter<"DiagnosisTypeMapping"> | number
    dxtypecodetrakcare?: StringWithAggregatesFilter<"DiagnosisTypeMapping"> | string
    dxtypenametrakcare?: StringNullableWithAggregatesFilter<"DiagnosisTypeMapping"> | string | null
    dxtypecodeinsurance?: StringNullableWithAggregatesFilter<"DiagnosisTypeMapping"> | string | null
    dxtypenameinsurance?: StringNullableWithAggregatesFilter<"DiagnosisTypeMapping"> | string | null
  }

  export type accidentplaceWhereInput = {
    AND?: accidentplaceWhereInput | accidentplaceWhereInput[]
    OR?: accidentplaceWhereInput[]
    NOT?: accidentplaceWhereInput | accidentplaceWhereInput[]
    insurerid?: IntFilter<"accidentplace"> | number
    accidentplacecode?: IntFilter<"accidentplace"> | number
    accidentplacename?: StringFilter<"accidentplace"> | string
  }

  export type accidentplaceOrderByWithRelationInput = {
    insurerid?: SortOrder
    accidentplacecode?: SortOrder
    accidentplacename?: SortOrder
  }

  export type accidentplaceWhereUniqueInput = Prisma.AtLeast<{
    insurerid_accidentplacecode?: accidentplaceInsureridAccidentplacecodeCompoundUniqueInput
    AND?: accidentplaceWhereInput | accidentplaceWhereInput[]
    OR?: accidentplaceWhereInput[]
    NOT?: accidentplaceWhereInput | accidentplaceWhereInput[]
    insurerid?: IntFilter<"accidentplace"> | number
    accidentplacecode?: IntFilter<"accidentplace"> | number
    accidentplacename?: StringFilter<"accidentplace"> | string
  }, "insurerid_accidentplacecode">

  export type accidentplaceOrderByWithAggregationInput = {
    insurerid?: SortOrder
    accidentplacecode?: SortOrder
    accidentplacename?: SortOrder
    _count?: accidentplaceCountOrderByAggregateInput
    _avg?: accidentplaceAvgOrderByAggregateInput
    _max?: accidentplaceMaxOrderByAggregateInput
    _min?: accidentplaceMinOrderByAggregateInput
    _sum?: accidentplaceSumOrderByAggregateInput
  }

  export type accidentplaceScalarWhereWithAggregatesInput = {
    AND?: accidentplaceScalarWhereWithAggregatesInput | accidentplaceScalarWhereWithAggregatesInput[]
    OR?: accidentplaceScalarWhereWithAggregatesInput[]
    NOT?: accidentplaceScalarWhereWithAggregatesInput | accidentplaceScalarWhereWithAggregatesInput[]
    insurerid?: IntWithAggregatesFilter<"accidentplace"> | number
    accidentplacecode?: IntWithAggregatesFilter<"accidentplace"> | number
    accidentplacename?: StringWithAggregatesFilter<"accidentplace"> | string
  }

  export type causeofinjurywoundtypeWhereInput = {
    AND?: causeofinjurywoundtypeWhereInput | causeofinjurywoundtypeWhereInput[]
    OR?: causeofinjurywoundtypeWhereInput[]
    NOT?: causeofinjurywoundtypeWhereInput | causeofinjurywoundtypeWhereInput[]
    insurerid?: IntFilter<"causeofinjurywoundtype"> | number
    woundtypename?: StringNullableFilter<"causeofinjurywoundtype"> | string | null
    id?: IntFilter<"causeofinjurywoundtype"> | number
    woundtypecode?: StringFilter<"causeofinjurywoundtype"> | string
  }

  export type causeofinjurywoundtypeOrderByWithRelationInput = {
    insurerid?: SortOrder
    woundtypename?: SortOrderInput | SortOrder
    id?: SortOrder
    woundtypecode?: SortOrder
  }

  export type causeofinjurywoundtypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: causeofinjurywoundtypeWhereInput | causeofinjurywoundtypeWhereInput[]
    OR?: causeofinjurywoundtypeWhereInput[]
    NOT?: causeofinjurywoundtypeWhereInput | causeofinjurywoundtypeWhereInput[]
    insurerid?: IntFilter<"causeofinjurywoundtype"> | number
    woundtypename?: StringNullableFilter<"causeofinjurywoundtype"> | string | null
    woundtypecode?: StringFilter<"causeofinjurywoundtype"> | string
  }, "id">

  export type causeofinjurywoundtypeOrderByWithAggregationInput = {
    insurerid?: SortOrder
    woundtypename?: SortOrderInput | SortOrder
    id?: SortOrder
    woundtypecode?: SortOrder
    _count?: causeofinjurywoundtypeCountOrderByAggregateInput
    _avg?: causeofinjurywoundtypeAvgOrderByAggregateInput
    _max?: causeofinjurywoundtypeMaxOrderByAggregateInput
    _min?: causeofinjurywoundtypeMinOrderByAggregateInput
    _sum?: causeofinjurywoundtypeSumOrderByAggregateInput
  }

  export type causeofinjurywoundtypeScalarWhereWithAggregatesInput = {
    AND?: causeofinjurywoundtypeScalarWhereWithAggregatesInput | causeofinjurywoundtypeScalarWhereWithAggregatesInput[]
    OR?: causeofinjurywoundtypeScalarWhereWithAggregatesInput[]
    NOT?: causeofinjurywoundtypeScalarWhereWithAggregatesInput | causeofinjurywoundtypeScalarWhereWithAggregatesInput[]
    insurerid?: IntWithAggregatesFilter<"causeofinjurywoundtype"> | number
    woundtypename?: StringNullableWithAggregatesFilter<"causeofinjurywoundtype"> | string | null
    id?: IntWithAggregatesFilter<"causeofinjurywoundtype"> | number
    woundtypecode?: StringWithAggregatesFilter<"causeofinjurywoundtype"> | string
  }

  export type causeofinjurysideWhereInput = {
    AND?: causeofinjurysideWhereInput | causeofinjurysideWhereInput[]
    OR?: causeofinjurysideWhereInput[]
    NOT?: causeofinjurysideWhereInput | causeofinjurysideWhereInput[]
    insurerid?: IntFilter<"causeofinjuryside"> | number
    injurysidename?: StringFilter<"causeofinjuryside"> | string
    injurysidecode?: StringNullableFilter<"causeofinjuryside"> | string | null
    id?: IntFilter<"causeofinjuryside"> | number
  }

  export type causeofinjurysideOrderByWithRelationInput = {
    insurerid?: SortOrder
    injurysidename?: SortOrder
    injurysidecode?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type causeofinjurysideWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: causeofinjurysideWhereInput | causeofinjurysideWhereInput[]
    OR?: causeofinjurysideWhereInput[]
    NOT?: causeofinjurysideWhereInput | causeofinjurysideWhereInput[]
    insurerid?: IntFilter<"causeofinjuryside"> | number
    injurysidename?: StringFilter<"causeofinjuryside"> | string
    injurysidecode?: StringNullableFilter<"causeofinjuryside"> | string | null
  }, "id">

  export type causeofinjurysideOrderByWithAggregationInput = {
    insurerid?: SortOrder
    injurysidename?: SortOrder
    injurysidecode?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: causeofinjurysideCountOrderByAggregateInput
    _avg?: causeofinjurysideAvgOrderByAggregateInput
    _max?: causeofinjurysideMaxOrderByAggregateInput
    _min?: causeofinjurysideMinOrderByAggregateInput
    _sum?: causeofinjurysideSumOrderByAggregateInput
  }

  export type causeofinjurysideScalarWhereWithAggregatesInput = {
    AND?: causeofinjurysideScalarWhereWithAggregatesInput | causeofinjurysideScalarWhereWithAggregatesInput[]
    OR?: causeofinjurysideScalarWhereWithAggregatesInput[]
    NOT?: causeofinjurysideScalarWhereWithAggregatesInput | causeofinjurysideScalarWhereWithAggregatesInput[]
    insurerid?: IntWithAggregatesFilter<"causeofinjuryside"> | number
    injurysidename?: StringWithAggregatesFilter<"causeofinjuryside"> | string
    injurysidecode?: StringNullableWithAggregatesFilter<"causeofinjuryside"> | string | null
    id?: IntWithAggregatesFilter<"causeofinjuryside"> | number
  }

  export type ClaimStatusCreateInput = {
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    insurers?: InsurersCreateNestedOneWithoutClaimStatusInput
    Transactions?: TransactionsCreateNestedManyWithoutClaimStatusInput
  }

  export type ClaimStatusUncheckedCreateInput = {
    id?: number
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    insurerid?: number | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutClaimStatusInput
  }

  export type ClaimStatusUpdateInput = {
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    insurers?: InsurersUpdateOneWithoutClaimStatusNestedInput
    Transactions?: TransactionsUpdateManyWithoutClaimStatusNestedInput
  }

  export type ClaimStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutClaimStatusNestedInput
  }

  export type ClaimStatusCreateManyInput = {
    id?: number
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    insurerid?: number | null
  }

  export type ClaimStatusUpdateManyMutationInput = {
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IllnessSurgeryCreateInput = {
    ISCode: string
    ISDescription?: string | null
    insurers?: InsurersCreateNestedOneWithoutIllnessSurgeryInput
  }

  export type IllnessSurgeryUncheckedCreateInput = {
    id?: number
    ISCode: string
    ISDescription?: string | null
    insurerid?: number | null
  }

  export type IllnessSurgeryUpdateInput = {
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
    insurers?: InsurersUpdateOneWithoutIllnessSurgeryNestedInput
  }

  export type IllnessSurgeryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IllnessSurgeryCreateManyInput = {
    id?: number
    ISCode: string
    ISDescription?: string | null
    insurerid?: number | null
  }

  export type IllnessSurgeryUpdateManyMutationInput = {
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessSurgeryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IllnessTypeCreateInput = {
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
    insurers?: InsurersCreateNestedOneWithoutIllnessTypeInput
  }

  export type IllnessTypeUncheckedCreateInput = {
    id?: number
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
    insurerid?: number | null
  }

  export type IllnessTypeUpdateInput = {
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
    insurers?: InsurersUpdateOneWithoutIllnessTypeNestedInput
  }

  export type IllnessTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IllnessTypeCreateManyInput = {
    id?: number
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
    insurerid?: number | null
  }

  export type IllnessTypeUpdateManyMutationInput = {
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyTypeCreateInput = {
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
    insurers?: InsurersCreateNestedOneWithoutPolicyTypeInput
  }

  export type PolicyTypeUncheckedCreateInput = {
    id?: number
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
    insurerid?: number | null
  }

  export type PolicyTypeUpdateInput = {
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
    insurers?: InsurersUpdateOneWithoutPolicyTypeNestedInput
  }

  export type PolicyTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyTypeCreateManyInput = {
    id?: number
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
    insurerid?: number | null
  }

  export type PolicyTypeUpdateManyMutationInput = {
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceSettingCreateInput = {
    ServiceSettingCode: string
    ServiceSettingDesc: string
    insurers?: InsurersCreateNestedOneWithoutServiceSettingInput
  }

  export type ServiceSettingUncheckedCreateInput = {
    id?: number
    ServiceSettingCode: string
    ServiceSettingDesc: string
    insurerid?: number | null
  }

  export type ServiceSettingUpdateInput = {
    ServiceSettingCode?: StringFieldUpdateOperationsInput | string
    ServiceSettingDesc?: StringFieldUpdateOperationsInput | string
    insurers?: InsurersUpdateOneWithoutServiceSettingNestedInput
  }

  export type ServiceSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ServiceSettingCode?: StringFieldUpdateOperationsInput | string
    ServiceSettingDesc?: StringFieldUpdateOperationsInput | string
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceSettingCreateManyInput = {
    id?: number
    ServiceSettingCode: string
    ServiceSettingDesc: string
    insurerid?: number | null
  }

  export type ServiceSettingUpdateManyMutationInput = {
    ServiceSettingCode?: StringFieldUpdateOperationsInput | string
    ServiceSettingDesc?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ServiceSettingCode?: StringFieldUpdateOperationsInput | string
    ServiceSettingDesc?: StringFieldUpdateOperationsInput | string
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClaimantsCreateInput = {
    pid?: string | null
    passportnumber?: string | null
    hn?: string | null
    title_th?: string | null
    givenname_th?: string | null
    surname_th?: string | null
    title_en?: string | null
    givenname_en?: string | null
    surname_en?: string | null
    mobilephone?: string | null
    statusactive?: boolean | null
    registrationdate?: Date | string | null
    dateofbirth?: string | null
    gender?: string | null
    patientid?: number | null
    Insurers?: InsurersCreateNestedOneWithoutClaimantsInput
    Transactions?: TransactionsCreateNestedManyWithoutClaimantsInput
  }

  export type ClaimantsUncheckedCreateInput = {
    claimantid?: number
    pid?: string | null
    passportnumber?: string | null
    hn?: string | null
    title_th?: string | null
    givenname_th?: string | null
    surname_th?: string | null
    title_en?: string | null
    givenname_en?: string | null
    surname_en?: string | null
    mobilephone?: string | null
    insurerid?: number | null
    statusactive?: boolean | null
    registrationdate?: Date | string | null
    dateofbirth?: string | null
    gender?: string | null
    patientid?: number | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutClaimantsInput
  }

  export type ClaimantsUpdateInput = {
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
    Insurers?: InsurersUpdateOneWithoutClaimantsNestedInput
    Transactions?: TransactionsUpdateManyWithoutClaimantsNestedInput
  }

  export type ClaimantsUncheckedUpdateInput = {
    claimantid?: IntFieldUpdateOperationsInput | number
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutClaimantsNestedInput
  }

  export type ClaimantsCreateManyInput = {
    claimantid?: number
    pid?: string | null
    passportnumber?: string | null
    hn?: string | null
    title_th?: string | null
    givenname_th?: string | null
    surname_th?: string | null
    title_en?: string | null
    givenname_en?: string | null
    surname_en?: string | null
    mobilephone?: string | null
    insurerid?: number | null
    statusactive?: boolean | null
    registrationdate?: Date | string | null
    dateofbirth?: string | null
    gender?: string | null
    patientid?: number | null
  }

  export type ClaimantsUpdateManyMutationInput = {
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClaimantsUncheckedUpdateManyInput = {
    claimantid?: IntFieldUpdateOperationsInput | number
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InsurersCreateInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersCreateManyInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
  }

  export type InsurersUpdateManyMutationInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InsurersUncheckedUpdateManyInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionsCreateInput = {
    refid?: string | null
    transactionid?: string | null
    updatedate?: Date | string | null
    vn?: string | null
    accidentdate?: string | null
    Claimants?: ClaimantsCreateNestedOneWithoutTransactionsInput
    Insurers?: InsurersCreateNestedOneWithoutTransactionsInput
    ClaimStatus?: ClaimStatusCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: number
    refid?: string | null
    transactionid?: string | null
    statusid?: number | null
    updatedate?: Date | string | null
    hn?: string | null
    vn?: string | null
    insurerid?: number | null
    accidentdate?: string | null
  }

  export type TransactionsUpdateInput = {
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
    Claimants?: ClaimantsUpdateOneWithoutTransactionsNestedInput
    Insurers?: InsurersUpdateOneWithoutTransactionsNestedInput
    ClaimStatus?: ClaimStatusUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    statusid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsCreateManyInput = {
    id?: number
    refid?: string | null
    transactionid?: string | null
    statusid?: number | null
    updatedate?: Date | string | null
    hn?: string | null
    vn?: string | null
    insurerid?: number | null
    accidentdate?: string | null
  }

  export type TransactionsUpdateManyMutationInput = {
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    statusid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosisTypeMappingCreateInput = {
    insurerid: number
    dxtypecodetrakcare: string
    dxtypenametrakcare?: string | null
    dxtypecodeinsurance?: string | null
    dxtypenameinsurance?: string | null
  }

  export type DiagnosisTypeMappingUncheckedCreateInput = {
    insurerid: number
    dxtypecodetrakcare: string
    dxtypenametrakcare?: string | null
    dxtypecodeinsurance?: string | null
    dxtypenameinsurance?: string | null
  }

  export type DiagnosisTypeMappingUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    dxtypecodetrakcare?: StringFieldUpdateOperationsInput | string
    dxtypenametrakcare?: NullableStringFieldUpdateOperationsInput | string | null
    dxtypecodeinsurance?: NullableStringFieldUpdateOperationsInput | string | null
    dxtypenameinsurance?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosisTypeMappingUncheckedUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    dxtypecodetrakcare?: StringFieldUpdateOperationsInput | string
    dxtypenametrakcare?: NullableStringFieldUpdateOperationsInput | string | null
    dxtypecodeinsurance?: NullableStringFieldUpdateOperationsInput | string | null
    dxtypenameinsurance?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosisTypeMappingCreateManyInput = {
    insurerid: number
    dxtypecodetrakcare: string
    dxtypenametrakcare?: string | null
    dxtypecodeinsurance?: string | null
    dxtypenameinsurance?: string | null
  }

  export type DiagnosisTypeMappingUpdateManyMutationInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    dxtypecodetrakcare?: StringFieldUpdateOperationsInput | string
    dxtypenametrakcare?: NullableStringFieldUpdateOperationsInput | string | null
    dxtypecodeinsurance?: NullableStringFieldUpdateOperationsInput | string | null
    dxtypenameinsurance?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosisTypeMappingUncheckedUpdateManyInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    dxtypecodetrakcare?: StringFieldUpdateOperationsInput | string
    dxtypenametrakcare?: NullableStringFieldUpdateOperationsInput | string | null
    dxtypecodeinsurance?: NullableStringFieldUpdateOperationsInput | string | null
    dxtypenameinsurance?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accidentplaceCreateInput = {
    insurerid: number
    accidentplacecode: number
    accidentplacename: string
  }

  export type accidentplaceUncheckedCreateInput = {
    insurerid: number
    accidentplacecode: number
    accidentplacename: string
  }

  export type accidentplaceUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    accidentplacecode?: IntFieldUpdateOperationsInput | number
    accidentplacename?: StringFieldUpdateOperationsInput | string
  }

  export type accidentplaceUncheckedUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    accidentplacecode?: IntFieldUpdateOperationsInput | number
    accidentplacename?: StringFieldUpdateOperationsInput | string
  }

  export type accidentplaceCreateManyInput = {
    insurerid: number
    accidentplacecode: number
    accidentplacename: string
  }

  export type accidentplaceUpdateManyMutationInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    accidentplacecode?: IntFieldUpdateOperationsInput | number
    accidentplacename?: StringFieldUpdateOperationsInput | string
  }

  export type accidentplaceUncheckedUpdateManyInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    accidentplacecode?: IntFieldUpdateOperationsInput | number
    accidentplacename?: StringFieldUpdateOperationsInput | string
  }

  export type causeofinjurywoundtypeCreateInput = {
    insurerid: number
    woundtypename?: string | null
    woundtypecode: string
  }

  export type causeofinjurywoundtypeUncheckedCreateInput = {
    insurerid: number
    woundtypename?: string | null
    id?: number
    woundtypecode: string
  }

  export type causeofinjurywoundtypeUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    woundtypename?: NullableStringFieldUpdateOperationsInput | string | null
    woundtypecode?: StringFieldUpdateOperationsInput | string
  }

  export type causeofinjurywoundtypeUncheckedUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    woundtypename?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    woundtypecode?: StringFieldUpdateOperationsInput | string
  }

  export type causeofinjurywoundtypeCreateManyInput = {
    insurerid: number
    woundtypename?: string | null
    id?: number
    woundtypecode: string
  }

  export type causeofinjurywoundtypeUpdateManyMutationInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    woundtypename?: NullableStringFieldUpdateOperationsInput | string | null
    woundtypecode?: StringFieldUpdateOperationsInput | string
  }

  export type causeofinjurywoundtypeUncheckedUpdateManyInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    woundtypename?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    woundtypecode?: StringFieldUpdateOperationsInput | string
  }

  export type causeofinjurysideCreateInput = {
    insurerid: number
    injurysidename: string
    injurysidecode?: string | null
  }

  export type causeofinjurysideUncheckedCreateInput = {
    insurerid: number
    injurysidename: string
    injurysidecode?: string | null
    id?: number
  }

  export type causeofinjurysideUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    injurysidename?: StringFieldUpdateOperationsInput | string
    injurysidecode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type causeofinjurysideUncheckedUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    injurysidename?: StringFieldUpdateOperationsInput | string
    injurysidecode?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type causeofinjurysideCreateManyInput = {
    insurerid: number
    injurysidename: string
    injurysidecode?: string | null
    id?: number
  }

  export type causeofinjurysideUpdateManyMutationInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    injurysidename?: StringFieldUpdateOperationsInput | string
    injurysidecode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type causeofinjurysideUncheckedUpdateManyInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    injurysidename?: StringFieldUpdateOperationsInput | string
    injurysidecode?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InsurersNullableRelationFilter = {
    is?: InsurersWhereInput | null
    isNot?: InsurersWhereInput | null
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimStatusCountOrderByAggregateInput = {
    id?: SortOrder
    StatusCode?: SortOrder
    StatusDescTH?: SortOrder
    StatusDescEN?: SortOrder
    insurerid?: SortOrder
  }

  export type ClaimStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type ClaimStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    StatusCode?: SortOrder
    StatusDescTH?: SortOrder
    StatusDescEN?: SortOrder
    insurerid?: SortOrder
  }

  export type ClaimStatusMinOrderByAggregateInput = {
    id?: SortOrder
    StatusCode?: SortOrder
    StatusDescTH?: SortOrder
    StatusDescEN?: SortOrder
    insurerid?: SortOrder
  }

  export type ClaimStatusSumOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IllnessSurgeryCountOrderByAggregateInput = {
    id?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessSurgeryAvgOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessSurgeryMaxOrderByAggregateInput = {
    id?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessSurgeryMinOrderByAggregateInput = {
    id?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessSurgerySumOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessTypeCountOrderByAggregateInput = {
    id?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessTypeMinOrderByAggregateInput = {
    id?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type IllnessTypeSumOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type PolicyTypeCountOrderByAggregateInput = {
    id?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type PolicyTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type PolicyTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type PolicyTypeMinOrderByAggregateInput = {
    id?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type PolicyTypeSumOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type ServiceSettingCountOrderByAggregateInput = {
    id?: SortOrder
    ServiceSettingCode?: SortOrder
    ServiceSettingDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type ServiceSettingAvgOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type ServiceSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    ServiceSettingCode?: SortOrder
    ServiceSettingDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type ServiceSettingMinOrderByAggregateInput = {
    id?: SortOrder
    ServiceSettingCode?: SortOrder
    ServiceSettingDesc?: SortOrder
    insurerid?: SortOrder
  }

  export type ServiceSettingSumOrderByAggregateInput = {
    id?: SortOrder
    insurerid?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClaimantsHnInsureridCompoundUniqueInput = {
    hn: string
    insurerid: number
  }

  export type ClaimantsCountOrderByAggregateInput = {
    claimantid?: SortOrder
    pid?: SortOrder
    passportnumber?: SortOrder
    hn?: SortOrder
    title_th?: SortOrder
    givenname_th?: SortOrder
    surname_th?: SortOrder
    title_en?: SortOrder
    givenname_en?: SortOrder
    surname_en?: SortOrder
    mobilephone?: SortOrder
    insurerid?: SortOrder
    statusactive?: SortOrder
    registrationdate?: SortOrder
    dateofbirth?: SortOrder
    gender?: SortOrder
    patientid?: SortOrder
  }

  export type ClaimantsAvgOrderByAggregateInput = {
    claimantid?: SortOrder
    insurerid?: SortOrder
    patientid?: SortOrder
  }

  export type ClaimantsMaxOrderByAggregateInput = {
    claimantid?: SortOrder
    pid?: SortOrder
    passportnumber?: SortOrder
    hn?: SortOrder
    title_th?: SortOrder
    givenname_th?: SortOrder
    surname_th?: SortOrder
    title_en?: SortOrder
    givenname_en?: SortOrder
    surname_en?: SortOrder
    mobilephone?: SortOrder
    insurerid?: SortOrder
    statusactive?: SortOrder
    registrationdate?: SortOrder
    dateofbirth?: SortOrder
    gender?: SortOrder
    patientid?: SortOrder
  }

  export type ClaimantsMinOrderByAggregateInput = {
    claimantid?: SortOrder
    pid?: SortOrder
    passportnumber?: SortOrder
    hn?: SortOrder
    title_th?: SortOrder
    givenname_th?: SortOrder
    surname_th?: SortOrder
    title_en?: SortOrder
    givenname_en?: SortOrder
    surname_en?: SortOrder
    mobilephone?: SortOrder
    insurerid?: SortOrder
    statusactive?: SortOrder
    registrationdate?: SortOrder
    dateofbirth?: SortOrder
    gender?: SortOrder
    patientid?: SortOrder
  }

  export type ClaimantsSumOrderByAggregateInput = {
    claimantid?: SortOrder
    insurerid?: SortOrder
    patientid?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClaimStatusListRelationFilter = {
    every?: ClaimStatusWhereInput
    some?: ClaimStatusWhereInput
    none?: ClaimStatusWhereInput
  }

  export type ClaimantsListRelationFilter = {
    every?: ClaimantsWhereInput
    some?: ClaimantsWhereInput
    none?: ClaimantsWhereInput
  }

  export type IllnessSurgeryListRelationFilter = {
    every?: IllnessSurgeryWhereInput
    some?: IllnessSurgeryWhereInput
    none?: IllnessSurgeryWhereInput
  }

  export type IllnessTypeListRelationFilter = {
    every?: IllnessTypeWhereInput
    some?: IllnessTypeWhereInput
    none?: IllnessTypeWhereInput
  }

  export type PolicyTypeListRelationFilter = {
    every?: PolicyTypeWhereInput
    some?: PolicyTypeWhereInput
    none?: PolicyTypeWhereInput
  }

  export type ServiceSettingListRelationFilter = {
    every?: ServiceSettingWhereInput
    some?: ServiceSettingWhereInput
    none?: ServiceSettingWhereInput
  }

  export type ClaimStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IllnessSurgeryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IllnessTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceSettingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsurersCountOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
    insurername?: SortOrder
    registrationdate?: SortOrder
  }

  export type InsurersAvgOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
  }

  export type InsurersMaxOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
    insurername?: SortOrder
    registrationdate?: SortOrder
  }

  export type InsurersMinOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
    insurername?: SortOrder
    registrationdate?: SortOrder
  }

  export type InsurersSumOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
  }

  export type ClaimantsNullableRelationFilter = {
    is?: ClaimantsWhereInput | null
    isNot?: ClaimantsWhereInput | null
  }

  export type ClaimStatusNullableRelationFilter = {
    is?: ClaimStatusWhereInput | null
    isNot?: ClaimStatusWhereInput | null
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    refid?: SortOrder
    transactionid?: SortOrder
    statusid?: SortOrder
    updatedate?: SortOrder
    hn?: SortOrder
    vn?: SortOrder
    insurerid?: SortOrder
    accidentdate?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    statusid?: SortOrder
    insurerid?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    refid?: SortOrder
    transactionid?: SortOrder
    statusid?: SortOrder
    updatedate?: SortOrder
    hn?: SortOrder
    vn?: SortOrder
    insurerid?: SortOrder
    accidentdate?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    refid?: SortOrder
    transactionid?: SortOrder
    statusid?: SortOrder
    updatedate?: SortOrder
    hn?: SortOrder
    vn?: SortOrder
    insurerid?: SortOrder
    accidentdate?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    statusid?: SortOrder
    insurerid?: SortOrder
  }

  export type DiagnosisTypeMappingInsureridDxtypecodetrakcareCompoundUniqueInput = {
    insurerid: number
    dxtypecodetrakcare: string
  }

  export type DiagnosisTypeMappingCountOrderByAggregateInput = {
    insurerid?: SortOrder
    dxtypecodetrakcare?: SortOrder
    dxtypenametrakcare?: SortOrder
    dxtypecodeinsurance?: SortOrder
    dxtypenameinsurance?: SortOrder
  }

  export type DiagnosisTypeMappingAvgOrderByAggregateInput = {
    insurerid?: SortOrder
  }

  export type DiagnosisTypeMappingMaxOrderByAggregateInput = {
    insurerid?: SortOrder
    dxtypecodetrakcare?: SortOrder
    dxtypenametrakcare?: SortOrder
    dxtypecodeinsurance?: SortOrder
    dxtypenameinsurance?: SortOrder
  }

  export type DiagnosisTypeMappingMinOrderByAggregateInput = {
    insurerid?: SortOrder
    dxtypecodetrakcare?: SortOrder
    dxtypenametrakcare?: SortOrder
    dxtypecodeinsurance?: SortOrder
    dxtypenameinsurance?: SortOrder
  }

  export type DiagnosisTypeMappingSumOrderByAggregateInput = {
    insurerid?: SortOrder
  }

  export type accidentplaceInsureridAccidentplacecodeCompoundUniqueInput = {
    insurerid: number
    accidentplacecode: number
  }

  export type accidentplaceCountOrderByAggregateInput = {
    insurerid?: SortOrder
    accidentplacecode?: SortOrder
    accidentplacename?: SortOrder
  }

  export type accidentplaceAvgOrderByAggregateInput = {
    insurerid?: SortOrder
    accidentplacecode?: SortOrder
  }

  export type accidentplaceMaxOrderByAggregateInput = {
    insurerid?: SortOrder
    accidentplacecode?: SortOrder
    accidentplacename?: SortOrder
  }

  export type accidentplaceMinOrderByAggregateInput = {
    insurerid?: SortOrder
    accidentplacecode?: SortOrder
    accidentplacename?: SortOrder
  }

  export type accidentplaceSumOrderByAggregateInput = {
    insurerid?: SortOrder
    accidentplacecode?: SortOrder
  }

  export type causeofinjurywoundtypeCountOrderByAggregateInput = {
    insurerid?: SortOrder
    woundtypename?: SortOrder
    id?: SortOrder
    woundtypecode?: SortOrder
  }

  export type causeofinjurywoundtypeAvgOrderByAggregateInput = {
    insurerid?: SortOrder
    id?: SortOrder
  }

  export type causeofinjurywoundtypeMaxOrderByAggregateInput = {
    insurerid?: SortOrder
    woundtypename?: SortOrder
    id?: SortOrder
    woundtypecode?: SortOrder
  }

  export type causeofinjurywoundtypeMinOrderByAggregateInput = {
    insurerid?: SortOrder
    woundtypename?: SortOrder
    id?: SortOrder
    woundtypecode?: SortOrder
  }

  export type causeofinjurywoundtypeSumOrderByAggregateInput = {
    insurerid?: SortOrder
    id?: SortOrder
  }

  export type causeofinjurysideCountOrderByAggregateInput = {
    insurerid?: SortOrder
    injurysidename?: SortOrder
    injurysidecode?: SortOrder
    id?: SortOrder
  }

  export type causeofinjurysideAvgOrderByAggregateInput = {
    insurerid?: SortOrder
    id?: SortOrder
  }

  export type causeofinjurysideMaxOrderByAggregateInput = {
    insurerid?: SortOrder
    injurysidename?: SortOrder
    injurysidecode?: SortOrder
    id?: SortOrder
  }

  export type causeofinjurysideMinOrderByAggregateInput = {
    insurerid?: SortOrder
    injurysidename?: SortOrder
    injurysidecode?: SortOrder
    id?: SortOrder
  }

  export type causeofinjurysideSumOrderByAggregateInput = {
    insurerid?: SortOrder
    id?: SortOrder
  }

  export type InsurersCreateNestedOneWithoutClaimStatusInput = {
    create?: XOR<InsurersCreateWithoutClaimStatusInput, InsurersUncheckedCreateWithoutClaimStatusInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutClaimStatusInput
    connect?: InsurersWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutClaimStatusInput = {
    create?: XOR<TransactionsCreateWithoutClaimStatusInput, TransactionsUncheckedCreateWithoutClaimStatusInput> | TransactionsCreateWithoutClaimStatusInput[] | TransactionsUncheckedCreateWithoutClaimStatusInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutClaimStatusInput | TransactionsCreateOrConnectWithoutClaimStatusInput[]
    createMany?: TransactionsCreateManyClaimStatusInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutClaimStatusInput = {
    create?: XOR<TransactionsCreateWithoutClaimStatusInput, TransactionsUncheckedCreateWithoutClaimStatusInput> | TransactionsCreateWithoutClaimStatusInput[] | TransactionsUncheckedCreateWithoutClaimStatusInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutClaimStatusInput | TransactionsCreateOrConnectWithoutClaimStatusInput[]
    createMany?: TransactionsCreateManyClaimStatusInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InsurersUpdateOneWithoutClaimStatusNestedInput = {
    create?: XOR<InsurersCreateWithoutClaimStatusInput, InsurersUncheckedCreateWithoutClaimStatusInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutClaimStatusInput
    upsert?: InsurersUpsertWithoutClaimStatusInput
    disconnect?: InsurersWhereInput | boolean
    delete?: InsurersWhereInput | boolean
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutClaimStatusInput, InsurersUpdateWithoutClaimStatusInput>, InsurersUncheckedUpdateWithoutClaimStatusInput>
  }

  export type TransactionsUpdateManyWithoutClaimStatusNestedInput = {
    create?: XOR<TransactionsCreateWithoutClaimStatusInput, TransactionsUncheckedCreateWithoutClaimStatusInput> | TransactionsCreateWithoutClaimStatusInput[] | TransactionsUncheckedCreateWithoutClaimStatusInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutClaimStatusInput | TransactionsCreateOrConnectWithoutClaimStatusInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutClaimStatusInput | TransactionsUpsertWithWhereUniqueWithoutClaimStatusInput[]
    createMany?: TransactionsCreateManyClaimStatusInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutClaimStatusInput | TransactionsUpdateWithWhereUniqueWithoutClaimStatusInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutClaimStatusInput | TransactionsUpdateManyWithWhereWithoutClaimStatusInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionsUncheckedUpdateManyWithoutClaimStatusNestedInput = {
    create?: XOR<TransactionsCreateWithoutClaimStatusInput, TransactionsUncheckedCreateWithoutClaimStatusInput> | TransactionsCreateWithoutClaimStatusInput[] | TransactionsUncheckedCreateWithoutClaimStatusInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutClaimStatusInput | TransactionsCreateOrConnectWithoutClaimStatusInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutClaimStatusInput | TransactionsUpsertWithWhereUniqueWithoutClaimStatusInput[]
    createMany?: TransactionsCreateManyClaimStatusInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutClaimStatusInput | TransactionsUpdateWithWhereUniqueWithoutClaimStatusInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutClaimStatusInput | TransactionsUpdateManyWithWhereWithoutClaimStatusInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type InsurersCreateNestedOneWithoutIllnessSurgeryInput = {
    create?: XOR<InsurersCreateWithoutIllnessSurgeryInput, InsurersUncheckedCreateWithoutIllnessSurgeryInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutIllnessSurgeryInput
    connect?: InsurersWhereUniqueInput
  }

  export type InsurersUpdateOneWithoutIllnessSurgeryNestedInput = {
    create?: XOR<InsurersCreateWithoutIllnessSurgeryInput, InsurersUncheckedCreateWithoutIllnessSurgeryInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutIllnessSurgeryInput
    upsert?: InsurersUpsertWithoutIllnessSurgeryInput
    disconnect?: InsurersWhereInput | boolean
    delete?: InsurersWhereInput | boolean
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutIllnessSurgeryInput, InsurersUpdateWithoutIllnessSurgeryInput>, InsurersUncheckedUpdateWithoutIllnessSurgeryInput>
  }

  export type InsurersCreateNestedOneWithoutIllnessTypeInput = {
    create?: XOR<InsurersCreateWithoutIllnessTypeInput, InsurersUncheckedCreateWithoutIllnessTypeInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutIllnessTypeInput
    connect?: InsurersWhereUniqueInput
  }

  export type InsurersUpdateOneWithoutIllnessTypeNestedInput = {
    create?: XOR<InsurersCreateWithoutIllnessTypeInput, InsurersUncheckedCreateWithoutIllnessTypeInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutIllnessTypeInput
    upsert?: InsurersUpsertWithoutIllnessTypeInput
    disconnect?: InsurersWhereInput | boolean
    delete?: InsurersWhereInput | boolean
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutIllnessTypeInput, InsurersUpdateWithoutIllnessTypeInput>, InsurersUncheckedUpdateWithoutIllnessTypeInput>
  }

  export type InsurersCreateNestedOneWithoutPolicyTypeInput = {
    create?: XOR<InsurersCreateWithoutPolicyTypeInput, InsurersUncheckedCreateWithoutPolicyTypeInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutPolicyTypeInput
    connect?: InsurersWhereUniqueInput
  }

  export type InsurersUpdateOneWithoutPolicyTypeNestedInput = {
    create?: XOR<InsurersCreateWithoutPolicyTypeInput, InsurersUncheckedCreateWithoutPolicyTypeInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutPolicyTypeInput
    upsert?: InsurersUpsertWithoutPolicyTypeInput
    disconnect?: InsurersWhereInput | boolean
    delete?: InsurersWhereInput | boolean
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutPolicyTypeInput, InsurersUpdateWithoutPolicyTypeInput>, InsurersUncheckedUpdateWithoutPolicyTypeInput>
  }

  export type InsurersCreateNestedOneWithoutServiceSettingInput = {
    create?: XOR<InsurersCreateWithoutServiceSettingInput, InsurersUncheckedCreateWithoutServiceSettingInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutServiceSettingInput
    connect?: InsurersWhereUniqueInput
  }

  export type InsurersUpdateOneWithoutServiceSettingNestedInput = {
    create?: XOR<InsurersCreateWithoutServiceSettingInput, InsurersUncheckedCreateWithoutServiceSettingInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutServiceSettingInput
    upsert?: InsurersUpsertWithoutServiceSettingInput
    disconnect?: InsurersWhereInput | boolean
    delete?: InsurersWhereInput | boolean
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutServiceSettingInput, InsurersUpdateWithoutServiceSettingInput>, InsurersUncheckedUpdateWithoutServiceSettingInput>
  }

  export type InsurersCreateNestedOneWithoutClaimantsInput = {
    create?: XOR<InsurersCreateWithoutClaimantsInput, InsurersUncheckedCreateWithoutClaimantsInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutClaimantsInput
    connect?: InsurersWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutClaimantsInput = {
    create?: XOR<TransactionsCreateWithoutClaimantsInput, TransactionsUncheckedCreateWithoutClaimantsInput> | TransactionsCreateWithoutClaimantsInput[] | TransactionsUncheckedCreateWithoutClaimantsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutClaimantsInput | TransactionsCreateOrConnectWithoutClaimantsInput[]
    createMany?: TransactionsCreateManyClaimantsInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutClaimantsInput = {
    create?: XOR<TransactionsCreateWithoutClaimantsInput, TransactionsUncheckedCreateWithoutClaimantsInput> | TransactionsCreateWithoutClaimantsInput[] | TransactionsUncheckedCreateWithoutClaimantsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutClaimantsInput | TransactionsCreateOrConnectWithoutClaimantsInput[]
    createMany?: TransactionsCreateManyClaimantsInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type InsurersUpdateOneWithoutClaimantsNestedInput = {
    create?: XOR<InsurersCreateWithoutClaimantsInput, InsurersUncheckedCreateWithoutClaimantsInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutClaimantsInput
    upsert?: InsurersUpsertWithoutClaimantsInput
    disconnect?: InsurersWhereInput | boolean
    delete?: InsurersWhereInput | boolean
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutClaimantsInput, InsurersUpdateWithoutClaimantsInput>, InsurersUncheckedUpdateWithoutClaimantsInput>
  }

  export type TransactionsUpdateManyWithoutClaimantsNestedInput = {
    create?: XOR<TransactionsCreateWithoutClaimantsInput, TransactionsUncheckedCreateWithoutClaimantsInput> | TransactionsCreateWithoutClaimantsInput[] | TransactionsUncheckedCreateWithoutClaimantsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutClaimantsInput | TransactionsCreateOrConnectWithoutClaimantsInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutClaimantsInput | TransactionsUpsertWithWhereUniqueWithoutClaimantsInput[]
    createMany?: TransactionsCreateManyClaimantsInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutClaimantsInput | TransactionsUpdateWithWhereUniqueWithoutClaimantsInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutClaimantsInput | TransactionsUpdateManyWithWhereWithoutClaimantsInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutClaimantsNestedInput = {
    create?: XOR<TransactionsCreateWithoutClaimantsInput, TransactionsUncheckedCreateWithoutClaimantsInput> | TransactionsCreateWithoutClaimantsInput[] | TransactionsUncheckedCreateWithoutClaimantsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutClaimantsInput | TransactionsCreateOrConnectWithoutClaimantsInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutClaimantsInput | TransactionsUpsertWithWhereUniqueWithoutClaimantsInput[]
    createMany?: TransactionsCreateManyClaimantsInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutClaimantsInput | TransactionsUpdateWithWhereUniqueWithoutClaimantsInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutClaimantsInput | TransactionsUpdateManyWithWhereWithoutClaimantsInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type ClaimStatusCreateNestedManyWithoutInsurersInput = {
    create?: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput> | ClaimStatusCreateWithoutInsurersInput[] | ClaimStatusUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimStatusCreateOrConnectWithoutInsurersInput | ClaimStatusCreateOrConnectWithoutInsurersInput[]
    createMany?: ClaimStatusCreateManyInsurersInputEnvelope
    connect?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
  }

  export type ClaimantsCreateNestedManyWithoutInsurersInput = {
    create?: XOR<ClaimantsCreateWithoutInsurersInput, ClaimantsUncheckedCreateWithoutInsurersInput> | ClaimantsCreateWithoutInsurersInput[] | ClaimantsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimantsCreateOrConnectWithoutInsurersInput | ClaimantsCreateOrConnectWithoutInsurersInput[]
    createMany?: ClaimantsCreateManyInsurersInputEnvelope
    connect?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
  }

  export type IllnessSurgeryCreateNestedManyWithoutInsurersInput = {
    create?: XOR<IllnessSurgeryCreateWithoutInsurersInput, IllnessSurgeryUncheckedCreateWithoutInsurersInput> | IllnessSurgeryCreateWithoutInsurersInput[] | IllnessSurgeryUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: IllnessSurgeryCreateOrConnectWithoutInsurersInput | IllnessSurgeryCreateOrConnectWithoutInsurersInput[]
    createMany?: IllnessSurgeryCreateManyInsurersInputEnvelope
    connect?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
  }

  export type IllnessTypeCreateNestedManyWithoutInsurersInput = {
    create?: XOR<IllnessTypeCreateWithoutInsurersInput, IllnessTypeUncheckedCreateWithoutInsurersInput> | IllnessTypeCreateWithoutInsurersInput[] | IllnessTypeUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: IllnessTypeCreateOrConnectWithoutInsurersInput | IllnessTypeCreateOrConnectWithoutInsurersInput[]
    createMany?: IllnessTypeCreateManyInsurersInputEnvelope
    connect?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
  }

  export type PolicyTypeCreateNestedManyWithoutInsurersInput = {
    create?: XOR<PolicyTypeCreateWithoutInsurersInput, PolicyTypeUncheckedCreateWithoutInsurersInput> | PolicyTypeCreateWithoutInsurersInput[] | PolicyTypeUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: PolicyTypeCreateOrConnectWithoutInsurersInput | PolicyTypeCreateOrConnectWithoutInsurersInput[]
    createMany?: PolicyTypeCreateManyInsurersInputEnvelope
    connect?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
  }

  export type ServiceSettingCreateNestedManyWithoutInsurersInput = {
    create?: XOR<ServiceSettingCreateWithoutInsurersInput, ServiceSettingUncheckedCreateWithoutInsurersInput> | ServiceSettingCreateWithoutInsurersInput[] | ServiceSettingUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ServiceSettingCreateOrConnectWithoutInsurersInput | ServiceSettingCreateOrConnectWithoutInsurersInput[]
    createMany?: ServiceSettingCreateManyInsurersInputEnvelope
    connect?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutInsurersInput = {
    create?: XOR<TransactionsCreateWithoutInsurersInput, TransactionsUncheckedCreateWithoutInsurersInput> | TransactionsCreateWithoutInsurersInput[] | TransactionsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutInsurersInput | TransactionsCreateOrConnectWithoutInsurersInput[]
    createMany?: TransactionsCreateManyInsurersInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput> | ClaimStatusCreateWithoutInsurersInput[] | ClaimStatusUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimStatusCreateOrConnectWithoutInsurersInput | ClaimStatusCreateOrConnectWithoutInsurersInput[]
    createMany?: ClaimStatusCreateManyInsurersInputEnvelope
    connect?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
  }

  export type ClaimantsUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<ClaimantsCreateWithoutInsurersInput, ClaimantsUncheckedCreateWithoutInsurersInput> | ClaimantsCreateWithoutInsurersInput[] | ClaimantsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimantsCreateOrConnectWithoutInsurersInput | ClaimantsCreateOrConnectWithoutInsurersInput[]
    createMany?: ClaimantsCreateManyInsurersInputEnvelope
    connect?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
  }

  export type IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<IllnessSurgeryCreateWithoutInsurersInput, IllnessSurgeryUncheckedCreateWithoutInsurersInput> | IllnessSurgeryCreateWithoutInsurersInput[] | IllnessSurgeryUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: IllnessSurgeryCreateOrConnectWithoutInsurersInput | IllnessSurgeryCreateOrConnectWithoutInsurersInput[]
    createMany?: IllnessSurgeryCreateManyInsurersInputEnvelope
    connect?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
  }

  export type IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<IllnessTypeCreateWithoutInsurersInput, IllnessTypeUncheckedCreateWithoutInsurersInput> | IllnessTypeCreateWithoutInsurersInput[] | IllnessTypeUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: IllnessTypeCreateOrConnectWithoutInsurersInput | IllnessTypeCreateOrConnectWithoutInsurersInput[]
    createMany?: IllnessTypeCreateManyInsurersInputEnvelope
    connect?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
  }

  export type PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<PolicyTypeCreateWithoutInsurersInput, PolicyTypeUncheckedCreateWithoutInsurersInput> | PolicyTypeCreateWithoutInsurersInput[] | PolicyTypeUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: PolicyTypeCreateOrConnectWithoutInsurersInput | PolicyTypeCreateOrConnectWithoutInsurersInput[]
    createMany?: PolicyTypeCreateManyInsurersInputEnvelope
    connect?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
  }

  export type ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<ServiceSettingCreateWithoutInsurersInput, ServiceSettingUncheckedCreateWithoutInsurersInput> | ServiceSettingCreateWithoutInsurersInput[] | ServiceSettingUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ServiceSettingCreateOrConnectWithoutInsurersInput | ServiceSettingCreateOrConnectWithoutInsurersInput[]
    createMany?: ServiceSettingCreateManyInsurersInputEnvelope
    connect?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<TransactionsCreateWithoutInsurersInput, TransactionsUncheckedCreateWithoutInsurersInput> | TransactionsCreateWithoutInsurersInput[] | TransactionsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutInsurersInput | TransactionsCreateOrConnectWithoutInsurersInput[]
    createMany?: TransactionsCreateManyInsurersInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type ClaimStatusUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput> | ClaimStatusCreateWithoutInsurersInput[] | ClaimStatusUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimStatusCreateOrConnectWithoutInsurersInput | ClaimStatusCreateOrConnectWithoutInsurersInput[]
    upsert?: ClaimStatusUpsertWithWhereUniqueWithoutInsurersInput | ClaimStatusUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: ClaimStatusCreateManyInsurersInputEnvelope
    set?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
    disconnect?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
    delete?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
    connect?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
    update?: ClaimStatusUpdateWithWhereUniqueWithoutInsurersInput | ClaimStatusUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: ClaimStatusUpdateManyWithWhereWithoutInsurersInput | ClaimStatusUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: ClaimStatusScalarWhereInput | ClaimStatusScalarWhereInput[]
  }

  export type ClaimantsUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<ClaimantsCreateWithoutInsurersInput, ClaimantsUncheckedCreateWithoutInsurersInput> | ClaimantsCreateWithoutInsurersInput[] | ClaimantsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimantsCreateOrConnectWithoutInsurersInput | ClaimantsCreateOrConnectWithoutInsurersInput[]
    upsert?: ClaimantsUpsertWithWhereUniqueWithoutInsurersInput | ClaimantsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: ClaimantsCreateManyInsurersInputEnvelope
    set?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
    disconnect?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
    delete?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
    connect?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
    update?: ClaimantsUpdateWithWhereUniqueWithoutInsurersInput | ClaimantsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: ClaimantsUpdateManyWithWhereWithoutInsurersInput | ClaimantsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: ClaimantsScalarWhereInput | ClaimantsScalarWhereInput[]
  }

  export type IllnessSurgeryUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<IllnessSurgeryCreateWithoutInsurersInput, IllnessSurgeryUncheckedCreateWithoutInsurersInput> | IllnessSurgeryCreateWithoutInsurersInput[] | IllnessSurgeryUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: IllnessSurgeryCreateOrConnectWithoutInsurersInput | IllnessSurgeryCreateOrConnectWithoutInsurersInput[]
    upsert?: IllnessSurgeryUpsertWithWhereUniqueWithoutInsurersInput | IllnessSurgeryUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: IllnessSurgeryCreateManyInsurersInputEnvelope
    set?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
    disconnect?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
    delete?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
    connect?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
    update?: IllnessSurgeryUpdateWithWhereUniqueWithoutInsurersInput | IllnessSurgeryUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: IllnessSurgeryUpdateManyWithWhereWithoutInsurersInput | IllnessSurgeryUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: IllnessSurgeryScalarWhereInput | IllnessSurgeryScalarWhereInput[]
  }

  export type IllnessTypeUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<IllnessTypeCreateWithoutInsurersInput, IllnessTypeUncheckedCreateWithoutInsurersInput> | IllnessTypeCreateWithoutInsurersInput[] | IllnessTypeUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: IllnessTypeCreateOrConnectWithoutInsurersInput | IllnessTypeCreateOrConnectWithoutInsurersInput[]
    upsert?: IllnessTypeUpsertWithWhereUniqueWithoutInsurersInput | IllnessTypeUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: IllnessTypeCreateManyInsurersInputEnvelope
    set?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
    disconnect?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
    delete?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
    connect?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
    update?: IllnessTypeUpdateWithWhereUniqueWithoutInsurersInput | IllnessTypeUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: IllnessTypeUpdateManyWithWhereWithoutInsurersInput | IllnessTypeUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: IllnessTypeScalarWhereInput | IllnessTypeScalarWhereInput[]
  }

  export type PolicyTypeUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<PolicyTypeCreateWithoutInsurersInput, PolicyTypeUncheckedCreateWithoutInsurersInput> | PolicyTypeCreateWithoutInsurersInput[] | PolicyTypeUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: PolicyTypeCreateOrConnectWithoutInsurersInput | PolicyTypeCreateOrConnectWithoutInsurersInput[]
    upsert?: PolicyTypeUpsertWithWhereUniqueWithoutInsurersInput | PolicyTypeUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: PolicyTypeCreateManyInsurersInputEnvelope
    set?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
    disconnect?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
    delete?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
    connect?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
    update?: PolicyTypeUpdateWithWhereUniqueWithoutInsurersInput | PolicyTypeUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: PolicyTypeUpdateManyWithWhereWithoutInsurersInput | PolicyTypeUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: PolicyTypeScalarWhereInput | PolicyTypeScalarWhereInput[]
  }

  export type ServiceSettingUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<ServiceSettingCreateWithoutInsurersInput, ServiceSettingUncheckedCreateWithoutInsurersInput> | ServiceSettingCreateWithoutInsurersInput[] | ServiceSettingUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ServiceSettingCreateOrConnectWithoutInsurersInput | ServiceSettingCreateOrConnectWithoutInsurersInput[]
    upsert?: ServiceSettingUpsertWithWhereUniqueWithoutInsurersInput | ServiceSettingUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: ServiceSettingCreateManyInsurersInputEnvelope
    set?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
    disconnect?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
    delete?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
    connect?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
    update?: ServiceSettingUpdateWithWhereUniqueWithoutInsurersInput | ServiceSettingUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: ServiceSettingUpdateManyWithWhereWithoutInsurersInput | ServiceSettingUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: ServiceSettingScalarWhereInput | ServiceSettingScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<TransactionsCreateWithoutInsurersInput, TransactionsUncheckedCreateWithoutInsurersInput> | TransactionsCreateWithoutInsurersInput[] | TransactionsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutInsurersInput | TransactionsCreateOrConnectWithoutInsurersInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutInsurersInput | TransactionsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: TransactionsCreateManyInsurersInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutInsurersInput | TransactionsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutInsurersInput | TransactionsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput> | ClaimStatusCreateWithoutInsurersInput[] | ClaimStatusUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimStatusCreateOrConnectWithoutInsurersInput | ClaimStatusCreateOrConnectWithoutInsurersInput[]
    upsert?: ClaimStatusUpsertWithWhereUniqueWithoutInsurersInput | ClaimStatusUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: ClaimStatusCreateManyInsurersInputEnvelope
    set?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
    disconnect?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
    delete?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
    connect?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
    update?: ClaimStatusUpdateWithWhereUniqueWithoutInsurersInput | ClaimStatusUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: ClaimStatusUpdateManyWithWhereWithoutInsurersInput | ClaimStatusUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: ClaimStatusScalarWhereInput | ClaimStatusScalarWhereInput[]
  }

  export type ClaimantsUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<ClaimantsCreateWithoutInsurersInput, ClaimantsUncheckedCreateWithoutInsurersInput> | ClaimantsCreateWithoutInsurersInput[] | ClaimantsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimantsCreateOrConnectWithoutInsurersInput | ClaimantsCreateOrConnectWithoutInsurersInput[]
    upsert?: ClaimantsUpsertWithWhereUniqueWithoutInsurersInput | ClaimantsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: ClaimantsCreateManyInsurersInputEnvelope
    set?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
    disconnect?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
    delete?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
    connect?: ClaimantsWhereUniqueInput | ClaimantsWhereUniqueInput[]
    update?: ClaimantsUpdateWithWhereUniqueWithoutInsurersInput | ClaimantsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: ClaimantsUpdateManyWithWhereWithoutInsurersInput | ClaimantsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: ClaimantsScalarWhereInput | ClaimantsScalarWhereInput[]
  }

  export type IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<IllnessSurgeryCreateWithoutInsurersInput, IllnessSurgeryUncheckedCreateWithoutInsurersInput> | IllnessSurgeryCreateWithoutInsurersInput[] | IllnessSurgeryUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: IllnessSurgeryCreateOrConnectWithoutInsurersInput | IllnessSurgeryCreateOrConnectWithoutInsurersInput[]
    upsert?: IllnessSurgeryUpsertWithWhereUniqueWithoutInsurersInput | IllnessSurgeryUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: IllnessSurgeryCreateManyInsurersInputEnvelope
    set?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
    disconnect?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
    delete?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
    connect?: IllnessSurgeryWhereUniqueInput | IllnessSurgeryWhereUniqueInput[]
    update?: IllnessSurgeryUpdateWithWhereUniqueWithoutInsurersInput | IllnessSurgeryUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: IllnessSurgeryUpdateManyWithWhereWithoutInsurersInput | IllnessSurgeryUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: IllnessSurgeryScalarWhereInput | IllnessSurgeryScalarWhereInput[]
  }

  export type IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<IllnessTypeCreateWithoutInsurersInput, IllnessTypeUncheckedCreateWithoutInsurersInput> | IllnessTypeCreateWithoutInsurersInput[] | IllnessTypeUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: IllnessTypeCreateOrConnectWithoutInsurersInput | IllnessTypeCreateOrConnectWithoutInsurersInput[]
    upsert?: IllnessTypeUpsertWithWhereUniqueWithoutInsurersInput | IllnessTypeUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: IllnessTypeCreateManyInsurersInputEnvelope
    set?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
    disconnect?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
    delete?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
    connect?: IllnessTypeWhereUniqueInput | IllnessTypeWhereUniqueInput[]
    update?: IllnessTypeUpdateWithWhereUniqueWithoutInsurersInput | IllnessTypeUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: IllnessTypeUpdateManyWithWhereWithoutInsurersInput | IllnessTypeUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: IllnessTypeScalarWhereInput | IllnessTypeScalarWhereInput[]
  }

  export type PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<PolicyTypeCreateWithoutInsurersInput, PolicyTypeUncheckedCreateWithoutInsurersInput> | PolicyTypeCreateWithoutInsurersInput[] | PolicyTypeUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: PolicyTypeCreateOrConnectWithoutInsurersInput | PolicyTypeCreateOrConnectWithoutInsurersInput[]
    upsert?: PolicyTypeUpsertWithWhereUniqueWithoutInsurersInput | PolicyTypeUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: PolicyTypeCreateManyInsurersInputEnvelope
    set?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
    disconnect?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
    delete?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
    connect?: PolicyTypeWhereUniqueInput | PolicyTypeWhereUniqueInput[]
    update?: PolicyTypeUpdateWithWhereUniqueWithoutInsurersInput | PolicyTypeUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: PolicyTypeUpdateManyWithWhereWithoutInsurersInput | PolicyTypeUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: PolicyTypeScalarWhereInput | PolicyTypeScalarWhereInput[]
  }

  export type ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<ServiceSettingCreateWithoutInsurersInput, ServiceSettingUncheckedCreateWithoutInsurersInput> | ServiceSettingCreateWithoutInsurersInput[] | ServiceSettingUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ServiceSettingCreateOrConnectWithoutInsurersInput | ServiceSettingCreateOrConnectWithoutInsurersInput[]
    upsert?: ServiceSettingUpsertWithWhereUniqueWithoutInsurersInput | ServiceSettingUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: ServiceSettingCreateManyInsurersInputEnvelope
    set?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
    disconnect?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
    delete?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
    connect?: ServiceSettingWhereUniqueInput | ServiceSettingWhereUniqueInput[]
    update?: ServiceSettingUpdateWithWhereUniqueWithoutInsurersInput | ServiceSettingUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: ServiceSettingUpdateManyWithWhereWithoutInsurersInput | ServiceSettingUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: ServiceSettingScalarWhereInput | ServiceSettingScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<TransactionsCreateWithoutInsurersInput, TransactionsUncheckedCreateWithoutInsurersInput> | TransactionsCreateWithoutInsurersInput[] | TransactionsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutInsurersInput | TransactionsCreateOrConnectWithoutInsurersInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutInsurersInput | TransactionsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: TransactionsCreateManyInsurersInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutInsurersInput | TransactionsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutInsurersInput | TransactionsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type ClaimantsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ClaimantsCreateWithoutTransactionsInput, ClaimantsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClaimantsCreateOrConnectWithoutTransactionsInput
    connect?: ClaimantsWhereUniqueInput
  }

  export type InsurersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<InsurersCreateWithoutTransactionsInput, InsurersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutTransactionsInput
    connect?: InsurersWhereUniqueInput
  }

  export type ClaimStatusCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ClaimStatusCreateWithoutTransactionsInput, ClaimStatusUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClaimStatusCreateOrConnectWithoutTransactionsInput
    connect?: ClaimStatusWhereUniqueInput
  }

  export type ClaimantsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ClaimantsCreateWithoutTransactionsInput, ClaimantsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClaimantsCreateOrConnectWithoutTransactionsInput
    upsert?: ClaimantsUpsertWithoutTransactionsInput
    disconnect?: ClaimantsWhereInput | boolean
    delete?: ClaimantsWhereInput | boolean
    connect?: ClaimantsWhereUniqueInput
    update?: XOR<XOR<ClaimantsUpdateToOneWithWhereWithoutTransactionsInput, ClaimantsUpdateWithoutTransactionsInput>, ClaimantsUncheckedUpdateWithoutTransactionsInput>
  }

  export type InsurersUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<InsurersCreateWithoutTransactionsInput, InsurersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutTransactionsInput
    upsert?: InsurersUpsertWithoutTransactionsInput
    disconnect?: InsurersWhereInput | boolean
    delete?: InsurersWhereInput | boolean
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutTransactionsInput, InsurersUpdateWithoutTransactionsInput>, InsurersUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClaimStatusUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ClaimStatusCreateWithoutTransactionsInput, ClaimStatusUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ClaimStatusCreateOrConnectWithoutTransactionsInput
    upsert?: ClaimStatusUpsertWithoutTransactionsInput
    disconnect?: ClaimStatusWhereInput | boolean
    delete?: ClaimStatusWhereInput | boolean
    connect?: ClaimStatusWhereUniqueInput
    update?: XOR<XOR<ClaimStatusUpdateToOneWithWhereWithoutTransactionsInput, ClaimStatusUpdateWithoutTransactionsInput>, ClaimStatusUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type InsurersCreateWithoutClaimStatusInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    Claimants?: ClaimantsCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateWithoutClaimStatusInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    Claimants?: ClaimantsUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersCreateOrConnectWithoutClaimStatusInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutClaimStatusInput, InsurersUncheckedCreateWithoutClaimStatusInput>
  }

  export type TransactionsCreateWithoutClaimStatusInput = {
    refid?: string | null
    transactionid?: string | null
    updatedate?: Date | string | null
    vn?: string | null
    accidentdate?: string | null
    Claimants?: ClaimantsCreateNestedOneWithoutTransactionsInput
    Insurers?: InsurersCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutClaimStatusInput = {
    id?: number
    refid?: string | null
    transactionid?: string | null
    updatedate?: Date | string | null
    hn?: string | null
    vn?: string | null
    insurerid?: number | null
    accidentdate?: string | null
  }

  export type TransactionsCreateOrConnectWithoutClaimStatusInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutClaimStatusInput, TransactionsUncheckedCreateWithoutClaimStatusInput>
  }

  export type TransactionsCreateManyClaimStatusInputEnvelope = {
    data: TransactionsCreateManyClaimStatusInput | TransactionsCreateManyClaimStatusInput[]
    skipDuplicates?: boolean
  }

  export type InsurersUpsertWithoutClaimStatusInput = {
    update: XOR<InsurersUpdateWithoutClaimStatusInput, InsurersUncheckedUpdateWithoutClaimStatusInput>
    create: XOR<InsurersCreateWithoutClaimStatusInput, InsurersUncheckedCreateWithoutClaimStatusInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutClaimStatusInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutClaimStatusInput, InsurersUncheckedUpdateWithoutClaimStatusInput>
  }

  export type InsurersUpdateWithoutClaimStatusInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Claimants?: ClaimantsUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateWithoutClaimStatusInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Claimants?: ClaimantsUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutClaimStatusInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutClaimStatusInput, TransactionsUncheckedUpdateWithoutClaimStatusInput>
    create: XOR<TransactionsCreateWithoutClaimStatusInput, TransactionsUncheckedCreateWithoutClaimStatusInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutClaimStatusInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutClaimStatusInput, TransactionsUncheckedUpdateWithoutClaimStatusInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutClaimStatusInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutClaimStatusInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: IntFilter<"Transactions"> | number
    refid?: StringNullableFilter<"Transactions"> | string | null
    transactionid?: StringNullableFilter<"Transactions"> | string | null
    statusid?: IntNullableFilter<"Transactions"> | number | null
    updatedate?: DateTimeNullableFilter<"Transactions"> | Date | string | null
    hn?: StringNullableFilter<"Transactions"> | string | null
    vn?: StringNullableFilter<"Transactions"> | string | null
    insurerid?: IntNullableFilter<"Transactions"> | number | null
    accidentdate?: StringNullableFilter<"Transactions"> | string | null
  }

  export type InsurersCreateWithoutIllnessSurgeryInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateWithoutIllnessSurgeryInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersCreateOrConnectWithoutIllnessSurgeryInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutIllnessSurgeryInput, InsurersUncheckedCreateWithoutIllnessSurgeryInput>
  }

  export type InsurersUpsertWithoutIllnessSurgeryInput = {
    update: XOR<InsurersUpdateWithoutIllnessSurgeryInput, InsurersUncheckedUpdateWithoutIllnessSurgeryInput>
    create: XOR<InsurersCreateWithoutIllnessSurgeryInput, InsurersUncheckedCreateWithoutIllnessSurgeryInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutIllnessSurgeryInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutIllnessSurgeryInput, InsurersUncheckedUpdateWithoutIllnessSurgeryInput>
  }

  export type InsurersUpdateWithoutIllnessSurgeryInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateWithoutIllnessSurgeryInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersCreateWithoutIllnessTypeInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateWithoutIllnessTypeInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersCreateOrConnectWithoutIllnessTypeInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutIllnessTypeInput, InsurersUncheckedCreateWithoutIllnessTypeInput>
  }

  export type InsurersUpsertWithoutIllnessTypeInput = {
    update: XOR<InsurersUpdateWithoutIllnessTypeInput, InsurersUncheckedUpdateWithoutIllnessTypeInput>
    create: XOR<InsurersCreateWithoutIllnessTypeInput, InsurersUncheckedCreateWithoutIllnessTypeInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutIllnessTypeInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutIllnessTypeInput, InsurersUncheckedUpdateWithoutIllnessTypeInput>
  }

  export type InsurersUpdateWithoutIllnessTypeInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateWithoutIllnessTypeInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersCreateWithoutPolicyTypeInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateWithoutPolicyTypeInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersCreateOrConnectWithoutPolicyTypeInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutPolicyTypeInput, InsurersUncheckedCreateWithoutPolicyTypeInput>
  }

  export type InsurersUpsertWithoutPolicyTypeInput = {
    update: XOR<InsurersUpdateWithoutPolicyTypeInput, InsurersUncheckedUpdateWithoutPolicyTypeInput>
    create: XOR<InsurersCreateWithoutPolicyTypeInput, InsurersUncheckedCreateWithoutPolicyTypeInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutPolicyTypeInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutPolicyTypeInput, InsurersUncheckedUpdateWithoutPolicyTypeInput>
  }

  export type InsurersUpdateWithoutPolicyTypeInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateWithoutPolicyTypeInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersCreateWithoutServiceSettingInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateWithoutServiceSettingInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersCreateOrConnectWithoutServiceSettingInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutServiceSettingInput, InsurersUncheckedCreateWithoutServiceSettingInput>
  }

  export type InsurersUpsertWithoutServiceSettingInput = {
    update: XOR<InsurersUpdateWithoutServiceSettingInput, InsurersUncheckedUpdateWithoutServiceSettingInput>
    create: XOR<InsurersCreateWithoutServiceSettingInput, InsurersUncheckedCreateWithoutServiceSettingInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutServiceSettingInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutServiceSettingInput, InsurersUncheckedUpdateWithoutServiceSettingInput>
  }

  export type InsurersUpdateWithoutServiceSettingInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateWithoutServiceSettingInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersCreateWithoutClaimantsInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateWithoutClaimantsInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersCreateOrConnectWithoutClaimantsInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutClaimantsInput, InsurersUncheckedCreateWithoutClaimantsInput>
  }

  export type TransactionsCreateWithoutClaimantsInput = {
    refid?: string | null
    transactionid?: string | null
    updatedate?: Date | string | null
    vn?: string | null
    accidentdate?: string | null
    Insurers?: InsurersCreateNestedOneWithoutTransactionsInput
    ClaimStatus?: ClaimStatusCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutClaimantsInput = {
    id?: number
    refid?: string | null
    transactionid?: string | null
    statusid?: number | null
    updatedate?: Date | string | null
    vn?: string | null
    accidentdate?: string | null
  }

  export type TransactionsCreateOrConnectWithoutClaimantsInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutClaimantsInput, TransactionsUncheckedCreateWithoutClaimantsInput>
  }

  export type TransactionsCreateManyClaimantsInputEnvelope = {
    data: TransactionsCreateManyClaimantsInput | TransactionsCreateManyClaimantsInput[]
    skipDuplicates?: boolean
  }

  export type InsurersUpsertWithoutClaimantsInput = {
    update: XOR<InsurersUpdateWithoutClaimantsInput, InsurersUncheckedUpdateWithoutClaimantsInput>
    create: XOR<InsurersCreateWithoutClaimantsInput, InsurersUncheckedCreateWithoutClaimantsInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutClaimantsInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutClaimantsInput, InsurersUncheckedUpdateWithoutClaimantsInput>
  }

  export type InsurersUpdateWithoutClaimantsInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateWithoutClaimantsInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutClaimantsInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutClaimantsInput, TransactionsUncheckedUpdateWithoutClaimantsInput>
    create: XOR<TransactionsCreateWithoutClaimantsInput, TransactionsUncheckedCreateWithoutClaimantsInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutClaimantsInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutClaimantsInput, TransactionsUncheckedUpdateWithoutClaimantsInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutClaimantsInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutClaimantsInput>
  }

  export type ClaimStatusCreateWithoutInsurersInput = {
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    Transactions?: TransactionsCreateNestedManyWithoutClaimStatusInput
  }

  export type ClaimStatusUncheckedCreateWithoutInsurersInput = {
    id?: number
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutClaimStatusInput
  }

  export type ClaimStatusCreateOrConnectWithoutInsurersInput = {
    where: ClaimStatusWhereUniqueInput
    create: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput>
  }

  export type ClaimStatusCreateManyInsurersInputEnvelope = {
    data: ClaimStatusCreateManyInsurersInput | ClaimStatusCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type ClaimantsCreateWithoutInsurersInput = {
    pid?: string | null
    passportnumber?: string | null
    hn?: string | null
    title_th?: string | null
    givenname_th?: string | null
    surname_th?: string | null
    title_en?: string | null
    givenname_en?: string | null
    surname_en?: string | null
    mobilephone?: string | null
    statusactive?: boolean | null
    registrationdate?: Date | string | null
    dateofbirth?: string | null
    gender?: string | null
    patientid?: number | null
    Transactions?: TransactionsCreateNestedManyWithoutClaimantsInput
  }

  export type ClaimantsUncheckedCreateWithoutInsurersInput = {
    claimantid?: number
    pid?: string | null
    passportnumber?: string | null
    hn?: string | null
    title_th?: string | null
    givenname_th?: string | null
    surname_th?: string | null
    title_en?: string | null
    givenname_en?: string | null
    surname_en?: string | null
    mobilephone?: string | null
    statusactive?: boolean | null
    registrationdate?: Date | string | null
    dateofbirth?: string | null
    gender?: string | null
    patientid?: number | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutClaimantsInput
  }

  export type ClaimantsCreateOrConnectWithoutInsurersInput = {
    where: ClaimantsWhereUniqueInput
    create: XOR<ClaimantsCreateWithoutInsurersInput, ClaimantsUncheckedCreateWithoutInsurersInput>
  }

  export type ClaimantsCreateManyInsurersInputEnvelope = {
    data: ClaimantsCreateManyInsurersInput | ClaimantsCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type IllnessSurgeryCreateWithoutInsurersInput = {
    ISCode: string
    ISDescription?: string | null
  }

  export type IllnessSurgeryUncheckedCreateWithoutInsurersInput = {
    id?: number
    ISCode: string
    ISDescription?: string | null
  }

  export type IllnessSurgeryCreateOrConnectWithoutInsurersInput = {
    where: IllnessSurgeryWhereUniqueInput
    create: XOR<IllnessSurgeryCreateWithoutInsurersInput, IllnessSurgeryUncheckedCreateWithoutInsurersInput>
  }

  export type IllnessSurgeryCreateManyInsurersInputEnvelope = {
    data: IllnessSurgeryCreateManyInsurersInput | IllnessSurgeryCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type IllnessTypeCreateWithoutInsurersInput = {
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
  }

  export type IllnessTypeUncheckedCreateWithoutInsurersInput = {
    id?: number
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
  }

  export type IllnessTypeCreateOrConnectWithoutInsurersInput = {
    where: IllnessTypeWhereUniqueInput
    create: XOR<IllnessTypeCreateWithoutInsurersInput, IllnessTypeUncheckedCreateWithoutInsurersInput>
  }

  export type IllnessTypeCreateManyInsurersInputEnvelope = {
    data: IllnessTypeCreateManyInsurersInput | IllnessTypeCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type PolicyTypeCreateWithoutInsurersInput = {
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
  }

  export type PolicyTypeUncheckedCreateWithoutInsurersInput = {
    id?: number
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
  }

  export type PolicyTypeCreateOrConnectWithoutInsurersInput = {
    where: PolicyTypeWhereUniqueInput
    create: XOR<PolicyTypeCreateWithoutInsurersInput, PolicyTypeUncheckedCreateWithoutInsurersInput>
  }

  export type PolicyTypeCreateManyInsurersInputEnvelope = {
    data: PolicyTypeCreateManyInsurersInput | PolicyTypeCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type ServiceSettingCreateWithoutInsurersInput = {
    ServiceSettingCode: string
    ServiceSettingDesc: string
  }

  export type ServiceSettingUncheckedCreateWithoutInsurersInput = {
    id?: number
    ServiceSettingCode: string
    ServiceSettingDesc: string
  }

  export type ServiceSettingCreateOrConnectWithoutInsurersInput = {
    where: ServiceSettingWhereUniqueInput
    create: XOR<ServiceSettingCreateWithoutInsurersInput, ServiceSettingUncheckedCreateWithoutInsurersInput>
  }

  export type ServiceSettingCreateManyInsurersInputEnvelope = {
    data: ServiceSettingCreateManyInsurersInput | ServiceSettingCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutInsurersInput = {
    refid?: string | null
    transactionid?: string | null
    updatedate?: Date | string | null
    vn?: string | null
    accidentdate?: string | null
    Claimants?: ClaimantsCreateNestedOneWithoutTransactionsInput
    ClaimStatus?: ClaimStatusCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutInsurersInput = {
    id?: number
    refid?: string | null
    transactionid?: string | null
    statusid?: number | null
    updatedate?: Date | string | null
    hn?: string | null
    vn?: string | null
    accidentdate?: string | null
  }

  export type TransactionsCreateOrConnectWithoutInsurersInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutInsurersInput, TransactionsUncheckedCreateWithoutInsurersInput>
  }

  export type TransactionsCreateManyInsurersInputEnvelope = {
    data: TransactionsCreateManyInsurersInput | TransactionsCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type ClaimStatusUpsertWithWhereUniqueWithoutInsurersInput = {
    where: ClaimStatusWhereUniqueInput
    update: XOR<ClaimStatusUpdateWithoutInsurersInput, ClaimStatusUncheckedUpdateWithoutInsurersInput>
    create: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput>
  }

  export type ClaimStatusUpdateWithWhereUniqueWithoutInsurersInput = {
    where: ClaimStatusWhereUniqueInput
    data: XOR<ClaimStatusUpdateWithoutInsurersInput, ClaimStatusUncheckedUpdateWithoutInsurersInput>
  }

  export type ClaimStatusUpdateManyWithWhereWithoutInsurersInput = {
    where: ClaimStatusScalarWhereInput
    data: XOR<ClaimStatusUpdateManyMutationInput, ClaimStatusUncheckedUpdateManyWithoutInsurersInput>
  }

  export type ClaimStatusScalarWhereInput = {
    AND?: ClaimStatusScalarWhereInput | ClaimStatusScalarWhereInput[]
    OR?: ClaimStatusScalarWhereInput[]
    NOT?: ClaimStatusScalarWhereInput | ClaimStatusScalarWhereInput[]
    id?: IntFilter<"ClaimStatus"> | number
    StatusCode?: StringFilter<"ClaimStatus"> | string
    StatusDescTH?: StringNullableFilter<"ClaimStatus"> | string | null
    StatusDescEN?: StringNullableFilter<"ClaimStatus"> | string | null
    insurerid?: IntNullableFilter<"ClaimStatus"> | number | null
  }

  export type ClaimantsUpsertWithWhereUniqueWithoutInsurersInput = {
    where: ClaimantsWhereUniqueInput
    update: XOR<ClaimantsUpdateWithoutInsurersInput, ClaimantsUncheckedUpdateWithoutInsurersInput>
    create: XOR<ClaimantsCreateWithoutInsurersInput, ClaimantsUncheckedCreateWithoutInsurersInput>
  }

  export type ClaimantsUpdateWithWhereUniqueWithoutInsurersInput = {
    where: ClaimantsWhereUniqueInput
    data: XOR<ClaimantsUpdateWithoutInsurersInput, ClaimantsUncheckedUpdateWithoutInsurersInput>
  }

  export type ClaimantsUpdateManyWithWhereWithoutInsurersInput = {
    where: ClaimantsScalarWhereInput
    data: XOR<ClaimantsUpdateManyMutationInput, ClaimantsUncheckedUpdateManyWithoutInsurersInput>
  }

  export type ClaimantsScalarWhereInput = {
    AND?: ClaimantsScalarWhereInput | ClaimantsScalarWhereInput[]
    OR?: ClaimantsScalarWhereInput[]
    NOT?: ClaimantsScalarWhereInput | ClaimantsScalarWhereInput[]
    claimantid?: IntFilter<"Claimants"> | number
    pid?: StringNullableFilter<"Claimants"> | string | null
    passportnumber?: StringNullableFilter<"Claimants"> | string | null
    hn?: StringNullableFilter<"Claimants"> | string | null
    title_th?: StringNullableFilter<"Claimants"> | string | null
    givenname_th?: StringNullableFilter<"Claimants"> | string | null
    surname_th?: StringNullableFilter<"Claimants"> | string | null
    title_en?: StringNullableFilter<"Claimants"> | string | null
    givenname_en?: StringNullableFilter<"Claimants"> | string | null
    surname_en?: StringNullableFilter<"Claimants"> | string | null
    mobilephone?: StringNullableFilter<"Claimants"> | string | null
    insurerid?: IntNullableFilter<"Claimants"> | number | null
    statusactive?: BoolNullableFilter<"Claimants"> | boolean | null
    registrationdate?: DateTimeNullableFilter<"Claimants"> | Date | string | null
    dateofbirth?: StringNullableFilter<"Claimants"> | string | null
    gender?: StringNullableFilter<"Claimants"> | string | null
    patientid?: IntNullableFilter<"Claimants"> | number | null
  }

  export type IllnessSurgeryUpsertWithWhereUniqueWithoutInsurersInput = {
    where: IllnessSurgeryWhereUniqueInput
    update: XOR<IllnessSurgeryUpdateWithoutInsurersInput, IllnessSurgeryUncheckedUpdateWithoutInsurersInput>
    create: XOR<IllnessSurgeryCreateWithoutInsurersInput, IllnessSurgeryUncheckedCreateWithoutInsurersInput>
  }

  export type IllnessSurgeryUpdateWithWhereUniqueWithoutInsurersInput = {
    where: IllnessSurgeryWhereUniqueInput
    data: XOR<IllnessSurgeryUpdateWithoutInsurersInput, IllnessSurgeryUncheckedUpdateWithoutInsurersInput>
  }

  export type IllnessSurgeryUpdateManyWithWhereWithoutInsurersInput = {
    where: IllnessSurgeryScalarWhereInput
    data: XOR<IllnessSurgeryUpdateManyMutationInput, IllnessSurgeryUncheckedUpdateManyWithoutInsurersInput>
  }

  export type IllnessSurgeryScalarWhereInput = {
    AND?: IllnessSurgeryScalarWhereInput | IllnessSurgeryScalarWhereInput[]
    OR?: IllnessSurgeryScalarWhereInput[]
    NOT?: IllnessSurgeryScalarWhereInput | IllnessSurgeryScalarWhereInput[]
    id?: IntFilter<"IllnessSurgery"> | number
    ISCode?: StringFilter<"IllnessSurgery"> | string
    ISDescription?: StringNullableFilter<"IllnessSurgery"> | string | null
    insurerid?: IntNullableFilter<"IllnessSurgery"> | number | null
  }

  export type IllnessTypeUpsertWithWhereUniqueWithoutInsurersInput = {
    where: IllnessTypeWhereUniqueInput
    update: XOR<IllnessTypeUpdateWithoutInsurersInput, IllnessTypeUncheckedUpdateWithoutInsurersInput>
    create: XOR<IllnessTypeCreateWithoutInsurersInput, IllnessTypeUncheckedCreateWithoutInsurersInput>
  }

  export type IllnessTypeUpdateWithWhereUniqueWithoutInsurersInput = {
    where: IllnessTypeWhereUniqueInput
    data: XOR<IllnessTypeUpdateWithoutInsurersInput, IllnessTypeUncheckedUpdateWithoutInsurersInput>
  }

  export type IllnessTypeUpdateManyWithWhereWithoutInsurersInput = {
    where: IllnessTypeScalarWhereInput
    data: XOR<IllnessTypeUpdateManyMutationInput, IllnessTypeUncheckedUpdateManyWithoutInsurersInput>
  }

  export type IllnessTypeScalarWhereInput = {
    AND?: IllnessTypeScalarWhereInput | IllnessTypeScalarWhereInput[]
    OR?: IllnessTypeScalarWhereInput[]
    NOT?: IllnessTypeScalarWhereInput | IllnessTypeScalarWhereInput[]
    id?: IntFilter<"IllnessType"> | number
    IllnessTypeCode?: StringFilter<"IllnessType"> | string
    IllnessTypeDesc?: StringNullableFilter<"IllnessType"> | string | null
    insurerid?: IntNullableFilter<"IllnessType"> | number | null
  }

  export type PolicyTypeUpsertWithWhereUniqueWithoutInsurersInput = {
    where: PolicyTypeWhereUniqueInput
    update: XOR<PolicyTypeUpdateWithoutInsurersInput, PolicyTypeUncheckedUpdateWithoutInsurersInput>
    create: XOR<PolicyTypeCreateWithoutInsurersInput, PolicyTypeUncheckedCreateWithoutInsurersInput>
  }

  export type PolicyTypeUpdateWithWhereUniqueWithoutInsurersInput = {
    where: PolicyTypeWhereUniqueInput
    data: XOR<PolicyTypeUpdateWithoutInsurersInput, PolicyTypeUncheckedUpdateWithoutInsurersInput>
  }

  export type PolicyTypeUpdateManyWithWhereWithoutInsurersInput = {
    where: PolicyTypeScalarWhereInput
    data: XOR<PolicyTypeUpdateManyMutationInput, PolicyTypeUncheckedUpdateManyWithoutInsurersInput>
  }

  export type PolicyTypeScalarWhereInput = {
    AND?: PolicyTypeScalarWhereInput | PolicyTypeScalarWhereInput[]
    OR?: PolicyTypeScalarWhereInput[]
    NOT?: PolicyTypeScalarWhereInput | PolicyTypeScalarWhereInput[]
    id?: IntFilter<"PolicyType"> | number
    PolicyTypeCode?: StringFilter<"PolicyType"> | string
    PolicyTypeDesc?: StringNullableFilter<"PolicyType"> | string | null
    insurerid?: IntNullableFilter<"PolicyType"> | number | null
  }

  export type ServiceSettingUpsertWithWhereUniqueWithoutInsurersInput = {
    where: ServiceSettingWhereUniqueInput
    update: XOR<ServiceSettingUpdateWithoutInsurersInput, ServiceSettingUncheckedUpdateWithoutInsurersInput>
    create: XOR<ServiceSettingCreateWithoutInsurersInput, ServiceSettingUncheckedCreateWithoutInsurersInput>
  }

  export type ServiceSettingUpdateWithWhereUniqueWithoutInsurersInput = {
    where: ServiceSettingWhereUniqueInput
    data: XOR<ServiceSettingUpdateWithoutInsurersInput, ServiceSettingUncheckedUpdateWithoutInsurersInput>
  }

  export type ServiceSettingUpdateManyWithWhereWithoutInsurersInput = {
    where: ServiceSettingScalarWhereInput
    data: XOR<ServiceSettingUpdateManyMutationInput, ServiceSettingUncheckedUpdateManyWithoutInsurersInput>
  }

  export type ServiceSettingScalarWhereInput = {
    AND?: ServiceSettingScalarWhereInput | ServiceSettingScalarWhereInput[]
    OR?: ServiceSettingScalarWhereInput[]
    NOT?: ServiceSettingScalarWhereInput | ServiceSettingScalarWhereInput[]
    id?: IntFilter<"ServiceSetting"> | number
    ServiceSettingCode?: StringFilter<"ServiceSetting"> | string
    ServiceSettingDesc?: StringFilter<"ServiceSetting"> | string
    insurerid?: IntNullableFilter<"ServiceSetting"> | number | null
  }

  export type TransactionsUpsertWithWhereUniqueWithoutInsurersInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutInsurersInput, TransactionsUncheckedUpdateWithoutInsurersInput>
    create: XOR<TransactionsCreateWithoutInsurersInput, TransactionsUncheckedCreateWithoutInsurersInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutInsurersInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutInsurersInput, TransactionsUncheckedUpdateWithoutInsurersInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutInsurersInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutInsurersInput>
  }

  export type ClaimantsCreateWithoutTransactionsInput = {
    pid?: string | null
    passportnumber?: string | null
    hn?: string | null
    title_th?: string | null
    givenname_th?: string | null
    surname_th?: string | null
    title_en?: string | null
    givenname_en?: string | null
    surname_en?: string | null
    mobilephone?: string | null
    statusactive?: boolean | null
    registrationdate?: Date | string | null
    dateofbirth?: string | null
    gender?: string | null
    patientid?: number | null
    Insurers?: InsurersCreateNestedOneWithoutClaimantsInput
  }

  export type ClaimantsUncheckedCreateWithoutTransactionsInput = {
    claimantid?: number
    pid?: string | null
    passportnumber?: string | null
    hn?: string | null
    title_th?: string | null
    givenname_th?: string | null
    surname_th?: string | null
    title_en?: string | null
    givenname_en?: string | null
    surname_en?: string | null
    mobilephone?: string | null
    insurerid?: number | null
    statusactive?: boolean | null
    registrationdate?: Date | string | null
    dateofbirth?: string | null
    gender?: string | null
    patientid?: number | null
  }

  export type ClaimantsCreateOrConnectWithoutTransactionsInput = {
    where: ClaimantsWhereUniqueInput
    create: XOR<ClaimantsCreateWithoutTransactionsInput, ClaimantsUncheckedCreateWithoutTransactionsInput>
  }

  export type InsurersCreateWithoutTransactionsInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateWithoutTransactionsInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    Claimants?: ClaimantsUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersCreateOrConnectWithoutTransactionsInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutTransactionsInput, InsurersUncheckedCreateWithoutTransactionsInput>
  }

  export type ClaimStatusCreateWithoutTransactionsInput = {
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    insurers?: InsurersCreateNestedOneWithoutClaimStatusInput
  }

  export type ClaimStatusUncheckedCreateWithoutTransactionsInput = {
    id?: number
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    insurerid?: number | null
  }

  export type ClaimStatusCreateOrConnectWithoutTransactionsInput = {
    where: ClaimStatusWhereUniqueInput
    create: XOR<ClaimStatusCreateWithoutTransactionsInput, ClaimStatusUncheckedCreateWithoutTransactionsInput>
  }

  export type ClaimantsUpsertWithoutTransactionsInput = {
    update: XOR<ClaimantsUpdateWithoutTransactionsInput, ClaimantsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ClaimantsCreateWithoutTransactionsInput, ClaimantsUncheckedCreateWithoutTransactionsInput>
    where?: ClaimantsWhereInput
  }

  export type ClaimantsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ClaimantsWhereInput
    data: XOR<ClaimantsUpdateWithoutTransactionsInput, ClaimantsUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClaimantsUpdateWithoutTransactionsInput = {
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
    Insurers?: InsurersUpdateOneWithoutClaimantsNestedInput
  }

  export type ClaimantsUncheckedUpdateWithoutTransactionsInput = {
    claimantid?: IntFieldUpdateOperationsInput | number
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InsurersUpsertWithoutTransactionsInput = {
    update: XOR<InsurersUpdateWithoutTransactionsInput, InsurersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<InsurersCreateWithoutTransactionsInput, InsurersUncheckedCreateWithoutTransactionsInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutTransactionsInput, InsurersUncheckedUpdateWithoutTransactionsInput>
  }

  export type InsurersUpdateWithoutTransactionsInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateWithoutTransactionsInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    Claimants?: ClaimantsUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type ClaimStatusUpsertWithoutTransactionsInput = {
    update: XOR<ClaimStatusUpdateWithoutTransactionsInput, ClaimStatusUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ClaimStatusCreateWithoutTransactionsInput, ClaimStatusUncheckedCreateWithoutTransactionsInput>
    where?: ClaimStatusWhereInput
  }

  export type ClaimStatusUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ClaimStatusWhereInput
    data: XOR<ClaimStatusUpdateWithoutTransactionsInput, ClaimStatusUncheckedUpdateWithoutTransactionsInput>
  }

  export type ClaimStatusUpdateWithoutTransactionsInput = {
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    insurers?: InsurersUpdateOneWithoutClaimStatusNestedInput
  }

  export type ClaimStatusUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsCreateManyClaimStatusInput = {
    id?: number
    refid?: string | null
    transactionid?: string | null
    updatedate?: Date | string | null
    hn?: string | null
    vn?: string | null
    insurerid?: number | null
    accidentdate?: string | null
  }

  export type TransactionsUpdateWithoutClaimStatusInput = {
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
    Claimants?: ClaimantsUpdateOneWithoutTransactionsNestedInput
    Insurers?: InsurersUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutClaimStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsUncheckedUpdateManyWithoutClaimStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsCreateManyClaimantsInput = {
    id?: number
    refid?: string | null
    transactionid?: string | null
    statusid?: number | null
    updatedate?: Date | string | null
    vn?: string | null
    accidentdate?: string | null
  }

  export type TransactionsUpdateWithoutClaimantsInput = {
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
    Insurers?: InsurersUpdateOneWithoutTransactionsNestedInput
    ClaimStatus?: ClaimStatusUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutClaimantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    statusid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsUncheckedUpdateManyWithoutClaimantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    statusid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimStatusCreateManyInsurersInput = {
    id?: number
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
  }

  export type ClaimantsCreateManyInsurersInput = {
    claimantid?: number
    pid?: string | null
    passportnumber?: string | null
    hn?: string | null
    title_th?: string | null
    givenname_th?: string | null
    surname_th?: string | null
    title_en?: string | null
    givenname_en?: string | null
    surname_en?: string | null
    mobilephone?: string | null
    statusactive?: boolean | null
    registrationdate?: Date | string | null
    dateofbirth?: string | null
    gender?: string | null
    patientid?: number | null
  }

  export type IllnessSurgeryCreateManyInsurersInput = {
    id?: number
    ISCode: string
    ISDescription?: string | null
  }

  export type IllnessTypeCreateManyInsurersInput = {
    id?: number
    IllnessTypeCode: string
    IllnessTypeDesc?: string | null
  }

  export type PolicyTypeCreateManyInsurersInput = {
    id?: number
    PolicyTypeCode: string
    PolicyTypeDesc?: string | null
  }

  export type ServiceSettingCreateManyInsurersInput = {
    id?: number
    ServiceSettingCode: string
    ServiceSettingDesc: string
  }

  export type TransactionsCreateManyInsurersInput = {
    id?: number
    refid?: string | null
    transactionid?: string | null
    statusid?: number | null
    updatedate?: Date | string | null
    hn?: string | null
    vn?: string | null
    accidentdate?: string | null
  }

  export type ClaimStatusUpdateWithoutInsurersInput = {
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUpdateManyWithoutClaimStatusNestedInput
  }

  export type ClaimStatusUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutClaimStatusNestedInput
  }

  export type ClaimStatusUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimantsUpdateWithoutInsurersInput = {
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUpdateManyWithoutClaimantsNestedInput
  }

  export type ClaimantsUncheckedUpdateWithoutInsurersInput = {
    claimantid?: IntFieldUpdateOperationsInput | number
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutClaimantsNestedInput
  }

  export type ClaimantsUncheckedUpdateManyWithoutInsurersInput = {
    claimantid?: IntFieldUpdateOperationsInput | number
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    passportnumber?: NullableStringFieldUpdateOperationsInput | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    title_th?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_th?: NullableStringFieldUpdateOperationsInput | string | null
    surname_th?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    givenname_en?: NullableStringFieldUpdateOperationsInput | string | null
    surname_en?: NullableStringFieldUpdateOperationsInput | string | null
    mobilephone?: NullableStringFieldUpdateOperationsInput | string | null
    statusactive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateofbirth?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    patientid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IllnessSurgeryUpdateWithoutInsurersInput = {
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessSurgeryUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessSurgeryUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ISCode?: StringFieldUpdateOperationsInput | string
    ISDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessTypeUpdateWithoutInsurersInput = {
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessTypeUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IllnessTypeUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    IllnessTypeCode?: StringFieldUpdateOperationsInput | string
    IllnessTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyTypeUpdateWithoutInsurersInput = {
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyTypeUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyTypeUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    PolicyTypeCode?: StringFieldUpdateOperationsInput | string
    PolicyTypeDesc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceSettingUpdateWithoutInsurersInput = {
    ServiceSettingCode?: StringFieldUpdateOperationsInput | string
    ServiceSettingDesc?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceSettingUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ServiceSettingCode?: StringFieldUpdateOperationsInput | string
    ServiceSettingDesc?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceSettingUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ServiceSettingCode?: StringFieldUpdateOperationsInput | string
    ServiceSettingDesc?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUpdateWithoutInsurersInput = {
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
    Claimants?: ClaimantsUpdateOneWithoutTransactionsNestedInput
    ClaimStatus?: ClaimStatusUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    statusid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionsUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    refid?: NullableStringFieldUpdateOperationsInput | string | null
    transactionid?: NullableStringFieldUpdateOperationsInput | string | null
    statusid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hn?: NullableStringFieldUpdateOperationsInput | string | null
    vn?: NullableStringFieldUpdateOperationsInput | string | null
    accidentdate?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClaimStatusCountOutputTypeDefaultArgs instead
     */
    export type ClaimStatusCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimStatusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaimantsCountOutputTypeDefaultArgs instead
     */
    export type ClaimantsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimantsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InsurersCountOutputTypeDefaultArgs instead
     */
    export type InsurersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InsurersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaimStatusDefaultArgs instead
     */
    export type ClaimStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimStatusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IllnessSurgeryDefaultArgs instead
     */
    export type IllnessSurgeryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IllnessSurgeryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IllnessTypeDefaultArgs instead
     */
    export type IllnessTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IllnessTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PolicyTypeDefaultArgs instead
     */
    export type PolicyTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PolicyTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceSettingDefaultArgs instead
     */
    export type ServiceSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaimantsDefaultArgs instead
     */
    export type ClaimantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimantsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InsurersDefaultArgs instead
     */
    export type InsurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InsurersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionsDefaultArgs instead
     */
    export type TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DiagnosisTypeMappingDefaultArgs instead
     */
    export type DiagnosisTypeMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DiagnosisTypeMappingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use accidentplaceDefaultArgs instead
     */
    export type accidentplaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = accidentplaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use causeofinjurywoundtypeDefaultArgs instead
     */
    export type causeofinjurywoundtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = causeofinjurywoundtypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use causeofinjurysideDefaultArgs instead
     */
    export type causeofinjurysideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = causeofinjurysideDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}