// validation for video form, checks if there's a value at all and whether it meets one other requirement
export default function videoValidation(values) {
    //looks for all youtube video links, not just embedded video links
    const validYoutube = RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/);
    
    let errors = {};

    if (!values.title) {
        errors.title = "A title is required";
    } else if (values.title.length < 5) {
        errors.title = "Must be 5 or more characters long"
    }
    if (!values.description) {
        errors.description = "A description is required";
    } else if (values.description.length < 5) {
        errors.description = "Must be 5 or more characters long"
    }
    if (!values.src) {
        errors.src = "Source url is required";
    } else if (!validYoutube.test(values.src)) {
        errors.src = "Invalid youtube link"
    }
    if (!values.type) {
        errors.type = "Video type is required";
    } else if (values.type.length < 5) {
        errors.type = "Must be 5 or more characters long"
    }
    return errors;

};