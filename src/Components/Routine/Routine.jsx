import React from "react";

const RoutineTable = () => {
  const routine = [
    {
      time: "৬:০০ - ৬:১৫",
      task: "ফজরের নামাজ আদায় ও দোয়া।",
      category: "সকাল",
    },
    {
      time: "৬:৩০ - ৭:০০",
      task: "হালকা ব্যায়াম এবং নিজের জন্য মোটিভেশনাল ভিডিও দেখা।",
      category: "সকাল",
    },
    {
      time: "৭:১৫ - ১০:১৫",
      task: "Next.js এবং DSA চর্চা।",
      category: "কোডিং",
    },
    {
      time: "১০:১৫ - ১০:৩০",
      task: "বিরতি: হালকা নাশতা বা পরিবারের সাথে সময় কাটানো।",
      category: "বিরতি",
    },
    {
      time: "১০:৩০ - ১২:৩০",
      task: "React এবং Tailwind CSS প্রজেক্টে কাজ।",
      category: "কোডিং",
    },
    {
      time: "১২:৩০ - ১:০০",
      task: "যোহরের নামাজ।",
      category: "দুপুর",
    },
    {
      time: "১:০০ - ১:৩০",
      task: "দুপুরের খাবার।",
      category: "দুপুর",
    },
    {
      time: "২:০০ - ৪:০০",
      task: "নতুন JavaScript প্রজেক্টে চর্চা।",
      category: "কোডিং",
    },
    {
      time: "৪:১৫ - ৫:৩০",
      task: "আসরের নামাজ এবং প্রোগ্রামিং রিভিউ।",
      category: "বিকাল",
    },
    {
      time: "৫:৩০ - ৬:০০",
      task: "মাগরিবের নামাজ এবং পরিবারের সাথে সময়।",
      category: "সন্ধ্যা",
    },
    {
      time: "৬:৩০ - ৮:০০",
      task: "DSA এবং প্রজেক্ট ডিবাগিং।",
      category: "কোডিং",
    },
    {
      time: "৮:০০ - ৮:৩০",
      task: "রাতের খাবার।",
      category: "রাত",
    },
    {
      time: "৮:৩০ - ১১:০০",
      task: "Tic Tac Toe/মিনি প্রজেক্ট চর্চা।",
      category: "কোডিং",
    },
    {
      time: "১১:০০ - ১১:৩০",
      task: "পরবর্তী দিনের জন্য প্ল্যানিং।",
      category: "রাত",
    },
    {
      time: "১১:৩০ - ১২:০০",
      task: "ঘুম।",
      category: "রাত",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">২০ দিনের প্রোগ্রামিং রুটিন</h1>
      <p className="text-center mb-6 text-gray-700">
        "কঠোর পরিশ্রমই সাফল্যের চাবিকাঠি। প্রতিদিন একটু একটু করে নিজেকে উন্নত করো।"
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">সময়</th>
              <th className="border border-gray-300 px-4 py-2">কাজ</th>
              <th className="border border-gray-300 px-4 py-2">বিভাগ</th>
            </tr>
          </thead>
          <tbody>
            {routine.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } text-gray-800`}
              >
                <td className="border border-gray-300 px-4 py-2">{item.time}</td>
                <td className="border border-gray-300 px-4 py-2">{item.task}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoutineTable;
