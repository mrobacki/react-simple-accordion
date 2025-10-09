import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          faq={faq}
          key={i}
          itemKey={i + 1}
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
        />
      ))}
    </div>
  );
}
function AccordionItem({ faq, itemKey, currentOpen, onOpen }) {
  const formattedItemKey = String(itemKey).padStart(2, "0");
  const isOpen = itemKey === currentOpen;

  function handleToggle() {
    isOpen ? onOpen(null) : onOpen(itemKey);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <span className="number">{formattedItemKey}</span>
      <span className="title">{faq.title}</span>
      <span className="icon">{!isOpen ? "+" : "-"}</span>
      {isOpen && <div className="content-box">{faq.text}</div>}
    </div>
  );
}

export default App;
