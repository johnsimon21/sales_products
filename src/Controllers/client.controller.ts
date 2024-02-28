import { Controller, Delete, Get, Post, Put } from "@nestjs/common"

@Controller('/client')
export class ClientController{

    @Post()
    public create(): any{
        return { data: 'Create'}       
    }

    @Get(':id')
    public  findOne(): any{
        return { data: 'finOne'}       

    }

    @Get()
    public findAll(): any{
        return { data: 'findAll'}       

    }

    @Put(':id')
    public update(): any{
        return { data: 'update'}       

    }

    @Delete(':id')
    public delete(): any{
        return { data: 'delete'}       

    }
}