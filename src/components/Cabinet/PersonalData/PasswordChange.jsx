import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../../store/AuthProvider';
import Password from './InputFields/Password';
import PasswordConfirm from './InputFields/PasswordConfirm';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

const PasswordChange = observer(() => {
  const [isEditing, setIsEditing] = useState(false);
  const { t } = useTranslation();

  const handleEditingStart = () => {
    setIsEditing(true);
  };

  const store = useStore();
  const {
    auth: { updatePassword, errorType, state, setState },
  } = store;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },

    watch,
    setError,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      new_password: '',
      new_password_confirmation: '',
    },
  });

  const password = watch('new_password', '');

  const onSubmit = data => {
    setIsEditing(false);
    updatePassword(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Password
          errors={errors}
          register={register}
          setError={setError}
          watch={watch}
          handleEditingStart={handleEditingStart}
          errorType={errorType}
          state={state}
          setState={setState}
        />
        <PasswordConfirm
          errors={errors}
          register={register}
          password={password}
          handleEditingStart={handleEditingStart}
        />

        <button
          type="submit"
          className="edit-button"
          disabled={
            !isEditing ||
            !isValid ||
            (errorType === 'password-change' && state !== 'done')
          }
        >
          {isSubmitted && !isEditing ? t('Дані оновлено') : t('Зберегти зміни')}
        </button>
      </form>
    </div>
  );
});

export default PasswordChange;
