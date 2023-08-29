const REG_EXP = {
  nameRegExp: new RegExp(/^[A-Za-zА-Яа-яІіЇїЄє' -]+$/),
  phoneRegExp: new RegExp(/^[0-9]{10}$/),
  emailRegExp: new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  passwordRegExp: new RegExp(/^(?=\S*?[a-zA-Zа-яА-Я])(?=\S*?[0-9])[^ ]*\S+$/),
};

export const { nameRegExp, phoneRegExp, emailRegExp, passwordRegExp } = REG_EXP;
