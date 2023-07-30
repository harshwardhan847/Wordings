import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (consversationId: string) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.email) {
      return null;
    }
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: consversationId,
      },
      include: {
        users: true,
      },
    });
    return conversation;
  } catch (e) {
    return null;
  }
};

export default getConversationById;
