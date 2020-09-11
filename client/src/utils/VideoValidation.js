export default function videoValidation(values) {
    //looks for all youtube video links, not just embedded video links
    const validYoutube = RegExp(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/);
    
    let errors = {};

    if (!values.videoTitle) {
        errors.videoTitle = "A title is required";
    } else if (values.videoTitle.length < 5) {
        errors.videoTitle = "Must be 5 or more characters long"
    }
    if (!values.videoDescription) {
        errors.videoDescription = "A description is required";
    } else if (values.videoDescription.length < 5) {
        errors.videoDescription = "Must be 5 or more characters long"
    }
    if (!values.videoUrl) {
        errors.videoUrl = "Source url is required";
    } else if (!validYoutube.test(values.videoUrl)) {
        errors.Url = "Invalid youtube link"
    }
    return errors;

};