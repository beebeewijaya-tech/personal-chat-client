import { memo } from "react";
import moment from "moment";

function Bubble(props) {
  const { sender, message, user } = props;
  return (
    <section className={`flex ${user === sender.id && "justify-end"}`}>
      <section
        className={`w-5/6 px-6 py-2 border border-gray-200 rounded-lg mb-3 ${
          user === sender.id ? "bg-primary" : "bg-white"
        }`}
      >
        <p
          className={`text-black text-md mb-1 ${
            user === sender.id && "text-white text-right"
          }`}
        >
          {message}
        </p>
        <section className="flex justify-between">
          {user === sender.id ? (
            <>
              <p className="text-gray-300 text-sm">{moment().format("LLL")}</p>
              <p className="text-gray-300 text-sm">{sender.fullname}</p>
            </>
          ) : (
            <>
              <p className="text-gray-400 text-sm">{sender.fullname}</p>
              <p className="text-gray-400 text-sm">{moment().format("LLL")}</p>
            </>
          )}
        </section>
      </section>
    </section>
  );
}

const BubbleMemo = memo(Bubble);

export default BubbleMemo;
