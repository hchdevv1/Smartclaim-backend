import { PartialType } from '@nestjs/mapped-types';
import { CreateAiaRetrieveFurtherClaimDto } from './create-aia-retrieve-further-claim.dto';

export class UpdateAiaRetrieveFurtherClaimDto extends PartialType(CreateAiaRetrieveFurtherClaimDto) {}
