import "./App.css";
import { useCallback, useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

import { wordsList } from "./data/words";

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
];

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setwrongLetters] = useState([]);
    const [guesses, setGuesses] = useState(3);
    const [score, setScore] = useState(0);

    const pickWordAndCategory = useCallback(() => {
        //pick a random category
        const categories = Object.keys(words);
        const category =
            categories[
                Math.floor(Math.random() * Object.keys(categories).length)
            ];

        //pick a random category
        const word =
            words[category][Math.floor(Math.random() * words[category].length)];

        return { word, category };
    },[words]);

    const startGame = useCallback(() => {
        clearLettersStates()

        const { word, category } = pickWordAndCategory();

        let wordLetters = word.split("");
        wordLetters = wordLetters.map((l) => l.toLowerCase());
        //fill States
        setPickedWord(word);
        setPickedCategory(category);
        setLetters(wordLetters);

        setGameStage(stages[1].name);
    }, [pickWordAndCategory]);

    const verifyLetter = (letter) => {
        const normalizedLetter = letter.toLowerCase()

        if(guessedLetters.includes(normalizedLetter)|| wrongLetters.includes(normalizedLetter)){
            return
        }

        if(letters.includes(normalizedLetter)){
            setGuessedLetters((actualGuessedLetter)=>[
                ...actualGuessedLetter, normalizedLetter
            ])
        }else{
            setwrongLetters((actualWrongLetter)=>[
                ...actualWrongLetter, normalizedLetter,
            ])
            setGuesses((actualGuesses) => actualGuesses - 1);
        }
    };

    const clearLettersStates =()=>{
        setGuessedLetters([])
        setwrongLetters([])
    }
    useEffect(()=>{
        if(guesses<=0){
            clearLettersStates()
            setGameStage(stages[2].name)
        }
    },[guesses])
    
    useEffect(()=>{
        const uniqueLetters = [...new Set(letters)]
        if(guessedLetters.length===uniqueLetters.length && gameStage===stages[1].name){
            setScore((actalScore)=> actalScore+=100)
            startGame()
        }
        
    },[guessedLetters, letters, startGame])
    
    
    const retry = () => {
        setScore(0)
        setGuesses(3)
        setGameStage(stages[0].name);
        
    };

    return (
        <div className="App">
            {gameStage === "start" && <StartScreen startGame={startGame} />}
            {gameStage === "game" && (
                <Game
                    verifyLetter={verifyLetter}
                    pickedWord={pickedWord}
                    pickedCategory={pickedCategory}
                    letters={letters}
                    guessedLetters={guessedLetters}
                    wrongLetters={wrongLetters}
                    guesses={guesses}
                    score={score}
                />
            )}
            {gameStage === "end" && <GameOver retry={retry} score={score} word={pickedWord} />}
        </div>
    );
}

export default App;
