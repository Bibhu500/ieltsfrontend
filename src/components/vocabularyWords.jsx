
const vocabularyWords = [
    {
      word: 'Exemplify',
      meaning: 'To be a typical example of',
      sentences: [
        "The design of this building exemplifies the architect's unique style.",
        "The charity worker's selfless acts exemplify the true meaning of compassion."
      ],
      level: 'c1',
      synonyms: ['embody', 'typify', 'represent'],
      antonyms: ['contradict', 'disprove'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Juxtapose',
      meaning: 'To place side by side to compare or contrast',
      sentences: [
        "The curator juxtaposed the two paintings to highlight their differences in style.",
        "The news article juxtaposed the politician's current stance with their previous statements."
      ],
      level: 'c1',
      synonyms: ['position', 'arrange', 'set side by side'],
      antonyms: ['separate', 'isolate'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Scrutinize',
      meaning: 'To examine or inspect closely and critically',
      sentences: [
        "The detective scrutinized the crime scene for any overlooked clues.",
        "The committee scrutinized the financial records to ensure there were no discrepancies."
      ],
      level: 'c1',
      synonyms: ['inspect', 'analyze', 'investigate'],
      antonyms: ['overlook', 'ignore'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Proliferate',
      meaning: 'To increase rapidly in number or amount',
      sentences: [
        "The invasive species proliferated throughout the ecosystem, threatening native plants.",
        "Social media platforms have proliferated in recent years, changing the way we communicate."
      ],
      level: 'c1',
      synonyms: ['multiply', 'expand', 'grow'],
      antonyms: ['decrease', 'diminish', 'decline'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Quintessential',
      meaning: 'Representing the most perfect or typical example of a quality or class',
      sentences: [
        "The Eiffel Tower is the quintessential symbol of Paris.",
        "She is the quintessential businesswoman, always professional and driven."
      ],
      level: 'c2',
      synonyms: ['definitive', 'archetypal', 'prototypical'],
      antonyms: ['atypical', 'uncharacteristic', 'unrepresentative'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Dichotomy',
      meaning: 'A division or contrast between two things that are or are represented as being opposed or entirely different',
      sentences: [
        "There is a clear dichotomy between the rich and the poor in this society.",
        "The film explores the dichotomy between the character's public and private lives."
      ],
      level: 'c2',
      synonyms: ['division', 'contrast', 'polarization'],
      antonyms: ['unity', 'harmony', 'convergence'],
      wordType: 'noun',
      verbForm: null
    },
    {
      word: 'Ubiquitous',
      meaning: 'Present, appearing, or found everywhere',
      sentences: [
         "Smartphones have become ubiquitous in modern society.",
        "The golden arches of McDonald's are a ubiquitous sight around the world."
      ],
      level: 'c2',
      synonyms: ['omnipresent', 'pervasive', 'widespread'],
      antonyms: ['rare', 'scarce', 'limited'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Elucidate',
      meaning: 'To make (something) clear; to explain',
      sentences: [
        "The professor's lecture helped elucidate the complex economic theory.",
        "The witness's testimony did little to elucidate the details of the crime."
      ],
      level: 'c1',
      synonyms: ['clarify', 'illuminate', 'explicate'],
      antonyms: ['obscure', 'confuse', 'muddle'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Amalgamate',
      meaning: 'To combine or unite to form a single entity',
      sentences: [
        "The two companies decided to amalgamate their operations to increase efficiency.",
        "The amalgamation of the different cultures led to the creation of a unique local identity."
      ],
      level: 'c1',
      synonyms: ['merge', 'integrate', 'unify'],
      antonyms: ['separate', 'divide', 'disintegrate'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Ambivalent',
      meaning: 'Having mixed feelings or contradictory ideas about something or someone',
      sentences: [
        "The student was ambivalent about her decision to change majors, torn between her passions.",
         "The public's reaction to the new policy was ambivalent, with both praise and criticism."
      ],
      level: 'c1',
      synonyms: ['conflicted', 'undecided', 'uncertain'],
      antonyms: ['resolute', 'decisive', 'unambiguous'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Exacerbate',
      meaning: 'To make (a problem, bad situation, etc.) worse',
      sentences: [
         "The unexpected rain exacerbated the flooding in the low-lying areas.",
         "His rude behavior only served to exacerbate the tense situation between the two parties."
      ],
      level: 'c1',
      synonyms: ['aggravate', 'worsen', 'intensify'],
      antonyms: ['alleviate', 'improve', 'mitigate'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Repudiate',
      meaning: 'To refuse to accept or be associated with; to reject',
      sentences: [
         "The political candidate repudiated the controversial statements made by his campaign advisor.",
         "The company was forced to repudiate the false claims made in their advertisement."
      ],
      level: 'c2',
      synonyms: ['disown', 'renounce', 'disavow'],
      antonyms: ['embrace', 'accept', 'endorse'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Innocuous',
      meaning: 'Not likely to cause harm or offense; harmless',
      sentences: [
         "The new employee's innocuous comment was taken the wrong way by the sensitive manager.",
         "The politician's innocuous statement about the weather was widely reported in the news."
      ],
      level: 'c1',
      synonyms: ['harmless', 'inoffensive', 'benign'],
      antonyms: ['harmful', 'offensive', 'dangerous'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Ephemeral',
      meaning: 'Lasting a very short time; transient',
      sentences: [
         "The beauty of the cherry blossoms is ephemeral, lasting only a few weeks each spring.",
         "The trend for minimalist home decor is ephemeral, quickly being replaced by more ornate styles."
      ],
      level: 'c2',
      synonyms: ['fleeting', 'transitory', 'short-lived'],
      antonyms: ['permanent', 'enduring', 'lasting'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Vehement',
      meaning: 'Expressing strong feeling; forceful, passionate, and intense',
      sentences: [
         "The political activist's vehement speech galvanized the crowd to action.",
         "The customer's vehement complaints about the poor service led to a rapid response from the manager."
      ],
      level: 'c2',
      synonyms: ['ardent', 'fervent', 'impassioned'],
      antonyms: ['mild', 'lukewarm', 'indifferent'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Diligent',
      meaning: 'Having or showing care and conscientiousness in one\'s work or duties',
      sentences: [
         "The student's diligent study habits paid off with excellent grades.",
         "The diligent accountant double-checked all the financial records for accuracy."
      ],
      level: 'c1',
      synonyms: ['hardworking', 'industrious', 'conscientious'],
      antonyms: ['lazy', 'negligent', 'careless'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Eclectic',
      meaning: 'Deriving ideas, style, or taste from a broad and diverse range of sources',
      sentences: [
         "The museum's collection is eclectic, featuring works from various artistic movements and cultures.",
         "The chef's menu offers an eclectic mix of international cuisines, showcasing her diverse culinary skills."
      ],
      level: 'c2',
      synonyms: ['diverse', 'wide-ranging', 'varied'],
      antonyms: ['narrow', 'specialized', 'homogeneous'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Digress',
      meaning: 'To turn aside from the main subject of attention or course of argument in speech or writing',
      sentences: [
         "The speaker often digressed from the main topic, making it difficult for the audience to follow the presentation.",
         "In his essay, the author occasionally digressed into personal anecdotes, detracting from the central argument."
      ],
      level: 'c1',
      synonyms: ['deviate', 'stray', 'wander'],
      antonyms: ['focus', 'adhere', 'remain on topic'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Ameliorate',
      meaning: 'To make (something bad or unsatisfactory) better; to improve',
      sentences: [
         "The new policies were implemented to ameliorate the worsening housing crisis.",
         "The company's efforts to ameliorate its environmental impact have been well-received by the public."
      ],
      level: 'c2',
      synonyms: ['alleviate', 'enhance', 'mitigate'],
      antonyms: ['worsen', 'exacerbate', 'deteriorate'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Perpetuate',
      meaning: 'To cause (a situation, habit, or belief) to continue indefinitely',
      sentences: [
         "The outdated traditions perpetuate harmful gender stereotypes in the workplace.",
         "The politician's inflammatory rhetoric only serves to perpetuate the cycle of political polarization."
      ],
      level: 'c2',
      synonyms: ['maintain', 'prolong', 'sustain'],
      antonyms: ['end', 'discontinue', 'eliminate'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Embellish',
      meaning: 'To add decorative or fanciful details to (something)',
      sentences: [
         "The author embellished the story with vivid descriptions to make it more engaging.",
         "The designer embellished the plain dress with intricate embroidery to create a more striking look."
      ],
      level: 'c1',
      synonyms: ['adorn', 'ornament', 'enhance'],
      antonyms: ['simplify', 'strip', 'de-emphasize'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Eloquent',
      meaning: 'Fluent or persuasive in speaking or writing',
      sentences: [
         "The politician's eloquent speech moved the audience to thunderous applause.",
         "The author's eloquent prose captivated readers with its beauty and power."
      ],
      level: 'c1',
      synonyms: ['articulate', 'expressive', 'fluent'],
      antonyms: ['inarticulate', 'ineloquent', 'clumsy'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Succinct',
      meaning: 'Expressed in a clear, concise, and effective way',
      sentences: [
         "The manager provided a succinct summary of the project's progress at the meeting.",
         "The book's succinct writing style makes it an easy and enjoyable read."
      ],
      level: 'c1',
      synonyms: ['concise', 'brief', 'laconic'],
      antonyms: ['verbose', 'wordy', 'long-winded'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Reiterate',
      meaning: 'To repeat (something) in order to emphasize or confirm it',
      sentences: [
         "The teacher reiterated the importance of completing the assignment on time.",
         "The CEO reiterated the company's commitment to sustainability in the latest earnings call."
      ],
      level: 'c1',
      synonyms: ['repeat', 'restate', 'reinforce'],
      antonyms: ['diverge', 'deviate', 'contradict'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Paradoxical',
      meaning: 'Seemingly contradictory or opposed to common sense, yet perhaps true',
      sentences: [
         "The politician's paradoxical stance on the issue left many voters confused.",
         "The findings of the study were paradoxical, suggesting both positive and negative impacts on the environment."
      ],
      level: 'c2',
      synonyms: ['contradictory', 'incongruous', 'counterintuitive'],
      antonyms: ['logical', 'consistent', 'straightforward'],
      wordType: 'adjective',
      verbForm: null
    },
    {
      word: 'Enumerate',
      meaning: 'To list or name (things) one by one',
      sentences: [
         "The report enumerates the key steps the company will take to reduce its carbon footprint.",
         "The teacher asked the students to enumerate the important events that led to the outbreak of the war."
      ],
      level: 'c1',
      synonyms: ['list', 'itemize', 'count'],
      antonyms: ['summarize', 'generalize', 'overlook'],
      wordType: 'verb',
      verbForm: 'v1'
    },
    {
      word: 'Substantiate',
      meaning: 'To provide evidence for or to prove the truth of (a claim or statement)',
      sentences: [
         "The investigative report failed to substantiate the allegations of corruption.",
         "The company's financial records were unable to substantiate the CEO's claims of profitability."
      ],
      level: 'c2',
      synonyms: ['corroborate', 'verify', 'validate'],
      antonyms: ['refute', 'disprove', 'contradict'],
      wordType: 'verb',
      verbForm: 'v1'
    },{
      word: 'Ambiguous',
      meaning: 'Open to more than one interpretation; not having a clear meaning',
      sentences: [
      "The contract's language was ambiguous, leading to a dispute between the parties.",
      "The politician's response to the question was ambiguous, leaving the audience unsure of their position."
      ],
      level: 'c1',
      synonyms: ['vague', 'unclear', 'equivocal'],
      antonyms: ['unambiguous', 'clear', 'definite'],
      wordType: 'adjective',
      verbForm: null
      },
      {
      word: 'Comprehensive',
      meaning: 'Including or dealing with all or nearly all elements or aspects of something',
      sentences: [
      "The new health care plan provides comprehensive coverage for all medical needs.",
      "The company conducted a comprehensive market analysis before launching their new product."
      ],
      level: 'c2',
      synonyms: ['thorough', 'exhaustive', 'all-inclusive'],
      antonyms: ['partial', 'limited', 'incomplete'],
      wordType: 'adjective',
      verbForm: null
      },
      {
      word: 'Convoluted',
      meaning: 'Excessively complex or complicated',
      sentences: [
      "The legal system's convoluted rules and procedures make it difficult for the average citizen to navigate.",
      "The plot of the novel became increasingly convoluted, making it challenging for the reader to follow."
      ],
      level: 'c2',
      synonyms: ['intricate', 'complicated', 'labyrinthine'],
      antonyms: ['simple', 'straightforward', 'uncomplicated'],
      wordType: 'adjective',
      verbForm: null
      },
      {
      word: 'Astute',
      meaning: 'Having or showing an ability to accurately assess situations or people and turn this to one\'s advantage',
      sentences: [
      "The astute business leader was able to anticipate market trends and capitalize on new opportunities.",
      "The detective's astute observation of the crime scene led to a crucial breakthrough in the case."
      ],
      level: 'c2',
      synonyms: ['perceptive', 'discerning', 'shrewd'],
      antonyms: ['obtuse', 'unperceptive', 'lacking insight'],
      wordType: 'adjective',
      verbForm: null
      },
      {
        word: 'Innovative',
        meaning: 'Featuring new methods, ideas, or products',
        sentences: [
          "The company's innovative approach to product design has earned them critical acclaim.",
          "The professor's innovative teaching methods have been praised for engaging students in the classroom."
        ],
        level: 'c1',
        synonyms: ['creative', 'groundbreaking', 'novel'],
        antonyms: ['conventional', 'traditional', 'unoriginal'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Pragmatic',
        meaning: 'Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations',
        sentences: [
          "The new mayor's pragmatic approach to solving the city's problems has been well-received by the public.",
          "The company's pragmatic decision to outsource certain operations has improved their overall efficiency."
        ],
        level: 'c1',
        synonyms: ['practical', 'realistic', 'matter-of-fact'],
        antonyms: ['idealistic', 'theoretical', 'impractical'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Proficient',
        meaning: 'Highly competent or skilled',
        sentences: [
          "The pianist's proficient performance of the complex piece earned her a standing ovation.",
          "The team's proficient use of the new software system has streamlined their workflow."
        ],
        level: 'c1',
        synonyms: ['adept', 'skilled', 'accomplished'],
        antonyms: ['unskilled', 'incompetent', 'novice'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Facilitate',
        meaning: 'To make (an action or process) easy or easier',
        sentences: [
          "The new software features are designed to facilitate the user's workflow.",
          "The school's mentorship program helps to facilitate the transition for new students."
        ],
        level: 'c1',
        synonyms: ['assist', 'enable', 'expedite'],
        antonyms: ['hinder', 'impede', 'obstruct'],
        wordType: 'verb',
        verbForm: 'v1'
      },
      {
        word: 'Encompass',
        meaning: 'To include or contain (something) within a larger whole; to comprise',
        sentences: [
          "The company's new product line encompasses a wide range of home appliances.",
          "The university's liberal arts curriculum encompasses a diverse array of academic disciplines."
        ],
        level: 'c1',
        synonyms: ['include', 'comprise', 'incorporate'],
        antonyms: ['exclude', 'omit', 'neglect'],
        wordType: 'verb',
        verbForm: 'v1'
      },
      {
        word: 'Empathetic',
        meaning: 'Showing an ability to understand and share the feelings of another',
        sentences: [
          "The counselor's empathetic approach helped the client feel heard and supported.",
          "The teacher's empathetic response to the student's struggles demonstrated their compassion."
        ],
        level: 'c2',
        synonyms: ['compassionate', 'understanding', 'sensitive'],
        antonyms: ['insensitive', 'unsympathetic', 'callous'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Nuance',
        meaning: 'A subtle difference in meaning, expression, or tone',
        sentences: [
          "The actor's nuanced performance brought depth and complexity to the character.",
          "The diplomat's nuanced language helped to navigate the delicate political situation."
        ],
        level: 'c2',
        synonyms: ['subtlety', 'delicacy', 'shading'],
        antonyms: ['bluntness', 'crudeness', 'simplicity'],
        wordType: 'noun',
        verbForm: null
      },
      {
        word: 'Articulate',
        meaning: 'Able to express oneself clearly and effectively',
        sentences: [
          "The CEO's articulate presentation of the company's quarterly results impressed the investors.",
          "The student's articulate essay demonstrated a strong command of the English language."
        ],
        level: 'c1',
        synonyms: ['eloquent', 'fluent', 'expressive'],
        antonyms: ['inarticulate', 'incoherent', 'unclear'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Disseminate',
        meaning: 'To spread (information, ideas, etc.) widely',
        sentences: [
          "The organization plans to disseminate their findings through a series of public forums.",
          "The government agency disseminated the new safety guidelines to all relevant stakeholders."
        ],
        level: 'c2',
        synonyms: ['distribute', 'circulate', 'propagate'],
        antonyms: ['withhold', 'conceal', 'suppress'],
        wordType: 'verb',
        verbForm: 'v1'
      },
      {
        word: 'Concise',
        meaning: 'Expressing much in few words; brief and to the point',
        sentences: [
          "The report's concise writing style made it easy for the busy executives to digest the key information.",
          "The speaker's concise and clear presentation helped the audience follow the complex topic."
        ],
        level: 'c1',
        synonyms: ['succinct', 'laconic', 'terse'],
        antonyms: ['wordy', 'verbose', 'long-winded'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Lucid',
        meaning: 'Expressed clearly; easy to understand',
        sentences: [
          "The professor's lucid explanation of the scientific theory helped the students grasp the complex concepts.",
          "The author's lucid writing style made the novel a pleasure to read."
        ],
        level: 'c2',
        synonyms: ['clear', 'coherent', 'intelligible'],
        antonyms: ['unclear', 'confusing', 'incoherent'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Analogous',
        meaning: 'Comparable in certain respects, typically in a way that makes it easier to understand',
        sentences: [
          "The new software feature is analogous to the function of a calculator, making it intuitive for users to adapt.",
          "The pandemic's impact on the economy is analogous to the effects of a natural disaster, with widespread disruption."
        ],
        level: 'c2',
        synonyms: ['comparable', 'similar', 'parallel'],
        antonyms: ['dissimilar', 'unrelated', 'disparate'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Profound',
        meaning: 'Of great depth or gravity; intense, thorough, or complete',
        sentences: [
          "The philosopher's profound insights into the human condition have influenced generations of thinkers.",
          "The tragic event had a profound impact on the community, leading to a period of deep reflection and healing."
        ],
        level: 'c2',
        synonyms: ['deep', 'intense', 'far-reaching'],
        antonyms: ['superficial', 'trivial', 'shallow'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Intricate',
        meaning: 'Very complicated or detailed',
        sentences: [
          "The architect's intricate design for the new building showcased their exceptional creativity.",
          "The company's intricate supply chain and distribution network ensure efficient delivery of their products."
        ],
        level: 'c2',
        synonyms: ['complex', 'elaborate', 'intricate'],
        antonyms: ['simple', 'straightforward', 'uncomplicated'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Coherent',
        meaning: 'Logical and well-organized; able to be understood',
        sentences: [
          "The student's coherent essay on the historical event demonstrated their deep understanding of the topic.",
          "The CEO's coherent vision for the company's future inspired confidence in the shareholders."
        ],
        level: 'c1',
        synonyms: ['logical', 'consistent', 'organized'],
        antonyms: ['incoherent', 'disjointed', 'confusing'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Disparate',
        meaning: 'Fundamentally different or distinct in kind; not able to be compared',
        sentences: [
          "The two scientific theories are disparate, as they are based on completely different underlying principles.",
          "The disparate interests and backgrounds of the team members made it challenging to reach a consensus."
        ],
        level: 'c2',
        synonyms: ['different', 'unrelated', 'incongruous'],
        antonyms: ['similar', 'related', 'compatible'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Integral',
        meaning: 'Essential or fundamental to a whole',
        sentences: [
          "Teamwork is an integral part of the company's success, as it fosters collaboration and innovation.",
          "The ability to think critically is an integral component of the university's core curriculum."
        ],
        level: 'c2',
        synonyms: ['essential', 'fundamental', 'indispensable'],
        antonyms: ['peripheral', 'auxiliary', 'nonessential'],
        wordType: 'adjective',
        verbForm: null
      },
      {
        word: 'Discern',
        meaning: 'To perceive or recognize (something) clearly',
        sentences: [
          "The experienced art critic was able to discern the subtle nuances in the artist's brushstrokes.",
          "It was difficult to discern the truth amidst the conflicting accounts of the incident."
        ],
        level: 'c2',
        synonyms: ['distinguish', 'identify', 'detect'],
        antonyms: ['overlook', 'miss', 'fail to notice'],
        wordType: 'verb',
        verbForm: 'v1'
      },
      {
        word: 'Plausible',
        meaning: 'Seemingly reasonable or probable; credible',
        sentences: [
          "The witness provided a plausible explanation for their whereabouts at the time of the crime.",
          "The company's new business strategy seems plausible, but it will require careful execution."
        ],
        level: 'c1',
        synonyms: ['credible', 'reasonable', 'believable'],
        antonyms: ['implausible', 'unbelievable', 'doubtful'],
        wordType: 'adjective',
        verbForm: null
      },
    ];

export default vocabularyWords;