var trivia = {
  0: {
    question: "What character cut Jamie Lannister's hand off?",
    A: [
      "Locke of House Bolton",
      "Brienne of Tarth",
      "Theon Greyjoy",
      "Robb Stark"
    ],
    answer: "Locke of House Bolton"
  },
  1: {
    question: "What is the name of Jon's direwolf?",
    A: ["Ghost", "Nymeria", "Summer", "Grey Wind", "Lady"],
    answer: "Ghost",
    img: "./assets/images/1.png"
  },
  2: {
    question: "Which household possesses the banner of a moon and a falcon?",
    A: ["House Greyjoy", "House Arryn", "House Lannister", "House Karstark"],
    answer: "House Arryn"
  }
  //   3: {
  //     question: "What was the name of Caitlyn Stark's father?",
  //     A: ["Lord Arryn", "Lord Hoster", "Lord Tywin", "Lord Edmure"],
  //     answer: "Lord Hoster"
  //   },
  //   4: {
  //     question: "What was the name of Arya's direwolf?",
  //     A: ["Lady", "Grey Wind", "Summer", "Nymeria", "Ghost"],
  //     answer: "Nymeria"
  //   },
  //   5: {
  //     question: "Who was the first to stab Jon Snow in the Season 5 finale?",
  //     A: [
  //       "Bowen Marsh",
  //       "Denys Mallister",
  //       "Olly",
  //       "Alliser Thorne",
  //       "Othell Yarwyck"
  //     ],
  //     answer: "Alliser Thorne"
  //   },
  //   6: {
  //     question:
  //       "Why did Danaerys drop her ring in the season finale when the other khalasar found her?",
  //     A: [
  //       "Because she didn't want to show them that she had re-married",
  //       "Because her fingers were hurting",
  //       "To indicate where she's being taken",
  //       "Alliser Thorne",
  //       "To show surrender"
  //     ],
  //     answer: "To indicate where she's being taken"
  //   },
  //   7: {
  //     question:
  //       "What were the names of Aegon Targaryen's three dragons that Dany named her ships after?",
  //     A: [
  //       "Balerion, Drogon and Viserion",
  //       "Meraxes, Rhaegal and Vhager",
  //       "Rhaegal, Drogon and Viserion",
  //       "Meraxes, Vhagar and Balerion"
  //     ],
  //     answer: "Meraxes, Vhagar and Balerion"
  //   },
  //   8: {
  //     question: "Who said, “A very small man can cast a very large shadow?”",
  //     A: ["Tyrion Lannister", "Pycelle", "Petyr Baelish", "Lord Varys"],
  //     answer: "Lord Varys"
  //   },
  //   9: {
  //     question: "Why was Jorah Mormont exiled from Westeros?",
  //     A: [
  //       "For trading slaves",
  //       "For killing his wife",
  //       "For buying slaves",
  //       "For being a slave"
  //     ],
  //     answer: "For trading slaves"
  //   },
  //   10: {
  //     question:
  //       "What did Tywin give his grandson Joffrey during the royal wedding?",
  //     A: [
  //       "A book called “The Lives of Four Kings”",
  //       "Seven gold bars",
  //       "A sword made out of Valyrian steel"
  //     ],
  //     answer: "A sword made out of Valyrian steel"
  //   },
  //   11: {
  //     question: "Who is the father of Loras Tyrell?",
  //     A: ["Willas", "Garlan", "Mace", "Barristan", "Luthor"],
  //     answer: "Mace"
  //   },
  //   12: {
  //     question:
  //       "Who returns Tyrion Lannister's purse of gold upon his release from Catelyn Stark?",
  //     A: ["Catelyn Stark", "Bronn", "Ser Rodrik Cassel", "Lysa Stark", "Mord"],
  //     answer: "Ser Rodrik Cassel"
  //   },
  //   13: {
  //     question: "Where did Lady Talisa come from?",
  //     A: ["Riverrun", "Astapor", "The Vale", "Pentos", "Volantis"],
  //     answer: "Volantis"
  //   },
  //   14: {
  //     question: "What was the name of Ned Stark's Valyrian steel sword?",
  //     A: ["Ice", "Longclaw", "Hearteater", "Needle"],
  //     answer: "Ice"
  //   },
  //   15: {
  //     question: "Who does Dany name her dragons after?",
  //     A: [
  //       "She made them up",
  //       "She named them after Aegon's dragons",
  //       "Her brother, father and husband",
  //       "Her husband and two brothers"
  //     ],
  //     answer: "Her husband and two brothers"
  //   },
  //   16: {
  //     question: "What is the surname given to bastards born in Dorne?",
  //     A: ["Sand", "Stone", "Rivers", "Waters"],
  //     answer: "Sand"
  //   },
  //   17: {
  //     question: "The 'Mountain' is the nickname for which character?",
  //     A: ["Oberyn Martell", "Sandor Clegane", "Gerald Clegane", "Gregor Clegane"],
  //     answer: "Gregor Clegane"
  //   },
  //   18: {
  //     question:
  //       "Who is the Lord Commander of the Kingsguard at the beginning of Game of Thrones?",
  //     A: [
  //       "Ser Jeor Mormont",
  //       "Ser Jaime Lannister",
  //       "Ser Loras Tyrell",
  //       "Ser Barristan Selmy"
  //     ],
  //     answer: "Ser Barristan Selmy"
  //   },
  //   19: {
  //     question: "Who was Margaery Tyrell's first husband?",
  //     A: [
  //       "Tommen Baratheon",
  //       "Joffrey Baratheon",
  //       "Renly Baratheon",
  //       "Stannis Baratheon"
  //     ],
  //     answer: "Renly Baratheon"
  //   },
  //   20: {
  //     question: "Who is known as the 'The King Beyond the Wall'?",
  //     A: [
  //       "The Night King",
  //       "Tormund Giantsbane",
  //       "Stannis Baratheon",
  //       "Mance Rayder"
  //     ],
  //     answer: "Mance Rayder"
  //   },
  //   21: {
  //     question: "How many times has Sansa Stark been married?",
  //     A: ["Three times", "Once", "None", "Twice"],
  //     answer: "Twice"
  //   },
  //   22: {
  //     question:
  //       "Who is the ruler of the Iron Islands at the beginning of Game of Thrones?",
  //     A: ["Aeron Greyjoy", "Euron Greyjoy", "Yara Greyjoy", "Balon Greyjoy"],
  //     answer: "Balon Greyjoy"
  //   },
  //   23: {
  //     question: "Who was the Mad King's firstborn son?",
  //     A: [
  //       "Aegon Targaryen",
  //       "Aemon Targaryen",
  //       "Viserys Targaryen",
  //       "Rhaegar Targaryen"
  //     ],
  //     answer: "Rhaegar Targaryen"
  //   },
  //   24: {
  //     question:
  //       "Who delivered the fatal blow to the King in the North, Robb Stark?",
  //     A: ["Roose Bolton", "Walder Frey", "Ramsay Bolton", "Alliser Thorne"],
  //     answer: "Roose Bolton"
  //   },
  //   25: {
  //     question:
  //       "Grey Worm and Missandei become allies of Daenerys Targaryen after she liberated the slaves of which city?",
  //     A: ["Yunkai", "Astapor", "Qarth", "Meereen"],
  //     answer: "Astapor"
  //   },
  //   26: {
  //     question:
  //       "What is the name of the royal executioner who beheaded Eddard Stark for treason?",
  //     A: [
  //       "Ser Janos Slynt",
  //       "Ser llyn Payne",
  //       "Ser Beric Dondarrion",
  //       "Ser Meryn Trant"
  //     ],
  //     answer: "Ser llyn Payne"
  //   },
  //   27: {
  //     question:
  //       "Which rival king attempted to take King's Landing during the Battle of the Blackwater?",
  //     A: ["Stannis Baratheon", "Balon Greyjoy", "Renly Baratheon", "Robb Stark"],
  //     answer: "Stannis Baratheon"
  //   },
  //   28: {
  //     question:
  //       "Who was the fool who helped Sansa Stark escape King's Landing after King Joffrey's death?",
  //     A: ["Dontos Hollard", "Eddison Tollett", "Mord", "Vardis Egen"],
  //     answer: "Dontos Hollard"
  //   },
  //   29: {
  //     question:
  //       "Which city does Samwell Tarly travel to in order to train as a maester?",
  //     A: ["Highgarden", "Gulltown", "Sunspear", "Oldtown"],
  //     answer: "Oldtown"
  //   },
  //   30: {
  //     question: "The wildling Gilly has a son, who is the father?",
  //     A: ["Samwell Tarly", "Craster", "Tormund Giantsbane", "Jeor Mormont"],
  //     answer: "Craster"
  //   },
  //   31: {
  //     question: "In which city does Arya Stark train to become a Faceless Man?",
  //     A: ["Pentos", "Astapor", "Braavos", "Meereen"],
  //     answer: "Braavos"
  //   },
  //   32: {
  //     question:
  //       "Thoros of Myr is responsible for reviving which character from the dead?",
  //     A: ["Jon Snow", "Sandor Clegane", "Beric Dondarrion", "Gregor Clegane"],
  //     answer: "Beric Dondarrion"
  //   },
  //   33: {
  //     question:
  //       "In Season 4, who does Tywin Lannister plan to marry his daughter, Cersei, to?",
  //     A: ["Euron Greyjoy", "Petyr Baelish", "Oberyn Martell", "Loras Tyrell"],
  //     answer: "Loras Tyrell"
  //   },
  //   34: {
  //     question: "Davos Seaworth grew up in the slums of which city?",
  //     A: ["King's Landing", "Gulltown", "Oldtown", "Lannisport"],
  //     answer: "King's Landing"
  //   },
  //   35: {
  //     question: "What relation is Lyanna Mormont to Jorah Mormont?",
  //     A: ["Cousin", "Daughter", "Niece", "Sister"],
  //     answer: "Cousin"
  //   }
};
