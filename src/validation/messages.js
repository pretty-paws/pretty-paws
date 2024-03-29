const VALIDATION_MESSAGES = {
  nameMessage: {
    pattern: 'Використовуйте лише літери',
    required: `Будь ласка, введіть ваше ім'я`,
    maxLength: `Оберіть коротше ім'я`,
    minLength: `Вкажіть ім'я більше 2 символів`,
  },
  surNameMessage: {
    pattern: 'Використовуйте лише літери',
    required: `Будь ласка, введіть ваше прізвище`,
    maxLength: `Оберіть коротше прізвище`,
    minLength: `Вкажіть прізвище більше 2 символів`,
  },
  phoneMessage: {
    pattern: 'Введіть номер у форматі +380 __ ___ __ __',
    required: `Будь ласка, введіть ваш номер телефону`,
    maxLength: `Не більше 13 символів`,
    minLength: `Введіть номер у форматі +380 __ ___ __ __`,
  },
  emailMessage: {
    pattern: 'Введіть email за зразком email@address.com',
    required: `Будь ласка, введіть ваш email`,
    maxLength: `Не більше 50 символів`,
  },
  passwordMessage: {
    pattern: 'Додайте велику і малу літеру, число, без символів',
    required: `Будь ласка, введіть ваш пароль`,
    minLength: `Пароль має бути довший за 6 символів`,
    maxLength: `Не більше 50 символів`,
    notMatch: 'Паролі не збігаються',
  },
  passwordConfirmMessage: {
    required: `Будь ласка, підтвердіть пароль`,
    notMatch: 'Введені паролі не збігаються',
  },
  agreementMessage: {
    required: 'Ви маєте дати дозвіл на обробку даних',
  },
  deliveryMessage: {
    district: 'Необхідно вибрати область',
    city: 'Необхідно вибрати населений пункт',
    warehouse: 'Необхідно вибрати відділення',
    postomat: 'Необхідно вибрати поштомат',
    acceptConditions: 'Необхідно погодитись з умовами',
  },
};

export const {
  nameMessage,
  surNameMessage,
  phoneMessage,
  emailMessage,
  passwordMessage,
  passwordConfirmMessage,
  agreementMessage,
  deliveryMessage,
} = VALIDATION_MESSAGES;
