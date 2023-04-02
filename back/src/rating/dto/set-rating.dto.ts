import { IsNumber, IsString } from 'class-validator';

export class SetRatingDto {
	// @IsObjectId({ message: 'MovieId is invalid!' })
	@IsString()
	movie: string;
 
	@IsNumber()
	value: number;
}
