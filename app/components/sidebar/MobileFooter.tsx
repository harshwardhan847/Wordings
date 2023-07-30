"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

type Props = {};

const MobileFooter = (props: Props) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  if (isOpen) {
    return null;
  }

  return <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
    {routes.map((item)=>{
        return <MobileItem key={item.label}
        href={item.href}
        icon={item.icon}
        active={item.active}
        onClick={item.onClick}/>
    })}
  </div>;
};

export default MobileFooter;
