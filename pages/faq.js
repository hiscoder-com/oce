import Image from 'next/image'
import Faq from '../components/Faq'
import search2_reverse from '../public/search2_reverse.svg'
const faqs = [
  { key: 1, question: 'Question 1', answer: 'Answer1' },
  {
    key: 2,
    question: 'VERY very long name of Question 2 very long. Longer then others',
    answer: 'Answer2',
  },
  {
    key: 3,
    question: 'Question 3',
    answer: (
      <div className="flex flex-col gap-4">
        <p>Answer part 1 </p>
        <p>Answer part 2 </p>
      </div>
    ),
  },
  { key: 4, question: 'Question 4', answer: 'Answer4' },
  { key: 5, question: 'Question 5', answer: 'Answer5' },
]

function FaqPage() {
  return (
    <>
      <div className="flex flex-col gap-20 mb-16">
        <div className="flex flex-col items-center border-b-2 border-dashed">
          <div className="text-6xl font-bold text-primary-600 scroll-m-32">FAQ</div>
          <div className="flex self-end">
            <Image src={search2_reverse} alt="explore" width="76" height="76" />
          </div>
        </div>
      </div>
      <Faq faqs={faqs} />
    </>
  )
}

export default FaqPage
