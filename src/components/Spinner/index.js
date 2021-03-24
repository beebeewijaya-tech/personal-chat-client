import { memo } from "react";
import LoadingIcon from "../../assets/icon/LoadingIcon";

function Spinner() {
  return (
    <section className="flex justify-center">
      <LoadingIcon size="animate-spin h-10 w-10 mt-5" />
    </section>
  );
}

const SpinnerMemo = memo(Spinner);

export default SpinnerMemo;
