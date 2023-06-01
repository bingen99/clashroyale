export interface Tournament {
    membersList: TournamentMember[];
    status: string;
    preparationDuration: number;
    createdTime: string;
    startedTime: string;
    endedTime: string;
    firstPlaceCardPrize: number;
    gameMode: GameMode;
    duration: number;
    type: string;
    tag: string;
    creatorTag: string;
    name: string;
    description: string;
    capacity: number;
    maxCapacity: number;
    levelCap: number;
}

interface TournamentMember {
    rank: number;
    previousRank: number;
    clan: PlayerClan;
    tag: string;
    name: string;
    score: number;
}

interface PlayerClan {
    // Properties of PlayerClan interface here
}

interface GameMode {
    id: number;
    name: string;
}
