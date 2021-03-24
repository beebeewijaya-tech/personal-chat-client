import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import moment from "moment";

import { Conversation, Spinner } from "../../components";
import { GET_CONVERSATIONS } from "../../graphql/queries";
import { Link } from "react-router-dom";

function Home() {
  const { loading, error, data } = useQuery(GET_CONVERSATIONS);

  // State
  const [user] = useState(localStorage.getItem("@user"));

  if (loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;
  return (
    <section className="bg-gray-100	flex min-h-screen items-center px-3">
      <section className="container mx-auto mb-10">
        <section className="w-full px-2 md:w-1/2 mx-auto">
          <section className="w-full">
            <section className="flex justify-center">
              <p className="text-primary text-center mb-5">
                Today {moment().format("LLL")}
              </p>
            </section>
            {data.conversations.map((item) => (
              <Link key={item.id} to={`/chat/${item.id}`}>
                <Conversation {...item} user={user} />
              </Link>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

export default Home;
