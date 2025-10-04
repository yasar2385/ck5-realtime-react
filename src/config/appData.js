// Application data will be available under a global variable `appData`.
export const appData = {
    // Users data.
    users: [
        {
            id: 'user-1',
            name: 'Ayaz'
        },
        {
            id: 'user-2',
            name: 'Fayaz'
        }
    ],

    // The ID of the current user.
    currentUserId: 'user-1',

    // Comment threads data.
    commentThreads: [
        {
            threadId: 'thread-1',
            comments: [
                {
                    commentId: 'comment-1',
                    authorId: 'user-1',
                    content: '<p>Are we sure we want to use a made-up disorder name?</p>',
                    createdAt: new Date('09/20/2018 14:21:53'),
                    attributes: {}
                },
                {
                    commentId: 'comment-2',
                    authorId: 'user-2',
                    content: '<p>Why not?</p>',
                    createdAt: new Date('09/21/2018 08:17:01'),
                    attributes: {}
                }
            ],
            context: {
                type: 'text',
                value: 'Bilingual Personality Disorder'
            },
            unlinkedAt: null,
            resolvedAt: null,
            resolvedBy: null,
            attributes: {}
        }
    ],

    // Editor initial data.
    initialData:
        `<h2>
            <comment-start name="thread-1"></comment-start>
            Bilingual Personality Disorder
            <comment-end name="thread-1"></comment-end>
        </h2>
        <p>
            This may be the first time you hear about this
            <suggestion-start name="insertion:suggestion-1:user-2"></suggestion-start>
            made-up<suggestion-end name="insertion:suggestion-1:user-2"></suggestion-end>
            disorder but it actually is not that far from the truth.
            As recent studies show, the language you speak has more effects on you than you realize.
            According to the studies, the language a person speaks affects their cognition,
            <suggestion-start name="deletion:suggestion-2:user-1"></suggestion-start>
            feelings, <suggestion-end name="deletion:suggestion-2:user-1"></suggestion-end>
            behavior, emotions and hence <strong>their personality</strong>.
        </p>
        <p>
            This shouldn’t come as a surprise
            <a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
            that different regions of the brain become more active depending on the activity.
            The structure, information and especially
            <suggestion-start name="attribute:bold|ci1tcnk0lkep:suggestion-3:user-1"></suggestion-start><strong>the
            culture of languages<suggestion-end name="attribute:bold|ci1tcnk0lkep:suggestion-3:user-1"></strong></suggestion-end>
            varies substantially
            and the language a person speaks is an essential element of daily life.
        </p>`
};


export default appData;