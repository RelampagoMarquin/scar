import * as yup from 'yup';

export const yupCreateTagsInput = yup.object().shape({

    name: yup.string().required(),
    typeId: yup.number().required(),

});