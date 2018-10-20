/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

export default class DecoupledEditor extends DecoupledEditorBase {
}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
	Essentials,
	// Alignment,
	// FontSize,
	// FontFamily,
	// Highlight,
	// UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	// EasyImage,
	Heading,
	// Image,
	// ImageCaption,
	// ImageStyle,
	// ImageToolbar,
	// ImageUpload,
	Link,
	List,
	// MediaEmbed,
	Paragraph,
	// Table,
	// TableToolbar,
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
	toolbar: {},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
