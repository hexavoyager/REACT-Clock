import { useEffect, useState } from "react";
import moment from "moment";

const Clock = (props) => {
  const [now, setNow] = useState(new Date());

  const hours = moment(now).format("HH");
  const minutes = moment(now).format("mm");
  const seconds = moment(now).format("ss");

  useEffect(() => {
    // code that gets executed before the code bit
    const idTimer = setTimeout(() => {
      setNow(new Date());
      console.log("tic");
    }, 1_000);

    return () => {
      // code that gets executed afterwards
      clearTimeout(idTimer);
    };
  });

  return (
    <div>
      {hours} : {minutes} : {seconds}
    </div>
  );
};

export default Clock;
