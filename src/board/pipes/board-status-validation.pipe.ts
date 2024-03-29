import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform{

    readonly StatusOption = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any) {
        value = value.toUpperCase();

        if(!this.isStatusValidation(value)){
            throw new BadRequestException(`${value} is not in the status options`);
        }
        return value;
    }

    private isStatusValidation(status: any){
        const index = this.StatusOption.indexOf(status);
        return index !== -1;
    }
}