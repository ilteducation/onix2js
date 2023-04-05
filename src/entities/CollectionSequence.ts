import {
    CollectionSequenceType,
    CollectionSequenceTypeEnum,
} from "../codelists/CollectionSequenceType";
import {parseValue} from "../utils/parse";

export class CollectionSequence {
    constructor(json: any) {
        this.collectionSequenceType =
            CollectionSequenceType[json.CollectionSequenceType[0]];
        const typeName = parseValue(json, "CollectionSequenceTypeName");
        if (typeName) this.collectionSequenceTypeName = typeName;
        const number = parseValue(json, 'CollectionSequenceNumber');
        if (number) this.collectionSequenceNumber = number;
    }

    collectionSequenceType: CollectionSequenceTypeEnum;
    collectionSequenceTypeName?: string;
    collectionSequenceNumber: string;
}