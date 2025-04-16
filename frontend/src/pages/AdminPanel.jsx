import React, { useState } from "react";
import { UserIcon, ShoppingCartIcon, GiftIcon, StarIcon } from "@heroicons/react/24/outline";
import Avatar from "react-avatar";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy Data
const contacts = [
  { name: "John Doe", phone: "+91 9876543210", status: "Pending", jobProfile: "Caretaker" },
  { name: "Ravi Kumar", phone: "+91 9900011222", status: "Active", jobProfile: "Plumber" },
  { name: "Priya Sharma", phone: "+91 9456781234", status: "Completed", jobProfile: "Carpenter" },
  { name: "Neha Gupta", phone: "+91 9998765432", status: "Pending", jobProfile: "Electrician" },
  { name: "Amit Singh", phone: "+91 9922334455", status: "Completed", jobProfile: "Decorator" },
  { name: "Karan Patel", phone: "+91 9012345678", status: "Active", jobProfile: "Maid" },
  { name: "Anjali Mehta", phone: "+91 9123456780", status: "Pending", jobProfile: "Security Guard" },
  { name: "Mohit Verma", phone: "+91 9234567890", status: "Active", jobProfile: "Caretaker" },
  { name: "Pooja Rao", phone: "+91 9345678901", status: "Completed", jobProfile: "Plumber" },
  { name: "Deepak Joshi", phone: "+91 9456789012", status: "Pending", jobProfile: "Carpenter" },
];

const messagesData = {
  "+91 9876543210": [{ from: "John", text: "Hello! How are you?" }, { from: "Me", text: "I'm doing great, thanks!" }],
  "+91 9900011222": [{ from: "Ravi", text: "Hey! Any updates?" }, { from: "Me", text: "It's almost ready." }],
  "+91 9456781234": [{ from: "Priya", text: "Morning! How’s it going?" }, { from: "Me", text: "All set for demo!" }],
  "+91 9998765432": [{ from: "Neha", text: "Available to discuss?" }, { from: "Me", text: "Yes, one moment." }],
  "+91 9922334455": [{ from: "Amit", text: "Catch up soon?" }, { from: "Me", text: "Sure, tomorrow!" }],
};

const notificationsData = [
  { title: "Service Update", message: "Service updated successfully.", date: "2025-04-10" },
  { title: "New Feature Added", message: "We added a new feature!", date: "2025-04-12" },
  { title: "Maintenance", message: "Scheduled maintenance on April 15.", date: "2025-04-14" },
  { title: "Security Alert", message: "Potential threat detected.", date: "2025-04-16" },
  { title: "New Request", message: "You have a new service request.", date: "2025-04-17" },
];

const StatCard = ({ color, title, value, icon: Icon }) => (
  <div className={`flex-1 min-w-[300px] h-[180px] p-6 rounded-xl shadow-xl text-white bg-gradient-to-br ${color} relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105`}>
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Icon className="w-8 h-8 opacity-70" />
    </div>
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-sm opacity-80 mt-2">Last Month</div>
  </div>
);

const Badge = ({ status }) => {
  const statusMap = {
    Pending: "bg-yellow-500",
    Active: "bg-blue-500",
    Completed: "bg-green-500",
  };
  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${statusMap[status] || "bg-gray-500"}`}>
      {status}
    </span>
  );
};

const OrderCard = ({ name, phone, age, jobProfile, earnings, commission, avatar, status, onClick }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <Avatar name={name} round size="40" src={avatar} />
      <Badge status={status} />
    </div>
    <h3 className="font-semibold text-xl">{name}</h3>
    <p className="text-sm text-gray-300">{phone}</p>
    <p className="text-sm text-gray-400">Age: {age}</p>
    <p className="text-sm text-gray-400 mb-1">Job: {jobProfile}</p>
    <button onClick={onClick} className="mt-2 w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-300">
      Get Job Profile
    </button>
  </div>
);

const AdminPanel = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [showJobProfile, setShowJobProfile] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleSendMessage = () => {
    if (selectedPhone && newMessage.trim() !== "") {
      messagesData[selectedPhone].push({ from: "Me", text: newMessage });
      setNewMessage("");
    }
  };

  const handleJobProfileClick = (provider) => {
    setSelectedProvider(provider);
    setShowJobProfile(true);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white">
      <aside className="w-[250px] bg-[#1e293b] p-6 space-y-6">
        <div className="text-2xl font-bold">At The Doorz</div>
        <nav className="space-y-4 text-sm">
          <button onClick={() => { setIsMessagesOpen(false); setIsNotificationsOpen(false); setIsOrdersOpen(false); }} className="block hover:text-indigo-400">Dashboard</button>
          <button onClick={() => { setIsOrdersOpen(true); setIsMessagesOpen(false); setIsNotificationsOpen(false); }} className="block hover:text-indigo-400">Orders and Services</button>
          <button onClick={() => { setIsMessagesOpen(true); setIsNotificationsOpen(false); setIsOrdersOpen(false); setSelectedPhone(null); }} className="block hover:text-indigo-400">Messages</button>
          <button onClick={() => { setIsNotificationsOpen(true); setIsMessagesOpen(false); setIsOrdersOpen(false); }} className="block hover:text-indigo-400">Notifications</button>
        </nav>
      </aside>

      <main className="flex-1 p-8 space-y-8">
        {!isMessagesOpen && !isNotificationsOpen && !isOrdersOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fadeIn">
            <StatCard color="from-green-400 to-green-600" title="Total Users" value="277" icon={UserIcon} />
            <StatCard color="from-pink-400 to-pink-600" title="Total Orders" value="120" icon={ShoppingCartIcon} />
            <StatCard color="from-blue-400 to-blue-600" title="Total Revenue" value="₹1,500,000" icon={GiftIcon} />
            <StatCard color="from-yellow-400 to-yellow-600" title="Total Sales" value="200" icon={StarIcon} />
          </div>
        )}

        {isMessagesOpen && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-xl font-semibold mb-2">Contacts</h3>
              {Object.keys(messagesData).map((phone, idx) => (
                <button
                  key={phone}
                  onClick={() => setSelectedPhone(phone)}
                  className="block w-full text-left px-4 py-2 bg-[#334155] hover:bg-[#475569] rounded-lg"
                >
                  {contacts.find((c) => c.phone === phone)?.name || `Contact ${idx + 1}`}
                </button>
              ))}
            </div>

            <div className="md:col-span-2 space-y-4">
              {selectedPhone ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">Chat with {contacts.find((c) => c.phone === selectedPhone)?.name}</h3>
                  <div className="bg-[#1e293b] p-4 rounded-lg h-80 overflow-y-auto space-y-2">
                    {messagesData[selectedPhone].map((msg, idx) => (
                      <div key={idx} className={`p-2 rounded-lg ${msg.from === "Me" ? "bg-indigo-500 text-right ml-auto w-max" : "bg-gray-600 w-max"}`}>
                        <span>{msg.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-[#334155] text-white focus:outline-none"
                      placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage} className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">Send</button>
                  </div>
                </>
              ) : (
                <p className="text-gray-400">Select a contact to start chatting.</p>
              )}
            </div>
          </div>
        )}

        {isNotificationsOpen && (
          <div className="animate-fadeIn space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
            {notificationsData.map((note, idx) => (
              <div key={idx} className="bg-[#1e293b] p-4 rounded-lg shadow-md hover:bg-[#334155] transition-all duration-200">
                <h4 className="text-lg font-semibold">{note.title}</h4>
                <p className="text-sm text-gray-400">{note.message}</p>
                <p className="text-xs text-gray-500 mt-1">{note.date}</p>
              </div>
            ))}
          </div>
        )}

        {isOrdersOpen && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-semibold text-white mb-4">Orders and Services Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <StatCard color="from-indigo-400 to-indigo-600" title="New Orders" value="75" icon={ShoppingCartIcon} />
              <StatCard color="from-green-400 to-green-600" title="Delivered Orders" value="40" icon={GiftIcon} />
              <StatCard color="from-red-400 to-red-600" title="Cancelled Orders" value="5" icon={StarIcon} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map((contact, index) => (
                <OrderCard
                  key={index}
                  name={contact.name}
                  phone={contact.phone}
                  age={25 + index}
                  jobProfile={contact.jobProfile}
                  earnings="₹ 1,00,000"
                  commission="₹ 10,000"
                  avatar={`https://i.pravatar.cc/150?img=${index + 1}`}
                  status={contact.status}
                  onClick={() => handleJobProfileClick(contact)}
                />
              ))}
            </div>
            {showJobProfile && selectedProvider && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white text-black p-6 rounded-lg shadow-xl w-96">
                  <h3 className="text-xl font-bold mb-4">Job Profile</h3>
                  <p><strong>Name:</strong> {selectedProvider.name}</p>
                  <p><strong>Phone:</strong> {selectedProvider.phone}</p>
                  <p><strong>Age:</strong> {25 + contacts.indexOf(selectedProvider)}</p>
                  <p><strong>Job:</strong>{selectedProvider.jobProfile}</p>
                  <p><strong>Earnings:</strong> ₹ 1,00,000</p>
                  <p><strong>Commission:</strong> ₹ 10,000</p>
                  <p><strong>Status:</strong> <Badge status={selectedProvider.status} /></p>
                  <button
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    onClick={() => setShowJobProfile(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
