
import Image from "next/image"

import {
  Star,
} from "lucide-react"
import { Card3D } from "@/components/Card3D"

export const TestimonialCard = ({ name, role, company, quote, image }) => {
    return (
      <Card3D className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg?height=100&width=100"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-blue-600 text-sm">{role}</p>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
          <div className="ml-auto text-4xl text-blue-200 font-serif">"</div>
        </div>
        <p className="text-gray-600 italic">{quote}</p>
        <div className="flex mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 text-yellow-500" fill="#eab308" />
          ))}
        </div>
      </Card3D>
    )
  }