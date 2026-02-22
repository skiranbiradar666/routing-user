import { Iusers } from "../model/users";


export const userDetails :Array<Iusers> = [
    {
        userName: "May Doe",
        userId: "125",
        userRole: "Candidate",
        profileDescription: "Frontend developer with Angular experience.",
        profileImage: "data:image/png;base64,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",
        skills: ["Angular", "TypeScript", "HTML", "CSS"],
        experienceYears: 2,
        isActive: true,
        address: {
            current: {
                city: "Latur",
                state: "Maharashtra",
                country: "India",
                zipcode: "413512"
            },
            permanent: {
                city: "Latur",
                state: "Maharashtra",
                country: "India",
                zipcode: "413512"
            }
        }
    },
    // {
    //     userName: "Rahul",
    //     userId: "126",
    //     userRole: "Candidate",
    //     profileDescription: "Node.js backend developer working with MongoDB.",
    //     profileImage: "blob:https://example.com/4d5e6f",
    //     skills: ["Node.js", "Express", "MongoDB"],
    //     experienceYears: 3,
    //     isActive: true,
    //     address: {
    //         current: {
    //             city: "Mumbai",
    //             state: "Maharashtra",
    //             country: "India",
    //             zipcode: "400001"
    //         },
    //         permanent: {
    //             city: "Nagpur",
    //             state: "Maharashtra",
    //             country: "India",
    //             zipcode: "440001"
    //         }
    //     }
    // },
    {
        userName: "Sneha Deshmukh",
        userId: "127",
        userRole: "HR",
        profileDescription: "HR executive handling recruitment and onboarding.",
        profileImage: "data:image/jpeg;base64,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",
        skills: ["Recruitment", "Communication", "MS Excel"],
        experienceYears: 4,
        isActive: true,
        address: {
            current: {
                city: "Hyderabad",
                state: "Telangana",
                country: "India",
                zipcode: "500001"
            },
            permanent: {
                city: "Nanded",
                state: "Maharashtra",
                country: "India",
                zipcode: "431601"
            }
        }
    },
    // {
    //     userName: "Amit",
    //     userId: "128",
    //     userRole: "Admin",
    //     profileDescription: "System administrator managing infrastructure.",
    //     profileImage: "blob:https://example.com/10j11k",
    //     skills: ["Linux", "Networking", "AWS"],
    //     experienceYears: 5,
    //     isActive: false,
    //     address: {
    //         current: {
    //             city: "Bangalore",
    //             state: "Karnataka",
    //             country: "India",
    //             zipcode: "560001"
    //         },
    //         permanent: {
    //             city: "Solapur",
    //             state: "Maharashtra",
    //             country: "India",
    //             zipcode: "413001"
    //         }
    //     }
    // },
    {
        userName: "Pooja Gupta",
        userId: "129",
        userRole: "Candidate",
        profileDescription: "UI/UX designer with Figma and Adobe XD experience.",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdbmV3udBudqHkvYjHz7rs09P_Cyb3QHTMA&s",
        skills: ["Figma", "Adobe XD", "Wireframing"],
        experienceYears: 3,
        isActive: true,
        address: {
            current: {
                city: "Pune",
                state: "Maharashtra",
                country: "India",
                zipcode: "411002"
            },
            permanent: {
                city: "Kolhapur",
                state: "Maharashtra",
                country: "India",
                zipcode: "416003"
            }
        }
    },
    // {
    //     userName: "Vikas",
    //     userId: "130",
    //     userRole: "Candidate",
    //     profileDescription: "Full stack developer working on MEAN stack.",
    //     profileImage: "blob:https://example.com/14n15o",
    //     skills: ["Angular", "Node.js", "MongoDB", "Express"],
    //     experienceYears: 4,
    //     isActive: true,
    //     address: {
    //         current: {
    //             city: "Nashik",
    //             state: "Maharashtra",
    //             country: "India",
    //             zipcode: "422001"
    //         },
    //         permanent: {
    //             city: "Aurangabad",
    //             state: "Maharashtra",
    //             country: "India",
    //             zipcode: "431001"
    //         }
    //     }
    // },
    {
        userName: "Kiran Pandey",
        userId: "131",
        userRole: "Manager",
        profileDescription: "Project manager handling multiple web projects.",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizPVODquL9YnaosfI-jL8A8atNiky00_Maw&s",
        skills: ["Project Management", "Agile", "Scrum"],
        experienceYears: 7,
        isActive: true,
        address: {
            current: {
                city: "Delhi",
                state: "Delhi",
                country: "India",
                zipcode: "110001"
            },
            permanent: {
                city: "Jaipur",
                state: "Rajasthan",
                country: "India",
                zipcode: "302001"
            }
        }
    },
    {
        userName: "Neha Mane",
        userId: "132",
        userRole: "Candidate",
        profileDescription: "QA engineer experienced in manual and automation testing.",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTbKKhH9dSn7E0cXM-WUHRCAgDbHsMUfpeQ&s",
        skills: ["Selenium", "Manual Testing", "API Testing"],
        experienceYears: 3,
        isActive: false,
        address: {
            current: {
                city: "Chennai",
                state: "Tamil Nadu",
                country: "India",
                zipcode: "600001"
            },
            permanent: {
                city: "Madurai",
                state: "Tamil Nadu",
                country: "India",
                zipcode: "625001"
            }
        }
    },
    {
        userName: "Arjun Mehta",
        userId: "133",
        userRole: "Candidate",
        profileDescription: "Data analyst working with Python and Power BI.",
        profileImage: "data:image/png;base64,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",
        skills: ["Python", "Power BI", "SQL"],
        experienceYears: 2,
        isActive: true,
        address: {
            current: {
                city: "Indore",
                state: "Madhya Pradesh",
                country: "India",
                zipcode: "452001"
            },
            permanent: {
                city: "Bhopal",
                state: "Madhya Pradesh",
                country: "India",
                zipcode: "462001"
            }
        }
    }
];