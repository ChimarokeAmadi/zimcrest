import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { mockJobs } from "@/app/Jobs/Jobs";

export interface Job {
	id: number;
	title: string;
	company: string;
	location: string;
	salary: string;
	requiredSkills: string[];
	matchScore: number;
}

interface JobContextType {
	jobs: Job[];
	userSkills: string[];
	selectedJob: Job | null;
	setSelectedJob: (job: Job | null) => void;
	appliedJobs: number[];
	setAppliedJobs: (appliedJobs: number[]) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

interface JobProviderProps {
	children: ReactNode;
}

export const JobProvider = ({ children }: JobProviderProps) => {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [userSkills, setUserSkills] = useState<string[]>([
		"React",
		"Next.js",
		"JavaScript",
	]);
	const [selectedJob, setSelectedJob] = useState<Job | null>(null);
	const [appliedJobs, setAppliedJobs] = useState<number[]>([]);

	useEffect(() => {
		setJobs(mockJobs);
	}, []);

	useEffect(() => {
		let data = localStorage.getItem("applied_jobs");
		if (data !== null) {
			return setAppliedJobs(JSON.parse(data));
		}
		setAppliedJobs([]);
	}, []);

	useEffect(() => {
		localStorage.setItem("applied_jobs", JSON.stringify(appliedJobs));
	}, [appliedJobs]);

	return (
		<JobContext.Provider
			value={{
				jobs,
				selectedJob,
				setSelectedJob,
				userSkills,
				appliedJobs,
				setAppliedJobs,
			}}>
			{children}
		</JobContext.Provider>
	);
};

export const useJobContext = () => {
	const context = useContext(JobContext);
	if (!context) {
		throw new Error("useJobContext must be used within a JobProvider");
	}
	return context;
};
