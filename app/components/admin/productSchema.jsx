import * as yup from 'yup';

export const productSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'نام کالا باید حداقل  2 حرف باشد.')
    .required('نام الزامی است.'),
    
  quantity: yup.number()
    .min(0)
    .typeError('تعداد باید یک عدد باشد.') 
    .integer('تعداد باید عدد صحیح باشد.') 
    .required('تعداد محصول الزامی است..'),
    
  price: yup.number()
    .typeError('قیمت باید یک عدد باشد.') 
    .positive('قیمت باید بیشتر از صفر باشد.') 
    .required('قیمت محصول الزامی است..'),
});
