
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

exports.Prisma.ClaimDocumentsScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  vn: 'vn',
  refid: 'refid',
  transactionno: 'transactionno',
  documenttypecode: 'documenttypecode',
  documenttypename: 'documenttypename',
  filepath: 'filepath',
  filesize: 'filesize',
  filemimetype: 'filemimetype',
  serverpath: 'serverpath',
  uploaddate: 'uploaddate',
  uploadedby: 'uploadedby',
  documentname: 'documentname'
};

exports.Prisma.DocumentTypeScalarFieldEnum = {
  id: 'id',
  documenttypecode: 'documenttypecode',
  documenttypename: 'documenttypename',
  insurerid: 'insurerid'
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
  transactionclaim2: 'transactionclaim2',
  ClaimDocuments: 'ClaimDocuments',
  DocumentType: 'DocumentType'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Volumes/DomeWorkspace/Workspace/SmartClaim/smartclaim-backend/prisma/generate-client-db",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Volumes/DomeWorkspace/Workspace/SmartClaim/smartclaim-backend/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.19.1",
  "engineVersion": "69d742ee20b815d88e17e54db4a2a7a3b30324e3",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generate-client-db\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel ClaimStatus {\n  id                     Int                      @id @default(autoincrement())\n  StatusCode             String\n  StatusDescTH           String?\n  StatusDescEN           String?\n  insurerid              Int?\n  insurers               Insurers?                @relation(fields: [insurerid], references: [insurerid], onDelete: NoAction, onUpdate: NoAction, map: \"claimStatus_insurerid_fkey\")\n  Transactionclaim       Transactionclaim[]\n  Transactionclaimstatus Transactionclaimstatus[]\n  Transactions           Transactions[]\n  transactionclaim2      transactionclaim2[]\n\n  @@unique([StatusCode, insurerid], map: \"unique_statuscode_insurerid\")\n  @@index([insurerid], map: \"fki_claimStatus_insurerid_fkey\")\n}\n\nmodel IllnessSurgery {\n  id            Int       @id @default(autoincrement())\n  ISCode        String\n  ISDescription String?\n  insurerid     Int?\n  insurers      Insurers? @relation(fields: [insurerid], references: [insurerid], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel IllnessType {\n  id              Int       @id @default(autoincrement())\n  IllnessTypeCode String\n  IllnessTypeDesc String?\n  insurerid       Int?\n  insurers        Insurers? @relation(fields: [insurerid], references: [insurerid], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel PolicyType {\n  id             Int       @id @default(autoincrement())\n  PolicyTypeCode String\n  PolicyTypeDesc String?\n  insurerid      Int?\n  insurers       Insurers? @relation(fields: [insurerid], references: [insurerid], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel ServiceSetting {\n  id                 Int       @id @default(autoincrement())\n  ServiceSettingCode String\n  ServiceSettingDesc String\n  insurerid          Int?\n  insurers           Insurers? @relation(fields: [insurerid], references: [insurerid], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel Claimants {\n  claimantid             Int                      @id(map: \"claimants_pkey\") @default(autoincrement())\n  pid                    String?                  @db.VarChar(13)\n  passportnumber         String?                  @db.VarChar(15)\n  hn                     String?                  @db.VarChar(10)\n  title_th               String?                  @db.VarChar(50)\n  givenname_th           String?                  @db.VarChar(50)\n  surname_th             String?                  @db.VarChar(50)\n  title_en               String?                  @db.VarChar(50)\n  givenname_en           String?                  @db.VarChar(50)\n  surname_en             String?                  @db.VarChar(50)\n  mobilephone            String?                  @db.VarChar(15)\n  insurerid              Int?\n  statusactive           Boolean?\n  registrationdate       DateTime?                @default(dbgenerated(\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\")) @db.Timestamp(6)\n  dateofbirth            String?                  @db.VarChar(10)\n  gender                 String?                  @db.VarChar(10)\n  patientid              Int?\n  Insurers               Insurers?                @relation(fields: [insurerid], references: [insurerid], onDelete: NoAction, onUpdate: NoAction, map: \"claimants_insurerid_fkey\")\n  Transactionclaim       Transactionclaim[]\n  Transactionclaimstatus Transactionclaimstatus[]\n  Transactions           Transactions[]\n  transactionclaim2      transactionclaim2[]\n\n  @@unique([hn, insurerid], map: \"unique_hn_insurerid\")\n}\n\nmodel Insurers {\n  insurerid        Int              @id(map: \"insurers_pkey\")\n  insurercode      Int?\n  insurername      String?          @db.VarChar(100)\n  registrationdate DateTime?        @default(dbgenerated(\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\")) @db.Timestamp(6)\n  ClaimStatus      ClaimStatus[]\n  Claimants        Claimants[]\n  DocumentType     DocumentType[]\n  IllnessSurgery   IllnessSurgery[]\n  IllnessType      IllnessType[]\n  PolicyType       PolicyType[]\n  ServiceSetting   ServiceSetting[]\n  Transactions     Transactions[]\n}\n\nmodel Transactions {\n  id            Int          @id(map: \"transactions_pkey\") @default(autoincrement())\n  refid         String?      @db.VarChar(255)\n  transactionid String?      @db.VarChar(255)\n  statusid      Int?\n  updatedate    DateTime?    @default(dbgenerated(\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\")) @db.Timestamp(6)\n  hn            String?      @db.VarChar(10)\n  vn            String?      @db.VarChar(10)\n  insurerid     Int?\n  accidentdate  String?      @db.VarChar\n  Claimants     Claimants?   @relation(fields: [hn, insurerid], references: [hn, insurerid], onDelete: Cascade, onUpdate: NoAction, map: \"fk_claimant\")\n  Insurers      Insurers?    @relation(fields: [insurerid], references: [insurerid], onDelete: Cascade, onUpdate: NoAction, map: \"fk_insurer\")\n  ClaimStatus   ClaimStatus? @relation(fields: [statusid], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"fk_status\")\n}\n\nmodel DiagnosisTypeMapping {\n  insurerid           Int\n  dxtypecodetrakcare  String  @db.VarChar(255)\n  dxtypenametrakcare  String? @db.VarChar(255)\n  dxtypecodeinsurance String? @db.VarChar(255)\n  dxtypenameinsurance String? @db.VarChar(255)\n\n  @@id([insurerid, dxtypecodetrakcare], map: \"diagnosistypemapping_pkey\")\n}\n\nmodel accidentplace {\n  insurerid         Int\n  accidentplacecode Int\n  accidentplacename String @db.VarChar(255)\n\n  @@id([insurerid, accidentplacecode])\n}\n\nmodel causeofinjurywoundtype {\n  insurerid     Int\n  woundtypename String? @db.VarChar(255)\n  id            Int     @id @default(autoincrement())\n  woundtypecode String  @db.VarChar(255)\n}\n\nmodel causeofinjuryside {\n  insurerid      Int\n  injurysidename String  @db.VarChar(255)\n  injurysidecode String? @db.VarChar(255)\n  id             Int     @id(map: \"causeofinjuryinjuryside_pkey\") @default(autoincrement())\n}\n\nmodel Transactionclaimstatus {\n  id                 Int         @id(map: \"transactionclaimstatus_pkey\") @default(autoincrement())\n  refid              String      @db.VarChar(255)\n  insurerid          Int\n  hn                 String?     @db.VarChar(10)\n  vn                 String?     @db.VarChar(10)\n  statuscode         String      @db.VarChar(50)\n  batchnumber        String?     @db.VarChar(50)\n  claimno            String?     @db.VarChar(50)\n  invoicenumber      String?     @db.VarChar(50)\n  status_changed_at  DateTime?   @default(dbgenerated(\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\")) @db.Timestamp(6)\n  note               String?\n  totalApproveAmount String?     @db.VarChar\n  paymentDate        String?     @db.VarChar\n  transactionNo      String?     @db.VarChar(255)\n  Claimants          Claimants?  @relation(fields: [hn, insurerid], references: [hn, insurerid], onDelete: NoAction, onUpdate: NoAction, map: \"fk_claimants\")\n  ClaimStatus        ClaimStatus @relation(fields: [statuscode, insurerid], references: [StatusCode, insurerid], onDelete: NoAction, onUpdate: NoAction, map: \"fk_claimstatus\")\n\n  @@index([hn, insurerid], map: \"idx_claimant_transaction_claim_status\")\n  @@index([statuscode, insurerid], map: \"idx_status_transaction_claim_status\")\n  @@index([refid, insurerid], map: \"idx_transaction_claim_status_refid\")\n}\n\nmodel Transactionclaim {\n  id                  Int          @id(map: \"transactionclaim_pkey\") @default(autoincrement())\n  insurerid           Int?\n  refid               String?      @db.VarChar(255)\n  transactionno       String?      @db.VarChar(255)\n  furtherclaimid      String?      @db.VarChar(255)\n  hn                  String?      @db.VarChar(10)\n  vn                  String?      @db.VarChar(10)\n  presentillness      String?      @db.VarChar(500)\n  chiefcomplaint      String?      @db.VarChar(500)\n  accidentplacecode   String?      @db.VarChar(50)\n  causeofinjury       String?      @db.VarChar(255)\n  commentofinjury     String?      @db.VarChar(255)\n  woundtypecode       String?      @db.VarChar(50)\n  injurysidecode      String?      @db.VarChar(50)\n  injuryarea          String?      @db.VarChar(255)\n  status_changed_at   DateTime?    @default(dbgenerated(\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\")) @db.Timestamp(6)\n  messageclaim        String?      @db.VarChar(255)\n  messageth           String?      @db.VarChar(255)\n  claimno             String?      @db.VarChar(50)\n  statuscode          String?      @db.VarChar(10)\n  occurrenceno        String?      @db.VarChar(50)\n  totalapprovedamount Decimal?     @db.Decimal(10, 2)\n  totalexcessamount   Decimal?     @db.Decimal(10, 2)\n  isreimbursement     Boolean?\n  batchnumber         String?      @db.VarChar(50)\n  invoicenumber       String?      @db.VarChar(50)\n  accidentdate        String?      @db.VarChar(20)\n  visitdate           String?      @db.VarChar(20)\n  Claimants           Claimants?   @relation(fields: [hn, insurerid], references: [hn, insurerid], onDelete: Cascade, onUpdate: NoAction, map: \"transactionclaim_hn_insurerid_fkey\")\n  ClaimStatus         ClaimStatus? @relation(fields: [statuscode, insurerid], references: [StatusCode, insurerid], onDelete: Cascade, onUpdate: NoAction, map: \"transactionclaim_statuscode_insurerid_fkey\")\n}\n\nmodel transactionclaim2 {\n  id                  Int          @id @default(autoincrement())\n  insurerid           Int?\n  refid               String?      @db.VarChar(255)\n  transactionno       String?      @db.VarChar(255)\n  furtherclaimid      String?      @db.VarChar(255)\n  hn                  String?      @db.VarChar(10)\n  vn                  String?      @db.VarChar(10)\n  presentillness      String?      @db.VarChar(500)\n  chiefcomplaint      String?      @db.VarChar(500)\n  accidentplacecode   String?      @db.VarChar(50)\n  causeofinjury       String?      @db.VarChar(255)\n  commentofinjury     String?      @db.VarChar(255)\n  woundtypecode       String?      @db.VarChar(50)\n  injurysidecode      String?      @db.VarChar(50)\n  injuryarea          String?      @db.VarChar(255)\n  status_changed_at   DateTime?    @db.Timestamp(6)\n  messageclaim        String?      @db.VarChar(255)\n  messageth           String?      @db.VarChar(255)\n  claimno             String?      @db.VarChar(50)\n  statuscode          String?      @db.VarChar(10)\n  occurrenceno        String?      @db.VarChar(50)\n  totalapprovedamount Decimal?     @db.Decimal(10, 2)\n  totalexcessamount   Decimal?     @db.Decimal(10, 2)\n  isreimbursement     Boolean?\n  batchnumber         String?      @db.VarChar(50)\n  invoicenumber       String?      @db.VarChar(50)\n  accidentdate        String?      @db.VarChar(20)\n  visitdate           String?      @db.VarChar(20)\n  Claimants           Claimants?   @relation(fields: [hn, insurerid], references: [hn, insurerid], onDelete: Cascade, onUpdate: NoAction)\n  ClaimStatus         ClaimStatus? @relation(fields: [statuscode, insurerid], references: [StatusCode, insurerid], onDelete: Cascade, onUpdate: NoAction)\n}\n\nmodel ClaimDocuments {\n  id               Int       @id(map: \"claimdocuments_pkey\") @default(autoincrement())\n  hn               String    @db.VarChar(50)\n  vn               String    @db.VarChar(50)\n  refid            String    @db.VarChar(50)\n  transactionno    String    @db.VarChar(50)\n  documenttypecode String    @db.VarChar(50)\n  documenttypename String    @db.VarChar(100)\n  filepath         String\n  filesize         BigInt?\n  filemimetype     String?   @db.VarChar(100)\n  serverpath       String?   @db.VarChar(255)\n  uploaddate       DateTime? @default(now()) @db.Timestamp(6)\n  uploadedby       String?   @db.VarChar(50)\n  documentname     String    @db.VarChar(100)\n}\n\nmodel DocumentType {\n  id               Int      @id(map: \"documenttype_pkey\") @default(autoincrement())\n  documenttypecode String   @db.VarChar(50)\n  documenttypename String   @db.VarChar(255)\n  insurerid        Int\n  Insurers         Insurers @relation(fields: [insurerid], references: [insurerid], onDelete: NoAction, onUpdate: NoAction, map: \"fk_insurer\")\n}\n",
  "inlineSchemaHash": "1ee1ef9e7550e169e56e069011f25e50fad47b8fa98c66f8e433a2e5b7826cae",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"ClaimStatus\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StatusCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StatusDescTH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StatusDescEN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Insurers\",\"relationName\":\"ClaimStatusToInsurers\",\"relationFromFields\":[\"insurerid\"],\"relationToFields\":[\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactionclaim\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactionclaim\",\"relationName\":\"ClaimStatusToTransactionclaim\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactionclaimstatus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactionclaimstatus\",\"relationName\":\"ClaimStatusToTransactionclaimstatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactions\",\"relationName\":\"ClaimStatusToTransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionclaim2\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactionclaim2\",\"relationName\":\"ClaimStatusTotransactionclaim2\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"StatusCode\",\"insurerid\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"StatusCode\",\"insurerid\"]}],\"isGenerated\":false},\"IllnessSurgery\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ISCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ISDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Insurers\",\"relationName\":\"IllnessSurgeryToInsurers\",\"relationFromFields\":[\"insurerid\"],\"relationToFields\":[\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"IllnessType\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IllnessTypeCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IllnessTypeDesc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Insurers\",\"relationName\":\"IllnessTypeToInsurers\",\"relationFromFields\":[\"insurerid\"],\"relationToFields\":[\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PolicyType\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PolicyTypeCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PolicyTypeDesc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Insurers\",\"relationName\":\"InsurersToPolicyType\",\"relationFromFields\":[\"insurerid\"],\"relationToFields\":[\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ServiceSetting\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ServiceSettingCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ServiceSettingDesc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Insurers\",\"relationName\":\"InsurersToServiceSetting\",\"relationFromFields\":[\"insurerid\"],\"relationToFields\":[\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Claimants\":{\"dbName\":null,\"fields\":[{\"name\":\"claimantid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportnumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_th\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"givenname_th\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname_th\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"givenname_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobilephone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusactive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registrationdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateofbirth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"patientid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Insurers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Insurers\",\"relationName\":\"ClaimantsToInsurers\",\"relationFromFields\":[\"insurerid\"],\"relationToFields\":[\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactionclaim\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactionclaim\",\"relationName\":\"ClaimantsToTransactionclaim\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactionclaimstatus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactionclaimstatus\",\"relationName\":\"ClaimantsToTransactionclaimstatus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactions\",\"relationName\":\"ClaimantsToTransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionclaim2\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transactionclaim2\",\"relationName\":\"ClaimantsTotransactionclaim2\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"hn\",\"insurerid\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"hn\",\"insurerid\"]}],\"isGenerated\":false},\"Insurers\":{\"dbName\":null,\"fields\":[{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurercode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurername\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registrationdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimStatus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClaimStatus\",\"relationName\":\"ClaimStatusToInsurers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Claimants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Claimants\",\"relationName\":\"ClaimantsToInsurers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocumentType\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DocumentType\",\"relationName\":\"DocumentTypeToInsurers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IllnessSurgery\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IllnessSurgery\",\"relationName\":\"IllnessSurgeryToInsurers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IllnessType\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IllnessType\",\"relationName\":\"IllnessTypeToInsurers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PolicyType\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PolicyType\",\"relationName\":\"InsurersToPolicyType\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ServiceSetting\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ServiceSetting\",\"relationName\":\"InsurersToServiceSetting\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transactions\",\"relationName\":\"InsurersToTransactions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transactions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accidentdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Claimants\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Claimants\",\"relationName\":\"ClaimantsToTransactions\",\"relationFromFields\":[\"hn\",\"insurerid\"],\"relationToFields\":[\"hn\",\"insurerid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Insurers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Insurers\",\"relationName\":\"InsurersToTransactions\",\"relationFromFields\":[\"insurerid\"],\"relationToFields\":[\"insurerid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimStatus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClaimStatus\",\"relationName\":\"ClaimStatusToTransactions\",\"relationFromFields\":[\"statusid\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DiagnosisTypeMapping\":{\"dbName\":null,\"fields\":[{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dxtypecodetrakcare\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dxtypenametrakcare\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dxtypecodeinsurance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dxtypenameinsurance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"insurerid\",\"dxtypecodetrakcare\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"accidentplace\":{\"dbName\":null,\"fields\":[{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accidentplacecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accidentplacename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"insurerid\",\"accidentplacecode\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"causeofinjurywoundtype\":{\"dbName\":null,\"fields\":[{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"woundtypename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"woundtypecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"causeofinjuryside\":{\"dbName\":null,\"fields\":[{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"injurysidename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"injurysidecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transactionclaimstatus\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statuscode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batchnumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claimno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoicenumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_changed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalApproveAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Claimants\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Claimants\",\"relationName\":\"ClaimantsToTransactionclaimstatus\",\"relationFromFields\":[\"hn\",\"insurerid\"],\"relationToFields\":[\"hn\",\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimStatus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClaimStatus\",\"relationName\":\"ClaimStatusToTransactionclaimstatus\",\"relationFromFields\":[\"statuscode\",\"insurerid\"],\"relationToFields\":[\"StatusCode\",\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transactionclaim\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"furtherclaimid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presentillness\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chiefcomplaint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accidentplacecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"causeofinjury\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentofinjury\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"woundtypecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"injurysidecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"injuryarea\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_changed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"(CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok'::text)\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageclaim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claimno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statuscode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"occurrenceno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalapprovedamount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalexcessamount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isreimbursement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batchnumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoicenumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accidentdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Claimants\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Claimants\",\"relationName\":\"ClaimantsToTransactionclaim\",\"relationFromFields\":[\"hn\",\"insurerid\"],\"relationToFields\":[\"hn\",\"insurerid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimStatus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClaimStatus\",\"relationName\":\"ClaimStatusToTransactionclaim\",\"relationFromFields\":[\"statuscode\",\"insurerid\"],\"relationToFields\":[\"StatusCode\",\"insurerid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"transactionclaim2\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"furtherclaimid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presentillness\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chiefcomplaint\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accidentplacecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"causeofinjury\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentofinjury\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"woundtypecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"injurysidecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"injuryarea\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_changed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageclaim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claimno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statuscode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"occurrenceno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalapprovedamount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalexcessamount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isreimbursement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batchnumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoicenumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accidentdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitdate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Claimants\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Claimants\",\"relationName\":\"ClaimantsTotransactionclaim2\",\"relationFromFields\":[\"hn\",\"insurerid\"],\"relationToFields\":[\"hn\",\"insurerid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaimStatus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClaimStatus\",\"relationName\":\"ClaimStatusTotransactionclaim2\",\"relationFromFields\":[\"statuscode\",\"insurerid\"],\"relationToFields\":[\"StatusCode\",\"insurerid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClaimDocuments\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documenttypecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documenttypename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filepath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filesize\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filemimetype\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverpath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploaddate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadedby\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documentname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DocumentType\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documenttypecode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documenttypename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurerid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Insurers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Insurers\",\"relationName\":\"DocumentTypeToInsurers\",\"relationFromFields\":[\"insurerid\"],\"relationToFields\":[\"insurerid\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

