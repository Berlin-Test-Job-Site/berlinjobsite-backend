/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import cors from "cors";
import { employeeRouter } from "./routers/employeeRouter";
import dotenv from "dotenv";
import * as tools from "./tools";

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send(`
<html>
	<body>
	<h1>${process.env.APP_TITLE}</h1>
	<ul>
		<li>GET all employees - <a href="/employees">/employees</a></li>
	</ul>
	</body>
</html>
	`);
});

app.get("/jobs", (req, res) => {
	res.json(tools.getJobs());
});

app.use("/employees", employeeRouter);
