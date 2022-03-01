import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { SpeakerData } from "../../../src/types/speaker-data";
import { HttpStatusCode, RequestMethod } from "../../../src/types/http-types";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms: number): Promise<void> =>
	new Promise((resolve: (value: void) => void) => {
		setTimeout(resolve, ms);
	});

export default async function speakerWithIdHandler(req: NextApiRequest, res: NextApiResponse<SpeakerData | void>): Promise<void> {
	const id = req?.query.id as string;
	const jsonFile = path.resolve("./", "db.json");
	const speakerFromRequest: SpeakerData = req?.body;

	switch (req?.method) {
		case RequestMethod.DELETE:
			if (await deleteSpeaker(jsonFile, id)) {
				res.status(HttpStatusCode.NO_CONTENT);
				console.log(`DELETE /api/speakers/${id} status: ${res.statusCode}`);
				res.send();
			} else {
				res.status(HttpStatusCode.BAD_REQUEST);
				console.log(`DELETE /api/speakers/${id} status: ${res.statusCode}`);
				res.send();
			}
			break;
		case RequestMethod.GET:
			const speakerFromFile = await retrieveSpeaker(jsonFile, id);
			if (speakerFromFile) {
				res.status(HttpStatusCode.OK);
				console.log(`GET /api/speakers/${id} status: ${res.statusCode}`);
				res.send(speakerFromFile);
			} else {
				res.status(HttpStatusCode.NOT_FOUND);
				console.log(`GET /api/speakers/${id} status: ${res.statusCode}`);
				res.send();
			}
			break;
		case RequestMethod.PUT:
			if (await updateSpeaker(jsonFile, id, speakerFromRequest)) {
				res.status(HttpStatusCode.NO_CONTENT);
				console.log(`PUT /api/speakers/${id} status: ${res.statusCode}`);
				res.send();
			} else {
				res.status(HttpStatusCode.BAD_REQUEST);
				console.log(`PUT /api/speakers/${id} status: ${res.statusCode}`);
				res.send();
			}
			break;
		default:
			res.status(HttpStatusCode.METHOD_NOT_ALLOWED);
			console.log(`${req?.method} /api/speakers/${id} status: ${res.statusCode}`);
			res.send();
	}
}

async function deleteSpeaker(jsonFile: string, id: string): Promise<boolean> {
	let speakers: SpeakerData[] | null | undefined;
	let success: boolean;
	try {
		speakers = await retrieveSpeakers(jsonFile);
		speakers = speakers?.filter((s: SpeakerData): boolean => s.id !== id);
		if (speakers) {
			await writeFile(jsonFile, JSON.stringify({ speakers }, null, 2));
			success = true;
		} else {
			success = false;
		}
	} catch (error) {
		console.log(String(error));
		success = false;
	}
	return success;
}

async function retrieveSpeaker(jsonFile: string, id: string): Promise<SpeakerData | null | undefined> {
	let speakers: SpeakerData[] | null;
	let speaker: SpeakerData | null | undefined;
	try {
		speakers = await retrieveSpeakers(jsonFile);
		speaker = speakers?.find((s: SpeakerData): boolean => s.id === id);
	} catch (error) {
		console.log(String(error));
		speaker = null;
	}
	return speaker;
}

async function retrieveSpeakers(jsonFile: string): Promise<SpeakerData[] | null> {
	let speakers: SpeakerData[] | null;
	try {
		const fileData = await readFile(jsonFile);
		await delay(1000);
		speakers = JSON.parse(fileData).speakers;
	} catch (error) {
		console.log(String(error));
		speakers = null;
	}
	return speakers;
}

async function updateSpeaker(jsonFile: string, id: string, speaker: SpeakerData): Promise<boolean> {
	let speakers: SpeakerData[] | null | undefined;
	let success: boolean;
	try {
		speakers = await retrieveSpeakers(jsonFile);
		speakers = speakers?.map((s: SpeakerData): SpeakerData => (s.id === id ? { ...speaker, id } : s));
		if (speakers) {
			await writeFile(jsonFile, JSON.stringify({ speakers }, null, 2));
			success = true;
		} else {
			success = false;
		}
	} catch (error) {
		console.log(String(error));
		success = false;
	}
	return success;
}
