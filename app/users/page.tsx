
import EmptyState from "../components/EmptyState";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
     <EmptyState/>
    </div>
  );
};

export default page;
