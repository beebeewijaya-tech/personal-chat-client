import { memo } from "react";
import { CloseIcon, CheckIcon } from "../../assets/icon";

function Notify(props) {
  const { type, title, body } = props;
  return (
    <section className="flex absolute top-5 right-5">
      <section className="m-auto">
        <section className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
          <section className="flex flex-row">
            <section className="px-2">
              {type === "success" ? <CheckIcon /> : <CloseIcon />}
            </section>
            <section className="ml-2 mr-6">
              <span className="font-semibold">{title}</span>
              <span className="block text-gray-500">{body}</span>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

const NotifyMemo = memo(Notify);

export default NotifyMemo;
