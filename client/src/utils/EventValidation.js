export default function eventValidation(values) {

    const validDateRegex = RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
    const validTimeRegex = RegExp(/^(0[0-9]|1[0-2]):[0-5][0-9]$/);
    const validUrl = RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

    let errors = {};

    if (!values.title) {
        errors.title = "A title is required";
    } else if (values.title.length < 5) {
        errors.title = "Must be 5 or more characters long"
    }
    if (!values.start_date) {
        errors.start_date = "Start date is required";
    } else if (!validDateRegex.test(values.start_date)) {
        errors.start_date = "Invalid Date, must be MM/DD/YYYY"
    }
    if (!values.end_date) {
        errors.end_date = "End date is required";
    } else if (!validDateRegex.test(values.end_date)) {
        errors.end_date = "Invalid Date, must be MM/DD/YYYY"
    }
    if (!values.star_time) {
        errors.star_time = "Describe this in 15 characters or less";
    } else if (!validTimeRegex.test(values.star_time)) {
        errors.star_time = "Invalid Time, must be 00:00"
    }
    if (!values.startAMPM) {
        errors.startAMPM = "A source url is required";
    } else if (values.startAMPM === "am" || values.startAMPM === "pm") {
        errors.startAMPM = "Choose One"
    }
    if (!values.end_time) {
        errors.end_time = "Type of article is required";
    } else if (!validTimeRegex.test(values.end_time)) {
        errors.end_time = "Invalid Time, must be 00:00"
    }
    if (!values.endAMPM) {
        errors.endAMPM = "Type of article is required";
    } else if (values.endAMPM === "am" || values.endAMPM === "pm") {
        errors.endAMPM = "Choose One"
    }
    if (!values.organization) {
        errors.organization = "Type of article is required";
    } else if (values.organization.length < 5) {
        errors.organization = "Must be 5 or more characters long"
    }
    if (!values.event_url) {
        errors.event_url = "Type of article is required";
    } else if (!validUrl.test(values.event_url)) {
        errors.event_url = "Unvalid URL"
    }
    if (!values.description) {
        errors.description = "Type of article is required";
    } else if (values.description.length < 5) {
        errors.description = "Must be 5 or more characters long"
    }
    if (!values.location) {
        errors.location = "Type of article is required";
    } else if (values.location.length < 5) {
        errors.location = "Must be 5 or more characters long"
    }
    return errors;

};

// switch (name) {
//           case 'title':
//             value.length > 5
//             ? setErrorObject({ title: false }) : setErrorObject({ title: true });
//             break;
//           case 'organization':
//             value.length > 5
//             ? setErrorObject({ organization: false }) : setErrorObject({ organization: true });
//             break;
//           case 'event_url':
//             validUrl.test(value)
//             ? setErrorObject({ event_url: false }) : setErrorObject({ event_url: true })
//             break;
//           case 'description':
//             value.length > 5
//             ? setErrorObject({ description: false }) : setErrorObject({ description: true });
//             break;
//           case 'location':
//             value.length > 5
//             ? setErrorObject({ location: false }) : setErrorObject({ location: true });
//             break;
//           case 'start_date':
//             validDateRegex.test(value)
//               ? setErrorObject({ start_date: false }) : setErrorObject({ start_date: true });
//             break;
//           case 'end_date':
//             validDateRegex.test(value)
//               ? setErrorObject({ end_date: false }) : setErrorObject({ end_date: true });
//             break;
//           case 'start_time':
//             validTimeRegex.test(value)
//               ? setErrorObject({ start_time: false }) : setErrorObject({ start_time: true });
//             break;
//           case 'end_time':
//             validTimeRegex.test(value)
//               ? setErrorObject({ end_time: false }) : setErrorObject({ end_time: true });
//             break;
//           case 'startAMPM':
//             value === "am" || value === "pm"
//             ? setErrorObject({ startAMPM: false }) : setErrorObject({ startAMPM: true });
//             break;
//           case 'endAMPM':
//             value === "am" || value === "pm"
//             ? setErrorObject({ endAMPM: false }) : setErrorObject({ endAMPM: true });
//             break;
//           default:
//             break;  
//         }