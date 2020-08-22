import login from "../../pages/Login";
import credentials from "../../data/credentials";

export default (isValid, username) => {
    const password = isValid
        ? credentials.find(creds => creds.username === username).password
        : "randomPassword";
  
    login.signIn(username, password);
};
