"use client";
import Image from "next/image";
import JobList from "./_components/JobList";
import { Joan } from "next/font/google";
import { JobProvider } from "@/context/JobContext";
import JobDetails from "./_components/JobDetails";

export default function Home() {
	return (
		<div>
			<JobProvider>
				<JobList />
				<JobDetails />
			</JobProvider>
		</div>
	);
}
