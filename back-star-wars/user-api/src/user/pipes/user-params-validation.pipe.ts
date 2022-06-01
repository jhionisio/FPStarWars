import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";


export class UserParamsValidationPipe implements PipeTransform {

    transform(value: any, metadata: ArgumentMetadata) {
        console.log(`Value ${value} and metadata ${metadata}`);
       if(!value) {
            throw new BadRequestException(`The value of the parameter ${metadata.data} must be informed`);
        }
        return value;
    }
}