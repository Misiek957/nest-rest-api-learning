// Interface to explain what fields an item has

export interface Item{
    id?: string; // question mark - optional
    name: string;
    description?: string;
    qty: number;
}