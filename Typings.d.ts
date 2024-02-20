interface NavDataType {
  heading: string;
  link: string;
  icon: any;
}

interface TablePropType {
  heading?: boolean;
  refresh?: boolean;
  data?: any;
}

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (state: boolean) => void;
  isAuth: boolean;
  setIsAuth: (state: boolean) => void;
}

interface DateFormatterProps {
  current: boolean;
  date?: string;
}

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
    status: number;
    statusText: string;
  };
}

interface UserLogInResponse {
  authToken: string;
  email: string;
}

interface UserAuthResponse {
  authenticated: boolean;
  user?: {
    email: string;
    exp: number;
    iat: number;
  };
  error: any;
}

interface UserDropdownProps {
  isAuth: boolean;
  setIsAuth: (boolean) => void;
}

interface LatestUpdateDataType {
  date: string;
  one: string | null;
  two: string | null;
  three: string | null;
  four: string | null;
  five: string | null;
  six: string | null;
  seven: string | null;
  eight: string | null;
  createdAt: string;
}
