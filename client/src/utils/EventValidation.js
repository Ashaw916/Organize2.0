// validation for event form, checks if there's a value at all and whether it meets one other requirement
export default function eventValidation(values) {
// regex for varifying it's a correct date and time
    const validDateRegex = RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
    const validTimeRegex = RegExp(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
    // const validUrl = RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

    let errors = {};

    if (!values.title) {
        errors.title = "A title is required";
    } else if (values.title.length < 5) {
        errors.title = "Must be 5 or more characters long"
    }
    if (!values.start_date) {
        errors.start_date = "Start date is required";
    } else if (!validDateRegex.test(values.start_date)) {
        errors.start_date = "Invalid Date"
    }
    if (!values.end_date) {
        errors.end_date = "End date is required";
    } else if (!validDateRegex.test(values.end_date)) {
        errors.end_date = "Invalid Date"
    }
    if (!values.start_time) {
        errors.start_time = "Time the event ends is required";
    } else if (!validTimeRegex.test(values.start_time)) {
        errors.start_time = "Invalid Time"
    }
    if (!values.end_time) {
        errors.end_time = "Time the event ends is required ";
    } else if (!validTimeRegex.test(values.end_time)) {
        errors.end_time = "Invalid Time"
    }
    if (!values.organization) {
        errors.organization = "Organization name is required";
    } else if (values.organization.length < 3) {
        errors.organization = "Must be 3 or more characters long"
    }
    // if (!values.event_url) {
    //     errors.event_url = "";
    // } else if (!validUrl.test(values.event_url)) {
    //     errors.event_url = "Unvalid URL"
    // }
    if (!values.description) {
        errors.description = "A description is required";
    } else if (values.description.length < 10) {
        errors.description = "Must be 10 or more characters long"
    }
    if (!values.location) {
        errors.location = "A location is required";
    } else if (values.location.length < 5) {
        errors.location = "Must be 5 or more characters long"
    }
    return errors;

};