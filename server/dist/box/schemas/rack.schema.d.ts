import { Document } from 'mongoose';
export declare class Racks extends Document {
    name: string;
    status: string;
    box: string;
    picked: boolean;
}
export declare const RackSchema: import("mongoose").Schema<Racks, import("mongoose").Model<Racks, any, any>, undefined, {}>;
