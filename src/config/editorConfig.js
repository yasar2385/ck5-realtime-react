// editorConfig.js
import {
    Autosave,
    Essentials,
    Paragraph,
    CloudServices,
    Mention,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Highlight,
    Heading,
    Link,
    AutoLink,
    BlockQuote,
    HorizontalLine,
    CodeBlock,
    Indent,
    IndentBlock,
    Alignment,
    BalloonToolbar
} from 'ckeditor5';

import {
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
    LineHeight
} from 'ckeditor5-premium-features';

import {
    LICENSE_KEY,
    DOCUMENT_ID,
    CLOUD_SERVICES_TOKEN_URL,
    CLOUD_SERVICES_WEBSOCKET_URL
} from './editorEnv';

export function buildEditorConfig(refs) {
    const {
        editorPresenceRef,
        editorContainerRef,
        editorAnnotationsRef,
        editorRevisionHistoryRef,
        editorRevisionHistoryEditorRef,
        editorRevisionHistorySidebarRef,
        AdditionalPlugins
    } = refs;
    var defaultPlugins = [
        Alignment, AutoLink, Autosave, BalloonToolbar, BlockQuote, Bold, CloudServices, Code, CodeBlock, Comments, Essentials,
        FontBackgroundColor, FontColor, FontFamily, FontSize, Heading, Highlight, HorizontalLine, Indent, IndentBlock, Italic,
        LineHeight, Link, Mention, Paragraph, PresenceList, RealTimeCollaborativeComments, RealTimeCollaborativeEditing,
        RealTimeCollaborativeRevisionHistory, RealTimeCollaborativeTrackChanges, RevisionHistory, Strikethrough,
        Subscript, Superscript, TrackChanges, TrackChangesData, TrackChangesPreview, Underline];
    

    return {
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
                'fontSize',
                'fontFamily',
                'fontColor',
                'fontBackgroundColor',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                'link',
                'highlight',
                'blockQuote',
                'codeBlock',
                '|',
                'alignment',
                'lineHeight',
                '|',
                'outdent',
                'indent'
            ],
            shouldNotGroupWhenFull: false
        },
        plugins: defaultPlugins,
        extraPlugins:AdditionalPlugins || [],
        balloonToolbar: ['comment', '|', 'bold', 'italic', '|', 'link'],
        cloudServices: {
            tokenUrl: CLOUD_SERVICES_TOKEN_URL,
            webSocketUrl: CLOUD_SERVICES_WEBSOCKET_URL
        },
        collaboration: {
            channelId: DOCUMENT_ID
        },
        comments: {
            editorConfig: {
                extraPlugins: [Bold, Italic, Mention],
                mention: {
                    feeds: [
                        {
                            marker: '@',
                            feed: []
                        }
                    ]
                }
            }
        },
        fontFamily: {
            supportAllValues: true
        },
        fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 22],
            supportAllValues: true
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
            ]
        },
        initialData: '<h2>Welcome to CKEditor 5 🎉</h2><p>Start typing here...</p>',
        licenseKey: LICENSE_KEY,
        lineHeight: { supportAllValues: true },
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: { download: 'file' }
                }
            }
        },
        menuBar: { isVisible: true },
        placeholder: 'Type or paste your content here!',
        presenceList: { container: editorPresenceRef.current },
        trackChanges: {
            enabled: true // ✅ this enables Track Changes by default
        },
        revisionHistory: {
            editorContainer: editorContainerRef.current,
            viewerContainer: editorRevisionHistoryRef.current,
            viewerEditorElement: editorRevisionHistoryEditorRef.current,
            viewerSidebarContainer: editorRevisionHistorySidebarRef.current,
            resumeUnsavedRevision: true
        },
        sidebar: { container: editorAnnotationsRef.current }
    };
}
