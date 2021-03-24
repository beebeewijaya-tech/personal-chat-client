import { memo } from "react";
import moment from "moment";

function Conversation(props) {
  const { recipient, lastMessage, sender, user } = props;
  return (
    <section className="bg-white px-6 py-2 cursor-pointer border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300 mb-5">
      <p className="text-primary text-xl mb-2">
        {sender.id === user ? recipient.fullname : sender.fullname}
      </p>
      <p className="text-black text-md mb-1">{lastMessage?.message}</p>
      <p className="text-gray-400 text-sm">{moment().format("LLL")}</p>
    </section>
  );
}

const ConversationMemo = memo(Conversation);

export default ConversationMemo;
