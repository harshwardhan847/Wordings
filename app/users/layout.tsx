import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const users = await getUsers();
  return (
    <Sidebar>
      <div className="h-full"><UserList items={users}/>{children}</div>
    </Sidebar>
  );
};

export default layout;
