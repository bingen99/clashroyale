export interface Clan {
    id: any;
    name: string;
    description: Location;
    location: Location;
    memberList: ClanMember[];
    tag: string;
    clanChestStatus: 'INACTIVE' | 'ACTIVE' | 'COMPLETED' | 'UNKNOWN';
    clanChestLevel: number;
    clanScore: number;
    clanChestMaxLevel: number;
    clanWarTrophies: number;
    requiredTrophies: number;
    donationsPerWeek: number;
    badgeId: number;
    type: 'OPEN' | 'INVITE_ONLY' | 'CLOSED';
    members: number;
    clanChestPoints: number;
    badgeUrls: BadgeUrls;
}


export interface ClanMember {
    lastSeen: string;
    arena: Arena;
    clanChestPoints: number;
    tag: string;
    name: string;
    role: string;
    expLevel: number;
    trophies: number;
    clanRank: number;
    previousClanRank: number;
    donations: number;
    donationsReceived: number;
}

export interface Location {
    localizedName: string;
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
}

export interface Arena {

}

export interface BadgeUrls {

}
