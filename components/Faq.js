import React, { useState } from 'react'

function Faq({ faqs }) {
  return (
    <>
      {faqs.map((el) => (
        <FaqItem index={el.key} key={el.key} answer={el.answer} question={el.question} />
      ))}
    </>
  )
}

export default Faq

function FaqItem({ index, answer, question }) {
  const [open, setOpen] = useState(false)
  return (
    <div data-accordion="collapse" onClick={() => setOpen((prev) => !prev)}>
      <h2>
        <button
          type="button"
          className="lg:text-4xl md:text-2xl flex items-center justify-between w-full p-5 font-medium text-left text-primary-600 rounded-xl focus:ring-1 focus:ring-gray-200 hover:bg-primary-100"
          aria-expanded="true"
        >
          <span>
            {index + '. '}
            {question}
          </span>

          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="md:w-10 md:h-10 w-7 h-7 shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="md:w-10 md:h-10 w-7 h-7 shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          )}
        </button>
      </h2>
      <div className={!open ? 'hidden' : ''}>
        <div className="p-5 lg:text-xl">{answer}</div>
      </div>
    </div>
  )
}
