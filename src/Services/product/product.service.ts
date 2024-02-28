import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entities/product.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./product.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
        ) { }
        
        async findAll(): Promise<Product[]> {
            const products = await this.productRepository.find();
            console.log("Java Simon Script")
        
        if (products.length === 0) throw new HttpException('Products not found!', HttpStatus.NOT_FOUND);

        return products;
    }

    async create(productDTO: ProductDto): Promise<ProductDto> {
        const createProduct = await this.productRepository.save(productDTO);
        return createProduct;
    }
}
