export default function donationValidation(values) {

    const validUrl = RegExp(/https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/);
    let errors = {};

    if(!values.title) {
      errors.title = "A title is required";
    } else if (values.title.length < 5) {
      errors.title = "Must be 5 or more characters long"
    }
    if (!values.author) {
      errors.author = "An author is required";
    } else if (values.author.length < 5) {
      errors.author = "Must be 5 or more characters long"
    }
    if (!values.body) {
      errors.body = "Hint: copy&paste";
    } else if (values.body.length < 20) {
      errors.body = "Must be 20 or more characters long"
    }
    if (!values.description) {
      errors.description = "Describe this in 15 characters or less";
    } else if (values.description.length < 15) {
      errors.description = "Must be 15 or more characters long"
    }
    if (!values.source_url) {
      errors.source_url = "A source url is required";
    } else if (!validUrl.test(values.source_url)) {
      errors.source_url = "Url is invalid"
    }
    if (!values.type) {
      errors.type = "Type of article is required";
    } else if (values.type.length < 5) {
      errors.type = "Must be 5 or more characters long"
    }
    return errors;
}