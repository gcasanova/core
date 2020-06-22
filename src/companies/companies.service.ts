import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "./company.entity";
import { Repository } from "typeorm";

@Injectable()
export class CompaniesService {
    constructor(
        @InjectRepository(Company)
        private companiesRepository: Repository<Company>) {}

    findAll(): Promise<Company[]> {
        return this.companiesRepository.find();
    }

    findOne(id: string): Promise<Company> {
        return this.companiesRepository.findOne(id);
    }

    save(company: Company): Promise<Company> {
        return this.companiesRepository.save(company);
    }
}