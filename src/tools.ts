import fs from "fs";

export const getJobs = () => {
	const data = fs.readFileSync("src/db/jobs.json", "utf-8");
	return JSON.parse(data);
};
