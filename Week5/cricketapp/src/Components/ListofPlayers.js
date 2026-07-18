import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Sachin", score: 95 },
        { name: "Virat", score: 82 },
        { name: "Dhoni", score: 67 },
        { name: "Rohit", score: 88 },
        { name: "Gill", score: 45 },
        { name: "Hardik", score: 71 },
        { name: "Rahul", score: 60 },
        { name: "Jadeja", score: 77 },
        { name: "Bumrah", score: 52 },
        { name: "Shami", score: 69 },
        { name: "Surya", score: 90 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>

            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <h2>Players with score below 70</h2>

            {below70.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

        </div>
    );
}

export default ListofPlayers;