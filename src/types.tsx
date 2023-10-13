export type loginInputsT = {
  email_or_username: string;
  password: string;
};

export type SignupInputsT = {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
};

export type ProductT = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
};