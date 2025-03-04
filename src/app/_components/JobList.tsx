"use client";
import { useJobContext } from "@/context/JobContext";

const JobList = () => {
	const { jobs, setSelectedJob } = useJobContext();

	return (
		<div className='p-4 flex flex-col items-center'>
			<h2 className='text-xl font-bold mb-4'>Job Recommendations</h2>
			<ul className='space-y-4'>
				{jobs.map((job) => (
					<li
						key={job.id}
						className='p-4 border rounded shadow-md lg:w-fit'
						onClick={() => setSelectedJob(job)}>
						<h3 className='text-lg font-semibold'>{job.title}</h3>
						<p className='text-gray-600'>
							{job.company} - {job.location}
						</p>
						<p className='text-gray-800 font-medium'>Salary: {job.salary}</p>
						<div className='mt-2 flex items-center'>
							Match Score:
							<div
								className={`ml-4 w-full h-4 lg:w-[500px] rounded-3xl overflow-hidden relative  ${
									job.matchScore >= 80
										? "bg-green-100"
										: job.matchScore >= 50
										? "bg-yellow-100"
										: "bg-red-100"
								}`}>
								<div className='absolute left-[50%] top-[-2px] text-[13px]'>
									{job.matchScore}%
								</div>
								<div
									className={`h-full ${
										job.matchScore >= 80
											? "bg-green-500"
											: job.matchScore >= 50
											? "bg-yellow-500"
											: "bg-red-500"
									}`}
									style={{ width: `${job.matchScore}%` }}
								/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default JobList;
