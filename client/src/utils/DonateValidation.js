export default function donateValidation(values) {

    const validUrl = RegExp(/https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/);
    let errors = {};

    if(!values.title) {
      errors.title = "A title is required";
    } else if (values.title.length < 2) {
      errors.title = "Must be 2 or more characters long"
    }
    if (!values.description) {
      errors.description = "A description is required";
    } else if (values.description.length < 15) {
      errors.description = "Must be 15 or more characters long"
    }
    if (!values.src) {
      errors.src = "A source url is required";
    } else if (!validUrl.test(values.src)) {
      errors.src = "Url is invalid"
    }
    if (!values.type) {
      errors.type = "Ttype of Link is required";
    } else if (values.type.length < 5) {
      errors.type = "Must be 5 or more characters long"
    }
    return errors;
}