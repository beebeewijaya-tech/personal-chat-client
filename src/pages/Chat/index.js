import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Bubble, Spinner } from "../../components";
import { SEND_MESSAGE } from "../../graphql/mutations";
import { GET_CHATS_BY_CONVERSATION } from "../../graphql/queries";
import { SUBSCRIBE_TO_MESSAGE } from "../../graphql/subscriptions";

const { useParams } = require("react-router");

function Chat() {
  // Params
  const params = useParams();

  // Queries
  const { loading, error, data, subscribeToMore } = useQuery(
    GET_CHATS_BY_CONVERSATION,
    {
      variables: { conversationId: params.id },
    }
  );

  // Mutations
  const [sendMessageMutation] = useMutation(SEND_MESSAGE);

  // State
  const [user] = useState(localStorage.getItem("@user"));
  const [message, setMessage] = useState("");

  // Action
  const sendMessage = (e) => {
    if (e.key === "Enter") {
      sendMessageMutation({
        variables: {
          conversationId: params.id,
          message: message,
        },
      });
      setMessage("");
      e.preventDefault();
    }
  };

  // Lifecycle
  useEffect(() => {
    subscribeToMore({
      document: SUBSCRIBE_TO_MESSAGE,
      variables: {
        conversationId: params.id,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newChat = subscriptionData.data.chat;
        return {
          ...prev,
          chats: [newChat, ...prev.chats],
        };
      },
    });
  }, []);

  // Rendering
  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-gray-100	flex min-h-screen items-center px-3">
      <section className="container mx-auto mb-10">
        <section className="w-full px-2 lg:w-1/2 mx-auto">
          <section className="w-full mb-5 sticky top-0">
            <textarea
              className="bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 w-full mt-5 py-2 px-4 rounded shadow-lg"
              placeholder="Enter your chat"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={sendMessage}
            />
          </section>
          <section className="w-full">
            {data.chats.map((item) => (
              <Bubble key={item.id} {...item} user={user} />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

export default Chat;
