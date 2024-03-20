import GlobalContextProvider from "../context/GlobalContextProvider";
import type { Router } from "@remix-run/router/dist/router";
import { RouterProvider, } from "react-router-dom";
import navbarConfig from "../../shared/config/navbar.config";


type Props = {
    router: Router
}

export default ({router}: Props) => {
    return (
        <GlobalContextProvider value={{navbarActive: navbarConfig.sections.vision}}>
            <RouterProvider router={router}/>
        </GlobalContextProvider>
    );
};
