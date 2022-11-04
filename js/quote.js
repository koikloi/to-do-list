const quotes = [
    {
        quote: "철학자가 통치자이고, 통치자가 철학자인 국가는 행복하다.",
        author: "플라톤",
    },
    {
        quote: "자기 희생을 동반하지 않는 자비는 거짓 자비입니다.",
        author: "톨스토이",
    },
    {
        quote: "너는 안이하게 살고자 하는가? 그렇다면 항상 군중 속에 머물러 있으라. 그리고 군중에 섞여 너 자신을 잃어버려라.",
        author: "니체",
    },
    {
        quote: "글을 가볍고 직설적으로 쓰는 법을 배우는 일이 고상하게 쓰는 법을 배우는 것보다 시간이 더 많이 걸린다.",
        author: "니체",
    },
    {
        quote: "당신들의 모든 불행은 당신들 자신으로부터 생긴다.",
        author: "루소",
    },
    {
        quote: "서둘러 한 결혼이 잘 된 예가 없다.",
        author: "셰익스피어",
    },
    {
        quote: "이것이 최악이라고 말할 수 있는 동안은 아직 괜찮다.",
        author: "셰익스피어",
    },
    {
        quote: "인간은 달과 같아서 어느 누구에게도 보이지 않는 어두운 면이 있다.",
        author: "마크 트웨인",
    },
    {
        quote: "인간이 자기가 생복하다는 것을 알지 못하기 때문에 불행한 것이다.",
        author: "도스토예프스키",
    },
    {
        quote: "결단을 내리지 않는 것이야말로 최대의 해악이다.",
        author: "데카르트",
    },
    {
        quote: "인간은 태어나면서부터 허영심이 강하고, 타인의 성공을 질투하기 쉬우며, 자신의 이익 추구에 대해서는 무한정한 탐욕을 지닌 자다.",
        author: "마키아벨리",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerHTML= todaysQuote.quote;
author.innerHTML = todaysQuote.author;