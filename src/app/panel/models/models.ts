export interface SideNavItem{
    tittle: string,
    link: string,
    icon: string
}

export interface UserData {
    id: string;
    name: string;
    progress: string;
    fruit: string;
  }

export interface INavbarData{
    routeLink?: string,
    icon: string,
    label: string,
    expanded?: boolean,
    items?: INavbarData[]
}

export interface ErrorModel{
    name: string,
    message: string
}

export interface NotificationModel{
    nombre: string,
    descripcion: string,
    tiempo: number
}

export interface Breadcrumb {
    titulo: string;
    url: string;
}