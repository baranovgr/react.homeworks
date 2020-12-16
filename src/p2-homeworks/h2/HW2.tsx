import React, {useState} from "react";
import Affairs from "./Affairs";
import {v1} from "uuid";

// types
export type AffairPriorityType = "high" | "middle" | "low"
export type AffairType = {
    _id: string
    name: string
    priority: FilterType
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: v1(), name: "React", priority: "high"},
    {_id: v1(), name: "anime", priority: "low"},
    {_id: v1(), name: "games", priority: "low"},
    {_id: v1(), name: "work", priority: "high"},
    {_id: v1(), name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === "all") return affairs;
    return affairs.filter(affair => affair.priority === filter);
}
export const deleteAffair = (affairs: Array<AffairType>, _id: string) => { // need to fix any
     return affairs.filter(affair => affair._id !== _id); // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");
    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = ( _id: string) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    );
}

export default HW2;
