import './EndScreen.css';

function EndScreen({ retry, score }) {
    return (
        <div>
            <h2>Game Over</h2>
            <h2>A sua pontuação foi: <span>{score}</span></h2>
            <button onClick={retry}>Tentar novamente</button>
        </div>
    )
}

export default EndScreen;