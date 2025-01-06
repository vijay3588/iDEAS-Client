import { Model } from 'mongoose';
import { Racks } from './schemas/rack.schema';
import { Rack } from './interfaces/rack.interface';
export declare class RackService {
    private rackModel;
    constructor(rackModel: Model<Racks>);
    create(box: Rack): Promise<Rack>;
}
