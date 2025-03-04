"use client";
import { useJobContext } from "@/context/JobContext";
import ApplyNowButton from "./ApplyNowButton";

const JobDetails = () => {
	const { selectedJob, setSelectedJob, appliedJobs, setAppliedJobs } =
		useJobContext();

	if (!selectedJob) return null;

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black/80'>
			<div className='bg-white p-6 rounded-lg shadow-lg max-w-lg w-full'>
				<h2 className='text-2xl font-bold mb-2'>{selectedJob.title}</h2>
				<p className='text-gray-600'>
					{selectedJob.company} - {selectedJob.location}
				</p>
				<p className='text-gray-800 font-medium'>
					Salary: {selectedJob.salary}
				</p>
				<h3 className='text-lg font-semibold mt-4'>Required Skills:</h3>
				<ul className='list-disc list-inside'>
					{selectedJob.requiredSkills.map((skill: string) => (
						<li key={skill} className='text-gray-700'>
							{skill}
						</li>
					))}
				</ul>
				<div className=' w-full flex justify-between'>
					<button
						onClick={() => setSelectedJob(null)}
						className='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'>
						Close
					</button>
					<ApplyNowButton
						appliedJobs={appliedJobs}
						setAppliedJobs={setAppliedJobs}
						selectedJobID={selectedJob.id}
					/>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
