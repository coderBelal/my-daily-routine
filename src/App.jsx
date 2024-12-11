 import React from "react";

const App = () => {
  const routine = [
    {
      time: "৬:০০ - ৬:১৫",
      task: "ফজরের নামাজ আদায় ও দোয়া।",
      category: "সকাল",
    },
    // {
    //   time: "৬:৩০ - ৭:০০",
    //   task: "হালকা ব্যায়াম এবং নিজের জন্য মোটিভেশনাল ভিডিও দেখা।",
    //   category: "সকাল",
    // },
    {
      time: "৭:০০ - ০৯:০০",
      task: "Next JS Project",
      category: "কোডিং",
    },
    {
      time: "১০:১৫ - ১০:৩০",
      task: "বিরতি: হালকা নাশতা বা পরিবারের সাথে সময় কাটানো।",
      category: "বিরতি",
    },
    {
      time: "১১:০০ - ১২:৪৫",
      task: "Learning English",
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
      task: "Pushpa Movie",
      category: "watch",
    },
    {
      time: "৪:০০ - ৫:৩০",
      task: "আসরের নামাজ এবং প্রোগ্রামিং রিভিউ।",
      category: "বিকাল",
    },
    {
      time: "৫:৩০ - ৬:০০",
      task: "মাগরিবের নামাজ এবং  Intern Work",
      category: "সন্ধ্যা",
    },
    {
      time: "৬:৩০ - ৮:০০",
      task: " Intern Work",
      category: "কোডিং",
    },
    {
      time: "৮:০০ - ৮:৩০",
      task: "রাতের খাবার।",
      category: "রাত",
    },
    {
      time: "৮:৩০ - ১১:০০",
      task: "Intern Work",
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
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
    আমার প্রতিদিনের রুটিন
        </h1>
        <p className="text-lg text-gray-600 italic mb-2">
          "যেটাই করি প্রতিদিনের নামাজ কালাম  ঠিক রাখতে হবে"
        </p>
        <p className="text-lg text-gray-600 italic mb-2">
          "কঠোর পরিশ্রমই সাফল্যের চাবিকাঠি। প্রতিদিন একটু একটু করে নিজেকে উন্নত করো।"
        </p>
        <p className="text-lg text-gray-600 italic mb-2">
          "ভালো প্রোগ্রামার না হলে তাহাকে পাবো না।"
        </p>
        <p className="text-lg text-gray-600 italic mb-2">
          "বেশি বেশি প্র্যাকটিস করতে হবে, প্র্যাকটিস না করলে ভালো প্রোগ্রামার হওয়া যাবে না।"
        </p>
        <p className="text-lg text-gray-600 italic mb-2">
          "পরবর্তী বছর বাহিরে জব নিতেই হবে।"
        </p>
        <p className="text-lg text-gray-600 italic mb-2">
          "জীবনে জেদি হতে হবে, যেইটা করব মানে করব, আজকেই এখনই, নয়তো কিছু করা যাবে না।"
        </p>
        <p className="text-lg text-gray-600 italic">
          "Human brain can do anything."
        </p>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse bg-white rounded-md overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border px-6 py-3 text-left">সময়</th>
              <th className="border px-6 py-3 text-left">কাজ</th>
              <th className="border px-6 py-3 text-left">বিভাগ</th>
            </tr>
          </thead>
          <tbody>
            {routine.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                } hover:bg-blue-100 transition duration-300`}
              >
                <td className="border px-6 py-3 text-gray-700 font-medium">
                  {item.time}
                </td>
                <td className="border px-6 py-3 text-gray-600">
                  {item.task}
                </td>
                <td className="border px-6 py-3 text-gray-600">
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

export default App;
