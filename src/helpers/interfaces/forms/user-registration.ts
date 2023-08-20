interface UserRegistrate {
  defaultAdress?: boolean;
  shipDefault?: boolean;
  billDefault?: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday?: Date | null;
  shipCountry: string;
  shipCity: string;
  shipPostcode: string;
  shipStreet: string;
  billCountry?: string;
  billCity?: string;
  billPostcode?: string;
  billStreet?: string;
}

export default UserRegistrate;
