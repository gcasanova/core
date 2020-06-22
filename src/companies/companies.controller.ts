import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';

@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    findAll(): Promise<Company[]> {
        return this.companiesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Company> {
        const company = await this.companiesService.findOne(id);
        if (!company) {
            throw new NotFoundException();
        }

        return company;
    }

    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
        return this.companiesService.save(createCompanyDto);
    }
}
