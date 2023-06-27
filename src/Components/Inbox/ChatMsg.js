import React from "react";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import Avatar from "../UI/Avatar";

export default function ChatMsg({ data }) {
  return (
    <div
      className={`chat-msg mb-2 d-flex align-items-end justify-content-end ${
        data.type ? "other" : "me"
      }`}
    >
      <div className="msg-content mx-1">
        <div className="msg p-3">{data.msg}</div>
        <div className="meta mt-1 d-flex align-items-center">
          <span className="date me-1">{data.date}</span>
          <span className="dot-separator me-1"></span>
          <span className="time me-1">{data.time}</span>
          {data.type !== "other" ? (
            <span className={data.sentStatus ? "sent" : "not-sent"}>
              {data.sentStatus ? (
                <HiCheckCircle size={13} />
              ) : (
                <HiExclamationCircle size={13} />
              )}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <Avatar image={data.image} />
    </div>
  );
}
