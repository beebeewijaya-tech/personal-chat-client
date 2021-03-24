import { memo } from "react";
import LoadingIcon from "../../assets/icon/LoadingIcon";

function Loading() {
  return (
    <section className="bg-white bg-opacity-60 flex w-screen min-h-screen justify-center items-center absolute -top-0">
      <LoadingIcon />
    </section>
  );
}

const LoadingMemo = memo(Loading);

export default LoadingMemo;
