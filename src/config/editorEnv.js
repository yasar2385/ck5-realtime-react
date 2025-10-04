// editorEnv.js
// =============================
// 🔐 CKEditor Cloud/Collaboration Environment Config
// =============================

// CKEditor license key (required for premium features)
export const LICENSE_KEY = import.meta.env.VITE_CKEDITOR_LICENSE_KEY || 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjA3NDU1OTksImp0aSI6IjRmMjNlM2Q1LTRjNGYtNDc2Ny04MzVlLTc3ZTk5ZWIyODA0YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImFkODVlOWQ5In0.O4n7JP6J9u9vgpEgkY9IgvGBmmlW54RefHp43XHTMO86qn6m9fqoWvUxkXCdTPxDeP5-nocuSSZ2UEm_ImaTvQ';

// Document ID for collaboration (should be unique per doc)
export const DOCUMENT_ID = import.meta.env.VITE_CKEDITOR_DOCUMENT_ID || 'test-document-123';

// CKEditor Cloud Services URLs
export const CLOUD_SERVICES_TOKEN_URL =
	import.meta.env.VITE_CKEDITOR_TOKEN_URL || 'https://vzrgs33o40gw.cke-cs.com/token/dev/678b8977923d2bfa3779ec616b050268badfa8690ecab58f8511aec00017?limit=10';

export const CLOUD_SERVICES_WEBSOCKET_URL =
	import.meta.env.VITE_CKEDITOR_WEBSOCKET_URL || 'wss://vzrgs33o40gw.cke-cs.com/ws';

// You can also define other backend API endpoints related to documents or collaboration here:
export const BACKEND_API_BASE_URL =
	import.meta.env.VITE_BACKEND_API_BASE_URL || 'https://your-api-domain.com/api';

// Example usage for local testing
// export const CLOUD_SERVICES_TOKEN_URL = 'http://localhost:3000/api/token';
// export const CLOUD_SERVICES_WEBSOCKET_URL = 'wss://your-websocket-server.example/ws';
