import React from "react";
import FullWidthLayout from "../Layouts/FullWidthLayout";
import InboxContent from "../Components/Inbox/InboxContent";

export default function Inbox() {
  return (
    <FullWidthLayout title={"Inbox"}>
      <InboxContent />
    </FullWidthLayout>
  );
}
