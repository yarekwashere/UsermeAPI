export const emailValidate = (email) =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email,
  );

export const nicknameValidate = (nickname) =>
  /^(?=[a-zA-Z])[0-9a-zA-Z]{3,50}$/.test(nickname);

export const fullNameValidate = (fullName) =>
  /^((?! {2})[0-9a-zA-Z ]){3,20}$/.test(fullName);
