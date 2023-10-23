export default function validate(email , p){
        const isValid = String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        if(!isValid) return 'Email is not valid!' ;

    // function validatePassword() {
        if (p.length < 8) {
            return "Your password must be at least 8 characters" ; 
        }
         if (p.search(/[a-z]/i) < 0) {
            return "Your password must contain at least one lowercase letter." ;
        }
         if (p.search(/[0-9]/) < 0) {
            return "Your password must contain at least one digit." ; 
        }
         if (p.search(/[!#$%@?"]/) < 0) {
            return "Your password must contain special characters" ; 
        }
        return null ;
    // }
}