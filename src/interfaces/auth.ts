export interface loginForm {
  email: string;
  password: string;
}

export interface registerData {
  name: string;
  userEmail: string;
  password: string;
}

export interface registerForm extends registerData {
  confirmPassword: string;
}
