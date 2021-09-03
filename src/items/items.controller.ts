import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interfaces';
// import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {

    // Have to inject service as a dependancy to use it
    // Able to access it through this.itemsService.{Method within service}
    constructor(private readonly itemsSerivce: ItemsService) {}

    @Get()
    // Get request and response object within this function, of type Request and Response respectively
    findAll() : Promise<Item[]> {//@Req() req: Request, @Res() res: Response): Response { // Typecripts // Return type Response
        // console.log(req.url);
        // return res.send('Hello World'); // : Response
        return this.itemsSerivce.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> { // parameters in request url  'http://localhost:3000/items/{id}'
        return this.itemsSerivce.findOne(id);
    }
    // Same thing
    // @Get(':id')
    // findPne(@Param('id') id): string { // parameters in request url  'http://localhost:3000/items/{id}'
    //     return `Item ${id}`;
    // } awwo

    // handle post request to create new items
    // To send data: in NEST need to create DTO (data transfer object)
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> { //setting object as type, to have access in create()
        // return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
        return this.itemsSerivce.create(createItemDto)
    }

    // Handle DELETE request
    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        // return `Delete ${id}`;
        return this.itemsSerivce.delete(id)
    }

    // Handle PUT (Update) request
    // To send data: in NEST need to create DTO (data transfer object)
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item>{
        // return `Update ${id} - Name: ${updateItemDto.name}`;
        return this.itemsSerivce.update(id, updateItemDto)
    }
}

