import React from "react";
import Image from "next/image";
import { MainContainer, MainContent } from "./MainStyles";
import MainHeader from "../MainHeader/MainHeader";
import Card from "../Card/Card";

const Main = () => (
    <MainContainer>
        <MainHeader />
        <MainContent>
            <h1>
                New Games
            </h1>
            <Card>
                <Image src="/images/Overwatch2.jpg" alt="logo" width={602} height={338} />
                <h1>Overwatch 2</h1>
                <p>
                    Price: FREE
                    <br />
                    No. of players: 1-5
                    <br />
                    Genre: shooter
                    <br />
                    Age: 16+
                    <br />
                    Playtime: 5 - 55 min
                </p>
                <button>
                    <span>More Info</span>
                </button>
            </Card>
            <Card>
                <Image src="/images/Splatoon3.jpg" alt="logo" width={602} height={338} />
                <h1>Splatoon 3</h1>
                <p>
                    Price: 60 euro
                    <br />
                    No. of players: 1-8
                    <br />
                    Genre: shooter
                    <br />
                    Age: 10+
                    <br />
                    Playtime: 10 Min
                </p>
                <button>
                    <span>More Info</span>
                </button>
            </Card>
            <Card>
                <Image src="/images/SlimeRancher2.jpg" alt="logo" width={602} height={338} />
                <h1>Slime Rancher 2</h1>
                <p>
                    Price: 10 euro
                    <br />
                    No. of players: 1
                    <br />
                    Genre: adventure
                    <br />
                    Age: 6+
                    <br />
                    Playtime: 11 Hours
                </p>
                <button>
                    <span>More Info</span>
                </button>
            </Card>
            <Card>
                <Image src="/images/lastofus.jpg" alt="logo" width={602} height={338} />
                <h1>Last Of Us</h1>
                <p>
                    Price: 60 euro
                    <br />
                    No. of players: 1
                    <br />
                    Genre: zombie
                    <br />
                    Age: 16+
                    <br />
                    Playtime: 21 Hours
                </p>
                <button>
                    <span>More Info</span>
                </button>
            </Card>
        </MainContent>
    </MainContainer>
);

export default Main;
