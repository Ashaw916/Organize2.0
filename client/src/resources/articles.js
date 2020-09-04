const articles = [
  {
    title: "World Pays Tribute to ChadWick Boseman",
    author: "Multiple",
    body: "Photos illustrating tribute to recently passed Icon",
    date_added: new Date(Date.now()),
    description: "Photos illustrating tribute to recently passed Icon",
    source:
      "https://www.usatoday.com/picture-gallery/news/2020/09/04/world-pays-tribute-chadwick-boseman/5712110002/",
    type: "News Article",
  },
  {
    title: "How to Prepare to attend a protes",
    author: "Volunteers United",
    body:
      "In order to prepare be sure to: get all relevant information. Park safely. Atttend with friends. Dress apropriately. Bring water.",
    date_added: new Date(Date.now()),
    description: "Overview on attending a protest",
    source: "Volunteers United",
    type: "Blog post",
  },
  {
    title: "Community Health Clinic",
    author: "N/A",
    body: "Local resource for community health",
    date_added: new Date(Date.now()),
    description: "Sacramento resource in community health",
    source: "https://onecommunityhealth.com/",
    type: "Community resource",
  },
  {
    title: "Checklist for planning a community protest",
    author: "Lawyers United",
    body:
      "In planning a peaceful protest there are many guidelines that are helpful to follow to plan impactful and productive community events that lead to positive change ....",
    date_added: new Date(Date.now()),
    description: "How-to article",
    source: "Lawyers United",
    type: "Blog",
  },
  {
    title:
      "Sacramento police cheif calls out 'second-guessing' over his handling of latest protests",
    author: "Molly Sullivan",
    body:
      "After downtown endured another recent surge in demonstrations over the mistreatment of Blacks and other minorities at the hands of law enforcement, Sacramento Police Chief Daniel Hahn rebuked some local officials for “second-guessing” him in an op-ed published by The Sacramento Bee...",
    date_added: new Date(Date.now()),
    description: "Local law-enforcement article",
    source: "https://www.sacbee.com/news/local/crime/article245474115.html",
    type: "News Article",
  },
];

//EXPORT FUNCTIONS
export function getArticles() {
  return articles;
}

export function getArticle(id) {
  return articles.find((a) => a._id === id);
}

export function deleteArticle(id) {
  let articleInDb = articles.find((a) => a._id === id);
  articles.splice(articles.indexOf(articleInDb), 1);
  return articleInDb;
}
