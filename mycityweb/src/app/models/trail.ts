export class Trail {
    id: string;
    category: string; //ie: vancouver
    name: string;
    approved: boolean;
    description: string; // html
    rating: number;
    voteCount: number;
    region: string;    //ie: Tri-city
    difficulty: string;  // hard, medium, easy
    time: number;   // hours/minutes
    roundTrip: number;
    camping: boolean;
    dogFriendly: boolean;
    publicTransit: boolean;
    images: {
        path: string,
        title: string
    }[];
    address: string;
    lat: number;
    alt: number;
    hashtags: string;
    thumbnail: string;
    approvers: string[]; // email address of people who approved
}
