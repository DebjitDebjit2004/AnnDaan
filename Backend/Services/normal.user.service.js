export const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
};

export const isValidPassword = (password) => {
    if (!password) {
        return "all fields are required";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }
    
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return regex.test(password);
};

export const checkFieldValidation = (firstName, lastName, email, phone) => {
    if (!firstName || !lastName || !email || !phone) {
        return "All fields are required";
    }

    if (firstName.length < 3) {
        return "First name must be at least 3 characters long";
    } else if (lastName.length < 3) {
        return "Last name must be at least 3 characters long";
    } else if (typeof (phone) !== "number") {
        return "Phone number must be a number";
    } else if (phone.toString().length != 10) {
        return "Phone number must be at least 10 digits long";
    } else {
        console.log("All fields are valid");
    }
}