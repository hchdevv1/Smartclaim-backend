
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
 * Model claimants
 * 
 */
export type claimants = $Result.DefaultSelection<Prisma.$claimantsPayload>
/**
 * Model insurers
 * 
 */
export type insurers = $Result.DefaultSelection<Prisma.$insurersPayload>
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
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Claimants
 * const claimants = await prisma.claimants.findMany()
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
   * // Fetch zero or more Claimants
   * const claimants = await prisma.claimants.findMany()
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
   * `prisma.claimants`: Exposes CRUD operations for the **claimants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claimants
    * const claimants = await prisma.claimants.findMany()
    * ```
    */
  get claimants(): Prisma.claimantsDelegate<ExtArgs>;

  /**
   * `prisma.insurers`: Exposes CRUD operations for the **insurers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insurers
    * const insurers = await prisma.insurers.findMany()
    * ```
    */
  get insurers(): Prisma.insurersDelegate<ExtArgs>;

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
    claimants: 'claimants',
    insurers: 'insurers',
    ClaimStatus: 'ClaimStatus',
    IllnessSurgery: 'IllnessSurgery',
    IllnessType: 'IllnessType',
    PolicyType: 'PolicyType',
    ServiceSetting: 'ServiceSetting'
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
      modelProps: "claimants" | "insurers" | "claimStatus" | "illnessSurgery" | "illnessType" | "policyType" | "serviceSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      claimants: {
        payload: Prisma.$claimantsPayload<ExtArgs>
        fields: Prisma.claimantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.claimantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.claimantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload>
          }
          findFirst: {
            args: Prisma.claimantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.claimantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload>
          }
          findMany: {
            args: Prisma.claimantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload>[]
          }
          create: {
            args: Prisma.claimantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload>
          }
          createMany: {
            args: Prisma.claimantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.claimantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload>[]
          }
          delete: {
            args: Prisma.claimantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload>
          }
          update: {
            args: Prisma.claimantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload>
          }
          deleteMany: {
            args: Prisma.claimantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.claimantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.claimantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimantsPayload>
          }
          aggregate: {
            args: Prisma.ClaimantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaimants>
          }
          groupBy: {
            args: Prisma.claimantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.claimantsCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimantsCountAggregateOutputType> | number
          }
        }
      }
      insurers: {
        payload: Prisma.$insurersPayload<ExtArgs>
        fields: Prisma.insurersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.insurersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.insurersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          findFirst: {
            args: Prisma.insurersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.insurersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          findMany: {
            args: Prisma.insurersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>[]
          }
          create: {
            args: Prisma.insurersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          createMany: {
            args: Prisma.insurersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.insurersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>[]
          }
          delete: {
            args: Prisma.insurersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          update: {
            args: Prisma.insurersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          deleteMany: {
            args: Prisma.insurersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.insurersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.insurersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          aggregate: {
            args: Prisma.InsurersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsurers>
          }
          groupBy: {
            args: Prisma.insurersGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsurersGroupByOutputType>[]
          }
          count: {
            args: Prisma.insurersCountArgs<ExtArgs>
            result: $Utils.Optional<InsurersCountAggregateOutputType> | number
          }
        }
      }
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
   * Count Type InsurersCountOutputType
   */

  export type InsurersCountOutputType = {
    ClaimStatus: number
    IllnessSurgery: number
    IllnessType: number
    PolicyType: number
    ServiceSetting: number
    claimants: number
  }

  export type InsurersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClaimStatus?: boolean | InsurersCountOutputTypeCountClaimStatusArgs
    IllnessSurgery?: boolean | InsurersCountOutputTypeCountIllnessSurgeryArgs
    IllnessType?: boolean | InsurersCountOutputTypeCountIllnessTypeArgs
    PolicyType?: boolean | InsurersCountOutputTypeCountPolicyTypeArgs
    ServiceSetting?: boolean | InsurersCountOutputTypeCountServiceSettingArgs
    claimants?: boolean | InsurersCountOutputTypeCountClaimantsArgs
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
  export type InsurersCountOutputTypeCountClaimantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimantsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model claimants
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
     * Filter which claimants to aggregate.
     */
    where?: claimantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claimants to fetch.
     */
    orderBy?: claimantsOrderByWithRelationInput | claimantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: claimantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claimants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claimants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned claimants
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




  export type claimantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimantsWhereInput
    orderBy?: claimantsOrderByWithAggregationInput | claimantsOrderByWithAggregationInput[]
    by: ClaimantsScalarFieldEnum[] | ClaimantsScalarFieldEnum
    having?: claimantsScalarWhereWithAggregatesInput
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

  type GetClaimantsGroupByPayload<T extends claimantsGroupByArgs> = Prisma.PrismaPromise<
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


  export type claimantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    insurers?: boolean | claimants$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["claimants"]>

  export type claimantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    insurers?: boolean | claimants$insurersArgs<ExtArgs>
  }, ExtArgs["result"]["claimants"]>

  export type claimantsSelectScalar = {
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

  export type claimantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | claimants$insurersArgs<ExtArgs>
  }
  export type claimantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | claimants$insurersArgs<ExtArgs>
  }

  export type $claimantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "claimants"
    objects: {
      insurers: Prisma.$insurersPayload<ExtArgs> | null
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

  type claimantsGetPayload<S extends boolean | null | undefined | claimantsDefaultArgs> = $Result.GetResult<Prisma.$claimantsPayload, S>

  type claimantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<claimantsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaimantsCountAggregateInputType | true
    }

  export interface claimantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['claimants'], meta: { name: 'claimants' } }
    /**
     * Find zero or one Claimants that matches the filter.
     * @param {claimantsFindUniqueArgs} args - Arguments to find a Claimants
     * @example
     * // Get one Claimants
     * const claimants = await prisma.claimants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends claimantsFindUniqueArgs>(args: SelectSubset<T, claimantsFindUniqueArgs<ExtArgs>>): Prisma__claimantsClient<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Claimants that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {claimantsFindUniqueOrThrowArgs} args - Arguments to find a Claimants
     * @example
     * // Get one Claimants
     * const claimants = await prisma.claimants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends claimantsFindUniqueOrThrowArgs>(args: SelectSubset<T, claimantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__claimantsClient<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Claimants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimantsFindFirstArgs} args - Arguments to find a Claimants
     * @example
     * // Get one Claimants
     * const claimants = await prisma.claimants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends claimantsFindFirstArgs>(args?: SelectSubset<T, claimantsFindFirstArgs<ExtArgs>>): Prisma__claimantsClient<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Claimants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimantsFindFirstOrThrowArgs} args - Arguments to find a Claimants
     * @example
     * // Get one Claimants
     * const claimants = await prisma.claimants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends claimantsFindFirstOrThrowArgs>(args?: SelectSubset<T, claimantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__claimantsClient<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Claimants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimantsFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends claimantsFindManyArgs>(args?: SelectSubset<T, claimantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Claimants.
     * @param {claimantsCreateArgs} args - Arguments to create a Claimants.
     * @example
     * // Create one Claimants
     * const Claimants = await prisma.claimants.create({
     *   data: {
     *     // ... data to create a Claimants
     *   }
     * })
     * 
     */
    create<T extends claimantsCreateArgs>(args: SelectSubset<T, claimantsCreateArgs<ExtArgs>>): Prisma__claimantsClient<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Claimants.
     * @param {claimantsCreateManyArgs} args - Arguments to create many Claimants.
     * @example
     * // Create many Claimants
     * const claimants = await prisma.claimants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends claimantsCreateManyArgs>(args?: SelectSubset<T, claimantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claimants and returns the data saved in the database.
     * @param {claimantsCreateManyAndReturnArgs} args - Arguments to create many Claimants.
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
    createManyAndReturn<T extends claimantsCreateManyAndReturnArgs>(args?: SelectSubset<T, claimantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Claimants.
     * @param {claimantsDeleteArgs} args - Arguments to delete one Claimants.
     * @example
     * // Delete one Claimants
     * const Claimants = await prisma.claimants.delete({
     *   where: {
     *     // ... filter to delete one Claimants
     *   }
     * })
     * 
     */
    delete<T extends claimantsDeleteArgs>(args: SelectSubset<T, claimantsDeleteArgs<ExtArgs>>): Prisma__claimantsClient<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Claimants.
     * @param {claimantsUpdateArgs} args - Arguments to update one Claimants.
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
    update<T extends claimantsUpdateArgs>(args: SelectSubset<T, claimantsUpdateArgs<ExtArgs>>): Prisma__claimantsClient<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Claimants.
     * @param {claimantsDeleteManyArgs} args - Arguments to filter Claimants to delete.
     * @example
     * // Delete a few Claimants
     * const { count } = await prisma.claimants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends claimantsDeleteManyArgs>(args?: SelectSubset<T, claimantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claimants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimantsUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends claimantsUpdateManyArgs>(args: SelectSubset<T, claimantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Claimants.
     * @param {claimantsUpsertArgs} args - Arguments to update or create a Claimants.
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
    upsert<T extends claimantsUpsertArgs>(args: SelectSubset<T, claimantsUpsertArgs<ExtArgs>>): Prisma__claimantsClient<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Claimants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimantsCountArgs} args - Arguments to filter Claimants to count.
     * @example
     * // Count the number of Claimants
     * const count = await prisma.claimants.count({
     *   where: {
     *     // ... the filter for the Claimants we want to count
     *   }
     * })
    **/
    count<T extends claimantsCountArgs>(
      args?: Subset<T, claimantsCountArgs>,
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
     * @param {claimantsGroupByArgs} args - Group by arguments.
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
      T extends claimantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: claimantsGroupByArgs['orderBy'] }
        : { orderBy?: claimantsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, claimantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the claimants model
   */
  readonly fields: claimantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for claimants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__claimantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insurers<T extends claimants$insurersArgs<ExtArgs> = {}>(args?: Subset<T, claimants$insurersArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the claimants model
   */ 
  interface claimantsFieldRefs {
    readonly claimantid: FieldRef<"claimants", 'Int'>
    readonly pid: FieldRef<"claimants", 'String'>
    readonly passportnumber: FieldRef<"claimants", 'String'>
    readonly hn: FieldRef<"claimants", 'String'>
    readonly title_th: FieldRef<"claimants", 'String'>
    readonly givenname_th: FieldRef<"claimants", 'String'>
    readonly surname_th: FieldRef<"claimants", 'String'>
    readonly title_en: FieldRef<"claimants", 'String'>
    readonly givenname_en: FieldRef<"claimants", 'String'>
    readonly surname_en: FieldRef<"claimants", 'String'>
    readonly mobilephone: FieldRef<"claimants", 'String'>
    readonly insurerid: FieldRef<"claimants", 'Int'>
    readonly statusactive: FieldRef<"claimants", 'Boolean'>
    readonly registrationdate: FieldRef<"claimants", 'DateTime'>
    readonly dateofbirth: FieldRef<"claimants", 'String'>
    readonly gender: FieldRef<"claimants", 'String'>
    readonly patientid: FieldRef<"claimants", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * claimants findUnique
   */
  export type claimantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * Filter, which claimants to fetch.
     */
    where: claimantsWhereUniqueInput
  }

  /**
   * claimants findUniqueOrThrow
   */
  export type claimantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * Filter, which claimants to fetch.
     */
    where: claimantsWhereUniqueInput
  }

  /**
   * claimants findFirst
   */
  export type claimantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * Filter, which claimants to fetch.
     */
    where?: claimantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claimants to fetch.
     */
    orderBy?: claimantsOrderByWithRelationInput | claimantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claimants.
     */
    cursor?: claimantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claimants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claimants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claimants.
     */
    distinct?: ClaimantsScalarFieldEnum | ClaimantsScalarFieldEnum[]
  }

  /**
   * claimants findFirstOrThrow
   */
  export type claimantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * Filter, which claimants to fetch.
     */
    where?: claimantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claimants to fetch.
     */
    orderBy?: claimantsOrderByWithRelationInput | claimantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claimants.
     */
    cursor?: claimantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claimants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claimants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claimants.
     */
    distinct?: ClaimantsScalarFieldEnum | ClaimantsScalarFieldEnum[]
  }

  /**
   * claimants findMany
   */
  export type claimantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * Filter, which claimants to fetch.
     */
    where?: claimantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claimants to fetch.
     */
    orderBy?: claimantsOrderByWithRelationInput | claimantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing claimants.
     */
    cursor?: claimantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claimants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claimants.
     */
    skip?: number
    distinct?: ClaimantsScalarFieldEnum | ClaimantsScalarFieldEnum[]
  }

  /**
   * claimants create
   */
  export type claimantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * The data needed to create a claimants.
     */
    data?: XOR<claimantsCreateInput, claimantsUncheckedCreateInput>
  }

  /**
   * claimants createMany
   */
  export type claimantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many claimants.
     */
    data: claimantsCreateManyInput | claimantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * claimants createManyAndReturn
   */
  export type claimantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many claimants.
     */
    data: claimantsCreateManyInput | claimantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * claimants update
   */
  export type claimantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * The data needed to update a claimants.
     */
    data: XOR<claimantsUpdateInput, claimantsUncheckedUpdateInput>
    /**
     * Choose, which claimants to update.
     */
    where: claimantsWhereUniqueInput
  }

  /**
   * claimants updateMany
   */
  export type claimantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update claimants.
     */
    data: XOR<claimantsUpdateManyMutationInput, claimantsUncheckedUpdateManyInput>
    /**
     * Filter which claimants to update
     */
    where?: claimantsWhereInput
  }

  /**
   * claimants upsert
   */
  export type claimantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * The filter to search for the claimants to update in case it exists.
     */
    where: claimantsWhereUniqueInput
    /**
     * In case the claimants found by the `where` argument doesn't exist, create a new claimants with this data.
     */
    create: XOR<claimantsCreateInput, claimantsUncheckedCreateInput>
    /**
     * In case the claimants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<claimantsUpdateInput, claimantsUncheckedUpdateInput>
  }

  /**
   * claimants delete
   */
  export type claimantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    /**
     * Filter which claimants to delete.
     */
    where: claimantsWhereUniqueInput
  }

  /**
   * claimants deleteMany
   */
  export type claimantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claimants to delete
     */
    where?: claimantsWhereInput
  }

  /**
   * claimants.insurers
   */
  export type claimants$insurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    where?: insurersWhereInput
  }

  /**
   * claimants without action
   */
  export type claimantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
  }


  /**
   * Model insurers
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
     * Filter which insurers to aggregate.
     */
    where?: insurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insurers to fetch.
     */
    orderBy?: insurersOrderByWithRelationInput | insurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: insurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned insurers
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




  export type insurersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insurersWhereInput
    orderBy?: insurersOrderByWithAggregationInput | insurersOrderByWithAggregationInput[]
    by: InsurersScalarFieldEnum[] | InsurersScalarFieldEnum
    having?: insurersScalarWhereWithAggregatesInput
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

  type GetInsurersGroupByPayload<T extends insurersGroupByArgs> = Prisma.PrismaPromise<
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


  export type insurersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    insurercode?: boolean
    insurername?: boolean
    registrationdate?: boolean
    ClaimStatus?: boolean | insurers$ClaimStatusArgs<ExtArgs>
    IllnessSurgery?: boolean | insurers$IllnessSurgeryArgs<ExtArgs>
    IllnessType?: boolean | insurers$IllnessTypeArgs<ExtArgs>
    PolicyType?: boolean | insurers$PolicyTypeArgs<ExtArgs>
    ServiceSetting?: boolean | insurers$ServiceSettingArgs<ExtArgs>
    claimants?: boolean | insurers$claimantsArgs<ExtArgs>
    _count?: boolean | InsurersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insurers"]>

  export type insurersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insurerid?: boolean
    insurercode?: boolean
    insurername?: boolean
    registrationdate?: boolean
  }, ExtArgs["result"]["insurers"]>

  export type insurersSelectScalar = {
    insurerid?: boolean
    insurercode?: boolean
    insurername?: boolean
    registrationdate?: boolean
  }

  export type insurersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClaimStatus?: boolean | insurers$ClaimStatusArgs<ExtArgs>
    IllnessSurgery?: boolean | insurers$IllnessSurgeryArgs<ExtArgs>
    IllnessType?: boolean | insurers$IllnessTypeArgs<ExtArgs>
    PolicyType?: boolean | insurers$PolicyTypeArgs<ExtArgs>
    ServiceSetting?: boolean | insurers$ServiceSettingArgs<ExtArgs>
    claimants?: boolean | insurers$claimantsArgs<ExtArgs>
    _count?: boolean | InsurersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type insurersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $insurersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "insurers"
    objects: {
      ClaimStatus: Prisma.$ClaimStatusPayload<ExtArgs>[]
      IllnessSurgery: Prisma.$IllnessSurgeryPayload<ExtArgs>[]
      IllnessType: Prisma.$IllnessTypePayload<ExtArgs>[]
      PolicyType: Prisma.$PolicyTypePayload<ExtArgs>[]
      ServiceSetting: Prisma.$ServiceSettingPayload<ExtArgs>[]
      claimants: Prisma.$claimantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      insurerid: number
      insurercode: number | null
      insurername: string | null
      registrationdate: Date | null
    }, ExtArgs["result"]["insurers"]>
    composites: {}
  }

  type insurersGetPayload<S extends boolean | null | undefined | insurersDefaultArgs> = $Result.GetResult<Prisma.$insurersPayload, S>

  type insurersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<insurersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InsurersCountAggregateInputType | true
    }

  export interface insurersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['insurers'], meta: { name: 'insurers' } }
    /**
     * Find zero or one Insurers that matches the filter.
     * @param {insurersFindUniqueArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends insurersFindUniqueArgs>(args: SelectSubset<T, insurersFindUniqueArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Insurers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {insurersFindUniqueOrThrowArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends insurersFindUniqueOrThrowArgs>(args: SelectSubset<T, insurersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Insurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersFindFirstArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends insurersFindFirstArgs>(args?: SelectSubset<T, insurersFindFirstArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Insurers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersFindFirstOrThrowArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends insurersFindFirstOrThrowArgs>(args?: SelectSubset<T, insurersFindFirstOrThrowArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Insurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends insurersFindManyArgs>(args?: SelectSubset<T, insurersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Insurers.
     * @param {insurersCreateArgs} args - Arguments to create a Insurers.
     * @example
     * // Create one Insurers
     * const Insurers = await prisma.insurers.create({
     *   data: {
     *     // ... data to create a Insurers
     *   }
     * })
     * 
     */
    create<T extends insurersCreateArgs>(args: SelectSubset<T, insurersCreateArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Insurers.
     * @param {insurersCreateManyArgs} args - Arguments to create many Insurers.
     * @example
     * // Create many Insurers
     * const insurers = await prisma.insurers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends insurersCreateManyArgs>(args?: SelectSubset<T, insurersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insurers and returns the data saved in the database.
     * @param {insurersCreateManyAndReturnArgs} args - Arguments to create many Insurers.
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
    createManyAndReturn<T extends insurersCreateManyAndReturnArgs>(args?: SelectSubset<T, insurersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Insurers.
     * @param {insurersDeleteArgs} args - Arguments to delete one Insurers.
     * @example
     * // Delete one Insurers
     * const Insurers = await prisma.insurers.delete({
     *   where: {
     *     // ... filter to delete one Insurers
     *   }
     * })
     * 
     */
    delete<T extends insurersDeleteArgs>(args: SelectSubset<T, insurersDeleteArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Insurers.
     * @param {insurersUpdateArgs} args - Arguments to update one Insurers.
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
    update<T extends insurersUpdateArgs>(args: SelectSubset<T, insurersUpdateArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Insurers.
     * @param {insurersDeleteManyArgs} args - Arguments to filter Insurers to delete.
     * @example
     * // Delete a few Insurers
     * const { count } = await prisma.insurers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends insurersDeleteManyArgs>(args?: SelectSubset<T, insurersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends insurersUpdateManyArgs>(args: SelectSubset<T, insurersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Insurers.
     * @param {insurersUpsertArgs} args - Arguments to update or create a Insurers.
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
    upsert<T extends insurersUpsertArgs>(args: SelectSubset<T, insurersUpsertArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersCountArgs} args - Arguments to filter Insurers to count.
     * @example
     * // Count the number of Insurers
     * const count = await prisma.insurers.count({
     *   where: {
     *     // ... the filter for the Insurers we want to count
     *   }
     * })
    **/
    count<T extends insurersCountArgs>(
      args?: Subset<T, insurersCountArgs>,
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
     * @param {insurersGroupByArgs} args - Group by arguments.
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
      T extends insurersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insurersGroupByArgs['orderBy'] }
        : { orderBy?: insurersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, insurersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsurersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the insurers model
   */
  readonly fields: insurersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insurers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insurersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ClaimStatus<T extends insurers$ClaimStatusArgs<ExtArgs> = {}>(args?: Subset<T, insurers$ClaimStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimStatusPayload<ExtArgs>, T, "findMany"> | Null>
    IllnessSurgery<T extends insurers$IllnessSurgeryArgs<ExtArgs> = {}>(args?: Subset<T, insurers$IllnessSurgeryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessSurgeryPayload<ExtArgs>, T, "findMany"> | Null>
    IllnessType<T extends insurers$IllnessTypeArgs<ExtArgs> = {}>(args?: Subset<T, insurers$IllnessTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IllnessTypePayload<ExtArgs>, T, "findMany"> | Null>
    PolicyType<T extends insurers$PolicyTypeArgs<ExtArgs> = {}>(args?: Subset<T, insurers$PolicyTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findMany"> | Null>
    ServiceSetting<T extends insurers$ServiceSettingArgs<ExtArgs> = {}>(args?: Subset<T, insurers$ServiceSettingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceSettingPayload<ExtArgs>, T, "findMany"> | Null>
    claimants<T extends insurers$claimantsArgs<ExtArgs> = {}>(args?: Subset<T, insurers$claimantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimantsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the insurers model
   */ 
  interface insurersFieldRefs {
    readonly insurerid: FieldRef<"insurers", 'Int'>
    readonly insurercode: FieldRef<"insurers", 'Int'>
    readonly insurername: FieldRef<"insurers", 'String'>
    readonly registrationdate: FieldRef<"insurers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * insurers findUnique
   */
  export type insurersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where: insurersWhereUniqueInput
  }

  /**
   * insurers findUniqueOrThrow
   */
  export type insurersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where: insurersWhereUniqueInput
  }

  /**
   * insurers findFirst
   */
  export type insurersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where?: insurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insurers to fetch.
     */
    orderBy?: insurersOrderByWithRelationInput | insurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for insurers.
     */
    cursor?: insurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of insurers.
     */
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * insurers findFirstOrThrow
   */
  export type insurersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where?: insurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insurers to fetch.
     */
    orderBy?: insurersOrderByWithRelationInput | insurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for insurers.
     */
    cursor?: insurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of insurers.
     */
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * insurers findMany
   */
  export type insurersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where?: insurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insurers to fetch.
     */
    orderBy?: insurersOrderByWithRelationInput | insurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing insurers.
     */
    cursor?: insurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insurers.
     */
    skip?: number
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * insurers create
   */
  export type insurersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * The data needed to create a insurers.
     */
    data: XOR<insurersCreateInput, insurersUncheckedCreateInput>
  }

  /**
   * insurers createMany
   */
  export type insurersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many insurers.
     */
    data: insurersCreateManyInput | insurersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * insurers createManyAndReturn
   */
  export type insurersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many insurers.
     */
    data: insurersCreateManyInput | insurersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * insurers update
   */
  export type insurersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * The data needed to update a insurers.
     */
    data: XOR<insurersUpdateInput, insurersUncheckedUpdateInput>
    /**
     * Choose, which insurers to update.
     */
    where: insurersWhereUniqueInput
  }

  /**
   * insurers updateMany
   */
  export type insurersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update insurers.
     */
    data: XOR<insurersUpdateManyMutationInput, insurersUncheckedUpdateManyInput>
    /**
     * Filter which insurers to update
     */
    where?: insurersWhereInput
  }

  /**
   * insurers upsert
   */
  export type insurersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * The filter to search for the insurers to update in case it exists.
     */
    where: insurersWhereUniqueInput
    /**
     * In case the insurers found by the `where` argument doesn't exist, create a new insurers with this data.
     */
    create: XOR<insurersCreateInput, insurersUncheckedCreateInput>
    /**
     * In case the insurers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insurersUpdateInput, insurersUncheckedUpdateInput>
  }

  /**
   * insurers delete
   */
  export type insurersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter which insurers to delete.
     */
    where: insurersWhereUniqueInput
  }

  /**
   * insurers deleteMany
   */
  export type insurersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurers to delete
     */
    where?: insurersWhereInput
  }

  /**
   * insurers.ClaimStatus
   */
  export type insurers$ClaimStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * insurers.IllnessSurgery
   */
  export type insurers$IllnessSurgeryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * insurers.IllnessType
   */
  export type insurers$IllnessTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * insurers.PolicyType
   */
  export type insurers$PolicyTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * insurers.ServiceSetting
   */
  export type insurers$ServiceSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * insurers.claimants
   */
  export type insurers$claimantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claimants
     */
    select?: claimantsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimantsInclude<ExtArgs> | null
    where?: claimantsWhereInput
    orderBy?: claimantsOrderByWithRelationInput | claimantsOrderByWithRelationInput[]
    cursor?: claimantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimantsScalarFieldEnum | ClaimantsScalarFieldEnum[]
  }

  /**
   * insurers without action
   */
  export type insurersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
  }


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
  }
  export type ClaimStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurers?: boolean | ClaimStatus$insurersArgs<ExtArgs>
  }

  export type $ClaimStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClaimStatus"
    objects: {
      insurers: Prisma.$insurersPayload<ExtArgs> | null
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
    insurers<T extends ClaimStatus$insurersArgs<ExtArgs> = {}>(args?: Subset<T, ClaimStatus$insurersArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    where?: insurersWhereInput
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
      insurers: Prisma.$insurersPayload<ExtArgs> | null
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
    insurers<T extends IllnessSurgery$insurersArgs<ExtArgs> = {}>(args?: Subset<T, IllnessSurgery$insurersArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    where?: insurersWhereInput
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
      insurers: Prisma.$insurersPayload<ExtArgs> | null
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
    insurers<T extends IllnessType$insurersArgs<ExtArgs> = {}>(args?: Subset<T, IllnessType$insurersArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    where?: insurersWhereInput
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
      insurers: Prisma.$insurersPayload<ExtArgs> | null
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
    insurers<T extends PolicyType$insurersArgs<ExtArgs> = {}>(args?: Subset<T, PolicyType$insurersArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    where?: insurersWhereInput
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
      insurers: Prisma.$insurersPayload<ExtArgs> | null
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
    insurers<T extends ServiceSetting$insurersArgs<ExtArgs> = {}>(args?: Subset<T, ServiceSetting$insurersArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    where?: insurersWhereInput
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


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


  export type claimantsWhereInput = {
    AND?: claimantsWhereInput | claimantsWhereInput[]
    OR?: claimantsWhereInput[]
    NOT?: claimantsWhereInput | claimantsWhereInput[]
    claimantid?: IntFilter<"claimants"> | number
    pid?: StringNullableFilter<"claimants"> | string | null
    passportnumber?: StringNullableFilter<"claimants"> | string | null
    hn?: StringNullableFilter<"claimants"> | string | null
    title_th?: StringNullableFilter<"claimants"> | string | null
    givenname_th?: StringNullableFilter<"claimants"> | string | null
    surname_th?: StringNullableFilter<"claimants"> | string | null
    title_en?: StringNullableFilter<"claimants"> | string | null
    givenname_en?: StringNullableFilter<"claimants"> | string | null
    surname_en?: StringNullableFilter<"claimants"> | string | null
    mobilephone?: StringNullableFilter<"claimants"> | string | null
    insurerid?: IntNullableFilter<"claimants"> | number | null
    statusactive?: BoolNullableFilter<"claimants"> | boolean | null
    registrationdate?: DateTimeNullableFilter<"claimants"> | Date | string | null
    dateofbirth?: StringNullableFilter<"claimants"> | string | null
    gender?: StringNullableFilter<"claimants"> | string | null
    patientid?: IntNullableFilter<"claimants"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
  }

  export type claimantsOrderByWithRelationInput = {
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
    insurers?: insurersOrderByWithRelationInput
  }

  export type claimantsWhereUniqueInput = Prisma.AtLeast<{
    claimantid?: number
    pid?: string
    AND?: claimantsWhereInput | claimantsWhereInput[]
    OR?: claimantsWhereInput[]
    NOT?: claimantsWhereInput | claimantsWhereInput[]
    passportnumber?: StringNullableFilter<"claimants"> | string | null
    hn?: StringNullableFilter<"claimants"> | string | null
    title_th?: StringNullableFilter<"claimants"> | string | null
    givenname_th?: StringNullableFilter<"claimants"> | string | null
    surname_th?: StringNullableFilter<"claimants"> | string | null
    title_en?: StringNullableFilter<"claimants"> | string | null
    givenname_en?: StringNullableFilter<"claimants"> | string | null
    surname_en?: StringNullableFilter<"claimants"> | string | null
    mobilephone?: StringNullableFilter<"claimants"> | string | null
    insurerid?: IntNullableFilter<"claimants"> | number | null
    statusactive?: BoolNullableFilter<"claimants"> | boolean | null
    registrationdate?: DateTimeNullableFilter<"claimants"> | Date | string | null
    dateofbirth?: StringNullableFilter<"claimants"> | string | null
    gender?: StringNullableFilter<"claimants"> | string | null
    patientid?: IntNullableFilter<"claimants"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
  }, "claimantid" | "pid">

  export type claimantsOrderByWithAggregationInput = {
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
    _count?: claimantsCountOrderByAggregateInput
    _avg?: claimantsAvgOrderByAggregateInput
    _max?: claimantsMaxOrderByAggregateInput
    _min?: claimantsMinOrderByAggregateInput
    _sum?: claimantsSumOrderByAggregateInput
  }

  export type claimantsScalarWhereWithAggregatesInput = {
    AND?: claimantsScalarWhereWithAggregatesInput | claimantsScalarWhereWithAggregatesInput[]
    OR?: claimantsScalarWhereWithAggregatesInput[]
    NOT?: claimantsScalarWhereWithAggregatesInput | claimantsScalarWhereWithAggregatesInput[]
    claimantid?: IntWithAggregatesFilter<"claimants"> | number
    pid?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    passportnumber?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    hn?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    title_th?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    givenname_th?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    surname_th?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    title_en?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    givenname_en?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    surname_en?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    mobilephone?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    insurerid?: IntNullableWithAggregatesFilter<"claimants"> | number | null
    statusactive?: BoolNullableWithAggregatesFilter<"claimants"> | boolean | null
    registrationdate?: DateTimeNullableWithAggregatesFilter<"claimants"> | Date | string | null
    dateofbirth?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    gender?: StringNullableWithAggregatesFilter<"claimants"> | string | null
    patientid?: IntNullableWithAggregatesFilter<"claimants"> | number | null
  }

  export type insurersWhereInput = {
    AND?: insurersWhereInput | insurersWhereInput[]
    OR?: insurersWhereInput[]
    NOT?: insurersWhereInput | insurersWhereInput[]
    insurerid?: IntFilter<"insurers"> | number
    insurercode?: IntNullableFilter<"insurers"> | number | null
    insurername?: StringNullableFilter<"insurers"> | string | null
    registrationdate?: DateTimeNullableFilter<"insurers"> | Date | string | null
    ClaimStatus?: ClaimStatusListRelationFilter
    IllnessSurgery?: IllnessSurgeryListRelationFilter
    IllnessType?: IllnessTypeListRelationFilter
    PolicyType?: PolicyTypeListRelationFilter
    ServiceSetting?: ServiceSettingListRelationFilter
    claimants?: ClaimantsListRelationFilter
  }

  export type insurersOrderByWithRelationInput = {
    insurerid?: SortOrder
    insurercode?: SortOrderInput | SortOrder
    insurername?: SortOrderInput | SortOrder
    registrationdate?: SortOrderInput | SortOrder
    ClaimStatus?: ClaimStatusOrderByRelationAggregateInput
    IllnessSurgery?: IllnessSurgeryOrderByRelationAggregateInput
    IllnessType?: IllnessTypeOrderByRelationAggregateInput
    PolicyType?: PolicyTypeOrderByRelationAggregateInput
    ServiceSetting?: ServiceSettingOrderByRelationAggregateInput
    claimants?: claimantsOrderByRelationAggregateInput
  }

  export type insurersWhereUniqueInput = Prisma.AtLeast<{
    insurerid?: number
    AND?: insurersWhereInput | insurersWhereInput[]
    OR?: insurersWhereInput[]
    NOT?: insurersWhereInput | insurersWhereInput[]
    insurercode?: IntNullableFilter<"insurers"> | number | null
    insurername?: StringNullableFilter<"insurers"> | string | null
    registrationdate?: DateTimeNullableFilter<"insurers"> | Date | string | null
    ClaimStatus?: ClaimStatusListRelationFilter
    IllnessSurgery?: IllnessSurgeryListRelationFilter
    IllnessType?: IllnessTypeListRelationFilter
    PolicyType?: PolicyTypeListRelationFilter
    ServiceSetting?: ServiceSettingListRelationFilter
    claimants?: ClaimantsListRelationFilter
  }, "insurerid">

  export type insurersOrderByWithAggregationInput = {
    insurerid?: SortOrder
    insurercode?: SortOrderInput | SortOrder
    insurername?: SortOrderInput | SortOrder
    registrationdate?: SortOrderInput | SortOrder
    _count?: insurersCountOrderByAggregateInput
    _avg?: insurersAvgOrderByAggregateInput
    _max?: insurersMaxOrderByAggregateInput
    _min?: insurersMinOrderByAggregateInput
    _sum?: insurersSumOrderByAggregateInput
  }

  export type insurersScalarWhereWithAggregatesInput = {
    AND?: insurersScalarWhereWithAggregatesInput | insurersScalarWhereWithAggregatesInput[]
    OR?: insurersScalarWhereWithAggregatesInput[]
    NOT?: insurersScalarWhereWithAggregatesInput | insurersScalarWhereWithAggregatesInput[]
    insurerid?: IntWithAggregatesFilter<"insurers"> | number
    insurercode?: IntNullableWithAggregatesFilter<"insurers"> | number | null
    insurername?: StringNullableWithAggregatesFilter<"insurers"> | string | null
    registrationdate?: DateTimeNullableWithAggregatesFilter<"insurers"> | Date | string | null
  }

  export type ClaimStatusWhereInput = {
    AND?: ClaimStatusWhereInput | ClaimStatusWhereInput[]
    OR?: ClaimStatusWhereInput[]
    NOT?: ClaimStatusWhereInput | ClaimStatusWhereInput[]
    id?: IntFilter<"ClaimStatus"> | number
    StatusCode?: StringFilter<"ClaimStatus"> | string
    StatusDescTH?: StringNullableFilter<"ClaimStatus"> | string | null
    StatusDescEN?: StringNullableFilter<"ClaimStatus"> | string | null
    insurerid?: IntNullableFilter<"ClaimStatus"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
  }

  export type ClaimStatusOrderByWithRelationInput = {
    id?: SortOrder
    StatusCode?: SortOrder
    StatusDescTH?: SortOrderInput | SortOrder
    StatusDescEN?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: insurersOrderByWithRelationInput
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
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
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
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
  }

  export type IllnessSurgeryOrderByWithRelationInput = {
    id?: SortOrder
    ISCode?: SortOrder
    ISDescription?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: insurersOrderByWithRelationInput
  }

  export type IllnessSurgeryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    OR?: IllnessSurgeryWhereInput[]
    NOT?: IllnessSurgeryWhereInput | IllnessSurgeryWhereInput[]
    ISCode?: StringFilter<"IllnessSurgery"> | string
    ISDescription?: StringNullableFilter<"IllnessSurgery"> | string | null
    insurerid?: IntNullableFilter<"IllnessSurgery"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
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
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
  }

  export type IllnessTypeOrderByWithRelationInput = {
    id?: SortOrder
    IllnessTypeCode?: SortOrder
    IllnessTypeDesc?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: insurersOrderByWithRelationInput
  }

  export type IllnessTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    OR?: IllnessTypeWhereInput[]
    NOT?: IllnessTypeWhereInput | IllnessTypeWhereInput[]
    IllnessTypeCode?: StringFilter<"IllnessType"> | string
    IllnessTypeDesc?: StringNullableFilter<"IllnessType"> | string | null
    insurerid?: IntNullableFilter<"IllnessType"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
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
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
  }

  export type PolicyTypeOrderByWithRelationInput = {
    id?: SortOrder
    PolicyTypeCode?: SortOrder
    PolicyTypeDesc?: SortOrderInput | SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: insurersOrderByWithRelationInput
  }

  export type PolicyTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    OR?: PolicyTypeWhereInput[]
    NOT?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    PolicyTypeCode?: StringFilter<"PolicyType"> | string
    PolicyTypeDesc?: StringNullableFilter<"PolicyType"> | string | null
    insurerid?: IntNullableFilter<"PolicyType"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
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
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
  }

  export type ServiceSettingOrderByWithRelationInput = {
    id?: SortOrder
    ServiceSettingCode?: SortOrder
    ServiceSettingDesc?: SortOrder
    insurerid?: SortOrderInput | SortOrder
    insurers?: insurersOrderByWithRelationInput
  }

  export type ServiceSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceSettingWhereInput | ServiceSettingWhereInput[]
    OR?: ServiceSettingWhereInput[]
    NOT?: ServiceSettingWhereInput | ServiceSettingWhereInput[]
    ServiceSettingCode?: StringFilter<"ServiceSetting"> | string
    ServiceSettingDesc?: StringFilter<"ServiceSetting"> | string
    insurerid?: IntNullableFilter<"ServiceSetting"> | number | null
    insurers?: XOR<InsurersNullableRelationFilter, insurersWhereInput> | null
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

  export type claimantsCreateInput = {
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
    insurers?: insurersCreateNestedOneWithoutClaimantsInput
  }

  export type claimantsUncheckedCreateInput = {
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

  export type claimantsUpdateInput = {
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
    insurers?: insurersUpdateOneWithoutClaimantsNestedInput
  }

  export type claimantsUncheckedUpdateInput = {
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

  export type claimantsCreateManyInput = {
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

  export type claimantsUpdateManyMutationInput = {
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

  export type claimantsUncheckedUpdateManyInput = {
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

  export type insurersCreateInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    claimants?: claimantsCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    claimants?: claimantsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type insurersCreateManyInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
  }

  export type insurersUpdateManyMutationInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type insurersUncheckedUpdateManyInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClaimStatusCreateInput = {
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    insurers?: insurersCreateNestedOneWithoutClaimStatusInput
  }

  export type ClaimStatusUncheckedCreateInput = {
    id?: number
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
    insurerid?: number | null
  }

  export type ClaimStatusUpdateInput = {
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    insurers?: insurersUpdateOneWithoutClaimStatusNestedInput
  }

  export type ClaimStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
    insurerid?: NullableIntFieldUpdateOperationsInput | number | null
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
    insurers?: insurersCreateNestedOneWithoutIllnessSurgeryInput
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
    insurers?: insurersUpdateOneWithoutIllnessSurgeryNestedInput
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
    insurers?: insurersCreateNestedOneWithoutIllnessTypeInput
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
    insurers?: insurersUpdateOneWithoutIllnessTypeNestedInput
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
    insurers?: insurersCreateNestedOneWithoutPolicyTypeInput
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
    insurers?: insurersUpdateOneWithoutPolicyTypeNestedInput
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
    insurers?: insurersCreateNestedOneWithoutServiceSettingInput
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
    insurers?: insurersUpdateOneWithoutServiceSettingNestedInput
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

  export type InsurersNullableRelationFilter = {
    is?: insurersWhereInput | null
    isNot?: insurersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type claimantsCountOrderByAggregateInput = {
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

  export type claimantsAvgOrderByAggregateInput = {
    claimantid?: SortOrder
    insurerid?: SortOrder
    patientid?: SortOrder
  }

  export type claimantsMaxOrderByAggregateInput = {
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

  export type claimantsMinOrderByAggregateInput = {
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

  export type claimantsSumOrderByAggregateInput = {
    claimantid?: SortOrder
    insurerid?: SortOrder
    patientid?: SortOrder
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

  export type ClaimantsListRelationFilter = {
    every?: claimantsWhereInput
    some?: claimantsWhereInput
    none?: claimantsWhereInput
  }

  export type ClaimStatusOrderByRelationAggregateInput = {
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

  export type claimantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type insurersCountOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
    insurername?: SortOrder
    registrationdate?: SortOrder
  }

  export type insurersAvgOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
  }

  export type insurersMaxOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
    insurername?: SortOrder
    registrationdate?: SortOrder
  }

  export type insurersMinOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
    insurername?: SortOrder
    registrationdate?: SortOrder
  }

  export type insurersSumOrderByAggregateInput = {
    insurerid?: SortOrder
    insurercode?: SortOrder
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

  export type insurersCreateNestedOneWithoutClaimantsInput = {
    create?: XOR<insurersCreateWithoutClaimantsInput, insurersUncheckedCreateWithoutClaimantsInput>
    connectOrCreate?: insurersCreateOrConnectWithoutClaimantsInput
    connect?: insurersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type insurersUpdateOneWithoutClaimantsNestedInput = {
    create?: XOR<insurersCreateWithoutClaimantsInput, insurersUncheckedCreateWithoutClaimantsInput>
    connectOrCreate?: insurersCreateOrConnectWithoutClaimantsInput
    upsert?: insurersUpsertWithoutClaimantsInput
    disconnect?: insurersWhereInput | boolean
    delete?: insurersWhereInput | boolean
    connect?: insurersWhereUniqueInput
    update?: XOR<XOR<insurersUpdateToOneWithWhereWithoutClaimantsInput, insurersUpdateWithoutClaimantsInput>, insurersUncheckedUpdateWithoutClaimantsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClaimStatusCreateNestedManyWithoutInsurersInput = {
    create?: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput> | ClaimStatusCreateWithoutInsurersInput[] | ClaimStatusUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimStatusCreateOrConnectWithoutInsurersInput | ClaimStatusCreateOrConnectWithoutInsurersInput[]
    createMany?: ClaimStatusCreateManyInsurersInputEnvelope
    connect?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
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

  export type claimantsCreateNestedManyWithoutInsurersInput = {
    create?: XOR<claimantsCreateWithoutInsurersInput, claimantsUncheckedCreateWithoutInsurersInput> | claimantsCreateWithoutInsurersInput[] | claimantsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: claimantsCreateOrConnectWithoutInsurersInput | claimantsCreateOrConnectWithoutInsurersInput[]
    createMany?: claimantsCreateManyInsurersInputEnvelope
    connect?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
  }

  export type ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput> | ClaimStatusCreateWithoutInsurersInput[] | ClaimStatusUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: ClaimStatusCreateOrConnectWithoutInsurersInput | ClaimStatusCreateOrConnectWithoutInsurersInput[]
    createMany?: ClaimStatusCreateManyInsurersInputEnvelope
    connect?: ClaimStatusWhereUniqueInput | ClaimStatusWhereUniqueInput[]
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

  export type claimantsUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<claimantsCreateWithoutInsurersInput, claimantsUncheckedCreateWithoutInsurersInput> | claimantsCreateWithoutInsurersInput[] | claimantsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: claimantsCreateOrConnectWithoutInsurersInput | claimantsCreateOrConnectWithoutInsurersInput[]
    createMany?: claimantsCreateManyInsurersInputEnvelope
    connect?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
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

  export type claimantsUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<claimantsCreateWithoutInsurersInput, claimantsUncheckedCreateWithoutInsurersInput> | claimantsCreateWithoutInsurersInput[] | claimantsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: claimantsCreateOrConnectWithoutInsurersInput | claimantsCreateOrConnectWithoutInsurersInput[]
    upsert?: claimantsUpsertWithWhereUniqueWithoutInsurersInput | claimantsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: claimantsCreateManyInsurersInputEnvelope
    set?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
    disconnect?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
    delete?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
    connect?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
    update?: claimantsUpdateWithWhereUniqueWithoutInsurersInput | claimantsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: claimantsUpdateManyWithWhereWithoutInsurersInput | claimantsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: claimantsScalarWhereInput | claimantsScalarWhereInput[]
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

  export type claimantsUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<claimantsCreateWithoutInsurersInput, claimantsUncheckedCreateWithoutInsurersInput> | claimantsCreateWithoutInsurersInput[] | claimantsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: claimantsCreateOrConnectWithoutInsurersInput | claimantsCreateOrConnectWithoutInsurersInput[]
    upsert?: claimantsUpsertWithWhereUniqueWithoutInsurersInput | claimantsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: claimantsCreateManyInsurersInputEnvelope
    set?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
    disconnect?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
    delete?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
    connect?: claimantsWhereUniqueInput | claimantsWhereUniqueInput[]
    update?: claimantsUpdateWithWhereUniqueWithoutInsurersInput | claimantsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: claimantsUpdateManyWithWhereWithoutInsurersInput | claimantsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: claimantsScalarWhereInput | claimantsScalarWhereInput[]
  }

  export type insurersCreateNestedOneWithoutClaimStatusInput = {
    create?: XOR<insurersCreateWithoutClaimStatusInput, insurersUncheckedCreateWithoutClaimStatusInput>
    connectOrCreate?: insurersCreateOrConnectWithoutClaimStatusInput
    connect?: insurersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type insurersUpdateOneWithoutClaimStatusNestedInput = {
    create?: XOR<insurersCreateWithoutClaimStatusInput, insurersUncheckedCreateWithoutClaimStatusInput>
    connectOrCreate?: insurersCreateOrConnectWithoutClaimStatusInput
    upsert?: insurersUpsertWithoutClaimStatusInput
    disconnect?: insurersWhereInput | boolean
    delete?: insurersWhereInput | boolean
    connect?: insurersWhereUniqueInput
    update?: XOR<XOR<insurersUpdateToOneWithWhereWithoutClaimStatusInput, insurersUpdateWithoutClaimStatusInput>, insurersUncheckedUpdateWithoutClaimStatusInput>
  }

  export type insurersCreateNestedOneWithoutIllnessSurgeryInput = {
    create?: XOR<insurersCreateWithoutIllnessSurgeryInput, insurersUncheckedCreateWithoutIllnessSurgeryInput>
    connectOrCreate?: insurersCreateOrConnectWithoutIllnessSurgeryInput
    connect?: insurersWhereUniqueInput
  }

  export type insurersUpdateOneWithoutIllnessSurgeryNestedInput = {
    create?: XOR<insurersCreateWithoutIllnessSurgeryInput, insurersUncheckedCreateWithoutIllnessSurgeryInput>
    connectOrCreate?: insurersCreateOrConnectWithoutIllnessSurgeryInput
    upsert?: insurersUpsertWithoutIllnessSurgeryInput
    disconnect?: insurersWhereInput | boolean
    delete?: insurersWhereInput | boolean
    connect?: insurersWhereUniqueInput
    update?: XOR<XOR<insurersUpdateToOneWithWhereWithoutIllnessSurgeryInput, insurersUpdateWithoutIllnessSurgeryInput>, insurersUncheckedUpdateWithoutIllnessSurgeryInput>
  }

  export type insurersCreateNestedOneWithoutIllnessTypeInput = {
    create?: XOR<insurersCreateWithoutIllnessTypeInput, insurersUncheckedCreateWithoutIllnessTypeInput>
    connectOrCreate?: insurersCreateOrConnectWithoutIllnessTypeInput
    connect?: insurersWhereUniqueInput
  }

  export type insurersUpdateOneWithoutIllnessTypeNestedInput = {
    create?: XOR<insurersCreateWithoutIllnessTypeInput, insurersUncheckedCreateWithoutIllnessTypeInput>
    connectOrCreate?: insurersCreateOrConnectWithoutIllnessTypeInput
    upsert?: insurersUpsertWithoutIllnessTypeInput
    disconnect?: insurersWhereInput | boolean
    delete?: insurersWhereInput | boolean
    connect?: insurersWhereUniqueInput
    update?: XOR<XOR<insurersUpdateToOneWithWhereWithoutIllnessTypeInput, insurersUpdateWithoutIllnessTypeInput>, insurersUncheckedUpdateWithoutIllnessTypeInput>
  }

  export type insurersCreateNestedOneWithoutPolicyTypeInput = {
    create?: XOR<insurersCreateWithoutPolicyTypeInput, insurersUncheckedCreateWithoutPolicyTypeInput>
    connectOrCreate?: insurersCreateOrConnectWithoutPolicyTypeInput
    connect?: insurersWhereUniqueInput
  }

  export type insurersUpdateOneWithoutPolicyTypeNestedInput = {
    create?: XOR<insurersCreateWithoutPolicyTypeInput, insurersUncheckedCreateWithoutPolicyTypeInput>
    connectOrCreate?: insurersCreateOrConnectWithoutPolicyTypeInput
    upsert?: insurersUpsertWithoutPolicyTypeInput
    disconnect?: insurersWhereInput | boolean
    delete?: insurersWhereInput | boolean
    connect?: insurersWhereUniqueInput
    update?: XOR<XOR<insurersUpdateToOneWithWhereWithoutPolicyTypeInput, insurersUpdateWithoutPolicyTypeInput>, insurersUncheckedUpdateWithoutPolicyTypeInput>
  }

  export type insurersCreateNestedOneWithoutServiceSettingInput = {
    create?: XOR<insurersCreateWithoutServiceSettingInput, insurersUncheckedCreateWithoutServiceSettingInput>
    connectOrCreate?: insurersCreateOrConnectWithoutServiceSettingInput
    connect?: insurersWhereUniqueInput
  }

  export type insurersUpdateOneWithoutServiceSettingNestedInput = {
    create?: XOR<insurersCreateWithoutServiceSettingInput, insurersUncheckedCreateWithoutServiceSettingInput>
    connectOrCreate?: insurersCreateOrConnectWithoutServiceSettingInput
    upsert?: insurersUpsertWithoutServiceSettingInput
    disconnect?: insurersWhereInput | boolean
    delete?: insurersWhereInput | boolean
    connect?: insurersWhereUniqueInput
    update?: XOR<XOR<insurersUpdateToOneWithWhereWithoutServiceSettingInput, insurersUpdateWithoutServiceSettingInput>, insurersUncheckedUpdateWithoutServiceSettingInput>
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

  export type insurersCreateWithoutClaimantsInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateWithoutClaimantsInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersCreateOrConnectWithoutClaimantsInput = {
    where: insurersWhereUniqueInput
    create: XOR<insurersCreateWithoutClaimantsInput, insurersUncheckedCreateWithoutClaimantsInput>
  }

  export type insurersUpsertWithoutClaimantsInput = {
    update: XOR<insurersUpdateWithoutClaimantsInput, insurersUncheckedUpdateWithoutClaimantsInput>
    create: XOR<insurersCreateWithoutClaimantsInput, insurersUncheckedCreateWithoutClaimantsInput>
    where?: insurersWhereInput
  }

  export type insurersUpdateToOneWithWhereWithoutClaimantsInput = {
    where?: insurersWhereInput
    data: XOR<insurersUpdateWithoutClaimantsInput, insurersUncheckedUpdateWithoutClaimantsInput>
  }

  export type insurersUpdateWithoutClaimantsInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateWithoutClaimantsInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type ClaimStatusCreateWithoutInsurersInput = {
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
  }

  export type ClaimStatusUncheckedCreateWithoutInsurersInput = {
    id?: number
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
  }

  export type ClaimStatusCreateOrConnectWithoutInsurersInput = {
    where: ClaimStatusWhereUniqueInput
    create: XOR<ClaimStatusCreateWithoutInsurersInput, ClaimStatusUncheckedCreateWithoutInsurersInput>
  }

  export type ClaimStatusCreateManyInsurersInputEnvelope = {
    data: ClaimStatusCreateManyInsurersInput | ClaimStatusCreateManyInsurersInput[]
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

  export type claimantsCreateWithoutInsurersInput = {
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

  export type claimantsUncheckedCreateWithoutInsurersInput = {
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

  export type claimantsCreateOrConnectWithoutInsurersInput = {
    where: claimantsWhereUniqueInput
    create: XOR<claimantsCreateWithoutInsurersInput, claimantsUncheckedCreateWithoutInsurersInput>
  }

  export type claimantsCreateManyInsurersInputEnvelope = {
    data: claimantsCreateManyInsurersInput | claimantsCreateManyInsurersInput[]
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

  export type claimantsUpsertWithWhereUniqueWithoutInsurersInput = {
    where: claimantsWhereUniqueInput
    update: XOR<claimantsUpdateWithoutInsurersInput, claimantsUncheckedUpdateWithoutInsurersInput>
    create: XOR<claimantsCreateWithoutInsurersInput, claimantsUncheckedCreateWithoutInsurersInput>
  }

  export type claimantsUpdateWithWhereUniqueWithoutInsurersInput = {
    where: claimantsWhereUniqueInput
    data: XOR<claimantsUpdateWithoutInsurersInput, claimantsUncheckedUpdateWithoutInsurersInput>
  }

  export type claimantsUpdateManyWithWhereWithoutInsurersInput = {
    where: claimantsScalarWhereInput
    data: XOR<claimantsUpdateManyMutationInput, claimantsUncheckedUpdateManyWithoutInsurersInput>
  }

  export type claimantsScalarWhereInput = {
    AND?: claimantsScalarWhereInput | claimantsScalarWhereInput[]
    OR?: claimantsScalarWhereInput[]
    NOT?: claimantsScalarWhereInput | claimantsScalarWhereInput[]
    claimantid?: IntFilter<"claimants"> | number
    pid?: StringNullableFilter<"claimants"> | string | null
    passportnumber?: StringNullableFilter<"claimants"> | string | null
    hn?: StringNullableFilter<"claimants"> | string | null
    title_th?: StringNullableFilter<"claimants"> | string | null
    givenname_th?: StringNullableFilter<"claimants"> | string | null
    surname_th?: StringNullableFilter<"claimants"> | string | null
    title_en?: StringNullableFilter<"claimants"> | string | null
    givenname_en?: StringNullableFilter<"claimants"> | string | null
    surname_en?: StringNullableFilter<"claimants"> | string | null
    mobilephone?: StringNullableFilter<"claimants"> | string | null
    insurerid?: IntNullableFilter<"claimants"> | number | null
    statusactive?: BoolNullableFilter<"claimants"> | boolean | null
    registrationdate?: DateTimeNullableFilter<"claimants"> | Date | string | null
    dateofbirth?: StringNullableFilter<"claimants"> | string | null
    gender?: StringNullableFilter<"claimants"> | string | null
    patientid?: IntNullableFilter<"claimants"> | number | null
  }

  export type insurersCreateWithoutClaimStatusInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    claimants?: claimantsCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateWithoutClaimStatusInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    claimants?: claimantsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersCreateOrConnectWithoutClaimStatusInput = {
    where: insurersWhereUniqueInput
    create: XOR<insurersCreateWithoutClaimStatusInput, insurersUncheckedCreateWithoutClaimStatusInput>
  }

  export type insurersUpsertWithoutClaimStatusInput = {
    update: XOR<insurersUpdateWithoutClaimStatusInput, insurersUncheckedUpdateWithoutClaimStatusInput>
    create: XOR<insurersCreateWithoutClaimStatusInput, insurersUncheckedCreateWithoutClaimStatusInput>
    where?: insurersWhereInput
  }

  export type insurersUpdateToOneWithWhereWithoutClaimStatusInput = {
    where?: insurersWhereInput
    data: XOR<insurersUpdateWithoutClaimStatusInput, insurersUncheckedUpdateWithoutClaimStatusInput>
  }

  export type insurersUpdateWithoutClaimStatusInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateWithoutClaimStatusInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type insurersCreateWithoutIllnessSurgeryInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    claimants?: claimantsCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateWithoutIllnessSurgeryInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    claimants?: claimantsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersCreateOrConnectWithoutIllnessSurgeryInput = {
    where: insurersWhereUniqueInput
    create: XOR<insurersCreateWithoutIllnessSurgeryInput, insurersUncheckedCreateWithoutIllnessSurgeryInput>
  }

  export type insurersUpsertWithoutIllnessSurgeryInput = {
    update: XOR<insurersUpdateWithoutIllnessSurgeryInput, insurersUncheckedUpdateWithoutIllnessSurgeryInput>
    create: XOR<insurersCreateWithoutIllnessSurgeryInput, insurersUncheckedCreateWithoutIllnessSurgeryInput>
    where?: insurersWhereInput
  }

  export type insurersUpdateToOneWithWhereWithoutIllnessSurgeryInput = {
    where?: insurersWhereInput
    data: XOR<insurersUpdateWithoutIllnessSurgeryInput, insurersUncheckedUpdateWithoutIllnessSurgeryInput>
  }

  export type insurersUpdateWithoutIllnessSurgeryInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateWithoutIllnessSurgeryInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type insurersCreateWithoutIllnessTypeInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    claimants?: claimantsCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateWithoutIllnessTypeInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    claimants?: claimantsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersCreateOrConnectWithoutIllnessTypeInput = {
    where: insurersWhereUniqueInput
    create: XOR<insurersCreateWithoutIllnessTypeInput, insurersUncheckedCreateWithoutIllnessTypeInput>
  }

  export type insurersUpsertWithoutIllnessTypeInput = {
    update: XOR<insurersUpdateWithoutIllnessTypeInput, insurersUncheckedUpdateWithoutIllnessTypeInput>
    create: XOR<insurersCreateWithoutIllnessTypeInput, insurersUncheckedCreateWithoutIllnessTypeInput>
    where?: insurersWhereInput
  }

  export type insurersUpdateToOneWithWhereWithoutIllnessTypeInput = {
    where?: insurersWhereInput
    data: XOR<insurersUpdateWithoutIllnessTypeInput, insurersUncheckedUpdateWithoutIllnessTypeInput>
  }

  export type insurersUpdateWithoutIllnessTypeInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateWithoutIllnessTypeInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type insurersCreateWithoutPolicyTypeInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingCreateNestedManyWithoutInsurersInput
    claimants?: claimantsCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateWithoutPolicyTypeInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    ServiceSetting?: ServiceSettingUncheckedCreateNestedManyWithoutInsurersInput
    claimants?: claimantsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersCreateOrConnectWithoutPolicyTypeInput = {
    where: insurersWhereUniqueInput
    create: XOR<insurersCreateWithoutPolicyTypeInput, insurersUncheckedCreateWithoutPolicyTypeInput>
  }

  export type insurersUpsertWithoutPolicyTypeInput = {
    update: XOR<insurersUpdateWithoutPolicyTypeInput, insurersUncheckedUpdateWithoutPolicyTypeInput>
    create: XOR<insurersCreateWithoutPolicyTypeInput, insurersUncheckedCreateWithoutPolicyTypeInput>
    where?: insurersWhereInput
  }

  export type insurersUpdateToOneWithWhereWithoutPolicyTypeInput = {
    where?: insurersWhereInput
    data: XOR<insurersUpdateWithoutPolicyTypeInput, insurersUncheckedUpdateWithoutPolicyTypeInput>
  }

  export type insurersUpdateWithoutPolicyTypeInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateWithoutPolicyTypeInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    ServiceSetting?: ServiceSettingUncheckedUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type insurersCreateWithoutServiceSettingInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeCreateNestedManyWithoutInsurersInput
    claimants?: claimantsCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateWithoutServiceSettingInput = {
    insurerid: number
    insurercode?: number | null
    insurername?: string | null
    registrationdate?: Date | string | null
    ClaimStatus?: ClaimStatusUncheckedCreateNestedManyWithoutInsurersInput
    IllnessSurgery?: IllnessSurgeryUncheckedCreateNestedManyWithoutInsurersInput
    IllnessType?: IllnessTypeUncheckedCreateNestedManyWithoutInsurersInput
    PolicyType?: PolicyTypeUncheckedCreateNestedManyWithoutInsurersInput
    claimants?: claimantsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersCreateOrConnectWithoutServiceSettingInput = {
    where: insurersWhereUniqueInput
    create: XOR<insurersCreateWithoutServiceSettingInput, insurersUncheckedCreateWithoutServiceSettingInput>
  }

  export type insurersUpsertWithoutServiceSettingInput = {
    update: XOR<insurersUpdateWithoutServiceSettingInput, insurersUncheckedUpdateWithoutServiceSettingInput>
    create: XOR<insurersCreateWithoutServiceSettingInput, insurersUncheckedCreateWithoutServiceSettingInput>
    where?: insurersWhereInput
  }

  export type insurersUpdateToOneWithWhereWithoutServiceSettingInput = {
    where?: insurersWhereInput
    data: XOR<insurersUpdateWithoutServiceSettingInput, insurersUncheckedUpdateWithoutServiceSettingInput>
  }

  export type insurersUpdateWithoutServiceSettingInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateWithoutServiceSettingInput = {
    insurerid?: IntFieldUpdateOperationsInput | number
    insurercode?: NullableIntFieldUpdateOperationsInput | number | null
    insurername?: NullableStringFieldUpdateOperationsInput | string | null
    registrationdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ClaimStatus?: ClaimStatusUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessSurgery?: IllnessSurgeryUncheckedUpdateManyWithoutInsurersNestedInput
    IllnessType?: IllnessTypeUncheckedUpdateManyWithoutInsurersNestedInput
    PolicyType?: PolicyTypeUncheckedUpdateManyWithoutInsurersNestedInput
    claimants?: claimantsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type ClaimStatusCreateManyInsurersInput = {
    id?: number
    StatusCode: string
    StatusDescTH?: string | null
    StatusDescEN?: string | null
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

  export type claimantsCreateManyInsurersInput = {
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

  export type ClaimStatusUpdateWithoutInsurersInput = {
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimStatusUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClaimStatusUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    StatusCode?: StringFieldUpdateOperationsInput | string
    StatusDescTH?: NullableStringFieldUpdateOperationsInput | string | null
    StatusDescEN?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type claimantsUpdateWithoutInsurersInput = {
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

  export type claimantsUncheckedUpdateWithoutInsurersInput = {
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

  export type claimantsUncheckedUpdateManyWithoutInsurersInput = {
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use InsurersCountOutputTypeDefaultArgs instead
     */
    export type InsurersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InsurersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use claimantsDefaultArgs instead
     */
    export type claimantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = claimantsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use insurersDefaultArgs instead
     */
    export type insurersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = insurersDefaultArgs<ExtArgs>
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