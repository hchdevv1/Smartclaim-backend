import { IsArray, IsOptional, IsString } from 'class-validator';

export class TrakcarePatientInfoDto {
    @IsArray()
    @IsOptional()
    PatientInfo: {
        firstnameA?: string;
    }
  
    @IsString()
    @IsOptional()
    firstname?: string;
  
    @IsString()
    @IsOptional()
    lastname?: string;
  
    @IsOptional()
    Phone?: {
      home?: string;
      office?: string;
      mobile?: string;
    };
  }