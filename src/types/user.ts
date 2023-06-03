type User = {
  emailID: string;
  password: string;
  name: {
    salutation: string;
    firstName: string;
    middleName: string;
    lastName: string;
  };
  userDetails: {
    dob: Date;
    aadhar: string;
    gender: string;
    bloodGroup: string;
  };
  contactDetails: {
    contactno1: number;
    contactno2: number;
    currentAddress: string;
  };
};
export default User;
