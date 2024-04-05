export interface ProposalGroup {
  name: string
  items: ProposalItem[]
}

export interface ProposalItem {
  id: number
  title: string
  author: string
  text: string
  date: string
}
