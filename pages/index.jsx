import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};
export default Home;
