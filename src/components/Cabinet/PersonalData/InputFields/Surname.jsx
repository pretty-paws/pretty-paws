import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { nameRegExp } from '../../../../validation/regexp';
import { surNameMessage } from '../../../../validation/messages';

const Surname = ({ errors, register }) => {
  const { t } = useTranslation();
  return (
    <label className={errors.surname ? 'edit-label error' : 'edit-label'}>
      <div className="edit-label-text">{t('Прізвище')}</div>
      <input
        className={errors.surname ? 'edit-input error' : 'edit-input '}
        type="text"
        placeholder={toString('Прізвище')}
        {...register('surname', {
          pattern: {
            value: nameRegExp,
            message: surNameMessage.pattern,
          },
          required: surNameMessage.required,
          maxLength: { value: 20, message: surNameMessage.maxLength },
          minLength: {
            value: 2,
            message: surNameMessage.minLength,
          },
        })}
        aria-invalid={errors.surname ? 'true' : 'false'}
      />
      {errors.surname && (
        <svg className="error-icon" width="24px" height="24px">
          <use href={sprite + '#error'} />
        </svg>
      )}
      {errors.surname && (
        <p role="alert" className="edit-error">
          {t(`${errors.surname.message}`)}
        </p>
      )}
    </label>
  );
};

export default Surname;

Surname.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
