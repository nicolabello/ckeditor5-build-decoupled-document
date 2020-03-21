# Updating the build

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
