import { IsArray, IsOptional, IsString } from 'class-validator';

export class TrakcareEpisodeInfoDto {
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


  export  class PatientInfoDto{

    @IsString()
    @IsOptional()
    HN?: string;

    @IsString()
    @IsOptional()
    Title?: string;

    @IsString()
    @IsOptional()
    FirstName?: string;

    @IsString()
    @IsOptional()
    LastName?: string;

    @IsString()
    @IsOptional()
    Gender?: string;

    @IsString()
    @IsOptional()
    PID?: string;

    @IsString()
    @IsOptional()
    Passsport?: string;

    @IsString()
    @IsOptional()
    DOB?: string;

  }
  export class EpisodeInfoDto{


  }