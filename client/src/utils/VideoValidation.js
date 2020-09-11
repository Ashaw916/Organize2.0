export default function videoValidation(values) {
//add regex for youtube embed link, facebook embed link, dailymotion, twitter, instagram, tiktok

//looks for all youtube video links, not just embedded video links
const validYoutube = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/

    // if(!values.title) {
    //     errors.title = "A title is required";
    //   } else if (values.title.length < 5) {
    //     errors.title = "Must be 5 or more characters long"
    //   }
    //   if (!values.author) {
    //     errors.author = "An author is required";
    //   } else if (values.author.length < 5) {
    //     errors.author = "Must be 5 or more characters long"
    //   }
    //   if (!values.body) {
    //     errors.body = "Hint: copy&paste";
    //   } else if (values.body.length < 20) {
    //     errors.body = "Must be 20 or more characters long"
    //   }
    //   if (!values.description) {
    //     errors.description = "Describe this in 15 characters or less";
    //   } else if (values.description.length < 15) {
    //     errors.description = "Must be 15 or more characters long"
    //   }
    //   if (!values.source_url) {
    //     errors.source_url = "A source url is required";
    //   } else if (!validUrl.test(values.source_url)) {
    //     errors.source_url = "Url is invalid"
    //   }
    //   if (!values.type) {
    //     errors.type = "Type of article is required";
    //   } else if (values.type.length < 5) {
    //     errors.type = "Must be 5 or more characters long"
    //   }
    //   return errors;

};