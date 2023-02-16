import { GetPlayers } from "@/protos/src/incoming/players/http_responses"
import { PlayerEntity } from "@/protos/src/domain/player";
import { useEffect, useState } from "react";

function getPlayers(setPlayers: Function) {
    fetch('http://192.168.0.121:8000/players').then(async resp => {
        // const players = new GetPlayers()
        
        setPlayers(GetPlayers.decode(new Uint8Array(await resp.arrayBuffer())))
        
        // const players = GetPlayers.deserializeBinary
        // console.log(players);
    })
}

export default function protos() {
    const [players, setPlayers] = useState(GetPlayers.create());

    useEffect(() => {
        getPlayers(setPlayers)
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Height</th>
                    </tr>
                </thead>
                <tbody>
                    {players.players.map((player: PlayerEntity) => {
                        return (
                            <tr key={player.id}>
                                <td>{player.name}</td>
                                <td>{player.age}</td>
                                <td>{player.height}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>      
        </>
    )
}
