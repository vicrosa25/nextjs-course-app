import React from "react";
import { useRouter } from "next/router";

const NoteDetails = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>NOTE DETAILS {id}</div>;
};

export default NoteDetails;
