export default function donateValidation(values) {

    const validUrl = RegExp(/https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/);
    let errors = {};

    if(!values.donationTitle) {
      errors.donationTitle = "A title is required";
    } else if (values.donationTitle.length < 5) {
      errors.donationTitle = "Must be 5 or more characters long"
    }
    if (!values.donationDescription) {
      errors.donationDescription = "A description is required";
    } else if (values.donationDescription.length < 20) {
      errors.donationDescription = "Must be 20 or more characters long"
    }
    if (!values.donationUrl) {
      errors.donationUrl = "A source url is required";
    } else if (!validUrl.test(values.donationUrl)) {
      errors.donationUrl = "Url is invalid"
    }
    if (!values.donationType) {
      errors.donationType = "Type of Donation Link is required";
    } else if (values.donationType.length < 5) {
      errors.donationType = "Must be 5 or more characters long"
    }
    return errors;
}