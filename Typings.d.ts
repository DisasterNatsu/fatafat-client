interface NavDataType {
  heading: string;
  link: string;
  icon: any;
}

interface TablePropType {
  heading?: boolean;
  refresh?: boolean;
}

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (state: boolean) => void;
}

interface DateFormatterProps {
  current: boolean;
  date?: string;
}
