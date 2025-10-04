// events/index.js
// import { collaborationUsers, currentUserId } from '../collaborationUsers';
import { appData } from '../../config/appData';

/**
 * Called when the CKEditor instance is fully ready.
 * Used to attach user data and enable collaboration plugins.
 */
export function handleEditorReady(editor) {
    console.log('✅ CKEditor is ready:', editor);

    try {
        // --- 1. Setup collaboration users
        const usersPlugin = editor.plugins.get('Users');
        if (usersPlugin) {
            appData.users.forEach(user => {
                // Check before adding (avoid duplicates)
                const existingUser = usersPlugin.getUser(user.id);
                if (!existingUser) {
                    usersPlugin.addUser(user);
                    console.log(`👤 Added new user: ${user.name}`);
                } else {
                    console.log(`ℹ️ User already exists: ${user.name}`);
                }
            });
            try {
                // ✅ Safe defineMe() check

                // If the current user exists and is different, undefine first
                if (usersPlugin.me && usersPlugin.me.id !== appData.currentUserId) {
                    console.log(`🔁 Switching user from ${usersPlugin.me.id} → ${appData.currentUserId}`);
                    // usersPlugin.undefineMe();
                }

                if (!usersPlugin.me) {
                    usersPlugin.defineMe(appData.currentUserId);
                    console.log('✅ Defined active user:', appData.currentUserId);
                } else {
                    console.log('ℹ️ Active user already defined:', usersPlugin.me.name);
                }
            } catch (err) {
                console.error('❌ Error in handleEditorReady:', err);
            }

        }

        // --- 2. Enable Track Changes by default
        const trackChanges = editor.plugins.get('TrackChanges');
        if (trackChanges && !trackChanges.isEnabled) {
            trackChanges.enableCommand('trackChanges');
            trackChanges.isEnabled = true;
            console.log('📝 Track Changes enabled by default.');
        }

        // --- 3. Optionally: listen for comments or track-change events
        const commentsRepo = editor.plugins.get('CommentsRepository');
        if (commentsRepo) {
            /* 
            commentsRepo.adapter.on('addComment', comment => {
                console.log('💬 New comment added:', comment);
            });
             */
        }
    } catch (err) {
        console.error('❌ Error in handleEditorReady:', err);
    }
}
