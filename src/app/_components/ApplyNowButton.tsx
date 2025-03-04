"use client";

export default function ApplyNowButton({
	appliedJobs,
	setAppliedJobs,
	selectedJobID,
}: {
	appliedJobs: number[];
	setAppliedJobs: (appliedJobs: number[]) => void;
	selectedJobID: number;
}) {
	const handleApply = (id: number) => {
		if (appliedJobs?.includes(id)) {
			let filteredIds = appliedJobs.filter((jobId) => jobId !== id);
			setAppliedJobs(filteredIds);
		} else {
			setAppliedJobs([...appliedJobs, id]);
		}
	};
	return (
		<button
			onClick={() => {
				handleApply(selectedJobID);
			}}
			className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700'>
			{appliedJobs?.includes(selectedJobID) ? "Applied ✅" : "Apply Now!"}
		</button>
	);
}
