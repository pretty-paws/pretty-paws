import React from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledEditForm } from './PersonalDataEdit.styled';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Name from './InputFields/Name';
import Surname from './InputFields/Surname';
import PhoneNumber from './InputFields/PhoneNumber';
import Email from './InputFields/Email';
import Password from './InputFields/Password';
import PasswordConfirm from './InputFields/PasswordConfirm';

const PersonalData = observer(() => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const store = useStore();
  const {
    auth: { user, state },
  } = store;
  const values = user;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
    setError,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      surname: user.surname,
      phone_number: user.phone_number,
      email: user.email,
      password: '',
      password_confirmation: '',
    },
    values,
  });

  const password = watch('password', '');

  //   const phone_number = watch('phone_number', '');

  console.log(user.phone_number);

  const onSubmit = data => {
    console.log(data);
    navigate('/cabinet/personal_data');
    reset();
  };
  return (
    <StyledEditForm>
      {state === 'pending' ? null : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Name errors={errors} register={register} />
          <Surname errors={errors} register={register} />
          <PhoneNumber errors={errors} register={register} />
          <Email errors={errors} register={register} />
          <Password
            errors={errors}
            register={register}
            setError={setError}
            watch={watch}
          />
          <PasswordConfirm
            errors={errors}
            register={register}
            password={password}
          />

          <button type="submit" className="edit-button" disabled={!isValid}>
            {t('Зберегти зміни')}
          </button>
        </form>
      )}
    </StyledEditForm>
  );
});

export default PersonalData;
