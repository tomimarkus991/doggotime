export interface ISidebarRouter {
  to: string;
  routeName: string;
  smallIcon: JSX.Element;
  bigIcon: JSX.Element;
  element?: JSX.Element;
  tooltip?: string;
}
export interface IRegularRouter {
  to: string;
  element?: JSX.Element;
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export type NextLayoutProps = {
  children: React.ReactNode;
};
