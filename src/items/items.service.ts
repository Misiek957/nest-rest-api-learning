// Injectable allows to inject this as a dependancy into a constructor
import { Inject, Injectable } from '@nestjs/common';
// Interface to explain what fields an item has 
import { Item } from './interfaces/items.interfaces'
// Import the inject model from mongoose, to inject to the service as a dependancy, in order to use Mongoose
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

    // To be able to use itemModel.{methods}
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){} // called itemModel of class Item  }

        // Hard coded data
    // private readonly items: Item[] = [  // [] Array of type Item from items/interfaces
    //     {
    //         id: "123123",
    //         name: "Item One",
    //         qty: 100,
    //         description: "This is item one"
    //     },
    //     {
    //         id: "321312",
    //         name: "Item Two",
    //         qty: 50,
    //         description: "This is item two"
    //     }
    // ];

    // METHODS

    // Reference access to data in this service
    async findAll(): Promise<Item[]> {
        // return this.items;// HARD CODED DATA
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        // Arrow function, pass for each item.id that matches the passed id 
        // return this.items.find(item => item.id === id); // HARD CODED DATA
        return await this.itemModel.findOne({ _id: id }); // _id for Mongoose
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save(); // return saved item along with added that it has been added by MongoDB
    }
    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }
    async update(id: string, item:Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item,{new: true})
    }
}
