{
	"version": 2,
	"builds": [
		{
			"src": "src/App.jsx",
			"use": "@vercel/node"
		}
	],
	"routes": [
		{
			"src": "/(.*)",
			"dest": "src/App.jsx"
		}
	]
}
