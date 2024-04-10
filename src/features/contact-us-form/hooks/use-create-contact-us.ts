import { useMutation } from "@tanstack/react-query";
import { createContactUs } from '../../../entities/contact-us'

export const useCreateContactUs = () =>
  useMutation({
    mutationFn: createContactUs
  })
