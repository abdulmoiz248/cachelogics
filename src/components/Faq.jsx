import {
 
  ArrowDown,
 
} from "lucide-react"
import {
  motion,
  AnimatePresence,
} from "framer-motion"
export const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <motion.div
        className="border-b border-gray-200 py-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="flex justify-between items-center w-full text-left font-medium text-lg" onClick={onClick}>
          {question}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ArrowDown className="w-5 h-5 text-blue-600" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-gray-600">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }