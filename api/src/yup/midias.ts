import * as yup from 'yup';

export const yupCreateMidiasInput = yup.object().shape({

    url: yup.string().required(),
    questionId: yup.number(),
    answerId: yup.number(),

});