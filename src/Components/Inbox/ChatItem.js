import React from "react";
import { Dropdown } from "react-bootstrap";
import {
  MdOutlineMarkEmailUnread,
  MdOutlineRefresh,
  MdOutlinePersonSearch,
} from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { BsHandThumbsUp } from "react-icons/bs";
import Avatar from "../UI/Avatar";

export default function ChatItem({
  data,
  activeChat,
  setActiveChat,
  setLead,
  setAppointment,
  setDeal,
  setUnread,
}) {
  const selectChat = (e) => {
    if (e.target.classList.contains("menu-element")) {
      e.stopPropagation();
    } else {
      setActiveChat({
        id: data.id,
        image: data.image,
        name: data.name,
        msgStatus: data.msgStatus,
        lead: data.lead,
        appointment: data.appointment,
        deal: data.deal,
        labels: data.labels,
      });
      if (data.unread) {
        setUnread(data.id);
      }
    }
  };

  const statusColor = () => {
    switch (data.msgStatus) {
      case "Contacted":
        return "blue-color";
      case "Connected":
        return "orange-color";
      case "Replied":
        return "purple-color";
      default:
        break;
    }
  };

  const selectLabelColor = (color) => {
    switch (color) {
      case "#f44336":
        return "red-color";
      case "#e91e63":
        return "pink-color";
      case "#9c27b0":
        return "light-purple-color";
      case "#673ab7":
        return "purple-color";
      case "#3f51b5":
        return "dark-blue-color";
      case "#009688":
        return "sea-green-color";
      case "#795548":
        return "brown-color";
      case "#607d8b":
        return "grey-color";
      default:
        break;
    }
  };

  return (
    <div
      className={
        "chat-item-wrapper " +
        (data.unread ? "unread " : "") +
        (activeChat.id === data.id ? "active " : "")
      }
      onClick={selectChat}
    >
      <div className="chat-item d-flex">
        <Avatar image={data.image} />
        <div className="item-content ms-3 flex-grow-1">
          <p className="name fw-600 mb-0">{data.name}</p>
          <p className="last-msg mb-1">{data.lastMsg}</p>
          <div className="item-status d-flex justify-content-end">
            <div className="status-right">
              <span className={"msg-status " + statusColor()}>
                {data.msgStatus}
              </span>
              <span className="dot-separator"></span>
              <span className="time">{data.time}</span>
            </div>
          </div>
        </div>
        <Dropdown className="chat-item-menu menu-element">
          <Dropdown.Toggle variant="action" className="menu-element">
            <BiDotsVerticalRounded size={18} className="menu-element" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="user-menu shadow-sm menu-element">
            <Dropdown.Item
              className="link d-flex menu-element"
              onClick={() => setUnread(data.id)}
            >
              <MdOutlineMarkEmailUnread size={18} className={"menu-element"} />
              {data.unread ? (
                <p className="menu-element">Mark as Read</p>
              ) : (
                <p className="menu-element">Mark as Unread</p>
              )}
            </Dropdown.Item>
            <Dropdown.Item className="link d-flex menu-element">
              <MdOutlineRefresh size={18} className={"menu-element"} />
              <p className="menu-element">Refresh Dialog</p>
            </Dropdown.Item>
            <Dropdown.Item
              className="link d-flex menu-element"
              onClick={() => setLead(data.id)}
            >
              <MdOutlinePersonSearch size={18} className={"menu-element"} />
              {data.lead ? (
                <p className="menu-element">Remove from Lead</p>
              ) : (
                <p className="menu-element">Add to Lead</p>
              )}
            </Dropdown.Item>
            <Dropdown.Item
              className="link d-flex menu-element"
              onClick={() => setAppointment(data.id)}
            >
              <IoCalendarOutline size={18} className={"menu-element"} />
              {data.appointment ? (
                <p className="menu-element">Remove from Appointment</p>
              ) : (
                <p className="menu-element">Add to Appointment</p>
              )}
            </Dropdown.Item>
            <Dropdown.Item
              className="link d-flex menu-element"
              onClick={() => setDeal(data.id)}
            >
              <BsHandThumbsUp size={18} className={"menu-element"} />
              {data.deal ? (
                <p className="menu-element">Remove from Deal</p>
              ) : (
                <p className="menu-element">Add to Deal</p>
              )}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="labels d-flex flex-wrap align-items-center">
        {data.lead && <span className="green-color">Lead</span>}
        {data.appointment && (
          <span className="light-blue-color">Appointment</span>
        )}
        {data.deal && <span className="yellow-color">Deal</span>}
        {data.labels.map((item, index) => {
          return item.active ? (
            <span
              key={index}
              className={item.active && selectLabelColor(item.color)}
            >
              {item.active && item.name}
            </span>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}
