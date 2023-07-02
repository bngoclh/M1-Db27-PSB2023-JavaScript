// export là để dùng cái component này ở nơi khác//
export const QUESTIONS = [
  {
    subject: "Trouver l'équible de Nash en stratégies pures du jeu suivant:",
    answers: [
      "(4,3)",
      "(4,3) et (0,0)",
      "(4,5) et (5,3)",
      "Aucune réponse n'est correcte",
    ],
    correctAnswerPosition: 2,
  },
  {
    subject: "Choisir la bonne réponse :",
    answers: [
      "Il y a une stratégie dominante",
      "Il y a un seul équilibre de Nash en stratégie pure dans ce jeu",
      "Il y a plusieurs équilibres de Nash en stratégie pure dans ce jeu",
      "Il n'y a aucun équilibre de Nash en stratégie pure dans ce jeu",
    ],
    correctAnswerPosition: 3,
  },
  {
    subject: "Quel est le dilemme du prisonnier ?",
    answers: [
      "Un jeu où deux prisonniers doivent choisir entre coopérer ou trahir l’autre",
      "Un jeu où un prisonnier doit choisir entre s’évader ou rester en prison",
      "Un jeu où deux prisonniers doivent deviner le nombre de cartes dans la main de l’autre",
      "Un jeu où un prisonnier doit choisir entre avouer ou nier un crime",
    ],
    correctAnswerPosition: 0,
  },
  {
    subject: "Choisir la bonne interprétation :",
    answers: [
      "C est la seule stratégie dominée",
      "B est la seule stratégie dominante",
      "Il faut passer par la stratégie mixte pour trouver l'équilbre de Nash",
      "On ne peut pas trouver l'équilibre de Nash car les 2 joueurs n'ont pas le même nombre de stratégies",
    ],
    correctAnswerPosition: 1,
  },
];

export const MATRIXES = {
  matrix1: {
    matrix: [
      [1, 2, 3, 4],
      [2, 4, 6, 8],
      [3, 6, 9, 12],
      [4, 8, 12, 16],
    ],
  },
};
