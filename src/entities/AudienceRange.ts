import {
    AudienceRangeQualifierEnum,
    AudienceRangeQualifier,
} from "../codelists/AudienceRangeQualifier";
import { parseArray } from "../utils/parse";
import { AudienceRangePrecision } from "../codelists/AudienceRangePrecision";

export class AudienceRange {
    constructor(json: any) {
        this.audienceRangeQualifier =
            AudienceRangeQualifier[json.AudienceRangeQualifier[0]];
        const precisions = parseArray(json, "AudienceRangePrecision")
            .map((p) => AudienceRangePrecision[p]);
        if (precisions) this.audienceRangePrecisions = precisions;
        const values = parseArray(json, "AudienceRangeValue");
        if (values) this.audienceRangeValues = values;
    }

    audienceRangeQualifier: AudienceRangeQualifierEnum;
    // There is at least one of each of the following
    audienceRangePrecisions: string[];
    audienceRangeValues: string[];
}