export interface ITestimonial {
  author: string
  quote: string
}

export interface IPlan {
  description: string
  items: []
  plan: string
  price: string | number
}

export interface IPricingPlan {
  heading: string
  description: string
  plans: IPlan[]
}
