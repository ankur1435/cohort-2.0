import { useMemo, useState } from "react"

const words = ["hii", "my", "name", "is", "far", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i=0; i<=TOTAL_LINES; i++) {
    let sentence = "";
    for (let j=0; j<=words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

export function Assignment2() {
    
    const [filter, setFilter] = useState("");
    const [sentences, setSentences] = useState(ALL_WORDS);

    const filteredSentence = useMemo(() => {
        return sentences.filter(x => x.includes(filter));
    }, [sentences, filter])

    return (
        <div>
            <input type="text" onChange={(e) => {
                setFilter(e.target.value)
            }}></input>
            {filteredSentence.map(word => <div>
                {word}
            </div>)}
        </div>
    )
}