/**
 * Configuration file for Jitsi Meet API library.
 */

const config = {
    // Other configuration options...

    /**
     * Flag to switch between getUserMedia and getDisplayMedia for screen capture in Electron.
     * @type {boolean}
     */
    useGetDisplayMediaForScreenCapture: false,

    /**
     * Audio quality settings for screen sharing.
     * @type {Object}
     */
    audioQuality: {
        stereo: false
    },

    /**
     * Frame rate settings for desktop sharing.
     * @type {Object}
     */
    desktopSharingFrameRate: {
        min: 5,
        max: 30
    },

    /**
     * Resolution settings for desktop sharing.
     * @type {Object}
     */
    desktopSharingResolution: {
        width: {
            min: 640,
            max: 1920
        },
        height: {
            min: 480,
            max: 1080
        }
    },

    /**
     * Screen share settings for getDisplayMedia.
     * @type {Object}
     */
    screenShareSettings: {
        desktopPreferCurrentTab: false,
        desktopSystemAudio: 'include',
        desktopSurfaceSwitching: 'include',
        desktopDisplaySurface: 'monitor',
        desktopSelfBrowserSurface: 'exclude'
    }
};

module.exports = config;
