import React from 'react';
import { createBrowserRouter, } from "react-router-dom";
import Navbar from '../features/navbar/ui/Navbar';
import { Main } from '../pages/main';
import SwitchWrapper from "./ui/SwitchWrapper";
import RouterWrapper from "./ui/RouterWrapper";
import { BlogPage } from "../pages/blog";
// import UseContextAndUseReducer from './blog/UseContextAndUseReducer';
// import RestVsGraphQL from './blog/RestVsGraphQL';
// import ClassLoadersAndHowTheyAreUsedInJvm from './blog/ClassLoadersAndHowTheyAreUsedInJvm';
// import CleanCodeProperNaming from './blog/CleanCodeProperNaming';
// import CleanCodeFunctionsAndMethods from './blog/CleanCodeFunctionsAndMethods';
// import Footer from './common/Footer';
// import blogConfig from '../config/blogConfig.json';

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <RouterWrapper>
                <Navbar/>
                <SwitchWrapper>
                    <Main/>
                </SwitchWrapper>
            </RouterWrapper>
        ),
    },
    {
        path: "/blog/:articleName",
        element: (
            <RouterWrapper>
                <BlogPage/>
            </RouterWrapper>
        ),
    },
])
// export default () => {
//
//     const router = ;
//
//     return (

//     )
//     // return (
//     //   <Router>
//     //     <RouterContentWrapper>
//     //       <Navbar/>
//     //       <SwitchWrapper>
//     //         <Switch>
//     //           {/* <Route exact path={`/${blogConfig.reactjsWithUsecontextAndUsereducerHooksExample.link}`}>
//     //             <div>
//     //               <UseContextAndUseReducer/>
//     //               <Footer/>
//     //             </div>
//     //           </Route>
//
//     //           <Route exact path={`/${blogConfig.restVsGraphql.link}`}>
//     //             <div>
//     //               <RestVsGraphQL/>
//     //               <Footer/>
//     //             </div>
//     //           </Route>
//
//     //           <Route exact path={`/${blogConfig.classLoadersAndHowTheyAreUsedInJvm.link}`}>
//     //             <div>
//     //               <ClassLoadersAndHowTheyAreUsedInJvm/>
//     //               <Footer/>
//     //             </div>
//     //           </Route>
//
//     //           <Route exact path={`/${blogConfig.cleanCodeProperNaming.link}`}>
//     //             <div>
//     //               <CleanCodeProperNaming/>
//     //               <Footer/>
//     //             </div>
//     //           </Route>
//
//     //           <Route exact path={`/${blogConfig.cleanCodeFunctionsAndMethods.link}`}>
//     //             <div>
//     //               <CleanCodeFunctionsAndMethods/>
//     //               <Footer/>
//     //             </div>
//     //           </Route> */}
//
//     //           <Route>
//     //             <Main/>
//     //           </Route>
//     //         </Switch>
//     //       </SwitchWrapper>
//     //     </RouterContentWrapper>
//     //   </Router>
//     // );
// }
