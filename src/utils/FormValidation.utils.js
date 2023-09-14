export class FormValidation {
  static email(email = "") {
    const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const result = regex.test(email);
    return result;
  }

  static registration(registration = "") {
    const result = registration.length === 10;
    return result;
  }
}
