import { useForm } from "react-hook-form";
import styled from 'styled-components';

import InputFieldText from "../../../shared/ui/InputFieldText";
import SubmitButton from "../../../shared/ui/ButtonCommon";
import FormWrapper from "../../../shared/ui/FormWrapper";
import toastrMessage from "../../../shared/lib/toastrMessage";
import InputFieldTextarea from "../../../shared/ui/InputFieldTextarea";
import { ContactUsFormData } from "../types/ContactUsFormData";
import { useCreateContactUs } from "../hooks/use-create-contact-us";
import stylesConfig from '../../../shared/config/styles.config';

const FormLoaderWrapper = styled.div`
  width: 48%;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ContactUsForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ContactUsFormData>();

    const {mutateAsync, isPending} = useCreateContactUs();

    const onSubmit = async (data: ContactUsFormData) => {
        if (isPending) {
            return;
        }
        try {
            await mutateAsync(data);
            toastrMessage.success({message: `Thank you! We will get back soon.`});
            reset()
        } catch (e) {
            toastrMessage.error({message: `Ups! Something went wrong.`});
        }
    };

    return (
        <FormLoaderWrapper>
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
                <SubmitButton disabled={Object.keys(errors).length > 0} isLoading={isPending === true}/>
            </FormWrapper>
        </FormLoaderWrapper>
    )
}
