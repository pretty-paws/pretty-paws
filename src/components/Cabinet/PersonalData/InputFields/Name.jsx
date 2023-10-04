import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { nameRegExp } from '../../../../validation/regexp';
import { nameMessage } from '../../../../validation/messages';
import sprite from '../../../../img/svg-sprite/sprite.svg';

const Name = ({ errors, register, handleEditingStart }) => {
  const { t } = useTranslation();
  return (
    <label className={errors.name ? 'edit-label error' : 'edit-label'}>
      <div className="edit-label-text">{t('Ім’я')}</div>
      <input
        className="edit-input"
        placeholder={t('Ім’я')}
        type="text"
        onInput={() => handleEditingStart()}
        {...register('name', {
          pattern: {
            value: nameRegExp,
            message: nameMessage.pattern,
          },
          required: nameMessage.required,
          maxLength: { value: 20, message: nameMessage.maxLength },
          minLength: {
            value: 2,
            message: nameMessage.minLength,
          },
        })}
        aria-invalid={errors.name ? 'true' : 'false'}
      />
      {errors.name && (
        <svg className="error-icon" width="24px" height="24px">
          <use href={sprite + '#error'} />
        </svg>
      )}
      {errors.name && (
        <p role="alert" className="edit-error">
          {t(`${errors.name.message}`)}
        </p>
      )}
    </label>
  );
};

export default Name;

Name.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  handleEditingStart: PropTypes.func,
};
