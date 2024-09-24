
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ClaimStatusScalarFieldEnum = {
  id: 'id',
  StatusCode: 'StatusCode',
  StatusDescTH: 'StatusDescTH',
  StatusDescEN: 'StatusDescEN',
  insurerid: 'insurerid'
};

exports.Prisma.IllnessSurgeryScalarFieldEnum = {
  id: 'id',
  ISCode: 'ISCode',
  ISDescription: 'ISDescription',
  insurerid: 'insurerid'
};

exports.Prisma.IllnessTypeScalarFieldEnum = {
  id: 'id',
  IllnessTypeCode: 'IllnessTypeCode',
  IllnessTypeDesc: 'IllnessTypeDesc',
  insurerid: 'insurerid'
};

exports.Prisma.PolicyTypeScalarFieldEnum = {
  id: 'id',
  PolicyTypeCode: 'PolicyTypeCode',
  PolicyTypeDesc: 'PolicyTypeDesc',
  insurerid: 'insurerid'
};

exports.Prisma.ServiceSettingScalarFieldEnum = {
  id: 'id',
  ServiceSettingCode: 'ServiceSettingCode',
  ServiceSettingDesc: 'ServiceSettingDesc',
  insurerid: 'insurerid'
};

exports.Prisma.ClaimantsScalarFieldEnum = {
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

exports.Prisma.InsurersScalarFieldEnum = {
  insurerid: 'insurerid',
  insurercode: 'insurercode',
  insurername: 'insurername',
  registrationdate: 'registrationdate'
};

exports.Prisma.TransactionsScalarFieldEnum = {
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

exports.Prisma.DiagnosisTypeMappingScalarFieldEnum = {
  insurerid: 'insurerid',
  dxtypecodetrakcare: 'dxtypecodetrakcare',
  dxtypenametrakcare: 'dxtypenametrakcare',
  dxtypecodeinsurance: 'dxtypecodeinsurance',
  dxtypenameinsurance: 'dxtypenameinsurance'
};

exports.Prisma.AccidentplaceScalarFieldEnum = {
  insurerid: 'insurerid',
  accidentplacecode: 'accidentplacecode',
  accidentplacename: 'accidentplacename'
};

exports.Prisma.CauseofinjurywoundtypeScalarFieldEnum = {
  insurerid: 'insurerid',
  woundtypename: 'woundtypename',
  id: 'id',
  woundtypecode: 'woundtypecode'
};

exports.Prisma.CauseofinjurysideScalarFieldEnum = {
  insurerid: 'insurerid',
  injurysidename: 'injurysidename',
  injurysidecode: 'injurysidecode',
  id: 'id'
};

exports.Prisma.TransactionclaimstatusScalarFieldEnum = {
  id: 'id',
  refid: 'refid',
  insurerid: 'insurerid',
  hn: 'hn',
  vn: 'vn',
  statuscode: 'statuscode',
  batchnumber: 'batchnumber',
  claimno: 'claimno',
  invoicenumber: 'invoicenumber',
  status_changed_at: 'status_changed_at',
  note: 'note',
  totalApproveAmount: 'totalApproveAmount',
  paymentDate: 'paymentDate',
  transactionNo: 'transactionNo'
};

exports.Prisma.TransactionclaimScalarFieldEnum = {
  id: 'id',
  insurerid: 'insurerid',
  refid: 'refid',
  transactionno: 'transactionno',
  furtherclaimid: 'furtherclaimid',
  hn: 'hn',
  vn: 'vn',
  presentillness: 'presentillness',
  chiefcomplaint: 'chiefcomplaint',
  accidentplacecode: 'accidentplacecode',
  causeofinjury: 'causeofinjury',
  commentofinjury: 'commentofinjury',
  woundtypecode: 'woundtypecode',
  injurysidecode: 'injurysidecode',
  injuryarea: 'injuryarea',
  status_changed_at: 'status_changed_at',
  messageclaim: 'messageclaim',
  messageth: 'messageth',
  claimno: 'claimno',
  statuscode: 'statuscode',
  occurrenceno: 'occurrenceno',
  totalapprovedamount: 'totalapprovedamount',
  totalexcessamount: 'totalexcessamount',
  isreimbursement: 'isreimbursement',
  batchnumber: 'batchnumber',
  invoicenumber: 'invoicenumber',
  accidentdate: 'accidentdate',
  visitdate: 'visitdate'
};

exports.Prisma.Transactionclaim2ScalarFieldEnum = {
  id: 'id',
  insurerid: 'insurerid',
  refid: 'refid',
  transactionno: 'transactionno',
  furtherclaimid: 'furtherclaimid',
  hn: 'hn',
  vn: 'vn',
  presentillness: 'presentillness',
  chiefcomplaint: 'chiefcomplaint',
  accidentplacecode: 'accidentplacecode',
  causeofinjury: 'causeofinjury',
  commentofinjury: 'commentofinjury',
  woundtypecode: 'woundtypecode',
  injurysidecode: 'injurysidecode',
  injuryarea: 'injuryarea',
  status_changed_at: 'status_changed_at',
  messageclaim: 'messageclaim',
  messageth: 'messageth',
  claimno: 'claimno',
  statuscode: 'statuscode',
  occurrenceno: 'occurrenceno',
  totalapprovedamount: 'totalapprovedamount',
  totalexcessamount: 'totalexcessamount',
  isreimbursement: 'isreimbursement',
  batchnumber: 'batchnumber',
  invoicenumber: 'invoicenumber',
  accidentdate: 'accidentdate',
  visitdate: 'visitdate'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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
  causeofinjuryside: 'causeofinjuryside',
  Transactionclaimstatus: 'Transactionclaimstatus',
  Transactionclaim: 'Transactionclaim',
  transactionclaim2: 'transactionclaim2'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
