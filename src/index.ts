/**
 * CE.SDK Player Starterkit - Main Entry Point
 *
 * A playback-only video player with no editing capabilities.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initVideoPlayer } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-video-player-user',

  // IMG.LY CDN (for quick testing only, NOT recommended for production)

  // Local assets for development

};

// ============================================================================
// Initialize Player
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initVideoPlayer(cesdk);

    // ============================================================================
    // Scene Loading
    // ============================================================================

    await cesdk.loadFromURL(
      'https://cdn.img.ly/packages/imgly/plugin-marketing-asset-source-web/1.0.0/assets/templates/video-fashion-portfolio/scene.scene'
    );

    cesdk.actions.run('zoom.toPage', {
      page: 'first',
      autoFit: true,
      padding: 24
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
