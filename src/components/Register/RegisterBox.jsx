import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div>
      <h1>Реєстрація</h1>
      <p>Введіть свої данні:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Ім’я
          <input
            type="text"
            {...register('firstName', {
              pattern: {
                value: /^[A-Za-zА-Яа-я']+$/,
                message: 'Використовуйте лише літери',
              },
              required: `Будь ласка, введіть ваше ім'я`,
              maxLength: { value: 20, message: `Оберіть коротше ім'я` },
            })}
            aria-invalid={errors.firstName ? 'true' : 'false'}
          />
        </label>
        {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
        {errors.firstName?.maxLength > 20 && (
          <p role="alert">Choose a shorter name</p>
        )}
        {/* <label>
          Прізвище
          <input
            {...register('firstName', { required: true, maxLength: 20 })}
          />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <label>
          Телефон
          <input
            {...register('firstName', { required: true, maxLength: 20 })}
          />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <label>
          Ваша ел. адреса
          <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <label>
          Пароль
          <input type="number" {...register('age', { min: 18, max: 99 })} />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <label>
          Підтвердження пароля
          <input type="number" {...register('age', { min: 18, max: 99 })} />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" /> */}
      </form>
    </div>
  );
};

export default RegisterBox;
