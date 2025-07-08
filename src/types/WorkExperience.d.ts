export interface WorkExperience {
  id: number
  position: string
  description: string
  company: string
  startDate: Date | string
  endDate?: Date | string
  technologies: string[]
  imagesSrc: string[]
  descriptionPoints?: string[]
  url?: string
}
