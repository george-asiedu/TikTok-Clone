import {AuthState} from "./interface/auth";

export const countries = [
  { name: "GH", code: "+233" },
  { name: "NG", code: "+234" },
  { name: "KE", code: "+254" },
  { name: "ZA", code: "+27" },
  { name: "UG", code: "+256" },
  { name: "TZ", code: "+255" },
  { name: "ET", code: "+251" },
  { name: "SN", code: "+221" },
  { name: "CM", code: "+237" },
  { name: "MA", code: "+212" },
  { name: "DZ", code: "+213" },
  { name: "EG", code: "+20" },
  { name: "SD", code: "+249" },
];

export const IMAGES = {
  eyeOpenImage: "eye-open.svg",
  eyeCloseImage: "eye-close.svg",
  settingsImage: "setting.svg",
  uploadIconImage: "upload-icon.svg",
  userImage: "user.svg",
  searchImage: "search.svg",
  blackLogoImage: "black-logo.svg",
  logoImage: "logo.png",
  whiteLogoImage: "logo2.png",
};

export interface ButtonStyles {
  [key: string]: boolean;
}

export const initialState: AuthState = {
  isLoading: false,
  error: null,
  data: null,
  message: null
};

export const authRoutes = {
    login: "/auth/login",
    signup: "/auth/signup",
    verifyAccount: "/auth/verify-account",
    logout: "",
}

export const pagesRoutes = {
  forYou: ""
}

export const toastMessages = {
  signupMessage: "Account created successfully",
  loginMessage: "Login successful",
  verifyAccountMessage: "Account verified successfully",
  errorMessage: "An error occurred",
  toastDuration: 3000,
}

export interface Tokens {
  token?: string;
  accessToken?: string;
  refreshToken?: string;
}

export const genericData = {
  storageKey: 'user'
}