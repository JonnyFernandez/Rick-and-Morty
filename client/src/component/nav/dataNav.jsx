import { RiHome4Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine } from "react-icons/ri";

export const dataNavbar = [
    {
        name: "home",
        path: "/home",
        icon: <RiHome4Line size="30" />,
    },
    {
        name: "profile",
        path: "/profile",
        icon: <RiAccountPinCircleLine size="30" />,
    },
    {
        name: "paginate",
        path: "/paginate",
        icon: <RiServerLine size="30" />,
    },
    {
        name: "random",
        path: "/random",
        icon: <RiBriefcase2Line size="30" />,
    },
    {
        name: "my chars",
        path: "/chars",
        icon: <RiChatPollLine size="30" />,
    },
    {
        name: "my fav",
        path: "/fav",
        icon: <RiChatPollLine size="30" />,
    },
    {
        name: "add",
        path: "/add-chard",
        icon: <RiChatPollLine size="30" />,
    },
];