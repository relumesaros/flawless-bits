import { apiClient } from "../../../shared/api/base";
import { CreateContactUsDto } from "./dto/create-contact-us.dto";
import { mapContactUs } from "./mapper/map-contact-us";
import { CreateContactUsRdo } from "./rdo/create-contact-us.rdo";


export const createContactUs = async (body: CreateContactUsDto) => {
    const res = await apiClient.post<CreateContactUsRdo>('/contact-us', body);
    return mapContactUs(res);
}
