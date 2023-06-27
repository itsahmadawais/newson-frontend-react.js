import React, { useState } from "react";
import Searchbar from "../Inputs/Searchbar";
import { Dropdown, Form, Button } from "react-bootstrap";
import { FiFilter } from "react-icons/fi";
import ChatItem from "./ChatItem";
import { useEffect } from "react";
import Loader from "../UI/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

var offset;

export default function ChatList({
  chatListItems,
  chatList,
  setChatList,
  activeChat,
  setActiveChat,
  setLead,
  setAppointment,
  setDeal,
  setUnread,
}) {
  const [activeListType, setActiveListType] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const campaigns = [
    {
      id: "1",
      title: "Camp Title 1",
    },
    {
      id: "2",
      title: "Camp Title 2",
    },
    {
      id: "3",
      title: "Camp Title 3",
    },
  ];

  const mylabels = activeChat.labels;
  const chatItemsPerPage = 6;

  const loadChatList = () => {
    offset = offset + chatItemsPerPage;
    setTimeout(() => {
      let newList = [...chatListItems];
      let filtered = newList.slice(0, offset);
      setChatList(filtered);
    }, 1500);
  };

  useEffect(() => {
    setChatList(chatList.slice(0, 6));
    offset = 6;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);

  return (
    <div className="chat-list primary-light-bg p-3 me-2">
      <div className="d-flex align-items-center justify-content-between">
        <Searchbar />
        <Dropdown autoClose="outside" className="chat-filter">
          <Dropdown.Toggle variant="primary">
            <FiFilter size={18} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="shadow-sm p-3 custom-scrollbar" align="end">
            <p className="section-heading">Campaigns</p>
            {campaigns.map((item) => {
              return (
                <Form.Check
                  key={item.id}
                  type="checkbox"
                  name={"by-camps-" + item.id}
                  label={item.title}
                />
              );
            })}
            <p className="section-heading mt-3">Statistics</p>
            <Form.Check
              type="checkbox"
              name="by-stats-1"
              label="Email Open Rate"
            />
            <Form.Check type="checkbox" name="by-stats-2" label="Bounce Rate" />
            <p className="section-heading mt-3">Filters</p>
            <Form.Check
              type="checkbox"
              name="by-filters-1"
              label="Unread Messages"
            />
            <Form.Check
              type="checkbox"
              name="by-filters-2"
              label="Started within 7 Days"
            />
            <Form.Check
              type="checkbox"
              name="by-filters-3"
              label="No Reply within 7 Days"
            />
            <Form.Check
              type="checkbox"
              name="by-filters-4"
              label="Only Paused Campaigns"
            />
            <Form.Check
              type="checkbox"
              name="by-filters-5"
              label="Only with notes"
            />
            <p className="section-heading mt-3">Campaign Status</p>
            <Form.Check
              type="checkbox"
              name="by-campstatus-1"
              label="Got Reply"
            />
            <Form.Check type="checkbox" name="by-campstatus-2" label="Lead" />
            <Form.Check
              type="checkbox"
              name="by-campstatus-3"
              label="Customer"
            />
            <p className="section-heading mt-3">Labels</p>
            {mylabels.map((item, index) => {
              return (
                <Form.Check
                  key={index}
                  type="checkbox"
                  name={"by-labels-" + index}
                  label={item.name}
                />
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex flex-wrap my-3">
        <Button
          variant="tab"
          onClick={() => setActiveListType(1)}
          className={"me-1 mb-1 " + (activeListType === 1 ? "active" : "")}
        >
          All
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveListType(2)}
          className={"me-1 mb-1 " + (activeListType === 2 ? "active" : "")}
        >
          Unread
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveListType(3)}
          className={"me-1 mb-1 " + (activeListType === 3 ? "active" : "")}
        >
          Replies
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveListType(4)}
          className={"me-1 mb-1 " + (activeListType === 4 ? "active" : "")}
        >
          Lead
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveListType(5)}
          className={"me-1 mb-1 " + (activeListType === 5 ? "active" : "")}
        >
          Appointment
        </Button>
        <Button
          variant="tab"
          onClick={() => setActiveListType(6)}
          className={"me-1 mb-1 " + (activeListType === 6 ? "active" : "")}
        >
          Deal
        </Button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="chat-list-items custom-scrollbar mt-2 d-flex justify-content-center"
          id="chat-list-items-loaded"
        >
          {activeListType === 1 && (
            <InfiniteScroll
              dataLength={chatList.length}
              next={loadChatList}
              hasMore={true}
              loader={<Loader />}
              scrollThreshold={1}
              className="infinite-scroll-wrap"
              scrollableTarget={"chat-list-items-loaded"}
            >
              {chatList.map((item) => {
                return (
                  <ChatItem
                    key={item.id}
                    data={item}
                    activeChat={activeChat}
                    setActiveChat={setActiveChat}
                    setLead={setLead}
                    setAppointment={setAppointment}
                    setDeal={setDeal}
                    setUnread={setUnread}
                  />
                );
              })}
            </InfiniteScroll>
          )}
          {activeListType === 2 && (
            <div>
              {chatList
                .filter((item) => item.unread)
                .map((filteredItem) => {
                  return (
                    <ChatItem
                      key={filteredItem.id}
                      data={filteredItem}
                      activeChat={activeChat}
                      setActiveChat={setActiveChat}
                      setLead={setLead}
                      setAppointment={setAppointment}
                      setDeal={setDeal}
                      setUnread={setUnread}
                    />
                  );
                })}
            </div>
          )}
          {activeListType === 3 && (
            <div>
              {chatList
                .filter((item) => item.msgStatus === "Replied")
                .map((filteredItem) => {
                  return (
                    <ChatItem
                      key={filteredItem.id}
                      data={filteredItem}
                      activeChat={activeChat}
                      setActiveChat={setActiveChat}
                      setLead={setLead}
                      setAppointment={setAppointment}
                      setDeal={setDeal}
                      setUnread={setUnread}
                    />
                  );
                })}
            </div>
          )}
          {activeListType === 4 && (
            <div>
              {chatList
                .filter((item) => item.lead)
                .map((filteredItem) => {
                  return (
                    <ChatItem
                      key={filteredItem.id}
                      data={filteredItem}
                      activeChat={activeChat}
                      setActiveChat={setActiveChat}
                      setLead={setLead}
                      setAppointment={setAppointment}
                      setDeal={setDeal}
                      setUnread={setUnread}
                    />
                  );
                })}
            </div>
          )}
          {activeListType === 5 && (
            <div>
              {chatList
                .filter((item) => item.appointment)
                .map((filteredItem) => {
                  return (
                    <ChatItem
                      key={filteredItem.id}
                      data={filteredItem}
                      activeChat={activeChat}
                      setActiveChat={setActiveChat}
                      setLead={setLead}
                      setAppointment={setAppointment}
                      setDeal={setDeal}
                      setUnread={setUnread}
                    />
                  );
                })}
            </div>
          )}
          {activeListType === 6 && (
            <div>
              {chatList
                .filter((item) => item.deal)
                .map((filteredItem) => {
                  return (
                    <ChatItem
                      key={filteredItem.id}
                      data={filteredItem}
                      activeChat={activeChat}
                      setActiveChat={setActiveChat}
                      setLead={setLead}
                      setAppointment={setAppointment}
                      setDeal={setDeal}
                      setUnread={setUnread}
                    />
                  );
                })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
