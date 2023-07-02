import NavigationBar from "../components/NavigationBar";
import React, { useState } from "react";
import Matrix1 from "../components/Matrix1";
import Matrix2 from "../components/Matrix2";
import Matrix4 from "../components/Matrix4";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import LinearWithValueLabel from "../components/LinearProgressWithLabel";
import { Button, Divider, Typography } from "@mui/material";
import { QUESTIONS } from "../constants";
import { Container } from "@mui/material";
import MatrixE1 from "../components/MatrixE1";
import MatrixE2 from "../components/MatrixE2";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const numberOfQuestions = QUESTIONS.length;
  const [finish, setFinish] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState(["", "", "", ""]);
  const [showWarning, setShowWarning] = useState(false);
  const matrixes = [<Matrix1 />, <Matrix2 />, <></>, <Matrix4 />];

  const explanation1 = (
    <>
      <MatrixE1 />
      <p>
        Si le joueur 1 joue Gauche, la meilleure réponse du Joueur 2 est Bas
        (car 5&gt;4); S'il joue Droite, la meilleure réponse du Joueur 2 est
        Haut (car 4&gt;0)
      </p>
      <p>
        Si le joureur 2 joue Haut, la meilleure réponse du Joueur 1 est Droite
        (car 5&gt;3); S'il joue Bas, la meilleure réponse du Joueur 1 est Gauche
        (car 3&gt;0)
      </p>
      <p>
        On obtient donc 2 équilibres de Nash qui sont les 2 points
        d'intersection des meilleures réponses de 2 joueurs : (4,5) et (5,3)
      </p>
    </>
  );

  const explanation2 = (
    <>
      <MatrixE2 />
      <p>
        Si le joueur 1 joue Pile, la meilleure réponse du Joueur 2 est Face (car
        3&gt;2); S'il joue Face, la meilleure réponse du Joueur 2 est Pile (car
        4&gt;0)
      </p>
      <p>
        Si le joureur 2 joue Pile, la meilleure réponse du Joueur 1 est Pile
        (car 5&gt;3); S'il joue Face, la meilleure réponse du Joueur 1 est Face
        (car 3&gt;0)
      </p>
      <p>
        Pas de point d'intersection. Il n'y a donc pas d'éuilibre de Nash en
        stratégie pure dans ce jeu, il faut donc passer par la stratégie mixte.
      </p>
    </>
  );

  const explanation3 = (
    <>
      <p>
        Ce jeu illustre une situation où les joueurs auraient intérêt à
        coopérer, mais où chacun choisira de trahir l’autre si le jeu n’est joué
        qu’une fois, car il craint d’être pénalisé si l’autre le trahit. C’est
        un cas où la communication entre les joueurs est impossible ou limitée,
        et où la prédiction des intentions de l’autre est déterminante1.
      </p>
      <p>
        Les autres réponses sont fausses car elles ne correspondent pas à la
        définition du dilemme du prisonnier.
      </p>
    </>
  );

  const explanation4 = (
    <>
      <p>
        C n'est pas la seule stratégie dominée. Une stratégie dominée ne sera
        jamais jouée dans un jeu. Or les joueurs sont capables de l'anticiper.
        Dans le jeu ci-dessus, J1 sait que J2 ne jouera jamais C. Mais s'il
        considère que C n'est pas possible, alors pour lui A devient dominée. En
        éliminant la stratégie C qui n'est pas la meilleure réponse, on trouve
        que B est une stratégie dominante.
      </p>
      <p>
        Peu importe le nombre de stratégie des joueurs, on peux toujours trouver
        un équilibre de Nash
      </p>
    </>
  );

  const explanations = [explanation1, explanation2, explanation3, explanation4];
  const allQuestionsAnswered = () => {
    for (let i = 0; i < numberOfQuestions; i++) {
      if (currentAnswers[i] === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check answers for all questions and calculate score
    let newScore = 0;
    for (let i = 0; i < numberOfQuestions; i++) {
      if (
        currentAnswers[i] ===
        QUESTIONS[i].answers[QUESTIONS[i].correctAnswerPosition]
      ) {
        newScore++;
      }
    }
    setScore(newScore);
    setFinish(true);
  };

  const handleRadioChange = (event) => {
    const newAnswers = [...currentAnswers];
    newAnswers[currentQuestion] = event.target.value;
    setShowWarning(false);
    setCurrentAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentAnswers[currentQuestion] === "") {
      setShowWarning(true);
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  return (
    <>
      <NavigationBar activePage="QCMEntrainement" />
      <div className="caption">
        <h3>
          Voyons si vous comprenez la théorie des jeux et l'équilibre de Nash !
        </h3>
      </div>

      <div className="centered">
        <Container maxWidth="md">
          {finish && (
            <div>
              <Typography variant="h4" color="#e53935">
                Score: {score}
              </Typography>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {QUESTIONS.map((question, index) => {
              return (
                <div
                  style={{
                    display:
                      currentQuestion === index || finish ? "block" : "none",
                  }}
                >
                  <h1> {`Question ${index + 1}`}</h1>
                  <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel id="demo-error-radios">
                      <div>
                        <p>{question.subject}</p>
                      </div>
                      {matrixes[index]}
                    </FormLabel>
                    <RadioGroup
                      name="quiz"
                      value={currentAnswers[index]}
                      onChange={handleRadioChange}
                    >
                      {question.answers.map((answer, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            value={answer}
                            control={<Radio />}
                            label={
                              <Typography
                                color={
                                  finish &&
                                  index === question.correctAnswerPosition
                                    ? "error"
                                    : "default"
                                }
                              >
                                {answer}
                              </Typography>
                            }
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                  {finish && (
                    <>
                      <div style={{ marginLeft: 30, textAlign: "left" }}>
                        <Typography variant="h6">Explication :</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {explanations[index]}
                        </Typography>
                      </div>
                      <Divider />
                    </>
                  )}
                </div>
              );
            })}
            {showWarning && (
              <Typography variant="body2" color="error">
                Veuillez choisir une réponse.
              </Typography>
            )}
            {!finish && allQuestionsAnswered() && (
              <Button
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                variant="contained"
                onClick={() => setCurrentQuestion(-1)}
              >
                <Typography color="white">Terminer</Typography>
              </Button>
            )}
          </form>
          {!finish && (
            <div>
              <Button
                sx={{ mt: 1, mr: 1 }}
                variant="contained"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0 ? true : false}
              >
                <Typography color="white">Question précédente</Typography>
              </Button>
              <Button
                sx={{ mt: 1, mr: 1 }}
                variant="contained"
                onClick={handleNextQuestion}
                disabled={
                  currentQuestion === numberOfQuestions - 1 ? true : false
                }
              >
                <Typography color="white">Question suivante</Typography>
              </Button>
              <LinearWithValueLabel
                value={(currentQuestion / numberOfQuestions) * 100}
              />
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
