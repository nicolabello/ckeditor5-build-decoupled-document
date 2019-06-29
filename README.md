CKEditor 5 document editor custom build
========================================

This project has been forked from [ckeditor/ckeditor5-build-decoupled-document](https://github.com/ckeditor/ckeditor5-build-decoupled-document) to create a custom build in order to:

* Remove the original styling 
* Customize the list of included plugins

## Documentation

Refer to the original [README.md](https://github.com/ckeditor/ckeditor5-build-decoupled-document/blob/master/README.md) for the documentation about **CKEditor 5 document editor build**.

## Modifications

* _package.json_: added **empty-string-loader** ad dependency

* _webpack.config.js_: used **empty-string-loader** as loader for **.css** and **.svg** to remove them from the build

* _src/ckeditor.js_: customized the list of loaded plugins and set the default toolbar to empty

* _README.md_: this file

## How to update the build

Given the following git remotes:

* _origin_: https://github.com/ckeditor/ckeditor5-build-decoupled-document.git
* _forked_: https://github.com/nicolabello/ckeditor5-build-decoupled-document.git

1. Pull from _origin/stable_ 
2. Merge the conflicts:
	* accept all _build/*_ changes
	* _package.json_: keep **empty-string-loader**
	* _webpack.config.js_: keep **empty-string-loader** as loader for .svg and .css
	* _src/ckeditor.js_: keep same **active plugins** and **empty toolbar** 
3. Run _yarn install_
4. Run _yarn build_
5. Commit and push to _forked/stable_

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
