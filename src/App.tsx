import React, { useState } from "react";
import { FlashCardsTable } from "./components/FlashCardsTable";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import { FlashCardProps } from "./components/interfaces";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  card: {
    minWidth: 250
  },
  label: {
    fontSize: 15,
    marginTop: 10
  }
});

function App() {
  const classes = useStyles();
  const [flashCards, setFlashCards] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const addFlashCard = () => {
    const newFlashCards = [...flashCards];
    const newFlashCard: FlashCardProps = {
      id: newFlashCards.length,
      question: newQuestion,
      answer: newAnswer
    };
    newFlashCards.push(newFlashCard);
    setFlashCards(newFlashCards);
    setNewQuestion("");
    setNewAnswer("");
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        Flash Cards with TypeScript & React
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Add New Flash Card
          </Typography>
          <Typography className={classes.label} color="textSecondary">
            Question:
          </Typography>
          <TextField
            error={!newQuestion.length}
            id="question"
            helperText="Cannot be empty"
            value={newQuestion}
            onChange={(e) => {
              setNewQuestion(e.target.value);
            }}
          />
          <Typography className={classes.label} color="textSecondary">
            Answer:
          </Typography>
          <TextField
            error={!newAnswer.length}
            id="answer"
            helperText="Cannot be empty"
            value={newAnswer}
            onChange={(e) => {
              setNewAnswer(e.target.value);
            }}
          />
          <CardActions>
            <Button
              disabled={!newQuestion.length || !newAnswer.length}
              size="small"
              onClick={addFlashCard}
            >
              Add
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <FlashCardsTable flashCards={flashCards} />
    </div>
  );
}

export default App;
