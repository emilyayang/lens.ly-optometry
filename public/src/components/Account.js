import React from "react";
import requireAuth from "./hoc/requireAuth";

const Account = () => {
  return (
    <div>
      Account
    </div>
  );
};

export default requireAuth(Account);
