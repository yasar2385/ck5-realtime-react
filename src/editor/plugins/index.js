import { Plugin } from 'ckeditor5';
import { appData } from '../../config/appData';

export class UsersIntegration extends Plugin {
    static get requires() {
        return ['Users'];
    }

    static get pluginName() {
        return 'UsersIntegration';
    }

    init() {
        const usersPlugin = this.editor.plugins.get('Users');

        // Load the users data.
        for (const user of appData.users) {
            const existingUser = usersPlugin.getUser(user.id);
            if (!existingUser) {
                usersPlugin.addUser(user);
                console.log(`👤 Added new user: ${user.name}`);
            } else {
                console.log(`ℹ️ User already exists: ${user.name}`);
            }
        }

        // Set the current user.

        // var currentUser = usersPlugin.getOperationAuthor();
        // if (currentUser.id != appData.userId) {
        //     usersPlugin.defineMe(appData.userId);
        // }
    }
}

export class CommentsIntegration extends Plugin {
    static get requires() {
        return ['CommentsRepository', 'UsersIntegration'];
    }

    static get pluginName() {
        return 'CommentsIntegration';
    }

    init() {
        const commentsRepositoryPlugin = this.editor.plugins.get('CommentsRepository');

        // Load the comment threads data.
        for (const commentThread of appData.commentThreads) {
            // commentsRepositoryPlugin.addCommentThread(commentThread);
        }
    }
}

export class TrackChangesIntegration extends Plugin {
    static get requires() {
        return ['TrackChanges', 'UsersIntegration'];
    }

    static get pluginName() {
        return 'TrackChangesIntegration';
    }

    init() {
        const trackChangesPlugin = this.editor.plugins.get('TrackChanges');

        // Load the suggestions data.
        // for (const suggestion of appData.suggestions) {
        //     trackChangesPlugin.addSuggestion(suggestion);
        // }
    }
}

