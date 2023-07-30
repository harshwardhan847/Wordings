import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";

const useOtherUser = (
  conversation: FullConversationType | { users: User[] }
  //   session
  // ,session:any
) => {
  const session = useSession();
  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;
    const otherUser = conversation.users.filter((user) => {
      return user.email !== currentUserEmail;
    });
    return otherUser[0];
  }, [session?.data?.user?.email, conversation.users]);
  return otherUser;
};

export default useOtherUser;
