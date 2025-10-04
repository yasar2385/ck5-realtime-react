import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./landing/landing";
import EditorPage from "./editor/editor"; // create this

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/editorPage" element={<EditorPage />} />
		</Routes>
	);
}
