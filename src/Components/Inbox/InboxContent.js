import React, { useState } from "react";
import ChatContent from "./ChatContent";
import ChatInfo from "./ChatInfo";
import ChatList from "./ChatList";

export default function InboxContent() {
  const chatListItems = [
    {
      id: "1",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Replied",
      time: "32m",
      unread: false,
      lead: true,
      appointment: true,
      deal: true,
      labels: [],
    },
    {
      id: "2",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Contacted",
      time: "4h",
      unread: false,
      lead: true,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "3",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: true,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "4",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: true,
      labels: [],
    },
    {
      id: "5",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "6",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "7",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "8",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "9",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "10",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "11",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "12",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "13",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "14",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "15",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "16",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "17",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "18",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "19",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
    {
      id: "20",
      image: "/images/account/account.jpg",
      name: "Chris Evans",
      lastMsg:
        "Hello Eric, hope you are doing great! I just wanted ask if you were available for call?",
      msgStatus: "Connected",
      time: "32m",
      unread: false,
      lead: false,
      appointment: false,
      deal: false,
      labels: [],
    },
  ];

  const [labelName, setLabelName] = useState("");
  const [labelColor, setLabelColor] = useState("#607d8b");

  const [chatList, setChatList] = useState(chatListItems);
  const [activeChat, setActiveChat] = useState({
    id: chatList[0].id,
    image: chatList[0].image,
    name: chatList[0].name,
    msgStatus: chatList[0].msgStatus,
    lead: chatList[0].lead,
    appointment: chatList[0].appointment,
    deal: chatList[0].deal,
    labels: chatList[0].labels,
  });

  const statusColor = () => {
    switch (activeChat.msgStatus) {
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

  const handleActiveChat = (newObj) => {
    setActiveChat({
      id: newObj.id,
      image: newObj.image,
      name: newObj.name,
      msgStatus: newObj.msgStatus,
      lead: newObj.lead,
      appointment: newObj.appointment,
      deal: newObj.deal,
      labels: newObj.labels,
    });
  };

  const handleActiveLead = () => {
    setActiveChat({ ...activeChat, lead: !activeChat.lead });
    let newList = [...chatList];
    newList[activeChat.id - 1].lead = !activeChat.lead;
    setChatList(newList);
  };

  const handleActiveAppointment = () => {
    setActiveChat({ ...activeChat, appointment: !activeChat.appointment });
    let newList = [...chatList];
    newList[activeChat.id - 1].appointment = !activeChat.appointment;
    setChatList(newList);
  };

  const handleActiveDeal = () => {
    setActiveChat({ ...activeChat, deal: !activeChat.deal });
    let newList = [...chatList];
    newList[activeChat.id - 1].deal = !activeChat.deal;
    setChatList(newList);
  };

  const handleLead = (index) => {
    let newList = [...chatList];
    let newLead = newList[index - 1].lead;
    newList[index - 1].lead = !newLead;
    setChatList(newList);
  };

  const handleAppointment = (index) => {
    let newList = [...chatList];
    let newAppointment = newList[index - 1].appointment;
    newList[index - 1].appointment = !newAppointment;
    setChatList(newList);
  };

  const handleDeal = (index) => {
    let newList = [...chatList];
    let newDeal = newList[index - 1].deal;
    newList[index - 1].deal = !newDeal;
    setChatList(newList);
  };

  const handleUnread = (index) => {
    let newList = [...chatList];
    let newUnread = newList[index - 1].unread;
    newList[index - 1].unread = !newUnread;
    setChatList(newList);
  };

  const addLabel = (name) => {
    let newList = [...chatList];
    newList.forEach((item) => {
      item.labels.push({ name, active: false, color: labelColor });
    });
    setChatList(newList);
  };

  const deleteLabel = (index) => {
    const newList = [...chatList];
    newList.forEach((item) => {
      item.labels.splice(index, 1);
    });
    setChatList(newList);
  };

  const handleLabelActive = (index) => {
    let newLabels = activeChat.labels;
    let labelActive = !newLabels[index].active;
    newLabels[index].active = labelActive;
    setActiveChat({ ...activeChat, labels: newLabels });
  };

  return (
    <div className="row g-0 inbox-content">
      <div className="col-md-3">
        <ChatList
          chatListItems={chatListItems}
          chatList={chatList}
          setChatList={setChatList}
          activeChat={activeChat}
          setActiveChat={handleActiveChat}
          setLead={handleLead}
          setAppointment={handleAppointment}
          setDeal={handleDeal}
          setUnread={handleUnread}
        />
      </div>
      <div className="col-md-6 main-bg">
        <ChatContent
          activeChat={activeChat}
          setActiveChat={handleActiveChat}
          setActiveLead={handleActiveLead}
          setActiveAppointment={handleActiveAppointment}
          setActiveDeal={handleActiveDeal}
          labelName={labelName}
          setLabelName={setLabelName}
          labelColor={labelColor}
          setLabelColor={setLabelColor}
          addLabel={addLabel}
          deleteLabel={deleteLabel}
          handleLabelActive={handleLabelActive}
          statusColor={statusColor}
        />
      </div>
      <div className="col-md-3">
        <ChatInfo activeChat={activeChat} statusColor={statusColor} />
      </div>
    </div>
  );
}
