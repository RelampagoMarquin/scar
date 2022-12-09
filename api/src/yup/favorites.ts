import * as yup from 'yup';

export const yupCreateFavoritesInput = yup.object().shape({

    tagId: yup.number().required(),
    userId: yup.number().required(),

});