import ReactJsSvg from "../assets/icons/ReactJsSvg";
import AngularJsSvg from "../assets/icons/AngularJsSvg";
import AwsSvg from "../assets/icons/AwsSvg";
import JavaSvg from "../assets/icons/JavaSvg";
import DotNetSvg from "../assets/icons/DotNetSvg";
import JavaScriptSvg from "../assets/icons/JavaScriptSvg";
import NodeJsSvg from "../assets/icons/NodeJsSvg";
import PhpSvg from "../assets/icons/PhpSvg";

interface ITechnologies {
    [key: string]: {
        technologyName: string;
        Icon: () => JSX.Element;
    }
}

const technologiesConfig: ITechnologies = {
    react: {
        technologyName: 'ReactJS',
            Icon: ReactJsSvg
    },
    angularJS: {
        technologyName: 'AngularJS',
            Icon: AngularJsSvg
    },
    aws: {
        technologyName: 'AWS',
            Icon: AwsSvg
    },
    java: {
        technologyName: 'Java',
            Icon: JavaSvg
    },
    dotNet: {
        technologyName: '.NET',
            Icon: DotNetSvg
    },
    javascript: {
        technologyName: 'JavaScript',
            Icon: JavaScriptSvg
    },
    nodeJs: {
        technologyName: 'Node.js',
            Icon: NodeJsSvg
    },
    php: {
        technologyName: 'PHP',
            Icon: PhpSvg
    },
}

export default technologiesConfig;
