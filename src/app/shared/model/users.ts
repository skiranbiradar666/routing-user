

export interface Iusers {

    userName: string;
    userId: string;
    userRole: string;
    profileDescription: string;
    profileImage: string;
    skills: string[];
    experienceYears: number;
    isActive: boolean;
    address: Address

}

export interface Address{
    current : current 
    permanent : current
}

export interface current{
    city: string;
    state: string;
    country: string;
    zipcode: string;
}