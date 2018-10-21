1. Pull from _origin/stable_
2. Merge conflicts:
	* accept all _build/*_ changes
	* keep **null-loader** in _package.json_
	* keep same active **plugins** in _src/ckeditor -> DecoupledEditor.builtinPlugins_
	* set _src/ckeditor -> DecoupledEditor.defaultConfig.toolbar_ as **{}**
3. Run _yarn build_
4. Commit and push to _forked/stable_
