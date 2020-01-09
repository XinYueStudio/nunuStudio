"use strict";

/**
 * LocaleEN defines text of the GUI for the English language.
 * 
 * @static
 * @class LocaleEN
 */
LocaleManager.register(
{
	meta:
	{
		language: "EN",
		name: "English",
		version: 1
	},

	//Actions
	reverse: "Reverse",
	delete: "Delete",
	copy: "Copy",
	paste: "Paste",
	cut: "Cut",
	duplicate: "Duplicate",
	rename: "Rename",
	renameObject: "Rename object",
	renameMaterial: "Rename material",
	renameTexture: "Rename texture",
	renameFont: "Rename font",
	deleteObjects: "Delete objects?",
	deleteMaterial: "Delete material?",
	deleteTexture: "Delete texture?",
	select: "Select",
	redo: "Redo",
	undo: "Undo",
	add: "Add",
	mix: "Mix",
	multiply: "Multiply",
	setTransparent: "Set transparent",

	//Context menu
	computeNormals: "Compute normals",
	applyTransformation: "Apply transformation",
	sceneEditor: "Scene editor",
	objectEditor: "Object editor",
	scriptEditor: "Script editor",
	particleEditor: "Particle editor",
	recenterGeometries: "Recenter geometries",
	enable: "Enable",
	disable: "Disable",
	static: "Static",
	dynamic: "Dynamic",
	createScene: "Create scene",
	toInstancedMesh: "To Instanced Mesh",

	//Objects
	particleEmitter: "Particle Emitter",
	cubeCamera: "Cube camera",
	positionalAudio: "Positional Audio",
	audio: "Audio",
	container: "Container",
	sprite: "Sprite",
	perspectiveCamera: "Perspective Camera",
	orthographicCamera: "Orthographic Camera",
	lensFlare: "Lens flare",
	htmlView: "HTML View",
	orbitControls: "Orbit Controls",
	firstPersonControls: "First Person Controls",
	
	//Geometries
	box: "Box",
	sphere: "Sphere",
	cylinder: "Cylinder",
	convexHull: "ConvexHull",
	cube: "Cube",
	torus: "Torus",
	torusKnot: "Torus Knot",
	cone: "Cone",

	//Properties
	name: "Name",
	side: "Side",
	position: "Position",
	rotation: "Rotation",
	scale: "Scale",
	uuid: "UUID",
	repeat: "Repeat",
	offset: "Offset",
	center: "Center",
	wrapHor: "Wrap Hor.",
	wrapVert: "Wrap Vert.",
	clampEdge: "Clamp to Edge",
	repeatMirror: "Repeat Mirrored",
	premulAlpha: "Premul. Alpha",
	vector: "Vector",
	type: "Type",
	physics: "Physics",
	size: "Size",
	viewport: "Viewport",
	mode: "Mode",
	anchor: "Anchor",
	antialiasing: "Antialiasing",
	exposure: "Exposure",
	backend: "Back-end",
	whitepoint: "Whitepoint",
	tonemapping: "Tonemapping",
	shadows: "Shadows",
	shadowType: "Shadows type",
	shadowsAutoUpdate: "Shadow Auto Update",
	autoClear: "Auto Clear",
	autoClearColor: "Auto Clear Color",
	autoClearDepth: "Auto Clear Depth",
	autoClearStencil: "Auto Clear Stencil",
	checkShaderErrors: "Check Shaders",
	clearColor: "Clear color",
	clearDepth: "Clear depth",
	clearStencil: "Clear stencil",
	stencil: "Stencil",
	sortObjects: "Sort objects",
	gammaFactor: "Gamma Factor",
	gammaInput: "Gamma Input",
	gammaOutput: "Gamma Output",
	precision: "Precision",
	alpha: "Alpha",
	premultipliedAlpha: "Premultiply Alpha",
	preserveDrawingBuffer: "Preserver Buffers",
	powerPreference: "Power Preference",
	logarithmicDepthBuffer: "Logaritmic Depth",
	physicallyCorrectLights: "Physically Correct Lights",
	depthWrite: "Depth Write",
	depthTest: "Depth Test",
	depthMode: "Depth Mode",
	background: "Background",
	fog: "Fog",
	color: "Color",
	density: "Density",
	near: "Near",
	far: "Far",
	wireframe: "Wireframe",
	transparent: "Transparent",
	opacity: "Opacity",
	alphaTest: "Alpha test",
	blendingMode: "Blending Mode",
	useCamera: "Use camera",
	renderOrder: "Render order",
	fov: "FOV",
	clippingPlanes: "Clipping planes",
	iterations: "Iterations",
	tolerance: "Tolerance",
	gravity: "Gravity",
	usePhysics: "Use physics",
	defaultScene: "Default scene",
	intensity: "Intensity",
	time: "Time",
	shading: "Shading",
	skinning: "Skinning",
	roughness: "Roughness",
	metalness: "Metalness",
	bias: "Bias",
	refraction: "Refraction",
	morphTargets: "Morph targets",
	textureMap: "Texture map",
	sky: "Sky",
	castShadows: "Cast Shadows",
	sunDistance: "Sun distance",
	autoUpdate: "Auto update",
	skyColor: "Sky color",
	groundColor: "Ground color",
	mapping: "Mapping",
	minFilter: "Min. filter",
	magFilter: "Mag. filter",
	flipY: "Flip Y",
	toneMapped: "Tone mapped",
	text: "Text",
	thickness: "Thickness",
	bevel: "Bevel",
	lineHeight: "Line Height",
	letterSpacing: "Letter Spacing",
	align: "Align",
	smoothing: "Smoothing",
	threshold: "Threshold",
	shader: "Shader",
	outline: "Outline",
	outlineColor: "Outline color",
	outlineWidth: "Outline Width",
	loop: "Loop",
	volume: "Volume",
	
	//Values
	relative: "Relative",
	absolute: "Absolute",
	bottomRight: "Bottom-Right",
	bottomLeft: "Bottom-Left",
	topRight: "Top-Right",
	topLeft: "Top-Left",
	firstPerson: "First-Person",
	orbit: "Orbit",
	left: "Left",
	right: "Right",
	front: "Front",
	back: "Back",
	top: "Top",
	bottom: "Bottom",
	local: "Local",
	world: "World",
	highp: "High precision",
	mediump: "Medium precision",
	lowp: "Low precision",
	highPerformance: "High performance",
	lowPower: "Low power",
	default: "Default",
	never: "Never",
	always: "Always",
	double: "Double",
	less: "Less",
	lessOrEqual: "Less or equal",
	greater: "Greater",
	greaterOrEqual: "Greater or equal",
	notEqual: "Not equal",
	none: "None",
	linear: "Linear",
	exponential: "Exponential",
	normal: "Normal",
	additive: "Additive",
	subtractive: "Subtractive",
	horizontal: "Horizontal",
	vertical: "Vertical",
	smooth: "Smooth",
	flat: "Flat",
	width: "Width",
	height: "Height",
	resolution: "Resolution",
	webgl: "WebGL 1.0",
	webgl2: "WebGL 2.0",
	nearest: "Nearest",

	//Operations
	union: "Union",
	subtract: "Subtract",
	intersect: "Intersect",
	simplify: "Simplify",

	//Editor
	project: "Project",
	run: "Run",
	stop: "Stop",
	new: "New",
	save: "Save",
	saveAs: "Save as",
	load: "Load",
	settings: "Settings",
	publish: "Publish",
	import: "Import",
	export: "Export",
	exit: "Exit",
	selectAll: "Select all",
	render: "Render",
	tools: "Tools",
	selectShortcut: "Select (CTRL+1)",
	moveShortcut: "Move (CTRL+2)",
	scaleShortcut: "Scale (CTRL+3)",
	rotateShortcut: "Rotate (CTRL+4)",
	about: "About",
	search: "Search",
	replace: "Replace",
	replaceAll: "Replace all",
	clear: "Clear",
	cameraNavigation: "Camera navigation mode",
	cameraMode: "Change camera mode",
	scene: "Scene",
	move: "Move",
	play: "Play",
	selectObjects: "Select objects",

	//Editor settings
	reset: "Reset",
	general: "General",
	theme: "Theme",
	historySize: "History size",
	hintHistory: "How many changes are stored in the history.",
	
	//Resources
	image: "Image",
	video: "Video",
	file: "File",
	material: "Material",
	geometry: "Geometry",
	font: "Font",

	//Run tab
	toggleVR: "Toggle Virtual Reality",
	toggleFullscreen: "Toggle Fullscreen",

	//Messages
	projectSaved: "Project saved.",
	projectLoaded: "Project loaded",
	projectExported: "Project exported",

	//Confirm
	loadProjectChangesLost: "All unsaved changes to the project will be lost.",
	loadProject: "Load project?",
	createProject: "Create new project?",

	//Warnings
	unsavedChangesExit: "All unsaved changes to the project will be lost. Do you really wanna exit?",
	cannotAddItself: "Cannot add object into itself.",
	cannotAddToChildren: "Cannot add object into is children.",
	nothingToRedo: "Nothing to redo!",
	nothingToUndo: "Not possible to undo any further",
	openTabToEditContent: "Open new tab to edit content or create new project",
	needsObjectGeometry: "Operation needs an object that contains a geometry.",
	needsObjectMesh: "Operation needs a mesh object.",
	needsTwoObjectMesh: "Operation needs two mesh object.",
	needsTwoObjectGeometry: "Operation needs two objects with geometries",
	needsTwoObjects: "Operation needs two objects.",
	selectObjectEditAnimation: "Select an object to edit animation.",
	nothingToShow: "Select an object to view its properties.",

	//Errors
	errorExportingProject: "Error exporting project",
	errorLoadingFile: "Error loading file",
	errorSavingFile: "Error saving file",
	errorPaste: "Error pasting object",
	errorRunInitialize: "Error while initializing program.",
	errorRunpdate: "Error while running program.",
	errorRunRender: "Error while rendering program.",
	webglNotSupported: "WebGL is not supported or is disabled.\nnunuStudio cannot run.",
	unknownFileFormat: "Unknown file format.",
	failedLoadSpine: "Failed to load Spine animation, make sure that .json and .atlas have the same name.",

	//Hints renderer
	hintCheckShaderErrors: "Defines whether material shader programs are checked for errors during compilation and linkage process.",
	hintStencil: "Whether the drawing buffer has a stencil buffer of at least 8 bits.",
	hintSortObjects: "If true the renderer sorts the objects from back to front for rendering. Important if using multiple transparent objects.",
	hintAlpha: "Whether the canvas contains an alpha (transparency) buffer or not.",
	hintAntialiasing: "Antialiasing can be used to smooth jaged edges.",
	hintBackend: "Prefered redering backend API to use if available. Shader code might not be cross compatible between rendering backends.",
	hintPremultipliedAlpha: "Whether the renderer will assume that colors have premultiplied alpha.",
	hintLogarithmicDepthBuffer: "Whether to use a logarithmic depth buffer. It may be neccesary to use this if dealing with huge differences in scale in a single scene.",
	hintRenderOrder: "Camera with lower order gets rendered first.",
	hintShadowsAutoUpdate: "Enables automatic updates to the shadows in the scene. If you do not require dynamic lighting / shadows, you may set this to false.",
	hintPrecision: "Shader precision. Can be \"highp\", \"mediump\" or \"lowp\". Defaults to \"highp\" if supported by the device.",
	hintPowerPreference: "Provides a hint to the user agent indicating what configuration of GPU is suitable for this WebGL context.",
	hintTonemapping: "Tonemapping can be used to remap the color of the image to a diferent set giving the scene a different color mood and/or dynamic color based on global luminosity.",
	hintAutoClearColor: "Defines whether the renderer should clear the color buffer.",
	hintAutoClearDepth: "Defines whether the renderer should clear the depth buffer.",
	hintAutoClearStencil: "Defines whether the renderer should clear the stencil buffer.",
	hintPhysicallyCorrectLights: "Whether to use physically correct lighting mode.",
	
	//Update
	updatedRestart: "nunuStudio updated\nRestart the editor",
	alreadyUpdated: "nunuStudio already up to date.",
	updateFailed: "Failed to download update files."
});
