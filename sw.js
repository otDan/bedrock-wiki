if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.257572d0.js",revision:null},{url:"assets/404.md.257572d0.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.e6a0beb5.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.e6a0beb5.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.ebde3f35.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.ebde3f35.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.f8e8d3f2.js",revision:null},{url:"assets/animation-controllers_death-commands.md.f8e8d3f2.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.af5a85a5.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.af5a85a5.lean.js",revision:null},{url:"assets/animation-controllers_index.md.073a8b63.js",revision:null},{url:"assets/animation-controllers_index.md.073a8b63.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.1c06b780.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.1c06b780.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.f0863208.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.f0863208.lean.js",revision:null},{url:"assets/app.bd6d6b24.js",revision:null},{url:"assets/blocks_applying-effects.md.c63f9398.js",revision:null},{url:"assets/blocks_applying-effects.md.c63f9398.lean.js",revision:null},{url:"assets/blocks_block-materials.md.da1dff7c.js",revision:null},{url:"assets/blocks_block-materials.md.da1dff7c.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.a3b06ccc.js",revision:null},{url:"assets/blocks_block-shapes.md.a3b06ccc.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.24c83f48.js",revision:null},{url:"assets/blocks_block-sounds.md.24c83f48.lean.js",revision:null},{url:"assets/blocks_block-tags.md.635513b5.js",revision:null},{url:"assets/blocks_block-tags.md.635513b5.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.bec06ffc.js",revision:null},{url:"assets/blocks_block-texture-variation.md.bec06ffc.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.76435114.js",revision:null},{url:"assets/blocks_blocks-experimental.md.76435114.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.d42ca52e.js",revision:null},{url:"assets/blocks_blocks-intro.md.d42ca52e.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.762109df.js",revision:null},{url:"assets/blocks_blocks-stable.md.762109df.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.fc6ca323.js",revision:null},{url:"assets/blocks_custom-crops.md.fc6ca323.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.b3a88d4c.js",revision:null},{url:"assets/blocks_custom-fluids.md.b3a88d4c.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.20773718.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.20773718.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.8373b36e.js",revision:null},{url:"assets/blocks_custom-tree.md.8373b36e.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.18db5926.js",revision:null},{url:"assets/blocks_fake-blocks.md.18db5926.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.b526aeb4.js",revision:null},{url:"assets/blocks_flipbook-textures.md.b526aeb4.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.fce26a54.js",revision:null},{url:"assets/blocks_head-like-rotation.md.fce26a54.lean.js",revision:null},{url:"assets/blocks_index.md.2aa2bb73.js",revision:null},{url:"assets/blocks_index.md.2aa2bb73.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.4dbc37d3.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.4dbc37d3.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.b41a5799.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.b41a5799.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.9f0b17a7.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.9f0b17a7.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.a2671c99.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.a2671c99.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.03b31188.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.29c09dd2.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.8f73d1b3.js",revision:null},{url:"assets/commands_block-states.md.8f73d1b3.lean.js",revision:null},{url:"assets/commands_damage.md.cfeb54f5.js",revision:null},{url:"assets/commands_damage.md.cfeb54f5.lean.js",revision:null},{url:"assets/commands_entity-counter.md.55b8d96c.js",revision:null},{url:"assets/commands_entity-counter.md.55b8d96c.lean.js",revision:null},{url:"assets/commands_index.md.dfb8b530.js",revision:null},{url:"assets/commands_index.md.dfb8b530.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.7f20c756.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.7f20c756.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.e2a0c690.js",revision:null},{url:"assets/commands_mcfunctions.md.e2a0c690.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.f7517dc1.js",revision:null},{url:"assets/commands_nbt-commands.md.f7517dc1.lean.js",revision:null},{url:"assets/commands_new-execute.md.b5911eae.js",revision:null},{url:"assets/commands_new-execute.md.b5911eae.lean.js",revision:null},{url:"assets/commands_on-first-join.md.1d0832cf.js",revision:null},{url:"assets/commands_on-first-join.md.1d0832cf.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.ac328d70.js",revision:null},{url:"assets/commands_on-first-world-load.md.ac328d70.lean.js",revision:null},{url:"assets/commands_on-player-death.md.43eef640.js",revision:null},{url:"assets/commands_on-player-death.md.43eef640.lean.js",revision:null},{url:"assets/commands_on-player-join.md.a3525fa2.js",revision:null},{url:"assets/commands_on-player-join.md.a3525fa2.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.05ec17e3.js",revision:null},{url:"assets/commands_on-player-leave.md.05ec17e3.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.44f6051a.js",revision:null},{url:"assets/commands_on-player-respawn.md.44f6051a.lean.js",revision:null},{url:"assets/commands_playsound.md.9af95c40.js",revision:null},{url:"assets/commands_playsound.md.9af95c40.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.a19ea833.js",revision:null},{url:"assets/commands_relative-coordinates.md.a19ea833.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.c931b874.js",revision:null},{url:"assets/commands_scoreboard-operations.md.c931b874.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.bc23f433.js",revision:null},{url:"assets/commands_scoreboard-timers.md.bc23f433.lean.js",revision:null},{url:"assets/commands_selectors.md.3053ccd6.js",revision:null},{url:"assets/commands_selectors.md.3053ccd6.lean.js",revision:null},{url:"assets/commands_tellraw.md.67fe041b.js",revision:null},{url:"assets/commands_tellraw.md.67fe041b.lean.js",revision:null},{url:"assets/concepts_contents.md.20cae943.js",revision:null},{url:"assets/concepts_contents.md.20cae943.lean.js",revision:null},{url:"assets/concepts_emojis.md.61f0dec8.js",revision:null},{url:"assets/concepts_emojis.md.61f0dec8.lean.js",revision:null},{url:"assets/concepts_index.md.e838be07.js",revision:null},{url:"assets/concepts_index.md.e838be07.lean.js",revision:null},{url:"assets/concepts_molang.md.f9e1fdc8.js",revision:null},{url:"assets/concepts_molang.md.f9e1fdc8.lean.js",revision:null},{url:"assets/concepts_namespaces.md.279b5d6a.js",revision:null},{url:"assets/concepts_namespaces.md.279b5d6a.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.f161c5ff.js",revision:null},{url:"assets/concepts_overwriting-assets.md.f161c5ff.lean.js",revision:null},{url:"assets/concepts_shaders.md.b38e8a11.js",revision:null},{url:"assets/concepts_shaders.md.b38e8a11.lean.js",revision:null},{url:"assets/concepts_sounds.md.a753fb44.js",revision:null},{url:"assets/concepts_sounds.md.a753fb44.lean.js",revision:null},{url:"assets/concepts_subpacks.md.f1cfabc1.js",revision:null},{url:"assets/concepts_subpacks.md.f1cfabc1.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.54e59d62.js",revision:null},{url:"assets/concepts_text-and-translations.md.54e59d62.lean.js",revision:null},{url:"assets/concepts_textures-list.md.d36a0b56.js",revision:null},{url:"assets/concepts_textures-list.md.d36a0b56.lean.js",revision:null},{url:"assets/contribute-how-to.md.946e2b60.js",revision:null},{url:"assets/contribute-how-to.md.946e2b60.lean.js",revision:null},{url:"assets/contribute-style.md.a600e8d9.js",revision:null},{url:"assets/contribute-style.md.a600e8d9.lean.js",revision:null},{url:"assets/contribute.md.12079753.js",revision:null},{url:"assets/contribute.md.12079753.lean.js",revision:null},{url:"assets/discord.md.fc0ebfbc.js",revision:null},{url:"assets/discord.md.fc0ebfbc.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.692c91f7.js",revision:null},{url:"assets/documentation_advanced-molang.md.692c91f7.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.fc32b02e.js",revision:null},{url:"assets/documentation_creative-categories.md.fc32b02e.lean.js",revision:null},{url:"assets/documentation_file-types.md.4bb58a86.js",revision:null},{url:"assets/documentation_file-types.md.4bb58a86.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.09453029.js",revision:null},{url:"assets/documentation_fog-ids.md.09453029.lean.js",revision:null},{url:"assets/documentation_index.md.8e0ecc49.js",revision:null},{url:"assets/documentation_index.md.8e0ecc49.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.de331082.js",revision:null},{url:"assets/documentation_material-config-description.md.de331082.lean.js",revision:null},{url:"assets/documentation_materials.md.30cdda74.js",revision:null},{url:"assets/documentation_materials.md.30cdda74.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.ea6244d2.js",revision:null},{url:"assets/documentation_pack-structure.md.ea6244d2.lean.js",revision:null},{url:"assets/documentation_projectiles.md.5db9a621.js",revision:null},{url:"assets/documentation_projectiles.md.5db9a621.lean.js",revision:null},{url:"assets/documentation_queries.md.988de255.js",revision:null},{url:"assets/documentation_queries.md.988de255.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.fa315ffb.js",revision:null},{url:"assets/documentation_shared-constructs.md.fa315ffb.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.379e4b09.js",revision:null},{url:"assets/documentation_sound-definitions.md.379e4b09.lean.js",revision:null},{url:"assets/entities_boat-entities.md.2e0eb03f.js",revision:null},{url:"assets/entities_boat-entities.md.2e0eb03f.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.9be45431.js",revision:null},{url:"assets/entities_detecting-other-entities.md.9be45431.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.bcbf5cfb.js",revision:null},{url:"assets/entities_disabling-team-damage.md.bcbf5cfb.lean.js",revision:null},{url:"assets/entities_dummy-components.md.e498a033.js",revision:null},{url:"assets/entities_dummy-components.md.e498a033.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.41b60751.js",revision:null},{url:"assets/entities_dummy-entities.md.41b60751.lean.js",revision:null},{url:"assets/entities_entity-attack.md.5cf273c7.js",revision:null},{url:"assets/entities_entity-attack.md.5cf273c7.lean.js",revision:null},{url:"assets/entities_entity-events.md.9d4b239a.js",revision:null},{url:"assets/entities_entity-events.md.9d4b239a.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.a40c171d.js",revision:null},{url:"assets/entities_entity-holds-item.md.a40c171d.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.25d1cc2e.js",revision:null},{url:"assets/entities_entity-intro-bp.md.25d1cc2e.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.0f83849f.js",revision:null},{url:"assets/entities_entity-intro-rp.md.0f83849f.lean.js",revision:null},{url:"assets/entities_entity-movement.md.522b3c14.js",revision:null},{url:"assets/entities_entity-movement.md.522b3c14.lean.js",revision:null},{url:"assets/entities_entity-properties.md.db14e07b.js",revision:null},{url:"assets/entities_entity-properties.md.db14e07b.lean.js",revision:null},{url:"assets/entities_flying-entities.md.47865eb6.js",revision:null},{url:"assets/entities_flying-entities.md.47865eb6.lean.js",revision:null},{url:"assets/entities_index.md.c2344d12.js",revision:null},{url:"assets/entities_index.md.c2344d12.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.4eb19006.js",revision:null},{url:"assets/entities_introduction-to-aec.md.4eb19006.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1a6b78e8.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1a6b78e8.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.a01ad1a5.js",revision:null},{url:"assets/entities_look-at-entity.md.a01ad1a5.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.1e5b2b98.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.1e5b2b98.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.cfe6e0be.js",revision:null},{url:"assets/entities_npc-dialogs.md.cfe6e0be.lean.js",revision:null},{url:"assets/entities_render-controllers.md.40ebf0a6.js",revision:null},{url:"assets/entities_render-controllers.md.40ebf0a6.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.c83ddf55.js",revision:null},{url:"assets/entities_runtime-identifier.md.c83ddf55.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.f7bf9747.js",revision:null},{url:"assets/entities_sleeping-entities.md.f7bf9747.lean.js",revision:null},{url:"assets/entities_solid-entities.md.e58fe549.js",revision:null},{url:"assets/entities_solid-entities.md.e58fe549.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.ddde68e4.js",revision:null},{url:"assets/entities_spawn-rules.md.ddde68e4.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.2298f9a6.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.2298f9a6.lean.js",revision:null},{url:"assets/entities_timers.md.ecd1fe8e.js",revision:null},{url:"assets/entities_timers.md.ecd1fe8e.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.6260a13b.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.6260a13b.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.01a05298.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.01a05298.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.417c0cdd.js",revision:null},{url:"assets/entities_village-mechanic.md.417c0cdd.lean.js",revision:null},{url:"assets/entities_vuc-full.md.9e6019df.lean.js",revision:null},{url:"assets/entities_vusr-full.md.ce67d1a9.js",revision:null},{url:"assets/entities_vusr-full.md.ce67d1a9.lean.js",revision:null},{url:"assets/graph-test.md.e20b5982.js",revision:null},{url:"assets/graph-test.md.e20b5982.lean.js",revision:null},{url:"assets/guide_addons.md.188d4365.js",revision:null},{url:"assets/guide_addons.md.188d4365.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.d0be03ff.js",revision:null},{url:"assets/guide_advancedmanifest.md.d0be03ff.lean.js",revision:null},{url:"assets/guide_blockbench.md.a29fdcbf.js",revision:null},{url:"assets/guide_blockbench.md.a29fdcbf.lean.js",revision:null},{url:"assets/guide_custom-entity.md.fde1e9fb.js",revision:null},{url:"assets/guide_custom-entity.md.fde1e9fb.lean.js",revision:null},{url:"assets/guide_custom-item.md.1b72c37f.js",revision:null},{url:"assets/guide_custom-item.md.1b72c37f.lean.js",revision:null},{url:"assets/guide_download-packs.md.d5232de8.js",revision:null},{url:"assets/guide_download-packs.md.d5232de8.lean.js",revision:null},{url:"assets/guide_format-version.md.5cc54519.js",revision:null},{url:"assets/guide_format-version.md.5cc54519.lean.js",revision:null},{url:"assets/guide_index.md.363215ca.js",revision:null},{url:"assets/guide_index.md.363215ca.lean.js",revision:null},{url:"assets/guide_introduction.md.167b04e3.js",revision:null},{url:"assets/guide_introduction.md.167b04e3.lean.js",revision:null},{url:"assets/guide_loot-table.md.243d55d7.js",revision:null},{url:"assets/guide_loot-table.md.243d55d7.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.5071ed48.js",revision:null},{url:"assets/guide_project-setup-android.md.5071ed48.lean.js",revision:null},{url:"assets/guide_project-setup.md.5d8a636d.js",revision:null},{url:"assets/guide_project-setup.md.5d8a636d.lean.js",revision:null},{url:"assets/guide_software-preparation.md.a6c9a03c.js",revision:null},{url:"assets/guide_software-preparation.md.a6c9a03c.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.2a486509.js",revision:null},{url:"assets/guide_troubleshooting.md.2a486509.lean.js",revision:null},{url:"assets/guide_understanding-json.md.92c23314.js",revision:null},{url:"assets/guide_understanding-json.md.92c23314.lean.js",revision:null},{url:"assets/hacktoberfest.md.dab923ad.js",revision:null},{url:"assets/hacktoberfest.md.dab923ad.lean.js",revision:null},{url:"assets/index.md.76093869.js",revision:null},{url:"assets/index.md.76093869.lean.js",revision:null},{url:"assets/items_attachables.md.b67da6d6.js",revision:null},{url:"assets/items_attachables.md.b67da6d6.lean.js",revision:null},{url:"assets/items_custom-armor.md.e9c31135.js",revision:null},{url:"assets/items_custom-armor.md.e9c31135.lean.js",revision:null},{url:"assets/items_custom-weapon.md.05e1376c.js",revision:null},{url:"assets/items_custom-weapon.md.05e1376c.lean.js",revision:null},{url:"assets/items_enchantments.md.3e350d33.js",revision:null},{url:"assets/items_enchantments.md.3e350d33.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.55698e4d.js",revision:null},{url:"assets/items_equipped-item-commands.md.55698e4d.lean.js",revision:null},{url:"assets/items_index.md.b339b122.js",revision:null},{url:"assets/items_index.md.b339b122.lean.js",revision:null},{url:"assets/items_item-identifiers.md.ab8abdd3.js",revision:null},{url:"assets/items_item-identifiers.md.ab8abdd3.lean.js",revision:null},{url:"assets/items_items-16.md.bf90e001.js",revision:null},{url:"assets/items_items-16.md.bf90e001.lean.js",revision:null},{url:"assets/items_items-intro.md.d1556c74.js",revision:null},{url:"assets/items_items-intro.md.d1556c74.lean.js",revision:null},{url:"assets/items_spawning-items.md.597347b8.js",revision:null},{url:"assets/items_spawning-items.md.597347b8.lean.js",revision:null},{url:"assets/items_spear.md.e6b7dfb2.js",revision:null},{url:"assets/items_spear.md.e6b7dfb2.lean.js",revision:null},{url:"assets/items_throwable.md.e676eb0d.js",revision:null},{url:"assets/items_throwable.md.e676eb0d.lean.js",revision:null},{url:"assets/items_tool-durability.md.27e6250c.js",revision:null},{url:"assets/items_tool-durability.md.27e6250c.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.00d6e7e3.js",revision:null},{url:"assets/items_troubleshooting-items.md.00d6e7e3.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.3b9cd56b.js",revision:null},{url:"assets/items_vanilla-usage-items.md.3b9cd56b.lean.js",revision:null},{url:"assets/items_vui-full.md.ccc2f5a6.js",revision:null},{url:"assets/items_vui-full.md.ccc2f5a6.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.2e92a6c6.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.2e92a6c6.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.cbaf669c.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.cbaf669c.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.3e724a2e.js",revision:null},{url:"assets/json-ui_best-practices.md.3e724a2e.lean.js",revision:null},{url:"assets/json-ui_index.md.392fe673.js",revision:null},{url:"assets/json-ui_index.md.392fe673.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.60e8cacf.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.60e8cacf.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.fbfcd258.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.fbfcd258.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.929231b4.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.929231b4.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.18fb0184.js",revision:null},{url:"assets/json-ui_string-to-number.md.18fb0184.lean.js",revision:null},{url:"assets/loot_index.md.bef376d1.js",revision:null},{url:"assets/loot_index.md.bef376d1.lean.js",revision:null},{url:"assets/loot_item-functions.md.d5750ca0.js",revision:null},{url:"assets/loot_item-functions.md.d5750ca0.lean.js",revision:null},{url:"assets/loot_loot-tables.md.aaf2601e.js",revision:null},{url:"assets/loot_loot-tables.md.aaf2601e.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.ac2ba540.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.ac2ba540.lean.js",revision:null},{url:"assets/loot_recipes.md.ec10d44d.js",revision:null},{url:"assets/loot_recipes.md.ec10d44d.lean.js",revision:null},{url:"assets/loot_trade-tables.md.6f9d4f35.js",revision:null},{url:"assets/loot_trade-tables.md.6f9d4f35.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.35e83573.js",revision:null},{url:"assets/loot_trading-behavior.md.35e83573.lean.js",revision:null},{url:"assets/meta_addon-performance.md.efa10e8b.js",revision:null},{url:"assets/meta_addon-performance.md.efa10e8b.lean.js",revision:null},{url:"assets/meta_index.md.eab21fe8.js",revision:null},{url:"assets/meta_index.md.eab21fe8.lean.js",revision:null},{url:"assets/meta_jq.md.a7b721f3.js",revision:null},{url:"assets/meta_jq.md.a7b721f3.lean.js",revision:null},{url:"assets/meta_style-guide.md.ba4467d9.js",revision:null},{url:"assets/meta_style-guide.md.ba4467d9.lean.js",revision:null},{url:"assets/meta_useful-links.md.5709bcd2.js",revision:null},{url:"assets/meta_useful-links.md.5709bcd2.lean.js",revision:null},{url:"assets/meta_using-schemas.md.4bada441.js",revision:null},{url:"assets/meta_using-schemas.md.4bada441.lean.js",revision:null},{url:"assets/meta_version-control.md.b2a82077.js",revision:null},{url:"assets/meta_version-control.md.b2a82077.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.ef6d7e13.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.ef6d7e13.lean.js",revision:null},{url:"assets/nbt_index.md.e8c13dde.js",revision:null},{url:"assets/nbt_index.md.e8c13dde.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.ec4b82dc.js",revision:null},{url:"assets/nbt_mcstructure.md.ec4b82dc.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.c4597046.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.c4597046.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.7e212587.js",revision:null},{url:"assets/nbt_step-by-step-example.md.7e212587.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.2f025215.js",revision:null},{url:"assets/nbt_structure-limits.md.2f025215.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.89c815a8.js",revision:null},{url:"assets/particles_disabling-particles.md.89c815a8.lean.js",revision:null},{url:"assets/particles_index.md.905fe53e.js",revision:null},{url:"assets/particles_index.md.905fe53e.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.55f87c08.js",revision:null},{url:"assets/particles_particles-and-sounds.md.55f87c08.lean.js",revision:null},{url:"assets/particles_particles.md.bfcac7f2.js",revision:null},{url:"assets/particles_particles.md.bfcac7f2.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.60bd9b4d.js",revision:null},{url:"assets/particles_vanilla-particles.md.60bd9b4d.lean.js",revision:null},{url:"assets/privacy.md.a8dab3ca.js",revision:null},{url:"assets/privacy.md.a8dab3ca.lean.js",revision:null},{url:"assets/scripting_api-environment.md.45201a91.js",revision:null},{url:"assets/scripting_api-environment.md.45201a91.lean.js",revision:null},{url:"assets/scripting_custom-command.md.39b48ae6.js",revision:null},{url:"assets/scripting_custom-command.md.39b48ae6.lean.js",revision:null},{url:"assets/scripting_game-tests.md.53ced792.js",revision:null},{url:"assets/scripting_game-tests.md.53ced792.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.c4555625.js",revision:null},{url:"assets/scripting_gametest-form.md.c4555625.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.e7b3d9d9.js",revision:null},{url:"assets/scripting_gametest-qna.md.e7b3d9d9.lean.js",revision:null},{url:"assets/scripting_index.md.b04001af.js",revision:null},{url:"assets/scripting_index.md.b04001af.lean.js",revision:null},{url:"assets/scripting_resources.md.494ed7e1.js",revision:null},{url:"assets/scripting_resources.md.494ed7e1.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.734f7eaf.js",revision:null},{url:"assets/scripting_saving-loading.md.734f7eaf.lean.js",revision:null},{url:"assets/scripting_script-net.md.7e5a605d.js",revision:null},{url:"assets/scripting_script-net.md.7e5a605d.lean.js",revision:null},{url:"assets/scripting_script-server.md.465214e4.js",revision:null},{url:"assets/scripting_script-server.md.465214e4.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.aecdcbc4.js",revision:null},{url:"assets/scripting_script-watchdog.md.aecdcbc4.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.0ce2a52f.js",revision:null},{url:"assets/scripting_scripting-intro.md.0ce2a52f.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.3b6175ef.js",revision:null},{url:"assets/scripting_starting-scripts.md.3b6175ef.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.3c269752.js",revision:null},{url:"assets/scripting_troubleshooting.md.3c269752.lean.js",revision:null},{url:"assets/scripting_typescript.md.53d83d5b.js",revision:null},{url:"assets/scripting_typescript.md.53d83d5b.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.a63e60dd.js",revision:null},{url:"assets/scripting_what-is-script.md.a63e60dd.lean.js",revision:null},{url:"assets/servers_index.md.dcd42091.js",revision:null},{url:"assets/servers_index.md.dcd42091.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.f91fe61e.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.f91fe61e.lean.js",revision:null},{url:"assets/servers_server-software.md.1aa527a2.js",revision:null},{url:"assets/servers_server-software.md.1aa527a2.lean.js",revision:null},{url:"assets/style.4b75bbf0.css",revision:null},{url:"assets/test.md.0607ff0f.js",revision:null},{url:"assets/test.md.0607ff0f.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.d80419f8.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.d80419f8.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.020f0645.js",revision:null},{url:"assets/visuals_animation-effects.md.020f0645.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.92b3d482.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.92b3d482.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.9a044919.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.9a044919.lean.js",revision:null},{url:"assets/visuals_death-animations.md.331a8267.js",revision:null},{url:"assets/visuals_death-animations.md.331a8267.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.49d56367.js",revision:null},{url:"assets/visuals_glowing-texture.md.49d56367.lean.js",revision:null},{url:"assets/visuals_index.md.0200bb73.js",revision:null},{url:"assets/visuals_index.md.0200bb73.lean.js",revision:null},{url:"assets/visuals_introduction.md.e8313292.js",revision:null},{url:"assets/visuals_introduction.md.e8313292.lean.js",revision:null},{url:"assets/visuals_leash-position.md.11ae1278.js",revision:null},{url:"assets/visuals_leash-position.md.11ae1278.lean.js",revision:null},{url:"assets/visuals_materials.md.717a6674.js",revision:null},{url:"assets/visuals_materials.md.717a6674.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.86c6dd50.js",revision:null},{url:"assets/visuals_math-based-animations.md.86c6dd50.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.43d15da5.js",revision:null},{url:"assets/visuals_player-geometry.md.43d15da5.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.08447f29.js",revision:null},{url:"assets/visuals_remove-shadows.md.08447f29.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.1b560ac2.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.1b560ac2.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.c2d4fd19.js",revision:null},{url:"assets/visuals_structure-presentation.md.c2d4fd19.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.3ff64cc7.js",revision:null},{url:"assets/vr_editing-your-first-model.md.3ff64cc7.lean.js",revision:null},{url:"assets/vr_index.md.8455609c.js",revision:null},{url:"assets/vr_index.md.8455609c.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.ec18d84e.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.ec18d84e.lean.js",revision:null},{url:"assets/vr_pack_setup.md.e750c39b.js",revision:null},{url:"assets/vr_pack_setup.md.e750c39b.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.d0883c72.js",revision:null},{url:"assets/world-generation_biome-tags.md.d0883c72.lean.js",revision:null},{url:"assets/world-generation_biomes.md.fd33cbfb.js",revision:null},{url:"assets/world-generation_biomes.md.fd33cbfb.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.c92e44b3.js",revision:null},{url:"assets/world-generation_custom-ores.md.c92e44b3.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.61a875ce.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.61a875ce.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.84e8dc8a.js",revision:null},{url:"assets/world-generation_feature-types.md.84e8dc8a.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.3478c8aa.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.3478c8aa.lean.js",revision:null},{url:"assets/world-generation_index.md.c3e72a01.js",revision:null},{url:"assets/world-generation_index.md.c3e72a01.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.4059934c.js",revision:null},{url:"assets/world-generation_structure-features.md.4059934c.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.610ac761.js",revision:null},{url:"assets/world-generation_surface-builder.md.610ac761.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.e6bc6ccb.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.e6bc6ccb.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
