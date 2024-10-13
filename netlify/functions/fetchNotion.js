const { Client } = require('@notionhq/client');

// Call our the env keys
const { NOTION_KEY, NOTION_ID } = process.env;

// Initializing a client
const notion = new Client({
	auth: NOTION_KEY,
});

exports.handler = async function (event, context) {
	try {
		const response = await notion.databases.query({
			database_id: NOTION_ID,
			filter: {
				property: 'Is Draft',
				checkbox: {
					equals: false,
				},
			},
		});
		return {
			statusCode: 200,
			body: JSON.stringify({ response }),
		};
	} catch (e) {
		console.error(e);
		return {
			statusCode: 500,
			body: e.toString(),
		};
	}
};
