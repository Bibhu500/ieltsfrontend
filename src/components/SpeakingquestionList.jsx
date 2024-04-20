const questionList = [
    // Your first set (the original `questionsList`)
    [
      {
        "part": 1,
        "introduction": "Let's begin with Part 1. In this part, I'll ask you some questions about your hometown.",
        "questions": [
          {"id": 1, "text": "Where is your hometown?"},
          {"id": 2, "text": "What do you like about it?"},
          {"id": 3, "text": "What do you not like about it?"},
          {"id": 4, "text": "How important is your hometown to you?"},
          {"id": 5, "text": "Do you think you will continue to live in your hometown?"},
          {"id": 6, "text": "Let’s move on to talk about accommodation. Tell me about the kind of accommodation you live in?"},
          {"id": 7, "text": "Does the place you live in have many amenities?"},
          {"id": 8, "text": "Is there anything you would like to change about the place you live in?"},
          {"id": 9, "text": "Do you plan to live there for a long time?"}
        ]
      },
      {
        "part": 2,
        "introduction": "Moving on to Part 2. Here is the part 2. You have a minute to prepare your answer. You can take some notes. Here is your question. So, take a minute to make some notes, and you will have up to 2 minutes to talk about the topic.",
        "questions": [
          {
            "id": 1,
            "text": "Describe an advertisement that persuaded you to buy a product. You should say",
            "subQuestions": [
              "What advertisement it was",
              "Was it shown on TV, radio, or newspaper",
              "What was good about that advertisement",
              "Explain why you think that advertisement made the product seem attractive."
            ]
          }
        ]
      },
      {
        "part": 3,
        "introduction": "Ok, we can move on to part 3. We will discuss some related questions",
        "questions": [
          {"id": 1, "text": "What are popular types of advertising in today’s world?"},
          {"id": 2, "text": "What type of media advertising do you like most?"},
          {"id": 3, "text": "Do you think advertising influences what people buy?"},
          {"id": 4, "text": "What factors should be taken into account when making advertisements?"},
          {"id": 5, "text": "Is advertising really necessary in modern society?"},
          {"id": 6, "text": "Let’s move on from types of advertising to the impact of advertising on children. How does advertising influence children?"},
          {"id": 7, "text": "Is there any advertising that can be harmful to children?"}
        ]
      }
    ],
    [
        {
          "part": 1,
          "introduction": "Let's begin with Part 1. In this part, I'll ask you some questions about volunteer works.",
          "questions": [
            {"id": 1, "text": "Have you ever worked before?"},
            {"id": 2, "text": "What was your first day at work like?"},
            {"id": 3, "text": "What responsibilities did you have at work?"},
            {"id": 4, "text": "What was your typical day like at work?"},
            {"id": 5, "text": "Have you taken any volunteer works?"},
            {"id": 6, "text": "Why did you do the volunteer works?"},
            {"id": 7, "text": "Do you know any volunteers?"},
            {"id": 8, "text": "How do you define volunteer work?"}
          ]
        },
        {
          "part": 2,
          "introduction": "Moving on to Part 2. Here is the part 2. You have a minute to prepare your answer. You can take some notes. Here is your question. So, take a minute to make some notes, and you will have up to 2 minutes to talk about the topic.",
          "questions": [
            {
              "id": 1,
              "text": "Describe a small business you want to start. You should say:",
              "subQuestions": [
                "What business it would be",
                "When you want to start it",
                "Why have you not started it yet",
                "Explain why you want to start this business."
              ]
            }
          ]
        },
        {
          "part": 3,
          "introduction": "Ok, we can move on to part 3. We will discuss some related questions",
          "questions": [
            {"id": 1, "text": "In your opinion, do business people have to work long hours?"},
            {"id": 2, "text": "How do business people relax?"},
            {"id": 3, "text": "Let’s move on to the topic of small businesses. How can a small business grow big?"},
            {"id": 4, "text": "In your opinion, what kind of small businesses will young people have in the future?"},
            {"id": 5, "text": "In your opinion, what skills are required to start a small business?"},
            {"id": 6, "text": "Finally, let’s talk about globalization. What are the impacts of globalization on small and large businesses?"}
          ]
        }
      ]
      
  ].map(set => set.map(part => ({ ...part, questions: part.questions.map(q => ({ ...q, answer: "", played: false })) }))); 

export default questionList;




