export enum _categories {
  discovery = "discovery",
  delivery = "delivery",
  predictability = "predictability",
  efficiency_waste = "efficiency_waste",
  comms_interactions = "comms_interactions",
  scalability = "scalability",
  culture = "culture",
}

interface data {
  id: number;
  statement: string;
  categories: _categories;
}

export const datas: data[] = [
  {
    id: Math.random(),
    statement: "We have appropriate channels to understand our market.",
    categories: _categories.discovery,
  },
  {
    id: Math.random(),
    statement: "We are able to measure how users interact with our product(s).",
    categories: _categories.discovery,
  },
  {
    id: Math.random(),
    statement:
      "we are in touch with our stakeholders and customers and we are aware of their changing needs and requests.",
    categories: _categories.discovery,
  },
  {
    id: Math.random(),
    statement: "We are able to effectively prioritise (assess customer value)",
    categories: _categories.discovery,
  },
  {
    id: Math.random(),
    statement: "We have right metrics to support our decisions",
    categories: _categories.discovery,
  },
  {
    id: Math.random(),
    statement: "We have the right tools to do our jobs successfully",
    categories: _categories.delivery,
  },
  {
    id: Math.random(),
    statement: "The tools we use enable us to reduce manual work",
    categories: _categories.delivery,
  },
  {
    id: Math.random(),
    statement:
      "The tools we use enable us to collaborate effectively with other teams.",
    categories: _categories.delivery,
  },
  {
    id: Math.random(),
    statement:
      "Teams are able to deliver a given task with no strict dependency",
    categories: _categories.delivery,
  },
  {
    id: Math.random(),
    statement:
      "We are aware of our dependencies across teams and we don't run into time consuming impediments.",
    categories: _categories.delivery,
  },
  {
    id: Math.random(),
    statement: "Teams have overarching priorities to maximise overall value",
    categories: _categories.delivery,
  },
  {
    id: Math.random(),
    statement: "We rarely hit technical issues when developing a new feature.",
    categories: _categories.predictability,
  },
  {
    id: Math.random(),
    statement:
      "We allocate enough time and effort to solve our technical issues.",
    categories: _categories.predictability,
  },
  {
    id: Math.random(),
    statement:
      "Sometimes the feature we develop becomes obsolete by the time the work is done.",
    categories: _categories.predictability,
  },
  {
    id: Math.random(),
    statement: "Our workload is manageable.",
    categories: _categories.predictability,
  },
  {
    id: Math.random(),
    statement: "at times, we find ourselves without enough work coming in",
    categories: _categories.efficiency_waste,
  },
  {
    id: Math.random(),
    statement:
      "When I need, I have supporting information available to do my job.",
    categories: _categories.efficiency_waste,
  },
  {
    id: Math.random(),
    statement:
      "We actively maintain a knowledgebase that everyone contributes.",
    categories: _categories.efficiency_waste,
  },
  {
    id: Math.random(),
    statement:
      "Our teams have clear ways of communicating with stakeholders and customers.",
    categories: _categories.comms_interactions,
  },
  {
    id: Math.random(),
    statement:
      "Our customers appreciate the value we add by doing our job. -wording might change, we want to understand how they think the customers see them.",
    categories: _categories.comms_interactions,
  },
  {
    id: Math.random(),
    statement: "Our teams support each other to achieve goals",
    categories: _categories.comms_interactions,
  },
  {
    id: Math.random(),
    statement:
      "Our teams catch up regularly to align  and overcome challenges.",
    categories: _categories.comms_interactions,
  },
  {
    id: Math.random(),
    statement: "We are collectively working towards our goals",
    categories: _categories.comms_interactions,
  },
  {
    id: Math.random(),
    statement:
      "We have clear expectations across the people and teams we interact with.",
    categories: _categories.comms_interactions,
  },
  {
    id: Math.random(),
    statement:
      "we are aware of our objectives/vision as an organisation and we are individually contributing to it with our work.",
    categories: _categories.comms_interactions,
  },
  {
    id: Math.random(),
    statement:
      "I'm confident we can accomodate increasing/decreasing demand efficiently.",
    categories: _categories.scalability,
  },
  {
    id: Math.random(),
    statement:
      "Our teams are able to make decisions and put them into action to work efficiently.",
    categories: _categories.culture,
  },
  {
    id: Math.random(),
    statement:
      "Team members can express their opinions in without being judged.",
    categories: _categories.culture,
  },
  {
    id: Math.random(),
    statement: "Team members encouraged to share their ideas",
    categories: _categories.culture,
  },
  {
    id: Math.random(),
    statement: "Our contributions are appreciated/valued",
    categories: _categories.culture,
  },
  {
    id: Math.random(),
    statement: "We regularly reflect on our work and experiment with new ways.",
    categories: _categories.culture,
  },
  {
    id: Math.random(),
    statement: "Teams are supported to progress or evolve their careers.",
    categories: _categories.culture,
  },
];
