import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import sprite from '../../../../img/svg-sprite/sprite.svg';
import { emailRegExp } from '../../../../validation/regexp';
import { emailMessage } from '../../../../validation/messages';

const Email = ({ errors, register }) => {
  const { t } = useTranslation();

  return (
    <label className={errors.email ? 'edit-label error' : 'edit-label'}>
      <div className="edit-label-text">
        {screen !== 'desktop' ? t('Ел. пошта') : t('Електронна пошта')}
      </div>
      <input
        className={errors.email ? 'edit-input error' : 'edit-input  '}
        type="email"
        placeholder={t('Електронна адреса')}
        {...register('email', {
          pattern: {
            value: emailRegExp,
            message: emailMessage.pattern,
          },
          required: emailMessage.required,
          maxLength: { value: 50, message: emailMessage.maxLength },
        })}
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      {errors.email && (
        <svg className="error-icon" width="24px" height="24px">
          <use href={sprite + '#error'} />
        </svg>
      )}
      {errors.email && (
        <p role="alert" className="edit-error">
          {t(`${errors.email.message}`)}
        </p>
      )}
    </label>
  );
};

export default Email;

Email.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
