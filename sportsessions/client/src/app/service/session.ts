import { Student } from "./student";

export class Session{
    _id?: string;
    level: String;
    start_date: Date;
    end_date: Date;
    session_day: String;
    session_time: String;
    instructor: String;
    students: Student[];
}