import { Controller, Get ,Param ,Post ,Body,UploadedFile ,UseInterceptors,} from '@nestjs/common';
import { UtilsService } from './utils.service';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { QueryCreateClaimDocumentDtoBodyDto }from './dto/claim-documents.dto';
@Controller('utils')
export class UtilsController {
  constructor(private readonly utilsService: UtilsService) {}


 

  @Get('/EncryptAESECB/:Secretkey/:text')
  EncryptAESECB(@Param('Secretkey') Secretkey :string,@Param('text') text: string ) {
      return  this.utilsService.EncryptAESECB(text ,Secretkey)
  }

  @Get('/DecryptAESECB/:Secretkey/:text')
  DecryptAESECB(@Param('Secretkey') Secretkey :string,@Param('text') text: string ) {
      return  this.utilsService.DecryptAESECB(text ,Secretkey)
  }

  @Get('IllnessType/:Insurercode')
  getIllnessType(@Param('Insurercode') Insurercode :string){
    return this.utilsService.IllnessType(Insurercode)
  }
  
  @Get('/IllnessSurgery/:Insurercode')
  getIllnessSurgery(@Param('Insurercode') Insurercode: string ) {

    return  this.utilsService.IllnessSurgery(Insurercode)
  }

  @Get('/policyType/:InsuranceCode')
  getpolicyType(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.policyType(InsuranceCode)
  }

  @Get('/serviceSetting/:InsuranceCode')
  getServiceSetting(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.getServiceSetting(InsuranceCode)
  }

  @Get('/claimStatus/:InsuranceCode')
  getClaimStatus(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.getClaimStatus(InsuranceCode)
  }


@Get('/accessToken-aia')
requestAccessToken() {
  return  this.utilsService.requestAccessToken_AIA();
}

@Get('/accidentPlace/:InsuranceCode')
getAccidentPlace(@Param('InsuranceCode') InsuranceCode: string ) {
  return  this.utilsService.getAccidentPlace(InsuranceCode)
}


@Get('/DocumentType/:InsuranceCode')
getDocumentType(@Param('InsuranceCode') InsuranceCode: string ) {
  return  this.utilsService.getDocumentType(InsuranceCode)
}


@Get('/InjuryWoundtype/:InsuranceCode')
getCauseofInjurywoundtype(@Param('InsuranceCode') InsuranceCode: string ) {
  return  this.utilsService.getCauseofInjurywoundtype(InsuranceCode)
}
@Get('/InjurySide/:InsuranceCode')
getCauseofInjurySide(@Param('InsuranceCode') InsuranceCode: string ) {
  return  this.utilsService.getCauseofInjurySide(InsuranceCode)
}
@Get('/DxtypecodeTrakcareMapping/:InsuranceCode/:DxtypecodeTrakcare')
getDiagnosisTypeMapping(@Param('InsuranceCode') InsuranceCode: string ,@Param('DxtypecodeTrakcare') DxtypecodeTrakcare: string  ) {
  return  this.utilsService.getDiagnosisTypeMapping(InsuranceCode,DxtypecodeTrakcare)
}

  @Get('/getfile/:id')
  async getFile(@Param('id') id: string) {
    const fileData = await this.utilsService.getFileAsBase64(+id);
    return fileData;
  }
  @Get('/getFilemany/:id')
  async getFilemany(@Param('id') id: string) {
    const fileData = await this.utilsService.getFilesAsBase64findMany(id);
    return fileData;
  }
  @Post('/uploadDocuments') //prod
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/pdf', // กำหนดโฟลเดอร์ที่เก็บไฟล์
      filename: (req, file, cb) => {
        // กำหนดชื่อไฟล์ใหม่ตาม timestamp และนามสกุลเดิม
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname); // ดึงนามสกุลจากไฟล์เดิม
        const newFilename = `${uniqueSuffix}${ext}`;
        cb(null, newFilename); // ส่งชื่อไฟล์ใหม่กลับไปยัง callback
      },
    }),
  }))
  async uploadFile(@UploadedFile()  file: Express.Multer.File ,@Body() body: QueryCreateClaimDocumentDtoBodyDto) {

    const result = await this.utilsService.saveFile(file,body)
    return {
      message: 'File uploaded successfully!',
     filename: result.documentname,
    };
  }
  @Post('/getlistDocumentName') //prod
  async getlistDocumentName(@Body() queryCreateClaimDocumentDtoBodyDto:QueryCreateClaimDocumentDtoBodyDto){
       const result = await this.utilsService.getlistDocumentName(queryCreateClaimDocumentDtoBodyDto);
       return result
  }
  @Post('/getDocumentByDocname') //prod
  async getDocumentByDocname(@Body() queryCreateClaimDocumentDtoBodyDto:QueryCreateClaimDocumentDtoBodyDto){
   
    const fileData = await this.utilsService.getDocumentByDocname(queryCreateClaimDocumentDtoBodyDto);
    return fileData;
  }

  @Post('/getListDocumentByRefId') //prod
  async getListDocumentByRefId(@Body() queryCreateClaimDocumentDtoBodyDto:QueryCreateClaimDocumentDtoBodyDto){
   
    const fileData = await this.utilsService.getListDocumentByRefId(queryCreateClaimDocumentDtoBodyDto);
    return fileData;
  }

  // @Post('/uploadDocuments')
  // async uploadDocuments(@Body() queryCreateClaimDocumentDtoBodyDto:QueryCreateClaimDocumentDtoBodyDto){
  //      // const result = this.aiaRetrieveFurtherClaimListService.RetrieveFurtherClaim(queryRetrieveFurtherClaimdtoBodyDto);
  //      const result = await this.utilsService.uploadDocuments(queryCreateClaimDocumentDtoBodyDto);

  //      return result
  // }
  
  //QueryCreateClaimDocumentDtoBodyDto
}
