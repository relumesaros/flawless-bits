import GlobalContextProvider from "../context/GlobalContextProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Router } from "@remix-run/router/dist/router";
import { RouterProvider, } from "react-router-dom";
import navbarConfig from "../../shared/config/navbar.config";


type Props = {
    router: Router;
    client: QueryClient
}

export default ({router, client}: Props) => {
    return (
        <QueryClientProvider client={client}>
            <GlobalContextProvider value={{navbarActive: navbarConfig.sections.vision}}>
                <RouterProvider router={router}/>
                <ReactQueryDevtools />
            </GlobalContextProvider>
        </QueryClientProvider>
    );
};
