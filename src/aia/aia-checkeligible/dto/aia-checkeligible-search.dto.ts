
import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQueryEpisodeDto }  from '../../../utils/dto/transaction-query.dto';

export class EligibleEpisodeDto {

   HTTPStatus: HttpMessageDto;
    TransactionQuery :TransactionQueryEpisodeDto;
   Result?: ResultInfo;
}
class ResultInfo{
    PatientInfo?: FindPatientInfoResultInfo;
    EpisodeInfo?: FindEpisodeInfoResultInfo;
}
export class FindPatientInfoResultInfo{
    @IsInt()
    @IsOptional()
    PatientID?: number;

    @IsString()
    @IsOptional()
    PID?: string;

    @IsString()
    @IsOptional()
    PassportNumber?: string;

    @IsString()
    @IsOptional()
    HN?: string;

    @IsString()
    @IsOptional()
    TitleTH?: string;

    @IsString()
    @IsOptional()
    GivenNameTH?: string;

    @IsString()
    @IsOptional()
    SurnameTH?: string;

    @IsString()
    @IsOptional()
    TitleEN?: string;

    @IsString()
    @IsOptional()
    GivenNameEN?: string;

    @IsString()
    @IsOptional()
    SurnameEN?: string;

    @IsString()
    @IsOptional()
    DateOfBirth?: string;

    @IsString()
    @IsOptional()
    Gender?: string;

    @IsString()
    @IsOptional()
    MobilePhone?: string;
}
export class FindEpisodeInfoResultInfo{
  

    @IsString()
    @IsOptional()
    VN?: string;

    @IsString()
    @IsOptional()
    EpisodeType?: string;

    @IsString()
    @IsOptional()
    VisitDate?: string;

    @IsString()
    @IsOptional()
    VisitTime?: string;

    @IsString()
    @IsOptional()
    VisitDateTime?: string;

    @IsString()
    @IsOptional()
    AccidentDate?: string;

    @IsString()
    @IsOptional()
    LocationCode?: string;

    @IsString()
    @IsOptional()
    LocationDesc?: string;

    @IsString()
    @IsOptional()
    WardCode?: string;

    @IsString()
    @IsOptional()
    WardDesc?: string;

    @IsString()
    @IsOptional()
    BedCode?: string;

    @IsString()
    @IsOptional()
    MainCareproviderCode?: string;

    @IsString()
    @IsOptional()
    MainCareproviderDesc?: string;

    @IsString()
    @IsOptional()
    DoctorLicense?: string;

    @IsString()
    @IsOptional()
    DoctorFirstName?: string;

    @IsString()
    @IsOptional()
    DoctorLastName?: string;

    @IsString()
    @IsOptional()
    SurgeryType?: string;




}


export class SearchBodyDto {
    PatientInfo?: SearchPatientBodyDto
  }
class SearchPatientBodyDto{
    
    @IsInt()
    @IsOptional()
    InsurerCode:number

    @IsString()
    @IsOptional()
    RefID?: string;

    @IsString()
    @IsOptional()
    TransactionNo?: string;

    @IsString()
    @IsOptional()
    PID?: string;

    @IsString()
    @IsOptional()
    PassportNumber?: string;

    @IsString()
    @IsOptional()
    IdType?: string;
    

    @IsString()
    @IsOptional()
    HN?: string;

    @IsString()
    @IsOptional()
    VN?: string;

    @IsString()
    @IsOptional()
    ServiceSettingCode?: string;

    @IsDate()
    @IsOptional()
    VisitDatefrom?: string;

    @IsDate()
    @IsOptional()
    VisitDateto?: string;

  }
