import React from "react";

const RoutineTable = () => {
  const routine = [
    {
      time: "৬:০০ - ৬:১৫",
      task: "ফজরের নামাজ আদায় ও দোয়া।",
      category: "সকাল",
    },
    {
      time: "৬:১৫ - ৬:৩০",
      task: "হালকা ব্যায়াম বা স্ট্রেচিং।",
      category: "সকাল",
    },
    {
      time: "৬:৩০ - :৬:৪৫",
      task: "কুরআন তিলাওয়াত ও অর্থ বোঝা।",
      category: "সকাল",
    },
    {
      time: "৭:০০ - ৯:৩০",
      task: "কোডিং সেশন #১: নতুন ফিচার তৈরি বা বাগ ফিক্স করা।",
      category: "কোডিং",
    },
    {
      time: "৯:৩০ - ১০:০০",
      task: "বিরতি: হালকা খাবার বা পরিবারের সাথে সময় কাটানো।",
      category: "বিরতি",
    },
    {
      time: "১০:০০ - ১২:৩০",
      task: "কোডিং সেশন #২: নতুন স্কিল শেখা এবং প্রজেক্ট ডেভেলপমেন্ট।",
      category: "কোডিং",
    },
    {
      time: "০১:০০ - ১:৩০",
      task: "যোহরের নামাজ।",
      category: "দুপুর",
    },
    {
      time: "১:৩০ - ২:০০",
      task: "দুপুরের খাবার।",
      category: "দুপুর",
    },
    {
      time: "২:০০ - ৩:০০",
      task: "হালকা বিশ্রাম।",
      category: "দুপুর",
    },
    {
      time: "৩:০০ - ৫:০০",
      task: "কোডিং সেশন #৩: জটিল সমস্যার সমাধান। আসরের নামাজ",
      category: "কোডিং",
    },
    {
      time: "৫:১৫ - ৫:৩০",
      task: "মাগরিবের নামাজ।",
      category: "সন্ধ্যা",
    },
    {
      time: "৫:৩০ - ৬:০০",
      task: "পরিবারের সাথে সময়।",
      category: "সন্ধ্যা",
    },
    {
      time: "৭:০০ - ৭:৩০",
      task: "ইশার নামাজ।",
      category: "সন্ধ্যা",
    },
    {
      time: "৭:৪৫ - ৮:৩০",
      task: "কোডিং সেশন #৪: ডকুমেন্টেশন এবং গিট আপডেট।",
      category: "কোডিং",
    },
    {
      time: "৮:৩০ - ৯:০০",
      task: "রাতের খাবার।",
      category: "রাত",
    },
    {
      time: "৯:০০ - ১০:০০",
      task: "নতুন কিছু শেখা।",
      category: "রাত",
    },
    {
      time: "১০:০০ - ১১:০০",
      task: "নিজের পছন্দের কাজ।",
      category: "রাত",
    },
    {
      time: "১১:০০ - ১১:৩০",
      task: "ঘুমের প্রস্তুতি।",
      category: "রাত",
    },
    {
      time: "১১:৩০ - ১২:০০",
      task: "ঘুমিয়ে যাওয়া।",
      category: "রাত",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">দৈনিক রুটিন</h1>
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
