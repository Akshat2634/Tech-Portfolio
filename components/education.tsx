"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Stevens Institute of Technology",
      degree: "Master of Science (MS), Computer Science",
      location: "Hoboken, New Jersey",
      period: "September 2023 — May 2025",
      gpa: "3.9/4",
      details: ["Web & Media Graduate Assistant at Hanlon Financial Systems Center"],
    },
    {
      institution: "Manipal University Jaipur",
      degree: "Bachelor of Engineering (BE), Information Technology",
      location: "Jaipur, India",
      period: "July 2019 — July 2023",
      gpa: "8.62/10",
      details: [],
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education" subtitle="My academic background" />

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-l-4 border-l-purple-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                      <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.institution}</h3>
                      <p className="text-purple-600 dark:text-purple-400">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  </div>

                  {edu.details.length > 0 && (
                    <ul className="space-y-2">
                      {edu.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-700"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

