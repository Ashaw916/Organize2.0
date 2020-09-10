export default function eventValidation(values) {

    // const validDateRegex = RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
    // const validTimeRegex = RegExp(/^(0[0-9]|1[0-2]):[0-5][0-9]$/);
    // const validUrl = RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
  
    //     let errors = {};
    //     if(!values.title) {
    //       errors.title = "A title is required";
    //     } else if (values.title.length < 5) {
    //       errors.title = "Must be 5 or more characters long"
    //     }
    //     if (!values.author) {
    //       errors.author = "An author is required";
    //     } else if (values.author.length < 5) {
    //       errors.author = "Must be 5 or more characters long"
    //     }
    //     if (!values.body) {
    //       errors.body = "Hint: copy&paste";
    //     } else if (values.body.length < 20) {
    //       errors.body = "Must be 20 or more characters long"
    //     }
    //     if (!values.description) {
    //       errors.description = "Describe this in 15 characters or less";
    //     } else if (values.description.length < 15) {
    //       errors.description = "Must be 15 or more characters long"
    //     }
    //     if (!values.source_url) {
    //       errors.source_url = "A source url is required";
    //     } else if (!validUrl.test(values.source_url)) {
    //       errors.source_url = "Url is invalid"
    //     }
    //     if (!values.type) {
    //       errors.type = "Type of article is required";
    //     } else if (values.type.length < 5) {
    //       errors.type = "Must be 5 or more characters long"
    //     }
    //     return errors;

};

//switch (name) {
    //       case 'title':
    //         value.length > 5
    //         ? setErrorObject({ title: false }) : setErrorObject({ title: true });
    //         break;
    //       case 'organization':
    //         value.length > 5
    //         ? setErrorObject({ organization: false }) : setErrorObject({ organization: true });
    //         break;
    //       case 'event_url':
    //         validUrl.test(value)
    //         ? setErrorObject({ event_url: false }) : setErrorObject({ event_url: true })
    //         break;
    //       case 'description':
    //         value.length > 5
    //         ? setErrorObject({ description: false }) : setErrorObject({ description: true });
    //         break;
    //       case 'location':
    //         value.length > 5
    //         ? setErrorObject({ location: false }) : setErrorObject({ location: true });
    //         break;
    //       case 'start_date':
    //         validDateRegex.test(value)
    //           ? setErrorObject({ start_date: false }) : setErrorObject({ start_date: true });
    //         break;
    //       case 'end_date':
    //         validDateRegex.test(value)
    //           ? setErrorObject({ end_date: false }) : setErrorObject({ end_date: true });
    //         break;
    //       case 'start_time':
    //         validTimeRegex.test(value)
    //           ? setErrorObject({ start_time: false }) : setErrorObject({ start_time: true });
    //         break;
    //       case 'end_time':
    //         validTimeRegex.test(value)
    //           ? setErrorObject({ end_time: false }) : setErrorObject({ end_time: true });
    //         break;
    //       case 'startAMPM':
    //         value === "am" || value === "pm"
    //         ? setErrorObject({ startAMPM: false }) : setErrorObject({ startAMPM: true });
    //         break;
    //       case 'endAMPM':
    //         value === "am" || value === "pm"
    //         ? setErrorObject({ endAMPM: false }) : setErrorObject({ endAMPM: true });
    //         break;
    //       default:
    //         break;  
    //     }