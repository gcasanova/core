import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
    @IsNotEmpty()
    readonly id: string;

    @IsNotEmpty()
    readonly name: string;
}