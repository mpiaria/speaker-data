import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { HttpStatusCode, RequestMethod } from "../../../src/types/http-types";
import { SpeakerData } from "../../../src/types/speaker-data";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms: number): Promise<void> =>
	new Promise((resolve: (value: void) => void) => {
		setTimeout(resolve, ms);
	});

export default async function defaultSpeakerHandler(req: NextApiRequest, res: NextApiResponse<SpeakerData[] | void>): Promise<void> {
	const jsonFile = path.resolve("./", "db.json");
	const speaker: SpeakerData = req?.body;

	switch (req?.method) {
		case RequestMethod.GET:
			const speakers = await retrieveSpeakers(jsonFile);
			speakers?.length > 0 ? res.status(HttpStatusCode.OK).send(speakers) : res.status(HttpStatusCode.NOT_FOUND).send([]);
			break;
		case RequestMethod.POST:
			(await createSpeaker(jsonFile, speaker)) ? res.status(HttpStatusCode.NO_CONTENT).send() : res.status(HttpStatusCode.BAD_REQUEST).send();
			break;
		default:
			break;
	}
}

async function createSpeaker(jsonFile: string, speaker: SpeakerData): Promise<boolean> {
	let id: string;
	let speakers: SpeakerData[] | null | undefined;
	let success: boolean;
	try {
		speakers = (await retrieveSpeakers(jsonFile)) || [];
		id = speakers.reduce(
			(previous: SpeakerData, current: SpeakerData, _index: number, _array: SpeakerData[]): SpeakerData => (+previous.id > +current.id ? previous : current),
		).id;
		speakers = [...speakers, { ...speaker, id: String(+id + 1) }];
		await writeFile(jsonFile, JSON.stringify({ speakers }, null, 2));
		success = true;
	} catch (error) {
		console.log(String(error));
		success = false;
	}
	return success;
}

async function retrieveSpeakers(jsonFile: string): Promise<SpeakerData[]> {
	let speakers: SpeakerData[];
	try {
		const fileData = await readFile(jsonFile);
		await delay(1000);
		speakers = JSON.parse(fileData).speakers;
	} catch (error) {
		console.log(String(error));
		speakers = [];
	}
	return speakers;
}
