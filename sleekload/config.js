//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| |
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.18.0

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "brazilian_portuguese"
// "english"
// "polish"
// "russian"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = true

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "logo.jpeg"

// Text to be shown on logo
config.logo_text = "Laid Back Gaming"

// Use the server's name for the logo
config.logo_servername = true

// Center logo?
// "true" or "false"
config.logo_center = false

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = true

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = false

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = ""

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = true

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
	"background1.jpg",
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = true

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 5000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 2000

// Enable background overlay?
// "true" or "false"
config.background_overlay = true

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 30

// Play music during the loading screen?
// "true" or "false"
config.music_enable = true

// Display current music name?
// "true" or "false"
config.music_show = true

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	{
		name: "oksami - Dreamboard",
		youtube: "https://www.youtube.com/watch?v=iJpwwwCVP94",
	},
	{
		name: "Kingdom Hearts 3 - Vector To The Heavens Remix",
		youtube: "https://www.youtube.com/watch?v=_X2DX8Vkyc8",
	},
	{
		name: "Faith Basoglu - Starboy (Remix)",
		youtube: "https://www.youtube.com/watch?v=V1OpWQpdwUo",
	},
	{
		name: "Assassin's Creed: Revelations - Main Theme",
		youtube: "https://www.youtube.com/watch?v=2KndDDQZveQ",
	},
	{
		name: "Kingdom Hearts 358/2 Days - Xion's Theme",
		youtube: "https://www.youtube.com/watch?v=QV6Apkaborw",
	},
	{
		name: "Final Fantasy VII - One Winged Angel (FalKKoNe Remix)",
		youtube: "https://www.youtube.com/watch?v=TPB7nCod5-g",
	},
	{
		name: "The Weeknd - House of Balloons / Glass Table Girls (Instrumental)",
		youtube: "https://www.youtube.com/watch?v=1PmPjyx9I2g",
	},
	{
		name: "GMOD Zombie Survival - Theme Song",
		youtube: "https://www.youtube.com/watch?v=lahXpkO3GwI",
	},
	{
		name: "Cyperpunk 2077 - Theme Song",
		youtube: "https://www.youtube.com/watch?v=WoaciaBBCvc",
	},
	{
		name: "Left 4 Dead - Main Menu",
		youtube: "https://www.youtube.com/watch?v=5CGqSkckg_4",
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 10

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
	"Welcome to Laid Back Gaming's Zombie Survival!",
	"Make sure to join the Discord server at discord.gg/lbg!",
	"Press F3 to change your zombie type.",
	"Make sure you read the MOTD before you start playing!",
	"Want to listen to the music? Make sure you are using Chromium.",
	"Donda > CLB",
	"CLB > Donda",
	"Type '!motd' to read the rules & guide!",
	"Make sure to check out Laid Back Gaming's other servers! Like Prophunt!",
	"Zombie Survival > Zombie Escape",
]

// Random message order?
// "true" or "false"
config.messages_random_order = true

// Delay between message changes
// in milliseconds
config.messages_delay = 10000

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 1000

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = true
