import { useForm } from "react-hook-form"

import InputFieldText from "../../../shared/ui/InputFieldText";
import SubmitButton from "../../../shared/ui/ButtonCommon";
import FormWrapper from "../../../shared/ui/FormWrapper";
import toastrMessage from "../../../shared/lib/toastrMessage";
import InputFieldTextarea from "../../../shared/ui/InputFieldTextarea";

type FormData = {
    name: string;
    email: string;
    companyName: string;
    description: string;
}
export const ContactUsForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log('in onSubmit', data);
        toastrMessage.success({message: "Saved"});
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <InputFieldText
                inputLabel='Name'
                error={errors?.name?.message}
                name='name'
                register={register}
                validation={{required: "Name is required"}}/>
            <InputFieldText
                inputLabel='Email'
                error={errors?.email?.message}
                name='email'
                register={register}
                validation={{required: "Email is required"}}/>
            <InputFieldText
                inputLabel='Company Name'
                error={errors?.companyName?.message}
                name='companyName'
                register={register}/>
            <InputFieldTextarea
                inputLabel='Tell us your idea!'
                error={errors?.description?.message}
                name='description'
                register={register}/>
            <SubmitButton disabled={Object.keys(errors).length > 0} callback={() => {
                console.info('in submit');
            }}/>
        </FormWrapper>
    )
}
