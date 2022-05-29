export interface Route {
    title: string,
    path: string,
    navDisplay?: boolean
}

const _Routes: Route[] = [
    { title: "Home", path: "/", navDisplay: true },
    { title: "About", path: "/about", navDisplay: true },
    { title: "Contact", path: "/contact", navDisplay: true },
    { title: "Services", path: "/services", navDisplay: true },
    { title: "Products", path: "/products", navDisplay: true }
];

export default _Routes;