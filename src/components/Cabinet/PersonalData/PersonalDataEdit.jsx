import React from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from '../../../store/AuthProvider';
import { observer } from 'mobx-react-lite';
import { StyledEditForm } from './PersonalDataEdit.styled';
import { useTranslation } from 'react-i18next';
import Name from './InputFields/Name';
import Surname from './InputFields/Surname';
import PhoneNumber from './InputFields/PhoneNumber';
import Email from './InputFields/Email';
import PasswordChange from './PasswordChange';
import { useState } from 'react';

const PersonalData = observer(() => {
  const { t } = useTranslation();
  const store = useStore();
  const {
    auth: { user, updateProfile },
  } = store;
  const values = user;

  const [isEditing, setIsEditing] = useState(false);

  const handleEditingStart = () => {
    setIsEditing(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      surname: user.surname,
      phone_number: user.phone_number,
      email: user.email,
    },
    values,
  });

  const onSubmit = data => {
    updateProfile(data);
    setIsEditing(false);
  };

  return (
    <StyledEditForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Name
          errors={errors}
          register={register}
          handleEditingStart={handleEditingStart}
        />
        <Surname
          errors={errors}
          register={register}
          handleEditingStart={handleEditingStart}
        />
        <PhoneNumber
          errors={errors}
          register={register}
          handleEditingStart={handleEditingStart}
        />
        <Email
          errors={errors}
          register={register}
          handleEditingStart={handleEditingStart}
        />
        <button
          type="submit"
          className="edit-button"
          disabled={!isEditing || (!isEditing && !isValid)}
        >
          {isSubmitted && !isEditing ? t('Дані оновлено') : t('Зберегти зміни')}
        </button>
      </form>
      <PasswordChange />
    </StyledEditForm>
  );
});

export default PersonalData;
