/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NoRgNARATAdA7PCkpwCyrp1AOAzCANgFZUiTUoBObKEXABkvz3uIO2zvSQgFMA7JPTCgw4YeHEBdSPV7YiAQ15EIUoA=
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

import './App.css';

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjA3NDU1OTksImp0aSI6IjRmMjNlM2Q1LTRjNGYtNDc2Ny04MzVlLTc3ZTk5ZWIyODA0YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImFkODVlOWQ5In0.O4n7JP6J9u9vgpEgkY9IgvGBmmlW54RefHp43XHTMO86qn6m9fqoWvUxkXCdTPxDeP5-nocuSSZ2UEm_ImaTvQ';

/**
 * Unique ID that will be used to identify this document. E.g. you may use ID taken from your database.
 * Read more: https://ckeditor.com/docs/ckeditor5/latest/api/module_collaboration-core_config-RealTimeCollaborationConfig.html
 */
const DOCUMENT_ID = '<YOUR_DOCUMENT_ID>';

const CLOUD_SERVICES_TOKEN_URL =
	'https://vzrgs33o40gw.cke-cs.com/token/dev/678b8977923d2bfa3779ec616b050268badfa8690ecab58f8511aec00017?limit=10';
const CLOUD_SERVICES_WEBSOCKET_URL = 'wss://vzrgs33o40gw.cke-cs.com/ws';

export default function EditorPage() {
	const editorPresenceRef = useRef(null);
	const editorContainerRef = useRef(null);
	const editorOutlineRef = useRef(null);
	const editorRef = useRef(null);
	const editorAnnotationsRef = useRef(null);
	const editorRevisionHistoryRef = useRef(null);
	const editorRevisionHistoryEditorRef = useRef(null);
	const editorRevisionHistorySidebarRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const cloud = useCKEditorCloud({ version: '47.0.0', premium: true });

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const { ClassicEditor, editorConfig } = useMemo(() => {
		if (cloud.status !== 'success' || !isLayoutReady) {
			return {};
		}

		const {
			ClassicEditor,
			Autosave,
			Essentials,
			Paragraph,
			Heading,
			Bold,
			Italic,
			Underline,
			Strikethrough,
			Code,
			Link,
			AutoLink,
			CloudServices,
			BlockQuote,
			Table,
			TableToolbar,
			TableProperties,
			TableCellProperties,
			CodeBlock,
			HorizontalLine,
			Mention,
			Highlight,
			List,
			ListProperties,
			TodoList,
			Indent,
			IndentBlock,
			Bookmark,
			PageBreak,
			BalloonToolbar
		} = cloud.CKEditor;
		const {
			RealTimeCollaborativeEditing,
			PresenceList,
			RealTimeCollaborativeComments,
			Comments,
			RealTimeCollaborativeTrackChanges,
			TrackChanges,
			TrackChangesData,
			TrackChangesPreview,
			RealTimeCollaborativeRevisionHistory,
			RevisionHistory,
			DocumentOutline,
			TableOfContents
		} = cloud.CKEditorPremiumFeatures;

		return {
			ClassicEditor,
			editorConfig: {
				toolbar: {
					items: [
						'undo',
						'redo',
						'|',
						'revisionHistory',
						'trackChanges',
						'comment',
						'|',
						'heading',
						'|',
						'bold',
						'italic',
						'underline',
						'|',
						'link',
						'insertTable',
						'highlight',
						'blockQuote',
						'codeBlock',
						'|',
						'bulletedList',
						'numberedList',
						'todoList',
						'outdent',
						'indent'
					],
					shouldNotGroupWhenFull: false
				},
				plugins: [
					AutoLink,
					Autosave,
					BalloonToolbar,
					BlockQuote,
					Bold,
					Bookmark,
					CloudServices,
					Code,
					CodeBlock,
					Comments,
					DocumentOutline,
					Essentials,
					Heading,
					Highlight,
					HorizontalLine,
					Indent,
					IndentBlock,
					Italic,
					Link,
					List,
					ListProperties,
					Mention,
					PageBreak,
					Paragraph,
					PresenceList,
					RealTimeCollaborativeComments,
					RealTimeCollaborativeEditing,
					RealTimeCollaborativeRevisionHistory,
					RealTimeCollaborativeTrackChanges,
					RevisionHistory,
					Strikethrough,
					Table,
					TableCellProperties,
					TableOfContents,
					TableProperties,
					TableToolbar,
					TodoList,
					TrackChanges,
					TrackChangesData,
					TrackChangesPreview,
					Underline
				],
				balloonToolbar: ['comment', '|', 'bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
				cloudServices: {
					tokenUrl: CLOUD_SERVICES_TOKEN_URL,
					webSocketUrl: CLOUD_SERVICES_WEBSOCKET_URL
				},
				collaboration: {
					channelId: DOCUMENT_ID
				},
				comments: {
					editorConfig: {
						extraPlugins: [Bold, Italic, List, Mention],
						mention: {
							feeds: [
								{
									marker: '@',
									feed: [
										/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#comments-with-mentions */
									]
								}
							]
						}
					}
				},
				documentOutline: {
					container: editorOutlineRef.current
				},
				heading: {
					options: [
						{
							model: 'paragraph',
							title: 'Paragraph',
							class: 'ck-heading_paragraph'
						},
						{
							model: 'heading1',
							view: 'h1',
							title: 'Heading 1',
							class: 'ck-heading_heading1'
						},
						{
							model: 'heading2',
							view: 'h2',
							title: 'Heading 2',
							class: 'ck-heading_heading2'
						},
						{
							model: 'heading3',
							view: 'h3',
							title: 'Heading 3',
							class: 'ck-heading_heading3'
						},
						{
							model: 'heading4',
							view: 'h4',
							title: 'Heading 4',
							class: 'ck-heading_heading4'
						},
						{
							model: 'heading5',
							view: 'h5',
							title: 'Heading 5',
							class: 'ck-heading_heading5'
						},
						{
							model: 'heading6',
							view: 'h6',
							title: 'Heading 6',
							class: 'ck-heading_heading6'
						}
					]
				},
				initialData:
					'<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
				licenseKey: LICENSE_KEY,
				link: {
					addTargetToExternalLinks: true,
					defaultProtocol: 'https://',
					decorators: {
						toggleDownloadable: {
							mode: 'manual',
							label: 'Downloadable',
							attributes: {
								download: 'file'
							}
						}
					}
				},
				list: {
					properties: {
						styles: true,
						startIndex: true,
						reversed: true
					}
				},
				mention: {
					feeds: [
						{
							marker: '@',
							feed: [
								/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
							]
						}
					]
				},
				menuBar: {
					isVisible: true
				},
				placeholder: 'Type or paste your content here!',
				presenceList: {
					container: editorPresenceRef.current
				},
				revisionHistory: {
					editorContainer: editorContainerRef.current,
					viewerContainer: editorRevisionHistoryRef.current,
					viewerEditorElement: editorRevisionHistoryEditorRef.current,
					viewerSidebarContainer: editorRevisionHistorySidebarRef.current,
					resumeUnsavedRevision: true
				},
				sidebar: {
					container: editorAnnotationsRef.current
				},
				table: {
					contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
				}
			}
		};
	}, [cloud, isLayoutReady]);

	useEffect(() => {
		if (editorConfig) {
			configUpdateAlert(editorConfig);
		}
	}, [editorConfig]);

	return (
		<div className="main-container">
			<div className="presence" ref={editorPresenceRef}></div>
			<div
				className="editor-container editor-container_classic-editor editor-container_include-outline editor-container_include-annotations"
				ref={editorContainerRef}
			>
				<div className="editor-container__editor-wrapper">
					<div className="editor-container__sidebar" ref={editorOutlineRef}></div>
					<div className="editor-container__editor">
						<div ref={editorRef}>{ClassicEditor && editorConfig && <CKEditor editor={ClassicEditor} config={editorConfig} />}</div>
					</div>
					<div className="editor-container__sidebar" ref={editorAnnotationsRef}></div>
				</div>
			</div>
			<div className="revision-history" ref={editorRevisionHistoryRef}>
				<div className="revision-history__wrapper">
					<div className="revision-history__editor" ref={editorRevisionHistoryEditorRef}></div>
					<div className="revision-history__sidebar" ref={editorRevisionHistorySidebarRef}></div>
				</div>
			</div>
		</div>
	);
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
	if (configUpdateAlert.configUpdateAlertShown) {
		return;
	}

	const isModifiedByUser = (currentValue, forbiddenValue) => {
		if (currentValue === forbiddenValue) {
			return false;
		}

		if (currentValue === undefined) {
			return false;
		}

		return true;
	};

	const valuesToUpdate = [];

	configUpdateAlert.configUpdateAlertShown = true;

	if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
		valuesToUpdate.push('LICENSE_KEY');
	}

	if (!isModifiedByUser(config.cloudServices?.tokenUrl, '<YOUR_CLOUD_SERVICES_TOKEN_URL>')) {
		valuesToUpdate.push('CLOUD_SERVICES_TOKEN_URL');
	}

	if (!isModifiedByUser(config.cloudServices?.webSocketUrl, '<YOUR_CLOUD_SERVICES_WEBSOCKET_URL>')) {
		valuesToUpdate.push('CLOUD_SERVICES_WEBSOCKET_URL');
	}

	if (valuesToUpdate.length) {
		window.alert(
			[
				'Please update the following values in your editor config',
				'to receive full access to Premium Features:',
				'',
				...valuesToUpdate.map(value => ` - ${value}`)
			].join('\n')
		);
	}
}
