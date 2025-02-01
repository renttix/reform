export interface Challenge {
  title: string
  description: string
}

export interface Statistic {
  label: string
  value: string
  source: string
}

export interface Solution {
  title: string
  description: string
  policy: string
}

export interface Reference {
  text: string
  url: string
}

export interface AreaContent {
  title: string
  summary: string
  challenges: Challenge[]
  statistics: Statistic[]
  solutions: Solution[]
  references: Reference[]
  imagePath: string
}
