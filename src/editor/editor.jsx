// App.jsx
import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from 'ckeditor5';
import { buildEditorConfig } from '../config/editorConfig';
import { handleEditorReady } from '../editor/Events';
import '../App.css';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import { UsersIntegration, CommentsIntegration, TrackChangesIntegration } from '../editor/plugins';


export default function App() {
    const editorPresenceRef = useRef(null);
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const editorAnnotationsRef = useRef(null);
    const editorRevisionHistoryRef = useRef(null);
    const editorRevisionHistoryEditorRef = useRef(null);
    const editorRevisionHistorySidebarRef = useRef(null);

    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        setIsLayoutReady(true);
        return () => setIsLayoutReady(false);
    }, []);

    const editorConfig = useMemo(() => {
        if (!isLayoutReady) return null;

        return buildEditorConfig({
            editorPresenceRef,
            editorContainerRef,
            editorAnnotationsRef,
            editorRevisionHistoryRef,
            editorRevisionHistoryEditorRef,
            editorRevisionHistorySidebarRef,
            AdditionalPlugins: [UsersIntegration, CommentsIntegration, TrackChangesIntegration]
        });
    }, [isLayoutReady]);
    useEffect(() => {
        if (editorConfig) {
            configUpdateAlert(editorConfig);
        }
    }, [editorConfig]);
    return (
        <div className="main-container">
            <div className="presence" ref={editorPresenceRef}></div>
            <div className="editor-container editor-container_classic-editor editor-container_include-annotations" ref={editorContainerRef}>
                <div className="editor-container__editor-wrapper">
                    <div className="editor-container__editor">
                        <div ref={editorRef}>
                            {editorConfig && <CKEditor editor={ClassicEditor} config={editorConfig} onReady={handleEditorReady} />}
                        </div>
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
