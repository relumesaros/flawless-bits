import { CreateContactUsRdo } from "../rdo/create-contact-us.rdo";
import { Response } from "../../../../shared/types/response";

export const mapContactUs = (dto: CreateContactUsRdo): Response => ({
    id: dto.id.toString(),
})
